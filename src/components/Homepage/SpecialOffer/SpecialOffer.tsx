import "./SpecialOffer.css";
import { useEffect, useRef, useState } from "react";
import { offerData } from "./offerData";
import OfferCard from "./OfferCard";
import { IconButton, Modal, Box } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";

export default function SpecialOffer() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const interactionPausedRef = useRef(false);
    const lastInteractionRef = useRef(0);

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
    }, []);

    useEffect(() => {
        const autoScroll = window.setInterval(() => {
            const container = scrollRef.current;
            if (
                !container ||
                modalOpen ||
                interactionPausedRef.current ||
                Date.now() - lastInteractionRef.current < 4500
            ) return;

            const firstCard = container.querySelector(
                ".offer-card-button"
            ) as HTMLElement | null;
            const scrollStep = (firstCard?.offsetWidth ?? container.clientWidth) + 18;
            const reachedEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 8;

            container.scrollTo({
                left: reachedEnd ? 0 : container.scrollLeft + scrollStep,
                behavior: "smooth",
            });
        }, 5200);

        return () => window.clearInterval(autoScroll);
    }, [modalOpen]);

    const handleScroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;
        lastInteractionRef.current = Date.now();

        const firstCard = container.querySelector(
            ".offer-card-button"
        ) as HTMLElement | null;
        const scrollStep = (firstCard?.offsetWidth ?? container.clientWidth) + 18;

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

    const selectedOffer = selectedCardIndex !== null
        ? offerData[selectedCardIndex]
        : null;

    return (
        <section className="special-offer-container" aria-labelledby="special-offer-title">
            <div className="special-offer-wrapper">
                <div className="special-offer-heading-group">
                    <span>Preporuka Plant Centra</span>
                    <h2 className="special-offer-heading" id="special-offer-title">
                        Izdvajamo iz ponude
                    </h2>
                    <p>Pažljivo odabrani proizvodi za pouzdanu negu i bolji rezultat.</p>
                </div>

                <div
                    className="offer-card-container"
                    ref={scrollRef}
                    onScroll={updateScrollControls}
                    onMouseEnter={() => { interactionPausedRef.current = true; }}
                    onMouseLeave={() => { interactionPausedRef.current = false; }}
                    onFocus={() => { interactionPausedRef.current = true; }}
                    onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                            interactionPausedRef.current = false;
                        }
                    }}
                >
                    {offerData.map((card, index) => (
                        <button
                            type="button"
                            className="offer-card-button"
                            key={card.title}
                            onClick={() => handleCardClick(index)}
                            aria-label={`Prikaži proizvod: ${card.title}`}
                        >
                            <OfferCard
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        </button>
                    ))}
                </div>

                <div className="offer-navigation" aria-label="Navigacija kroz proizvode">
                    <span>Automatski pregled · zadržite pokazivač za pauzu</span>
                    <IconButton
                        onClick={() => handleScroll("left")}
                        disabled={!canScrollLeft}
                        aria-label="Prethodni proizvod"
                        className="offer-arrow-button"
                    >
                        <ArrowBackIos />
                    </IconButton>
                    <IconButton
                        onClick={() => handleScroll("right")}
                        disabled={!canScrollRight}
                        aria-label="Sledeći proizvod"
                        className="offer-arrow-button"
                    >
                        <ArrowForwardIos />
                    </IconButton>
                </div>
            </div>

            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="offer-modal-title"
                aria-describedby="offer-modal-description"
                closeAfterTransition
            >
                <Box className="offer-modal">
                    <IconButton
                        aria-label="Zatvori detalje proizvoda"
                        onClick={handleClose}
                        className="offer-modal-close"
                    >
                        <Close />
                    </IconButton>

                    {selectedOffer && (
                        <>
                            <div className="offer-modal-media">
                                <img src={selectedOffer.image} alt={selectedOffer.title} />
                            </div>
                            <div className="offer-modal-content">
                                <span>Preporuka Plant Centra</span>
                                <h2 id="offer-modal-title">{selectedOffer.title}</h2>
                                <p id="offer-modal-description">{selectedOffer.description}</p>
                            </div>
                        </>
                    )}
                </Box>
            </Modal>
        </section>
    );
}
