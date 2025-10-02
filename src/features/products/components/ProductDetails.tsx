import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import './ProductDetails.css';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id, 10) : 0;
  const { product, loading, error } = useProduct(productId);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>جاري تحميل تفاصيل المنتج...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>خطأ في تحميل المنتج: {error}</p>
        <Link to="/" className="back-btn">العودة للرئيسية</Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <p>المنتج غير موجود</p>
        <Link to="/" className="back-btn">العودة للرئيسية</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <div className="product-details-container">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.title}
            className="product-detail-image"
          />
        </div>
        <div className="product-info-section">
          <h1 className="product-detail-title">{product.title}</h1>
          <div className="product-detail-price">${product.price}</div>
          <div className="product-detail-rating">
            <span className="rating-stars">
              {'★'.repeat(Math.floor(product.rating.rate))}
              {'☆'.repeat(5 - Math.floor(product.rating.rate))}
            </span>
            <span className="rating-text">
              {product.rating.rate} من 5 ({product.rating.count} تقييم)
            </span>
          </div>
          <div className="product-detail-category">
            <strong>الفئة:</strong> {product.category}
          </div>
          <div className="product-detail-description">
            <h3>الوصف:</h3>
            <p>{product.description}</p>
          </div>
          <div className="product-actions">
            <button className="add-to-cart-btn">
              إضافة إلى السلة
            </button>
            <Link to="/" className="back-to-products-btn">
              العودة للمنتجات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
