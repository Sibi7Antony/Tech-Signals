"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/CardStack.module.css";

let interval: ReturnType<typeof setInterval>;

type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
};

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();
        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards];
                newArray.unshift(newArray.pop()!);
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className={styles.stackWrapper}>
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className={styles.card}
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: cards.length - index,
                        }}
                    >
                        <div className={styles.content}>
                            {card.content}
                        </div>
                        <div className={styles.author}>
                            <p className={styles.name}>
                                {card.name}
                            </p>
                            <p className={styles.designation}>
                                {card.designation}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default CardStack;
