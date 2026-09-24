import {ArrowLeft, Minus, Plus, ShoppingBag, Trash2} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useCart} from '../context/CartContext';
import '../App.css';

function Cart () {
  const {cart, updateQuantity, removeFromCart, cartTotal} = useCart ();

  const delivery = cart.length > 0 ? 1000 : 0;
  const total = cartTotal + delivery;

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <ShoppingBag size={30} />
          </div>

          <h1>Your cart is empty</h1>

          <p>
            Discover products and services from your campus marketplace.
          </p>

          <Link to="/marketplace" className="continue-shopping">
            Explore marketplace
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-container">
        <Link to="/marketplace" className="back-link">
          <ArrowLeft size={17} />
          Continue shopping
        </Link>

        <div className="cart-heading">
          <div>
            <span className="marketplace-eyebrow">YOUR ORDER</span>
            <h1>Shopping cart</h1>
          </div>

          <span>{cart.length} products</span>
        </div>

        <div className="cart-layout">
          <section className="cart-items">
            {cart.map (item => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.seller}</p>

                  <div className="cart-item-bottom">
                    <strong>
                      ₦{item.price.toLocaleString ()}
                    </strong>

                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          updateQuantity (item.id, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity (item.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  className="remove-item"
                  onClick={() => removeFromCart (item.id)}
                  aria-label="Remove item"
                >
                  <Trash2 size={17} />
                </button>
              </article>
            ))}
          </section>

          <aside className="order-summary">
            <h2>Order summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₦{cartTotal.toLocaleString ()}</strong>
            </div>

            <div className="summary-row">
              <span>Campus delivery</span>
              <strong>₦{delivery.toLocaleString ()}</strong>
            </div>

            <div className="summary-divider" />

            <div className="summary-total">
              <span>Total</span>
              <strong>₦{total.toLocaleString ()}</strong>
            </div>

            <Link to="/checkout" className="checkout-button">
              Continue to checkout
            </Link>

            <div className="secure-checkout">
              Secure OrderLink checkout
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;
