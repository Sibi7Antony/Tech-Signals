"use client";

import { useEffect } from 'react';
import TopNav from '@/components/TopNav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import NewsFeed from '@/components/NewsFeed';
import FeaturedStory from '@/components/FeaturedStory';
import Newsletter from '@/components/Newsletter';
import TechVoices from '@/components/TechVoices';
import Footer from '@/components/Footer';

export default function Home() {

  useEffect(() => {
    // ───── Intersection Observer for Scroll Reveals ─────
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TopNav />
      <Hero />
      <div className="reveal">
        <Marquee />
      </div>
      <div className="reveal">
        <NewsFeed />
      </div>
      <div className="reveal">
        <FeaturedStory />
      </div>
      <div className="reveal">
        <TechVoices />
      </div>
      <div className="reveal">
        <Newsletter />
      </div>
      <div className="reveal">
        <Footer />
      </div>
    </>
  );
}
