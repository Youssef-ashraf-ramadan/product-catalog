import React from 'react';
import Hero from '../../../shared/components/Hero';
import ProductList from './ProductList';
import { useProducts } from '../hooks/useProducts';
import './Home.css';

const Home: React.FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="home">
      <Hero />
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">منتجاتنا المميزة</h2>
          <ProductList 
            products={products.slice(0, 6)} 
            loading={loading} 
            error={error} 
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
