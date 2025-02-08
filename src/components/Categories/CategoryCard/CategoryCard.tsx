import React from 'react';
import './CategoryCard.css';

interface CardProps {
    heading: string;
    link: string;
    description?: string;
    iconUrl?: string; // Pass in a PNG path or URL
}

const CategoryCard: React.FC<CardProps> = ({ heading, link, description, iconUrl }) => {
    return (
        <a href={link} className="category-card">
            {/* Left half: Icon / Graphic section */}
            <div className="category-card__icon-container">
                {/* Only render <img> if iconUrl is provided */}
                {iconUrl && (
                    <img
                        src={iconUrl}
                        alt={`${heading} icon`}
                        className="category-card__icon"
                    />
                )}
            </div>

            {/* Right half: Text content */}
            <div className="category-card__text-content">
                <h3 className="category-card__heading">{heading}</h3>
                {description && <p className="category-card__description">{description}</p>}
            </div>
        </a>
    );
};

export default CategoryCard;
