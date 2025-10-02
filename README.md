# Product Catalog - React Application

A modern, responsive product catalog web application built with React, TypeScript, and the Fake Store API.

## Features

- 🏠 **Homepage** with hero section and featured products
- 📱 **Responsive Design** that works on desktop and mobile
- 🛍️ **Product List** displaying products from the Fake Store API
- 🔍 **Product Details** page with comprehensive product information
- 🎨 **Modern UI** with clean design and smooth animations
- 🌐 **Arabic Language Support** with RTL-friendly design

## Project Structure

Following the "GOOD" React project structure:

```
src/
├── features/
│   └── products/
│       ├── components/
│       │   ├── Home.tsx
│       │   ├── Products.tsx
│       │   ├── ProductCard.tsx
│       │   ├── ProductList.tsx
│       │   └── ProductDetails.tsx
│       └── hooks/
│           ├── useProducts.ts
│           └── useProduct.ts
└── shared/
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   └── About.tsx
    ├── hooks/
    ├── types/
    │   └── index.ts
    └── utils/
        └── api.ts
```

## Technologies Used

- **React 19** with TypeScript
- **React Router** for navigation
- **CSS Modules** for styling
- **Fake Store API** for product data
- **GitHub Pages** for deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd product-catalog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

### Deployment

The app is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## API Integration

The application fetches product data from the [Fake Store API](https://fakestoreapi.com/products):

- **GET /products** - Fetch all products
- **GET /products/:id** - Fetch specific product details

## Design System

- **Primary Color**: #edc80e (Golden Yellow)
- **Typography**: System fonts with fallbacks
- **Layout**: CSS Grid and Flexbox
- **Responsive**: Mobile-first approach

## Features in Detail

### Homepage
- Hero section with call-to-action
- Featured products grid (showing first 6 products)
- Responsive navigation

### Product List
- Grid layout with product cards
- Loading states and error handling
- Smooth hover animations

### Product Details
- Large product image
- Detailed product information
- Rating display
- Add to cart functionality (UI only)

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly interface

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.