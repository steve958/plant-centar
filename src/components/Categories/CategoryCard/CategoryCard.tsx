import React from 'react';
import './CategoryCard.css';

interface CardProps {
    image: string;
    heading: string;
    link: string;
}

const CategoryCard: React.FC<CardProps> = ({ image, heading, link }) => {
    return (
        <a href={link} className="card">
            <div className="card-image-wrapper">
                <img src={image} alt={heading} className="card-image" />
            </div>
            <h3 className="card-heading">{heading}</h3>
        </a>
    );
};

export default CategoryCard;
