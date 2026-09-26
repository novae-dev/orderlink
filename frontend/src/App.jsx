import {ShoppingCart} from 'lucide-react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {CartProvider} from './context/CartContext';
import {useCart} from './context/useCart';
import Cart from './pages/Cart';
import Marketplace from './pages/Marketplace';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function Home () {
  const {cartCount} = useCart ();
  return (
    <main className="app">
      {' '}
      <nav className="navbar">
        {' '}
        <Link to="/" className="logo"> Order<span>Link</span> </Link>
        {' '}
        <div className="nav-links">
          {' '}
          <Link to="/marketplace">Marketplace</Link>
          {' '}
          <a href="#categories">Categories</a>
          {' '}
          <a href="#how-it-works">How it works</a>
          {' '}
        </div>
        {' '}
        <div className="nav-actions">
          {' '}
          <Link to="/cart" className="cart-nav">
            {' '}
            <ShoppingCart size={18} />
            {' '}
            Cart
            {' '}
            {cartCount > 0 && <span>{cartCount}</span>}
            {' '}
          </Link>
          {' '}
          <button className="login-btn">Log in</button>
          {' '}
          <Link to="/marketplace" className="sell-btn"> Start selling </Link>
          {' '}
        </div>
        {' '}
      </nav>
      {' '}
      <section className="hero">
        {' '}
        <div>
          {' '}
          <span className="hero-label">CAMPUS COMMERCE, SIMPLIFIED</span>
          {' '}
          <h1> Your campus. <br /> <span>One marketplace.</span> </h1>
          {' '}
          <p>
            {' '}
            Discover products, services and opportunities from people around your campus.
            {' '}
          </p>
          {' '}
          <Link to="/marketplace" className="search-button">
            {' '}Explore marketplace{' '}
          </Link>
          {' '}
        </div>
        {' '}
        <div className="hero-card">
          {' '}
          <div className="hero-card-top">
            {' '}
            <span className="hero-card-label">TRENDING NOW</span>
            {' '}
            <span>01 / 08</span>
            {' '}
          </div>
          {' '}
          <div className="hero-product">
            {' '}
            <h3>Wireless Headphones</h3>
            {' '}
            <p>Campus Tech · Electronics</p>
            {' '}
            <div className="hero-price">₦18,500</div>
            {' '}
          </div>
          {' '}
        </div>
        {' '}
      </section>
      {' '}
    </main>
  );
}
function App () {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
