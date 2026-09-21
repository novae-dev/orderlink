import {
  ArrowRight,
  Search,
  ShoppingBag,
  Store,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import './App.css';

const categories = [
  'Electronics',
  'Fashion',
  'Food',
  'Books',
  'Services',
  'Accessories',
];

const products = [
  {
    name: 'Wireless Headphones',
    price: '₦18,500',
    seller: 'Campus Tech',
    category: 'Electronics',
    emoji: '🎧',
  },
  {
    name: 'Oversized Campus Tee',
    price: '₦12,000',
    seller: 'NOVA Wear',
    category: 'Fashion',
    emoji: '👕',
  },
  {
    name: 'Chicken Shawarma',
    price: '₦4,500',
    seller: 'The Food Plug',
    category: 'Food',
    emoji: '🌯',
  },
];

function App () {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span>O</span> OrderLink
        </div>

        <div className="nav-links">
          <a href="#marketplace">Marketplace</a>
          <a href="#categories">Categories</a>
          <a href="#how">How it works</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Log in</button>
          <button className="sell-btn">Start selling</button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span /> Built for campus commerce
            </div>

            <h1>
              Your campus.
              <br />
              <strong>One marketplace.</strong>
            </h1>

            <p>
              Buy products, discover services, and connect with trusted
              student sellers — all in one place.
            </p>

            <div className="search-box">
              <Search size={20} />
              <input placeholder="What are you looking for?" />
              <button>Search</button>
            </div>

            <div className="hero-actions">
              <button className="primary-btn">
                Explore marketplace <ArrowRight size={18} />
              </button>
              <button className="secondary-btn">Become a seller</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="floating-label">Trending on campus</div>

            <div className="market-card">
              <div className="product-image">🎧</div>
              <div>
                <p className="product-category">Electronics</p>
                <h3>Wireless Headphones</h3>
                <strong>₦18,500</strong>
              </div>
              <button>
                <ShoppingBag size={18} />
              </button>
            </div>

            <div className="mini-stat">
              <div className="stat-icon">
                <ShieldCheck size={18} />
              </div>
              <div>
                <strong>Trusted sellers</strong>
                <p>Built around campus communities</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div>
            <Zap size={20} />
            <span>Discover faster</span>
          </div>
          <div>
            <ShieldCheck size={20} />
            <span>Shop with confidence</span>
          </div>
          <div>
            <Store size={20} />
            <span>Sell your products</span>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="section-heading">
            <div>
              <p className="section-label">EXPLORE</p>
              <h2>Shop by category</h2>
            </div>
            <a href="#marketplace">
              View all <ArrowRight size={16} />
            </a>
          </div>

          <div className="categories">
            {categories.map (category => (
              <button key={category}>{category}</button>
            ))}
          </div>
        </section>

        <section className="section" id="marketplace">
          <div className="section-heading">
            <div>
              <p className="section-label">MARKETPLACE</p>
              <h2>Popular right now</h2>
            </div>
            <a href="#marketplace">
              Browse marketplace <ArrowRight size={16} />
            </a>
          </div>

          <div className="products">
            {products.map (product => (
              <article className="product-card" key={product.name}>
                <div className="product-placeholder">{product.emoji}</div>
                <div className="product-info">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <strong>{product.price}</strong>
                    <span>{product.seller}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" id="how">
          <div>
            <p className="section-label">ORDERLINK</p>
            <h2>Commerce built around your campus.</h2>
            <p>
              Whether you're buying, selling, or providing a service,
              OrderLink gives your campus one place to connect.
            </p>
          </div>

          <button className="primary-btn">
            Get started <ArrowRight size={18} />
          </button>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span>O</span> OrderLink
        </div>
        <p>© 2026 OrderLink. Built for campus commerce.</p>
      </footer>
    </div>
  );
}

export default App;
