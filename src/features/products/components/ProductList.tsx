import React from 'react';
import { Product } from '../../../shared/types';
import ProductCard from './ProductCard';
import './ProductList.css';

interface ProductListProps {
  products: Product[];
  loading?: boolean;
  error?: string | null;
}

const ProductList: React.FC<ProductListProps> = ({ products, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>جاري تحميل المنتجات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>خطأ في تحميل المنتجات: {error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-container">
        <p>لا توجد منتجات متاحة</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
