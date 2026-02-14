
import styles from '../styles/Marquee.module.css';

const CATEGORIES = [
    "Artificial Intelligence", "Unicorn Startups", "Cyber Warfare", "Quantum Computing",
    "Web3 Ecosystem", "Deep Tech", "Silicon Valley", "Future of Work", "Neural Networks",
    "Artificial Intelligence", "Unicorn Startups", "Cyber Warfare", "Quantum Computing",
    "Web3 Ecosystem", "Deep Tech", "Silicon Valley", "Future of Work", "Neural Networks",
];

const Marquee = () => {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeContent}>
                {CATEGORIES.map((cat, idx) => (
                    <div key={idx} className={styles.marqueeItem}>
                        {cat}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
