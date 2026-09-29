"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export default function Nav() {
    // Get Cart Data
  const { cart, cartTotal } = useCart();

  // Control Mini Cart
const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

// Control Cart Drawer
const [isCartOpen, setIsCartOpen] = useState(false);

// Close Mini Cart On Scroll
useEffect(() => {
  const closeMiniCartOnScroll = () => {
    setIsMiniCartOpen(false);
  };

  window.addEventListener("scroll", closeMiniCartOnScroll);

  return () => {
    window.removeEventListener("scroll", closeMiniCartOnScroll);
  };
}, []);

  return (
    <>
       {/* Promotional Banner */}
      <section className="bg-[#5C2E5C] px-6 py-2 text-center text-sm text-white">
        Free shipping on orders over $50 +20% Off Your First Order — Shop Now!
      </section>

      {/* Header */}
      <header className="border-b border-[#17233c]/15 bg-[#F8F4EC] text-[#2E2E4E]">
        <div className="mx-auto flex w-full items-center justify-between px-45 py-5">
          {/* Book Haven Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 font-serif text-3xl tracking-tight"
          >
            <Image
              src="/images/regal-quill-logo.png"
              alt="Book Haven"
              width={40}
              height={40}
            />
            <span>Book Haven</span>
          </Link>

          {/* Navigation */}
          <nav className="flex shrink-0 items-center gap-8 whitespace-nowrap ">
            <Link
              href="/gallery"
              className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60"
            >
              New Releases
            </Link>

            <Link
              href="/about"
              className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60"
            >
              About
            </Link>

            <Link
              href="/haven-circle"
              className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60"
            >
              The Haven Circle
            </Link>

            <Link
              href="/contact"
              className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60"
            >
              Contact
            </Link>
          </nav>

          {/* Navigation Icons */}
          <div className="relative flex shrink-0 items-center gap-5 whitespace-nowrap">
            {/* Search Icon */}
            <button
              type="button"
              aria-label="Search"
              className="text-sm hover:opacity-60"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>
            </button>

            {/* Bookmark Icon */}
            <div className="relative flex shrink-0 items-center gap-5 whitespace-nowrap">
            <button
              type="button"
              aria-label="Wishlist"
              className="text-sm hover:opacity-60"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4V4.5Z" />
              </svg>
            </button>


{/* Shopping Bag Icon */}

<button
  type="button"
  onClick={() => setIsMiniCartOpen((current) => !current)}
  aria-label={`Shopping bag with ${cart.length} items`}
  className="relative text-sm hover:opacity-60"
>
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M5 8h14l-1 13H6L5 8Z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>

  {/* Cart Item Count */}
  {cart.length > 0 && (
    <span className="absolute -right-2 -top-2 text-[10px] text-[#5C2E5C]">
      {cart.length}
    </span>
  )}
</button>

{/* Mini Cart */}

{isMiniCartOpen && (
  <div className="absolute right-10 top-full z-50 mt-2 w-80 border border-[#2E2E4E]/15 bg-[#F8F4EC] p-5 shadow-lg">
    <p className="font-serif text-lg text-[#2E2E4E]">Your Bag</p>

    {cart.length === 0 ? (
      <p className="mt-4 text-sm text-[#2E2E4E]/60">
        Your bag is empty.
      </p>
    ) : (
      <>
        <div className="mt-4 space-y-4">
          {cart.map((book, index) => (
            <div
  key={`${book.id}-${index}`}
  className="flex items-start gap-3 border-b border-[#2E2E4E]/10 pb-3"
>
  {/* Mini Cart Book Cover */}
  <Image
    src={book.image}
    alt={book.title}
    width={45}
    height={65}
    className="h-16 w-11 shrink-0 object-cover"
  />

  {/* Mini Cart Book Information */}
  <div className="min-w-0 flex-1">
    <p className="font-serif text-sm text-[#2E2E4E]">
      {book.title}
    </p>
    <p className="mt-1 text-xs text-[#2E2E4E]/50">
      {book.author}
    </p>
  </div>

  <p className="shrink-0 text-sm text-[#2E2E4E]">
    ${book.price.toFixed(2)}
  </p>
</div>
          ))}
        </div>

        {/* Mini Cart Total */}
        <div className="mt-5 flex justify-between border-t border-[#2E2E4E]/15 pt-4">
          <span className="text-sm text-[#2E2E4E]">Total</span>
          <span className="text-sm text-[#2E2E4E]">
            ${cartTotal.toFixed(2)}
          </span>
        </div>

          {/* View Cart Button */}

<button
  type="button"
  onClick={() => {
    setIsMiniCartOpen(false);
    setIsCartOpen(true);
  }}
  className="mt-5 w-full border border-[#5C2E5C] px-4 py-3 text-center text-xs tracking-[0.15em] text-[#5C2E5C] hover:bg-[#5C2E5C] hover:text-white"
>
  VIEW CART →
</button>

      </>
    )}
  </div>
)}

        </div>
        </div>
        </div>
      </header>
      
    <CartDrawer
    isOpen={isCartOpen}
    onClose={() => setIsCartOpen(false)}/>
    </>
  );
}