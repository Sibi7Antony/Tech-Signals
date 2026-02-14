
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.headline}>
                FUEL YOUR DAILY DOSE WITH AUTHENTIC TECH NEWS
            </h1>
            <p className={styles.subtext}>
                No clickbait. No noise. Just Signals.
            </p>
            <p className={styles.description}>
                Stay ahead with curated breakthroughs, real-world insights, and sharp analysis — distilled for builders, innovators, and tech thinkers.
            </p>
            <Link href="#feed" className={styles.cta}>
                READ NOW →
            </Link>
        </section>
    );
};

export default Hero;
