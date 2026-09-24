import {Search, SlidersHorizontal, ChevronDown} from 'lucide-react';
import {useMemo, useState} from 'react';
import ProductCard from '../components/ProductCard';
import {categories, products} from '../data/products';
import '../App.css';

function Marketplace () {
  const [search, setSearch] = useState ('');
  const [activeCategory, setActiveCategory] = useState ('All');

  const filteredProducts = useMemo (
    () => {
      return products.filter (product => {
        const matchesCategory =
          activeCategory === 'All' || product.category === activeCategory;

        const query = search.toLowerCase ();

        const matchesSearch =
          product.name.toLowerCase ().includes (query) ||
          product.category.toLowerCase ().includes (query) ||
          product.seller.toLowerCase ().includes (query);

        return matchesCategory && matchesSearch;
      });
    },
    [search, activeCategory]
  );

  return (
    <main className="marketplace-page">
      <section className="marketplace-header">
        <div>
          <span className="marketplace-eyebrow">CAMPUS MARKETPLACE</span>

          <h1>Find what you need.</h1>

          <p>
            Buy from students, discover local sellers, and find useful
            services around your campus.
          </p>
        </div>

        <button className="sell-market-button">
          + Sell something
        </button>
      </section>

      <section className="market-search-section">
        <div className="market-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search products, services or sellers..."
            value={search}
            onChange={event => setSearch (event.target.value)}
          />
        </div>

        <button className="filter-button">
          <SlidersHorizontal size={17} />
          Filters
        </button>
      </section>

      <section className="category-tabs">
        <button
          className={activeCategory === 'All' ? 'active' : ''}
          onClick={() => setActiveCategory ('All')}
        >
          All
        </button>

        {categories.map (category => (
          <button
            key={category.name}
            className={activeCategory === category.name ? 'active' : ''}
            onClick={() => setActiveCategory (category.name)}
          >
            <span className={`tab-dot ${category.color}`} />
            {category.name}
          </button>
        ))}
      </section>

      <section className="market-results-header">
        <div>
          <h2>
            {activeCategory === 'All' ? 'Explore products' : activeCategory}
          </h2>

          <span>{filteredProducts.length} items available</span>
        </div>

        <button className="sort-button">
          Recommended
          <ChevronDown size={16} />
        </button>
      </section>

      <section className="market-product-grid">
        {filteredProducts.map (product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      {filteredProducts.length === 0 &&
        <div className="empty-market">
          <h3>No products found</h3>
          <p>Try another search or category.</p>
        </div>}
    </main>
  );
}

export default Marketplace;
