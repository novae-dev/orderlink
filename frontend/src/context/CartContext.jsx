import {createContext, useContext, useEffect, useState} from 'react';

const CartContext = createContext ();

export function CartProvider({children}) {
  const [cart, setCart] = useState (() => {
    const saved = localStorage.getItem ('orderlink-cart');
    return saved ? JSON.parse (saved) : [];
  });

  useEffect (
    () => {
      localStorage.setItem ('orderlink-cart', JSON.stringify (cart));
    },
    [cart]
  );

  const addToCart = (product, quantity = 1) => {
    setCart (current => {
      const existing = current.find (item => item.id === product.id);

      if (existing) {
        return current.map (
          item =>
            item.id === product.id
              ? {...item, quantity: item.quantity + quantity}
              : item
        );
      }

      return [...current, {...product, quantity}];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart (id);
      return;
    }

    setCart (current =>
      current.map (item => (item.id === id ? {...item, quantity} : item))
    );
  };

  const removeFromCart = id => {
    setCart (current => current.filter (item => item.id !== id));
  };

  const clearCart = () => setCart ([]);

  const cartCount = cart.reduce ((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce (
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart () {
  return useContext (CartContext);
}
