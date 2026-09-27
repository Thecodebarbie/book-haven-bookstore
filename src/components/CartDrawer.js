"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer({ isOpen, onClose }) {
  // Get Cart Data and Functions
  const {
    cart,
    cartTotal,
    removeFromCart,
    restoreToCart,
    clearCart,
  } = useCart();

  // Order Complete Message
const [orderComplete, setOrderComplete] = useState(false);

// Saved Products
const [savedProducts, setSavedProducts] = useState([]);

// Undo Recently Bookmarked Product in Cart
const [recentlyBookmarked, setRecentlyBookmarked] = useState(null);

// Control Promo Code
const [promoCode, setPromoCode] = useState("");
const [discount, setDiscount] = useState(0);
const [promoMessage, setPromoMessage] = useState("");

// Apply Promo Code
const applyPromoCode = () => {
  if (promoCode.trim().toUpperCase() === "HAVEN20") {
    setDiscount(20);
    setPromoMessage("Promo code applied! You saved 20%.");
  } else {
    setDiscount(0);
    setPromoMessage("Invalid promo code.");
  }
};

// Calculate Discounted Cart Total
const discountedTotal = cartTotal * (1 - discount / 100);

// Save or Unsave Product
const toggleSavedProduct = (book) => {
  setSavedProducts((currentSaved) =>
    currentSaved.some((item) => item.id === book.id)
      ? currentSaved.filter((item) => item.id !== book.id)
      : [...currentSaved, book],
  );
};

// Move Product From Cart To Bookmarks
const moveToBookmarks = (book, index) => {
  toggleSavedProduct(book);

  setRecentlyBookmarked({
    book: book,
    index: index,
  });

  removeFromCart(index);
};

// Undo Recently Bookmarked Product
const undoBookmark = () => {
  if (!recentlyBookmarked) return;

  const { book, index } = recentlyBookmarked;

  restoreToCart(book, index);

  setSavedProducts((currentSaved) =>
    currentSaved.filter((item) => item.id !== book.id),
  );

  setRecentlyBookmarked(null);
};

// Process Cart Checkout
const checkout = () => {
  clearCart();
  setOrderComplete(true);
};

// Cart Products With Bookmark Undo Placeholder
const displayedCart = [...cart];

if (recentlyBookmarked) {
  displayedCart.splice(recentlyBookmarked.index, 0, {
    isUndo: true,
    book: recentlyBookmarked.book,
  });
}

  // Hide Cart Drawer When Closed
if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-[#2E2E4E]/40"
        onClick={onClose}
      ></div>

      {/* Cart Drawer */}
      <div className="absolute top-0 right-0 flex h-full w-112.5 flex-col bg-[#F8F4EC] p-8 shadow-xl">
        {/* Cart Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-[28px] text-[#2E2E4E]">
            Your Cart
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="text-2xl text-[#2E2E4E] hover:text-[#5C2E5C]"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {displayedCart.length === 0 ? (
            <p className="py-10 text-center font-serif text-[16px] text-[#2E2E4E]/50">
              {/* Cart Empty or Order Complete Message */}
      {orderComplete ? "Thank you for your order." : "Your cart is empty."}
            </p>
          ) : (
            <div className="space-y-5">
{/* Cart Products With Bookmark Undo */}
{displayedCart.map((item, index) => {
  // Bookmark Undo Card
  if (item.isUndo) {
    return (
      <div
        key={`undo-${item.book.id}`}
        className="flex items-center justify-between border-b border-[#2E2E4E]/10 py-5"
      >
        <p className="font-serif text-[16px] text-[#2E2E4E]">
          You&apos;ve added &quot;{item.book.title}&quot; to Bookmarks.
        </p>

        {/* Undo Bookmark Button */}
        <button
          type="button"
          onClick={undoBookmark}
          className="text-xs tracking-widest text-[#5C2E5C] uppercase hover:underline"
        >
          Undo
        </button>
      </div>
    );
  }

  const book = item;

  return (
    <div
      key={`${book.id}-${index}`}
      className="border-b border-[#2E2E4E]/15 pb-5"
    >
      <div className="flex gap-4">
        {/* Cart Product Image */}
        <Image
          src={book.image}
          alt={book.title}
          width={80}
          height={110}
          className="h-28 w-20 shrink-0 object-cover"
        />

        {/* Cart Product Information */}
        <div className="flex-1">
          <div className="flex justify-between gap-4">
            <div>
              <p className="font-serif text-[17px] text-[#2E2E4E]">
                {book.title}
              </p>

              {book.author && (
                <p className="mt-1 text-xs text-[#2E2E4E]/55">
                  {book.author}
                </p>
              )}
            </div>

            {book.price != null && (
              <p className="shrink-0 text-sm text-[#2E2E4E]">
                ${book.price.toFixed(2)}
              </p>
            )}
          </div>

          {/* Remove Product From Cart Button */}
          <button
            type="button"
            onClick={() => removeFromCart(index)}
            className="mt-3 mr-8 text-xs tracking-widest text-[#742C36] uppercase hover:underline"
          >
            Remove
          </button>

          {/* Add Product To Bookmarks Button */}
          <button
            type="button"
            onClick={() => moveToBookmarks(book, index)}
            className="text-xs tracking-widest text-[#5C2E5C] uppercase hover:underline"
          >
            {savedProducts.some((item) => item.id === book.id)
              ? "Added to Bookmarks"
              : "Add to Bookmarks"}
          </button>
        </div>
      </div>
    </div>
  );
})}
            </div>
          )}
        </div>

                {/* Promo Code Input */}
        {cart.length > 0 && (
          <div className="border-t border-[#2E2E4E]/15 pt-5">
            <p className="mb-3 text-xs tracking-[0.15em] text-[#2E2E4E] uppercase">
              Promo Code
            </p>

            <div className="flex">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="min-w-0 flex-1 border border-[#2E2E4E]/20 bg-transparent px-3 py-2 text-sm text-[#2E2E4E] outline-none"
              />

              <button
                type="button"
                onClick={applyPromoCode}
                className="bg-[#2E2E4E] px-4 py-2 text-xs tracking-[0.15em] text-white hover:bg-[#5C2E5C]"
              >
                APPLY
              </button>
            </div>

            {promoMessage && (
              <p className="mt-2 text-xs text-[#2E2E4E]/60">
                {promoMessage}
              </p>
            )}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-6 border-t border-[#2E2E4E]/15 pt-5">
            <div className="mb-4 flex items-center justify-between text-[#2E2E4E]">
              <span className="text-sm uppercase tracking-[0.2em]">Total</span>
              <span className="font-serif text-[24px]">
                ${Number(cartTotal || 0).toFixed(2)}
              </span>
            </div>

            {/* Discounted Cart Total */}
{discount > 0 && (
  <div className="mb-4 flex items-center justify-between text-[#3E5641]">
    <span className="text-sm uppercase tracking-[0.2em]">
      Total After Discount
    </span>
    <span className="font-serif text-[24px]">
      ${discountedTotal.toFixed(2)}
    </span>
  </div>
)}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
  clearCart();
  setOrderComplete(false);
}}
                className="flex-1 border border-[#2E2E4E]/25 bg-transparent px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#2E2E4E] transition hover:bg-[#2E2E4E]/5"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={checkout}
                className="flex-1 bg-[#2E2E4E] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#F8F4EC] transition hover:bg-[#5C2E5C]"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}