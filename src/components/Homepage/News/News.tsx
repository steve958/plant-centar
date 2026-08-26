import { useEffect, useRef, useState } from "react";
import "./News.css";
import { newsData } from "./newsData";
import NewsCard from "./NewsCard";
import {
    IconButton,
    Modal,
    Box,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    ArrowBackIos,
    ArrowForwardIos,
    Close
} from "@mui/icons-material";

export default function News() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
    const [loadMoreClicked, setLoadMoreClicked] = useState<boolean>(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));

    const updateScrollControls = () => {
        const container = scrollRef.current;
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 2);
        setCanScrollRight(
            container.scrollLeft + container.clientWidth < container.scrollWidth - 2
        );
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleResize = () => {
            setCanScrollLeft(container.scrollLeft > 2);
            setCanScrollRight(
                container.scrollLeft + container.clientWidth < container.scrollWidth - 2
            );
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isXs]);

    const handleScroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;

        const firstCard = container.querySelector(
            ".clickable-card-wrapper"
        ) as HTMLElement | null;
        const scrollStep = (firstCard?.offsetWidth ?? container.clientWidth) + 24;

        container.scrollBy({
            left: direction === "left" ? -scrollStep : scrollStep,
            behavior: "smooth",
        });
    };

    const handleCardClick = (index: number) => {
        setSelectedCardIndex(index);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
        setSelectedCardIndex(null);
    };

    return (
        <section className="news-container" aria-labelledby="news-heading">
            <div className="news-wrapper">
                <div className="news-heading-group">
                    <span className="news-kicker">Saveti i novosti</span>
                    <h2 className="news-heading" id="news-heading">Aktuelnosti</h2>
                    <p>Praktične informacije, stručni saveti i najnovije teme iz poljoprivrede.</p>
                </div>

                <div
                    className="news-card-container"
                    ref={scrollRef}
                    onScroll={updateScrollControls}
                >
                    {newsData.map((card, index) => (
                        <button
                            type="button"
                            key={card.title + card.date}
                            className={`clickable-card-wrapper ${
                                isXs && !loadMoreClicked && index > 1
                                    ? "news-card-hidden"
                                    : ""
                            }`}
                            onClick={() => handleCardClick(index)}
                            aria-label={`Otvori vest: ${card.title}`}
                        >
                            <NewsCard
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                date={card.date}
                            />
                        </button>
                    ))}
                </div>

                {newsData.length > 3 && !isXs && (
                    <div className="news-navigation" aria-label="Navigacija kroz aktuelnosti">
                        <IconButton
                            onClick={() => handleScroll("left")}
                            disabled={!canScrollLeft}
                            aria-label="Prethodna vest"
                            className="news-arrow-button"
                        >
                            <ArrowBackIos />
                        </IconButton>
                        <span>Pregledajte aktuelnosti</span>
                        <IconButton
                            onClick={() => handleScroll("right")}
                            disabled={!canScrollRight}
                            aria-label="Sledeća vest"
                            className="news-arrow-button"
                        >
                            <ArrowForwardIos />
                        </IconButton>
                    </div>
                )}

                {isXs && !loadMoreClicked && (
                    <button
                        type="button"
                        className="news-load-more"
                        onClick={() => setLoadMoreClicked(true)}
                    >
                        Prikaži sve aktuelnosti
                    </button>
                )}
            </div>

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
                        textAlign: "center",
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
        </section>
    );
}
