import {Heart, MapPin, Star} from 'lucide-react';
import '../App.css';
import {Link} from 'react-router-dom';

function ProductCard({product}) {
  return (
    <Link to={`/product/${product.id}`} className="market-product-card">
      <div className={`market-product-image ${product.color}`}>
        <img src={product.image} alt={product.name} />

        {product.badge &&
          <span className={`product-badge ${product.color}`}>
            {product.badge}
          </span>}

        <button className="favorite-button" aria-label="Add to favorites">
          <Heart size={17} />
        </button>
      </div>

      <div className="market-product-info">
        <div className="market-category">{product.category}</div>

        <h3>{product.name}</h3>

        <div className="seller-row">
          <span>{product.seller}</span>

          <span className="rating">
            <Star size={13} fill="currentColor" />
            {product.rating}
          </span>
        </div>

        <div className="market-product-footer">
          <strong>₦{product.price.toLocaleString ()}</strong>

          <span className="location">
            <MapPin size={13} />
            {product.location}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
