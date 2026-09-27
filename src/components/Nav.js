"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Nav() {
    // Get Cart Data
  const { cart } = useCart();

  return (
    <>
       {/* Promotional Banner */}
      <section className="bg-[#5C2E5C] px-6 py-2 text-center text-sm text-white">
        Free shipping on orders over $50 +20% Off Your First Order — Shop Now!
      </section>

      {/* Header */}
      <header className="border-b border-[#17233c]/15">
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
          <nav className="flex shrink-0 items-center gap-8 whitespace-nowrap">
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
          <div className="flex shrink-0 items-center gap-5 whitespace-nowrap">
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
        </div>
        </div>
      </header>
      
    </>
  );
}