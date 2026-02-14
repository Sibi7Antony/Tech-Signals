"use client";
import { useState, useEffect, useCallback } from 'react';
import styles from '../styles/FeaturedStory.module.css';
import { fetchNews, Article } from '../lib/api';

export default function FeaturedStory() {
    const [stories, setStories] = useState<Article[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [slideState, setSlideState] = useState<'active' | 'outLeft' | 'inRight'>('active');

    useEffect(() => {
        fetchNews().then(data => {
            setStories(data);
        });
    }, []);

    const handleNext = useCallback(() => {
        if (stories.length === 0) return;
        setExpanded(false);
        setSlideState('outLeft');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % stories.length);
            setSlideState('inRight');
        }, 350);
        setTimeout(() => {
            setSlideState('active');
        }, 850);
    }, [stories.length]);

    const handlePrev = useCallback(() => {
        if (stories.length === 0) return;
        setExpanded(false);
        setSlideState('outLeft');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
            setSlideState('inRight');
        }, 350);
        setTimeout(() => {
            setSlideState('active');
        }, 850);
    }, [stories.length]);

    const handleReadMore = () => {
        setExpanded(!expanded);
    };

    if (stories.length === 0) return null;

    const currentStory = stories[currentIndex];

    const getSlideClass = () => {
        switch (slideState) {
            case 'outLeft': return styles.slideOutLeft;
            case 'inRight': return styles.slideInRight;
            default: return styles.slideActive;
        }
    };

    return (
        <section className={styles.container} id="featured">
            <div className={styles.label}>
                THE STORY EVERY DEVELOPER IS TALKING ABOUT
            </div>

            <div className={styles.counter}>
                <span className={styles.counterCurrent}>
                    {String(currentIndex + 1).padStart(2, '0')}
                </span>
                {' / '}
                {String(stories.length).padStart(2, '0')}
            </div>

            <div className={styles.storyWrapper}>
                <div className={`${styles.storySlide} ${getSlideClass()}`}>
                    <h2 className={styles.headline}>
                        {currentStory.title}
                    </h2>

                    <div className={`${styles.expandedContent} ${expanded ? styles.expandedVisible : ''}`}>
                        <p className={styles.description}>
                            {currentStory.description}
                        </p>
                        <div className={styles.sourceMeta}>
                            Source: {currentStory.source} • {currentStory.readTime} • {currentStory.publishedAt}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.controls}>
                <button
                    className={styles.cta}
                    onClick={handleReadMore}
                >
                    {expanded ? 'CLOSE STORY' : 'READ FULL STORY →'}
                </button>

                <button
                    className={styles.prevBtn}
                    onClick={handlePrev}
                    aria-label="Previous Story"
                >
                    ←
                </button>

                <button
                    className={styles.nextBtn}
                    onClick={handleNext}
                    aria-label="Next Story"
                >
                    →
                </button>
            </div>
        </section>
    );
}
