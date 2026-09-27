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
    clearCart,
  } = useCart();

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
          {cart.length === 0 ? (
            <p className="py-10 text-center font-serif text-[16px] text-[#2E2E4E]/50">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-5">
              {cart.map((book, index) => (
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
                        className="mt-3 text-xs uppercase tracking-widest text-[#742C36] hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="mt-6 border-t border-[#2E2E4E]/15 pt-5">
            <div className="mb-4 flex items-center justify-between text-[#2E2E4E]">
              <span className="text-sm uppercase tracking-[0.2em]">Total</span>
              <span className="font-serif text-[24px]">
                ${Number(cartTotal || 0).toFixed(2)}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={clearCart}
                className="flex-1 border border-[#2E2E4E]/25 bg-transparent px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#2E2E4E] transition hover:bg-[#2E2E4E]/5"
              >
                Clear
              </button>
              <button
                type="button"
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