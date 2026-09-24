import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import ProductDetails from './pages/ProductDetails';
import './App.css';

function Home () {
  return (
    <main className="app">
      <nav className="navbar">
        <Link to="/" className="logo">
          Order<span>Link</span>
        </Link>

        <div className="nav-links">
          <Link to="/marketplace">Marketplace</Link>
          <a href="#categories">Categories</a>
          <a href="#how-it-works">How it works</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Log in</button>

          <Link to="/marketplace" className="sell-btn">
            Start selling
          </Link>
        </div>
      </nav>

      <section className="hero">
        <div>
          <span className="hero-label">CAMPUS COMMERCE, SIMPLIFIED</span>

          <h1>
            Your campus.
            <br />
            <span>One marketplace.</span>
          </h1>

          <p>
            Discover products, services and opportunities from people
            around your campus.
          </p>

          <Link to="/marketplace" className="search-button">
            Explore marketplace
          </Link>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span className="hero-card-label">TRENDING NOW</span>
            <span>01 / 08</span>
          </div>

          <div className="hero-product">
            <h3>Wireless Headphones</h3>
            <p>Campus Tech · Electronics</p>
            <div className="hero-price">₦18,500</div>
          </div>
        </div>
      </section>
    </main>
  );
}

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/product/:id" element={<ProductDetails />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
