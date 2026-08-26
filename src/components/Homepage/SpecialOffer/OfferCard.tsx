import "./OfferCard.css";

interface OfferCardProps {
    image: string;
    title: string;
    description: string;
}

export default function OfferCard({
    image,
    title,
    description,
}: OfferCardProps) {
    return (
        <article className="offer-card">
            <div className="offer-card-media">
                <img src={image} alt={title} />
                <span>Izdvajamo</span>
            </div>
            <div className="offer-card-content">
                <h3>{title}</h3>
                <p>
                    {description.length > 155
                        ? description.slice(0, 155).concat("...")
                        : description}
                </p>
                <span className="offer-card-action">
                    Pogledajte detalje <span aria-hidden="true">→</span>
                </span>
            </div>
        </article>
    );
}
