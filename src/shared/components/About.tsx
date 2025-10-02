import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">من نحن</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              مرحباً بكم في متجر المنتجات الإلكتروني، وجهتكم الأولى للتسوق عبر الإنترنت. 
              نحن نقدم مجموعة واسعة من المنتجات عالية الجودة بأفضل الأسعار.
            </p>
            <p>
              هدفنا هو توفير تجربة تسوق متميزة وسهلة لعملائنا الكرام، مع ضمان جودة 
              المنتجات وسرعة التوصيل.
            </p>
            <div className="about-features">
              <div className="feature">
                <h3>جودة عالية</h3>
                <p>نختار منتجاتنا بعناية لضمان الجودة العالية</p>
              </div>
              <div className="feature">
                <h3>أسعار منافسة</h3>
                <p>نقدم أفضل الأسعار في السوق</p>
              </div>
              <div className="feature">
                <h3>خدمة عملاء ممتازة</h3>
                <p>فريق خدمة العملاء متاح لمساعدتكم</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
