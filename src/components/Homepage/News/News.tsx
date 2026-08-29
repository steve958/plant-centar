import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './News.css';
import { newsData, NewsItem } from './newsData';
import NewsCard from './NewsCard';
import { db } from '../../firebase';
import { ArrowBackIos, ArrowForwardIos, Close } from '@mui/icons-material';
import { Box, IconButton, Modal, Typography, useMediaQuery, useTheme } from '@mui/material';

type FirestoreDate = { toDate?: () => Date } | string | null;
const parseDate = (value: FirestoreDate) => {
    if (value && typeof value === 'object' && value.toDate) return value.toDate();
    const date = typeof value === 'string' ? new Date(value) : new Date(0);
    return Number.isNaN(date.getTime()) ? new Date(0) : date;
};

export default function News() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [cards, setCards] = useState<NewsItem[]>(newsData);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<NewsItem | null>(null);
    const [loadMoreClicked, setLoadMoreClicked] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        let active = true;
        const fetchPublishedNews = async () => {
            try {
                const snapshot = await getDocs(query(collection(db, 'news'), where('published', '==', true)));
                if (!snapshot.size || !active) return;
                const remoteNews = snapshot.docs.map((newsDocument) => {
                    const data = newsDocument.data();
                    const publishedAt = data.publishedAt as FirestoreDate;
                    const date = parseDate(publishedAt);
                    return {
                        id: newsDocument.id,
                        image: data.imageUrl || '',
                        title: data.title || 'Aktuelnost',
                        description: data.description || '',
                        footer: data.author || '',
                        externalUrl: data.externalUrl || undefined,
                        date: date.toLocaleDateString('sr-RS', { day: '2-digit', month: '2-digit', year: 'numeric' }),
                        sortDate: date,
                    };
                }).sort((first, second) => second.sortDate.getTime() - first.sortDate.getTime());
                setCards(remoteNews.map(({ id, image, title, description, footer, externalUrl, date }) => ({
                    id, image, title, description, footer, externalUrl, date,
                })));
            } catch (error) {
                console.info('Shared news is not available yet; preserved local news remains visible.', error);
            }
        };
        fetchPublishedNews();
        return () => { active = false; };
    }, []);

    const updateScrollControls = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        setCanScrollLeft(container.scrollLeft > 8);
        setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 2);
    }, []);

    useLayoutEffect(() => {
        const container = scrollRef.current;
        if (!container || isXs) return;

        container.scrollTo({ left: 0, behavior: 'auto' });
        setCanScrollLeft(false);
        const frame = window.requestAnimationFrame(updateScrollControls);
        return () => window.cancelAnimationFrame(frame);
    }, [cards, isXs, updateScrollControls]);

    useEffect(() => {
        const handleResize = () => updateScrollControls();
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isXs, cards, updateScrollControls]);

    const handleScroll = (direction: 'left' | 'right') => {
        const container = scrollRef.current;
        if (!container) return;
        const firstCard = container.querySelector('.clickable-card-wrapper') as HTMLElement | null;
        container.scrollBy({ left: (direction === 'left' ? -1 : 1) * ((firstCard?.offsetWidth ?? container.clientWidth) + 24), behavior: 'smooth' });
    };

    return <section className="news-container" aria-labelledby="news-heading">
        <div className="news-wrapper">
            <div className="news-heading-group"><span className="news-kicker">Saveti i novosti</span><h2 className="news-heading" id="news-heading">Aktuelnosti</h2><p>Praktične informacije, stručni saveti i najnovije teme iz poljoprivrede.</p></div>
            <div className="news-card-container" ref={scrollRef} onScroll={updateScrollControls}>
                {cards.map((card, index) => <button type="button" key={card.id} className={`clickable-card-wrapper ${isXs && !loadMoreClicked && index > 1 ? 'news-card-hidden' : ''}`} onClick={() => { setSelectedCard(card); setModalOpen(true); }} aria-label={`Otvori vest: ${card.title}`}><NewsCard image={card.image} title={card.title} description={card.description} date={card.date} /></button>)}
            </div>
            {cards.length > 3 && !isXs && <div className="news-navigation" aria-label="Navigacija kroz aktuelnosti"><IconButton onClick={() => handleScroll('left')} disabled={!canScrollLeft} aria-label="Prethodna vest" className="news-arrow-button"><ArrowBackIos /></IconButton><span>Pregledajte aktuelnosti</span><IconButton onClick={() => handleScroll('right')} disabled={!canScrollRight} aria-label="Sledeća vest" className="news-arrow-button"><ArrowForwardIos /></IconButton></div>}
            {isXs && !loadMoreClicked && cards.length > 2 && <button type="button" className="news-load-more" onClick={() => setLoadMoreClicked(true)}>Prikaži sve aktuelnosti</button>}
        </div>

        <Modal open={modalOpen} onClose={() => { setModalOpen(false); setSelectedCard(null); }} aria-labelledby="news-modal-title" aria-describedby="news-modal-description" closeAfterTransition>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: 660, width: '90%', maxHeight: '90vh', overflow: 'auto', bgcolor: 'background.paper', boxShadow: 24, p: 3, outline: 'none', borderRadius: 4, textAlign: 'left' }}>
                <IconButton aria-label="Zatvori" onClick={() => { setModalOpen(false); setSelectedCard(null); }} sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}><Close /></IconButton>
                {selectedCard && <><Typography id="news-modal-title" variant="h5" component="h2" sx={{ mb: 2, pr: 5 }}>{selectedCard.title}</Typography><img src={selectedCard.image} alt={selectedCard.title} style={{ width: '100%', maxHeight: 380, objectFit: 'cover', borderRadius: 12, marginBottom: 20 }} /><Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>{selectedCard.date}</Typography><Typography id="news-modal-description" variant="body1" sx={{ mb: 2, whiteSpace: 'pre-line', lineHeight: 1.75 }}>{selectedCard.description}</Typography>{selectedCard.footer && <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>{selectedCard.footer}</Typography>}{selectedCard.externalUrl && <a href={selectedCard.externalUrl} target="_blank" rel="noopener noreferrer">Otvorite povezani sadržaj</a>}</>}
            </Box>
        </Modal>
    </section>;
}
