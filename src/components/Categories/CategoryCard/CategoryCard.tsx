import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
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
        <Link
            to={link}
            className="category-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="category-card__icon-container"
            >
                {iconUrl && (
                    <img
                        src={isHovered && hoveredIconUrl ? hoveredIconUrl : iconUrl}
                        alt={`${heading} icon`}
                        className="category-card__icon"
                    />
                )}
            </div>

            <div className="category-card__text-content">
                <span className="category-card__number">Plant Centar izbor</span>
                <h3 className="category-card__heading">{heading}</h3>
                {description && (
                    <p className="category-card__description">{description}</p>
                )}
                <span className="category-card__action">
                    Pogledajte ponudu <ArrowForwardRoundedIcon aria-hidden="true" />
                </span>
            </div>
        </Link>
    );
};

export default CategoryCard;
