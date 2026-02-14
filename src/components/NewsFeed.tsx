"use client";
import { useEffect, useState } from 'react';
import { fetchNews, Article } from '../lib/api';
import styles from '../styles/NewsFeed.module.css';

export default function NewsFeed() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    useEffect(() => {
        async function loadNews() {
            try {
                const data = await fetchNews();
                setArticles(data);
            } catch (err) {
                console.error("News load error", err);
            } finally {
                setLoading(false);
            }
        }
        loadNews();
    }, []);

    const toggleExpand = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedId(expandedId === index ? null : index);
    };

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loader}>LOADING SIGNALS...</div>
            </div>
        );
    }

    const feature = articles[0];
    const medium1 = articles[1];
    const medium2 = articles[2];
    const wide = articles[3];

    if (!feature) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loader}>NO SIGNALS FOUND</div>
            </div>
        );
    }

    return (
        <section className={styles.container} id="feed">
            <h2 className={styles.title}>LATEST TECH HEADLINES</h2>
            <div className={styles.grid}>

                {/* ══════ Feature Tile — Primary Story ══════ */}
                <div className={`${styles.card} ${styles.featureTile}`}>
                    <div>
                        <div className={styles.category}>{feature.category}</div>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.preview}>
                            {feature.description?.substring(0, 120)}...
                        </p>
                        {/* Expand wrapper — always in DOM, toggles via class */}
                        <div className={`${styles.expandWrapper} ${expandedId === 0 ? styles.expandWrapperOpen : ''}`}>
                            <div className={styles.expandedContent}>
                                <p>{feature.description}</p>
                                <div className={styles.expandedMeta}>
                                    Source: {feature.source} • {feature.publishedAt}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.meta}>
                        <div className={styles.metaLeft}>
                            <span>{feature.source}</span>
                            <span className={styles.dot}></span>
                            <span>{feature.category}</span>
                            <span className={styles.dot}></span>
                            <span>{feature.readTime}</span>
                        </div>
                        <button
                            className={styles.readMoreBtn}
                            onClick={(e) => toggleExpand(0, e)}
                        >
                            {expandedId === 0 ? 'CLOSE' : 'READ MORE →'}
                        </button>
                    </div>
                </div>

                {/* ══════ Medium Tile 1 — Cyber / Security ══════ */}
                {medium1 && (
                    <div className={`${styles.card} ${styles.mediumTile1}`}>
                        <div>
                            <div className={styles.category}>{medium1.category}</div>
                            <h4 className={styles.cardTitle}>{medium1.title}</h4>
                            <div className={`${styles.expandWrapper} ${expandedId === 1 ? styles.expandWrapperOpen : ''}`}>
                                <div className={styles.expandedContent}>
                                    <p>{medium1.description}</p>
                                    <div className={styles.expandedMeta}>
                                        Source: {medium1.source}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.meta}>
                            <span>{medium1.readTime}</span>
                            <button
                                className={styles.readMoreBtn}
                                onClick={(e) => toggleExpand(1, e)}
                            >
                                {expandedId === 1 ? 'CLOSE' : 'READ →'}
                            </button>
                        </div>
                    </div>
                )}

                {/* ══════ Medium Tile 2 — ORANGE tile ══════ */}
                {medium2 && (
                    <div className={`${styles.card} ${styles.mediumTile2}`}>
                        <div>
                            <div className={styles.category}>{medium2.category}</div>
                            <h4 className={styles.cardTitle}>{medium2.title}</h4>
                            <div className={`${styles.expandWrapper} ${expandedId === 2 ? styles.expandWrapperOpen : ''}`}>
                                <div className={styles.expandedContent}>
                                    <p>{medium2.description}</p>
                                    <div className={styles.expandedMeta}>
                                        Source: {medium2.source}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.meta}>
                            <span>{medium2.readTime}</span>
                            <button
                                className={styles.readMoreBtn}
                                onClick={(e) => toggleExpand(2, e)}
                            >
                                {expandedId === 2 ? 'CLOSE' : 'READ →'}
                            </button>
                        </div>
                    </div>
                )}

                {/* ══════ Wide Tile — Trends Overview ══════ */}
                {wide && (
                    <div className={`${styles.card} ${styles.wideTile}`}>
                        <div>
                            <div className={styles.category}>{wide.category}</div>
                            <h4 className={styles.cardTitle} style={{ fontSize: '1.6rem' }}>{wide.title}</h4>
                            <div className={`${styles.expandWrapper} ${expandedId === 3 ? styles.expandWrapperOpen : ''}`}>
                                <div className={styles.expandedContent}>
                                    <p>{wide.description}</p>
                                    <div className={styles.expandedMeta}>
                                        Source: {wide.source} • {wide.publishedAt}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.meta}>
                            <div className={styles.metaLeft}>
                                <span>{wide.source}</span>
                                <span className={styles.dot}></span>
                                <span>{wide.publishedAt}</span>
                            </div>
                            <button
                                className={styles.readMoreBtn}
                                onClick={(e) => toggleExpand(3, e)}
                            >
                                {expandedId === 3 ? 'CLOSE' : 'READ MORE →'}
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
