"use client";
import { CardStack } from "./CardStack";
import styles from "../styles/TechVoices.module.css";

const TECH_CARDS = [
    {
        id: 1,
        name: "Elon Musk",
        designation: "CEO, Tesla & SpaceX",
        content: (
            <p>&ldquo;When something is important enough, you do it even if the odds are not in your favor.&rdquo;</p>
        ),
    },
    {
        id: 2,
        name: "Steve Jobs",
        designation: "Co-founder, Apple",
        content: (
            <p>&ldquo;Innovation distinguishes between a leader and a follower. Stay hungry, stay foolish.&rdquo;</p>
        ),
    },
    {
        id: 3,
        name: "Satya Nadella",
        designation: "CEO, Microsoft",
        content: (
            <p>&ldquo;Our industry does not respect tradition — it only respects innovation and the will to transform.&rdquo;</p>
        ),
    },
    {
        id: 4,
        name: "Jensen Huang",
        designation: "CEO, NVIDIA",
        content: (
            <p>&ldquo;The conditions of artificial intelligence are upon us. This is a new computing era — and it will change everything.&rdquo;</p>
        ),
    },
    {
        id: 5,
        name: "Sam Altman",
        designation: "CEO, OpenAI",
        content: (
            <p>&ldquo;AI will probably most change the world of any technology we have yet built. We need to get it right.&rdquo;</p>
        ),
    },
];

const TechVoices = () => {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.textSide}>
                    <span className={styles.label}>TECH VOICES</span>
                    <h2 className={styles.headline}>
                        Words That <span className={styles.highlight}>Shaped</span> The Future
                    </h2>
                    <p className={styles.subtext}>
                        Insights from the minds building tomorrow. Curated quotes from the most influential leaders in tech.
                    </p>
                </div>
                <div className={styles.cardSide}>
                    <CardStack items={TECH_CARDS} offset={12} scaleFactor={0.05} />
                </div>
            </div>
        </section>
    );
};

export default TechVoices;
