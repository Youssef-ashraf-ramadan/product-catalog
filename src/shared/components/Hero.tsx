import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">اكتشف أفضل المنتجات</h1>
        <p className="hero-subtitle">
          تسوق من مجموعة واسعة من المنتجات عالية الجودة بأفضل الأسعار
        </p>
        <button className="hero-cta">تسوق الآن</button>
      </div>
    </section>
  );
};

export default Hero;
