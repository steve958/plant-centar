import React from 'react';
import './CategoryCard.css';

interface CardProps {
    heading: string;
    link: string;
}

const CategoryCard: React.FC<CardProps> = ({ heading, link }) => {
    return (
        <a href={link} className="card">
            <h3 className="card-heading">{heading}</h3>
        </a>
    );
};

export default CategoryCard;
