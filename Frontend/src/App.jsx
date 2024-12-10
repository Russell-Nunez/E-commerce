import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProdutosPage from './pages/ProdutosPage';
import OfertasPage from './pages/OfertasPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ShopProvider } from './context/ShopContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  return (
    <ShopProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/produtos" element={<ProdutosPage />} />
              <Route path="/ofertas" element={<OfertasPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
};

export default App;

