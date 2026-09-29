"use client";

import { createContext, useContext, useEffect, useState } from "react";



// Create Cart Context
const CartContext = createContext();

// Cart Provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load Cart From Session Storage
  useEffect(() => {
    const savedCart = sessionStorage.getItem("bookHavenCart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save Cart To Session Storage
  useEffect(() => {
    sessionStorage.setItem("bookHavenCart", JSON.stringify(cart));
  }, [cart]);

  // Calculate Cart Total
  const cartTotal = cart.reduce(
    (total, book) => total + (book.price ?? 0),
    0,
  );

  // Add Product To Cart
  const addToCart = (book) => {
    setCart((currentCart) => [...currentCart, book]);
  };

  // Remove Individual Product From Cart
  const removeFromCart = (indexToRemove) => {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove),
    );
  };

  // Restore Product To Cart
const restoreToCart = (book, index) => {
  setCart((currentCart) => {
    const restoredCart = [...currentCart];
    restoredCart.splice(index, 0, book);
    return restoredCart;
  });
};

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        addToCart,
        removeFromCart,
        restoreToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Use Cart Context
export function useCart() {
  return useContext(CartContext);
}