import React, { useState } from "react";
import "./CategoryCard.css";

interface CardProps {
    heading: string;
    link: string;
    description?: string;
    iconUrl?: string; // Original icon URL
    hoveredIconUrl?: string; // Icon URL to use when hovered
}

const CategoryCard: React.FC<CardProps> = ({
    heading,
    link,
    description,
    iconUrl,
    hoveredIconUrl,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={link}
            className="category-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Left half: Icon / Graphic section */}
            <div
                className="category-card__icon-container"
                style={{ backgroundColor: isHovered ? "white" : "" }}
            >
                {iconUrl && (
                    <img
                        src={isHovered && hoveredIconUrl ? hoveredIconUrl : iconUrl}
                        alt={`${heading} icon`}
                        className="category-card__icon"
                    />
                )}
            </div>

            {/* Right half: Text content */}
            <div className="category-card__text-content">
                <h3 className="category-card__heading">{heading}</h3>
                {description && (
                    <p className="category-card__description">{description}</p>
                )}
            </div>
        </a>
    );
};

export default CategoryCard;
