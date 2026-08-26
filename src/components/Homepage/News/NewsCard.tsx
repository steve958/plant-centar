import "./NewsCard.css";

interface NewsCardProps {
    image: string;
    title: string;
    description: string;
    date: string;
}

export default function NewsCard({
    image,
    title,
    description,
    date
}: NewsCardProps) {
    return (
        <article className="news-card">
            <div className="news-card-image-wrapper">
                <img src={image} alt={title} className="news-card-image" />
                <span className="news-card-label">Aktuelno</span>
            </div>
            <div className="news-card-content">
                <time className="news-card-date">{date}</time>
                <h3>{title}</h3>
                <p>
                    {description.length > 135
                        ? description.slice(0, 135).concat("...")
                        : description}
                </p>
                <span className="news-card-link">
                    Pročitajte više <span aria-hidden="true">→</span>
                </span>
            </div>
        </article>
    );
}
