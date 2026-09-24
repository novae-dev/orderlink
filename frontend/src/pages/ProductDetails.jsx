import {
  ArrowLeft,
  Heart,
  MapPin,
  Minus,
  Plus,
  ShieldCheck,
  Star,
  ShoppingCart,
} from 'lucide-react';
import {Link, useParams} from 'react-router-dom';
import {useState} from 'react';
import {products} from '../data/products';
import '../App.css';

function ProductDetails () {
  const {id} = useParams ();
  const product = products.find (item => item.id === Number (id));
  const [quantity, setQuantity] = useState (1);

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product not found</h1>
        <Link to="/marketplace">Back to marketplace</Link>
      </main>
    );
  }

  return (
    <main className="product-page">
      <div className="product-container">
        <Link to="/marketplace" className="back-link">
          <ArrowLeft size={17} />
          Back to marketplace
        </Link>

        <section className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />

            {product.badge &&
              <span className={`product-detail-badge ${product.color}`}>
                {product.badge}
              </span>}
          </div>

          <div className="product-detail-info">
            <span className="product-detail-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="product-rating">
              <Star size={17} fill="currentColor" />
              <strong>{product.rating}</strong>
              <span>Highly rated</span>
            </div>

            <div className="product-price">
              ₦{product.price.toLocaleString ()}
            </div>

            <p className="product-description">
              Quality {product.name.toLowerCase ()} available through
              OrderLink. Connect with the seller and arrange a convenient
              campus delivery or pickup.
            </p>

            <div className="seller-card">
              <div className="seller-avatar">
                {product.seller.charAt (0)}
              </div>

              <div>
                <strong>{product.seller}</strong>
                <span>Verified campus seller</span>
              </div>

              <ShieldCheck size={20} />
            </div>

            <div className="product-location">
              <MapPin size={17} />
              <span>Available around {product.location}</span>
            </div>

            <div className="purchase-row">
              <div className="quantity-control">
                <button
                  onClick={() => setQuantity (value => Math.max (1, value - 1))}
                >
                  <Minus size={15} />
                </button>

                <span>{quantity}</span>

                <button onClick={() => setQuantity (value => value + 1)}>
                  <Plus size={15} />
                </button>
              </div>

              <button className="add-cart-button">
                <ShoppingCart size={18} />
                Add to cart
              </button>

              <button className="product-heart">
                <Heart size={19} />
              </button>
            </div>

            <button className="buy-now-button">
              Buy now · ₦{(product.price * quantity).toLocaleString ()}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;
