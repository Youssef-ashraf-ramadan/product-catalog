import React from 'react';
import ProductList from './ProductList';
import { useProducts } from '../hooks/useProducts';
import './Products.css';

const Products: React.FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">جميع المنتجات</h1>
        <p className="page-subtitle">
          اكتشف مجموعتنا الكاملة من المنتجات عالية الجودة
        </p>
        <ProductList 
          products={products} 
          loading={loading} 
          error={error} 
        />
      </div>
    </div>
  );
};

export default Products;
