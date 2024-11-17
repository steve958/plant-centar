import "./SpecialOffer.css";
import { useRef, useState, useEffect } from "react";
import { offerData } from "./offerData"; // Import your mock data
import NewsCard from "./OfferCard";
import { IconButton, Modal, Box, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";

export default function SpecialOffer() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
        null
    );

    const cardWidth = 500;
    const gap = 30; // gap defined in CSS
    const cardsPerView = 2;
    const totalCards = offerData.length;

    // Calculate the scroll offset for two cards plus the gap between them
    const scrollStep = cardWidth * cardsPerView + gap;
    const steps = Math.ceil(totalCards / cardsPerView); // total steps to show all cards
    const maxScrollLeft = (steps - 1) * scrollStep; // maximum scroll offset

    useEffect(() => {
        // Ensure the scroll position is set to initial view
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollPosition;
        }
    }, [scrollPosition]);

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

    // Opens the modal and sets the selected card index
    const handleCardClick = (index: number) => {
        setSelectedCardIndex(index);
        setModalOpen(true);
    };

    // Closes the modal and resets the selected card
    const handleClose = () => {
        setModalOpen(false);
        setSelectedCardIndex(null);
    };

    return (
        <div className="special-offer-container">
            <div className="special-offer-wrapper">
                <h2 className="special-offer-heading">Izdvajamo iz ponude</h2>
                <div className="card-container" ref={scrollRef}>
                    {offerData.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            style={{ cursor: "pointer" }}
                        >
                            <NewsCard
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    ))}
                </div>
                {offerData?.length > 1 && (
                    <div className="navigation-arrows">
                        <IconButton
                            onClick={() => handleScroll("left")}
                            disabled={scrollPosition === 0}
                            aria-label="Scroll Left"
                            style={{ color: "#54c143" }}
                        >
                            <ArrowBackIos />
                        </IconButton>
                        <IconButton
                            onClick={() => handleScroll("right")}
                            disabled={scrollPosition >= maxScrollLeft}
                            aria-label="Scroll Right"
                            style={{ color: "#54c143" }}
                        >
                            <ArrowForwardIos />
                        </IconButton>
                    </div>
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
                        borderRadius: "8px",
                        textAlign: 'center'
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
                                {offerData[selectedCardIndex].title}
                            </Typography>
                            <img
                                src={offerData[selectedCardIndex].image}
                                alt={offerData[selectedCardIndex].title}
                                style={{ width: "100%", height: "auto", marginBottom: "20px" }}
                            />
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {offerData[selectedCardIndex].description}
                            </Typography>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
