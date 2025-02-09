import { useRef, useState, useEffect } from "react";
import "./News.css";
import { newsData } from "./newsData"; // Import your mock data
import NewsCard from "./NewsCard";
import {
    IconButton,
    Modal,
    Box,
    Typography,
    useMediaQuery,
    useTheme,
    Button,
} from "@mui/material";
import {
    ArrowBackIos,
    ArrowForwardIos,
    Close
} from "@mui/icons-material";

export default function News() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Track the current scroll position
    const [scrollPosition, setScrollPosition] = useState(0);

    // State for the modal
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
    const [loadMoreClicked, setLoadMoreClicked] = useState<boolean>(false)

    // We want 3 by default (large screens), 
    // but we’ll dynamically adjust below using breakpoints.
    const [cardsPerView, setCardsPerView] = useState(3);

    // Use MUI’s theme breakpoints or just window.innerWidth checks
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));     // <600px
    const isMd = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px-900px
    const isLg = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900px-1200px
    // You can adjust these to suit your design more precisely

    // Card dimension configuration
    const cardWidth = 400;
    const gap = 50; // Match the CSS gap
    const totalCards = newsData.length;

    // Calculate scrolling distance based on # of cards per view
    // If we have 3 cards in view, we have 2 internal gaps, so
    // total = (cardsPerView * cardWidth) + (cardsPerView - 1) * gap
    const scrollStep = cardsPerView * cardWidth + (cardsPerView - 1) * gap;
    const steps = Math.ceil(totalCards / cardsPerView);
    const maxScrollLeft = (steps - 1) * scrollStep;

    // On resize, figure out how many cards to show
    useEffect(() => {
        if (isXs) {
            setCardsPerView(1);
        } else if (isMd) {
            setCardsPerView(2);
        } else {
            setCardsPerView(3);
        }
    }, [isXs, isMd, isLg]);

    // Make sure the scroll position is applied whenever it changes
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollPosition;
        }
    }, [scrollPosition]);

    // Scroll handler
    const handleScroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        let newScrollPosition = scrollPosition;

        if (direction === "left") {
            newScrollPosition = Math.max(scrollPosition - scrollStep, 0);
        } else if (direction === "right") {
            newScrollPosition = Math.min(scrollPosition + scrollStep, maxScrollLeft);
        }

        setScrollPosition(newScrollPosition);
        scrollRef.current.scrollTo({
            left: newScrollPosition,
            behavior: "smooth",
        });
    };

    // Modal handlers
    const handleCardClick = (index: number) => {
        setSelectedCardIndex(index);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
        setSelectedCardIndex(null);
    };

    return (
        <div className="news-container">
            <div className="news-wrapper">
                <h2 className="news-heading">Aktuelnosti</h2>

                <div className="card-container" ref={scrollRef}>
                    {newsData.map((card, index) => (
                        <div
                            key={index}
                            className="clickable-card-wrapper"
                            onClick={() => handleCardClick(index)}
                            id={isXs && !loadMoreClicked && index > 1 ? 'hidden' : ""}
                        >
                            <NewsCard
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                date={card.date}
                            />
                        </div>
                    ))}
                </div>

                {/* Show arrows only if there’s more than one card
            and we’re not on extra-small screens (we hide arrows in CSS below).
        */}
                {newsData?.length > 1 && (
                    <div className="navigation-arrows">
                        <IconButton
                            onClick={() => handleScroll("left")}
                            disabled={scrollPosition === 0}
                            aria-label="Scroll Left"
                            color="success"
                        >
                            <ArrowBackIos />
                        </IconButton>
                        <IconButton
                            onClick={() => handleScroll("right")}
                            disabled={scrollPosition >= maxScrollLeft}
                            aria-label="Scroll Right"
                            color="success"
                        >
                            <ArrowForwardIos />
                        </IconButton>
                    </div>
                )}
                {isXs && !loadMoreClicked && <Button variant="contained" className="carousel-button" onClick={() => setLoadMoreClicked(true)}>
                    Više informacija
                </Button>}
            </div>

            {/* Modal */}
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        maxWidth: 600,
                        width: "90%",
                        maxHeight: "90vh",
                        overflow: "auto",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 1,
                        outline: "none",
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: "grey.500",
                        }}
                    >
                        <Close />
                    </IconButton>
                    {selectedCardIndex !== null && (
                        <>
                            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                                {newsData[selectedCardIndex].title}
                            </Typography>
                            <img
                                src={newsData[selectedCardIndex].image}
                                alt={newsData[selectedCardIndex].title}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    marginBottom: "20px",
                                }}
                            />
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {newsData[selectedCardIndex].date}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {newsData[selectedCardIndex].description}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {selectedCardIndex === 3 ? (
                                    <a
                                        href="https://www.agromarketsrbija.rs/files/deals/Agrosvet_138_web.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        kliknite ovde
                                    </a>
                                ) : selectedCardIndex === 1 ? (
                                    <a
                                        href="https://www.agromarketsrbija.rs/files/deals/Agrosvet_specijal_2025_web_.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        kliknite ovde
                                    </a>
                                ) : (
                                    newsData[selectedCardIndex].footer
                                )}
                            </Typography>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
