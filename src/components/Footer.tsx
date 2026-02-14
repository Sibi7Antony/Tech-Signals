
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Video Background */}
            <div className={styles.videoWrapper}>
                <video
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/Macro_video_of_202602130929.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Overlay to darken and hide watermarks */}
            <div className={styles.overlay} />
            <div className={styles.edgeMask} />

            {/* Footer Content */}
            <div className={styles.content}>
                <div className={styles.brand}>
                    <Image
                        src="/e2748d00-2f1b-4856-9b2d-037f170a2c2c-removebg-preview.png"
                        alt="Tech Signals Logo"
                        width={40}
                        height={40}
                        className={styles.brandLogo}
                        unoptimized={true}
                    />
                    TECH SIGNALS
                </div>
                <p className={styles.tagline}>No clickbait. No noise. Just Signals.</p>

                <div className={styles.links}>
                    <Link href="#feed" className={styles.link}>Latest</Link>
                    <Link href="#featured" className={styles.link}>Featured</Link>
                </div>

                <div className={styles.divider} />
                <p className={styles.copy}>© 2026 Tech Signals. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
