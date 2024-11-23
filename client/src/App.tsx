// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CatalogPage from './pages/CatalogPage';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import Account from './pages/Account';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Delivery from './pages/Delivery';
import Vacancies from './pages/Vacancies';
import News from './pages/News';
import Reviews from './pages/Reviews';
import Apply from './pages/Apply';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';  // Импортируем компонент
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
    return (
        <ThemeProvider>
        <AuthProvider> {/* Оборачиваем все приложение в AuthProvider */}
            <ProductProvider>
                <CartProvider>
                    <Router>
                        <ScrollToTop /> {/* Добавляем компонент ScrollToTop */}
                        <Header />
                        <div className="main-content">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/catalog" element={<CatalogPage />} />
                                <Route path="/product/:id" element={<ProductDetail />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/auth" element={<Auth />} />
                                <Route
                                    path="/account"
                                    element={<PrivateRoute element={<Account />} />}
                                />
                                <Route path="/about" element={<About />} />
                                <Route path="/contacts" element={<Contacts />} />
                                <Route path="/delivery" element={<Delivery />} />
                                <Route path="/careers" element={<Vacancies />} />
                                <Route path="/news" element={<News />} />
                                <Route path="/reviews" element={<Reviews />} />
                                <Route path="/apply/:jobTitle" element={<Apply />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                        <Footer />
                    </Router>
                </CartProvider>
            </ProductProvider>
        </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
