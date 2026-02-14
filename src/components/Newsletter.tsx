
import styles from '../styles/Newsletter.module.css';

const Newsletter = () => {
    return (
        <section className={`${styles.newsletterSection} editorial-grid`} id="newsletter">
            <h2 className={styles.headline}>
                STAY <span className={styles.highlight}>AHEAD</span>.<br />
                STAY <span className={styles.highlight}>INFORMED</span>.
            </h2>
            <p className={styles.subline}>
                Real-time tech intelligence delivered with precision. No noise, no clickbait — just the signals that matter.
            </p>
        </section>
    );
};

export default Newsletter;
