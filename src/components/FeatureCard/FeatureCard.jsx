import "./FeatureCard.css";

function FeatureCard({ title, description }) {
    return (
        <article className="feature-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Se mere</button>
        </article>
    );
}

export default FeatureCard;