import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../shared/types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <div className="product-rating">
          <span className="rating-stars">
            {'★'.repeat(Math.floor(product.rating.rate))}
            {'☆'.repeat(5 - Math.floor(product.rating.rate))}
          </span>
          <span className="rating-count">({product.rating.count})</span>
        </div>
        <Link 
          to={`/products/${product.id}`} 
          className="view-details-btn"
        >
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
