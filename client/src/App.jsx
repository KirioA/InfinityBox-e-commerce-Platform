// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CatalogPage from './pages/CatalogPage'; // Импортируем страницу каталога
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Auth from './pages/Auth';
import Account from './pages/Account';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import './App.css';
import './styles/global.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <div id="root">
                    <Header />
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Home />} />
                            <Route path="/catalog" element={<CatalogPage />} /> {/* Новый маршрут для каталога */}
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/auth" element={<Auth />} />
                            <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
