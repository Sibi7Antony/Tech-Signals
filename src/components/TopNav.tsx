
"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const TopNav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Image
                        src="/e2748d00-2f1b-4856-9b2d-037f170a2c2c-removebg-preview.png"
                        alt="Tech Signals Logo"
                        width={30}
                        height={30}
                        className={styles.logoImage}
                    />
                    TECH SIGNALS
                </div>

                <div className={styles.links}>
                    <Link href="#feed" className={styles.link}>LATEST</Link>
                    <Link href="#featured" className={styles.link}>FEATURED</Link>
                </div>

                <div className={styles.actions}>
                    <button className={styles.cta}>
                        GET ALERTS
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
