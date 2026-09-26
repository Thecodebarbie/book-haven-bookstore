"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const miniCartRef = useRef(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [addedProductId, setAddedProductId] = useState(null);
  const [savedProducts, setSavedProducts] = useState([]);
  // Close Mini Cart When Clicking Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
        setIsMiniCartOpen(false);
      }
    };

    const handleScroll = () => {
      setIsMiniCartOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    setCart([]);
    setOrderComplete(true);
  };

  // Add Product To Cart Function
  const addToCart = (book) => {
    setCart([...cart, book]);
    setAddedProductId(book.id);

    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  // Remove Individual Product From Cart
  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  // Save or Unsave Product
  const toggleSavedProduct = (book) => {
    setSavedProducts((currentSaved) =>
      currentSaved.some((item) => item.id === book.id)
        ? currentSaved.filter((item) => item.id !== book.id)
        : [...currentSaved, book],
    );
  };

  {
    /* Gallery Product Catalog */
  }
  const books = [
    {
      id: 1,
      title: "The Far Field",
      author: "Elise Carter",
      price: 18,
      category: "Fiction",
      image: "/images/the-far-field.png",
    },
    {
      id: 2,
      title: "Better Days Ahead",
      author: "Marlowe James",
      price: 18,
      category: "Nonfiction",
      image: "/images/better-days.png",
    },
    {
      id: 3,
      title: "The Moon Archive",
      author: "Daniel Park",
      price: 19,
      category: "Fiction",
      image: "/images/the-moon-archive.png",
    },
    {
      id: 4,
      title: "A Wilder Garden",
      author: "Daniel Park",
      price: 19,
      category: "Children's",
      image: "/images/a-wilder-garden.png",
    },
    {
      id: 5,
      title: " Little Explorer's",
      author: "David Nordstrom",
      price: 19,
      category: "Children's",
      image: "/images/the-little-explorers.png",
    },
    {
      id: 6,
      title: "A Thousand Summers",
      author: "Lila Hart",
      price: 18,
      category: "Fiction",
      image: "/images/summers.png",
    },
    {
      id: 8,
      title: "Notes on Stillness",
      author: "Jordan Ellis",
      price: 19,
      category: "Nonfiction",
      image: "/images/notes-on-stillness.png",
    },
    {
      id: 9,
      title: "The Quiet Path",
      author: "Elise Monroe",
      price: 18,
      category: "Nonfiction",
      image: "/images/quiet-path.png",
    },
    {
      id: 10,
      title: "Velvet Hours",
      author: "Elise Monroe",
      price: 18,
      category: "Fiction",
      image: "/images/velvet.png",
    },
    {
      id: 11,
      title: "Whisper's of The Forgotten",
      author: "Elise Monroe",
      price: 22,
      category: "Fiction",
      image: "/images/whispers.png",
    },
    // Client-Provided Products
    {
      id: 12,
      title: "Brie Mine 4Ever",
      category: "Books",
      image: "/images/Client3_Book1.png",
    },
    {
      id: 13,
      title: "Glory Riders",
      category: "Books",
      image: "/images/Client3_Book2.png",
    },
    {
      id: 14,
      title: "Sorcerer's Shadowed Chronicles",
      category: "Books",
      image: "/images/Client3_Book3.png",
    },
    {
      id: 15,
      title: "BALL  ",
      category: "Magazines",
      image: "/images/Client3_Magazine1.png",
    },
    {
      id: 16,
      title: "TRAVEL ",
      category: "Magazines",
      image: "/images/Client3_Magazine2.png",
    },
    {
      id: 17,
      title: "EAT .",
      category: "Magazines",
      image: "/images/Client3_Magazine3.png",
    },
    {
      id: 18,
      title: "Notebook",
      category: "Accessories",
      image: "/images/Client3_Notebook.png",
    },
    {
      id: 19,
      title: "Stickers",
      category: "Accessories",
      image: "/images/Client3_Stickers.png",
    },
    {
      id: 20,
      title: "Tote Bag",
      category: "Accessories",
      image: "/images/Client3_ToteBag.png",
    },
  ];
  return (
    <main className="min-h-screen bg-[#F8F4EC] text-[#2E2E4E]">
      {/* Promotional Banner */}

      <section className="bg-[#5C2E5C] px-6 py-2 text-center text-sm text-white">
        Free shipping on orders over $50 +20% Off Your First Order — Shop Now!
      </section>

      {/* Header */}
      <header className="border-b border-[#17233c]/15">
        <div className="mx-auto flex w-full items-center justify-between px-45 py-5">
          <a
            href="#"
            className="flex shrink-0 items-center gap-3 font-serif text-3xl tracking-tight"
          >
            <Image
              src="/images/regal-quill-logo.png"
              alt="Book Haven"
              width={40}
              height={40}
            />
            <span>Book Haven</span>
          </a>

          {/* Navigation */}
          <nav className="flex shrink-0 items-center gap-8 whitespace-nowrap">
            <a
              href="#"
              className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60"
            >
              New Releases
            </a>
            <a
              href="#"
              className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60"
            >
              The Haven Circle
            </a>
            <a
              href="#"
              className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60"
            >
              Contact
            </a>
          </nav>

          {/* Search Button */}

          <div className="flex shrink-0 items-center gap-5 whitespace-nowrap">
            <button
              type="button"
              aria-label="Search"
              className="text-sm hover:opacity-60"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>
            </button>

            {/* Login Button : Bookmark Icon */}

            <button
              type="button"
              aria-label="login"
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

            {/* Cart Button : Shopping Bag Mini Cart */}
            <button
              type="button"
              onClick={() => setIsMiniCartOpen(!isMiniCartOpen)}
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
                <path d="M5 8h14l-1 13H6L5 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
            </button>

            {/* Mini Cart */}
            {isMiniCartOpen && (
              <div
                ref={miniCartRef}
                className="absolute top-16.25 right-45 z-40 w-85 border border-[#2E2E4E]/15 bg-[#F8F4EC] p-6 text-left shadow-lg"
              >
                <div className="mb-5 flex items-center justify-between border-b border-[#2E2E4E]/15 pb-4">
                  <p className="text-xs tracking-[0.15em] text-[#5C2E5C] uppercase">
                    Your Bag
                  </p>

                  <span className="text-xs text-[#2E2E4E]/50">
                    {cart.length} items
                  </span>
                </div>

                {cart.length === 0 ? (
                  <p className="py-6 text-center font-serif text-[16px] text-[#2E2E4E]/50">
                    Your bag is empty.
                  </p>
                ) : (
                  /* Navigation Mini Cart Product List */
                  <div className="max-h-75 space-y-4 overflow-y-auto py-2">
                    {cart.map((book, index) => (
                      <div
                        key={`${book.id}-${index}`}
                        className="flex items-center gap-3"
                      >
                        <Image
                          src={book.image}
                          alt={book.title}
                          width={55}
                          height={75}
                          className="h-18.75 w-13.75 object-cover"
                        />

                        <div>
                          <p className="font-serif text-[15px] text-[#2E2E4E]">
                            {book.title}
                          </p>

                          {book.price && (
                            <p className="mt-1 text-xs text-[#2E2E4E]/60">
                              ${book.price.toFixed(2)}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setIsMiniCartOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="mt-5 w-full border border-[#5C2E5C] px-4 py-3 text-xs tracking-[0.15em] text-[#5C2E5C] uppercase transition hover:bg-[#5C2E5C] hover:text-white"
                >
                  View Cart →
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Gallery Hero */}

      {/* Gallery Hero */}
      <section className="relative h-125 w-full overflow-hidden">
        {/* Hero Image */}
        <Image
          src="/images/gallery-hero.png"
          alt="Books from the Book Haven collection"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-[#5C2E5C]/80 via-[#2E2E4E]/30 to-transparent"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-end px-45">
          <div className="max-w-xl text-right text-white">
            <p className="mb-4 text-xs tracking-[0.2em] uppercase">
              Our Collection
            </p>

            <h1 className="mb-6 font-serif text-5xl leading-tight">
              Books for every chapter.
            </h1>

            <p className="ml-auto max-w-md text-sm leading-7 text-white/80">
              Thoughtfully selected stories for slow mornings, late nights, and
              everything in between.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}

      <section className="px-45 py-12">
        {/* Category Heading + View Cart */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-lg tracking-[0.2em] text-[#5C2E5C] uppercase">
            Shop by Category
          </p>

          {/* View Cart Button */}

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="w-75 border border-[#5C2E5C] px-6 py-3 text-[14px] tracking-[0.15em] text-[#5C2E5C] uppercase transition hover:bg-[#5C2E5C] hover:text-white"
          >
            View Cart ({cart.length})
          </button>
        </div>

        {/* category buttons */}

        <div className="flex items-center gap-6">
          <button
            type="button"
            className="border-b border-[#5C2E5C] pb-1 text-[#5C2E5C]"
          >
            All
          </button>

          <button
            type="button"
            className="pb-1  text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
          >
            Fiction
          </button>

          <button
            type="button"
            className="pb-1  text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
          >
            Nonfiction
          </button>

          <button
            type="button"
            className="pb-1  text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
          >
            Children&apos;s
          </button>

          <button
            type="button"
            className="pb-1  text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
          >
            Bestseller&apos;s
          </button>

          {/* Sort By */}

          <div className="ml-auto flex items-center gap-3">
            <span className="font-serif text-[16px] text-[#2E2E4E]/60">
              Sort by
            </span>

            <div className="group relative">
              <button
                type="button"
                className="flex w-45 items-center justify-between border border-[#2E2E4E]/20 bg-[#F8F4EC] px-4 py-3 font-serif text-[16px] text-[#2E2E4E]"
              >
                Featured
                <span className="text-[12px]">⌄</span>
              </button>

              {/* Dropdown Menu */}
              <div className="invisible absolute right-0 z-20 w-45 border border-t-0 border-[#2E2E4E]/20 bg-[#F8F4EC] opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left font-serif text-[15px] text-[#2E2E4E] hover:bg-[#5C2E5C] hover:text-white"
                >
                  Featured
                </button>

                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left font-serif text-[15px] text-[#2E2E4E] hover:bg-[#5C2E5C] hover:text-white"
                >
                  Price: Low to High
                </button>

                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left font-serif text-[15px] text-[#2E2E4E] hover:bg-[#5C2E5C] hover:text-white"
                >
                  Price: High to Low
                </button>

                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left font-serif text-[15px] text-[#2E2E4E] hover:bg-[#5C2E5C] hover:text-white"
                >
                  Title: A–Z
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Cart :  ==================== CART DRAWER ==================== */}

      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-[#2E2E4E]/40"
            onClick={() => setIsCartOpen(false)}
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
                onClick={() => setIsCartOpen(false)}
                className="text-[28px] text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
                aria-label="Close cart"
              >
                ×
              </button>
            </div>

            {/* Cart Product List */}
            <div className="flex-1 overflow-y-auto py-6">
              {cart.length === 0 ? (
                <div className="flex h-full items-center justify-center">
                  <p className="font-serif text-[18px] text-[#2E2E4E]/50">
                    {orderComplete
                      ? "Thank you for your order."
                      : "Your cart is empty."}
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.map((book, index) => (
                    <div
                      key={`${book.id}-${index}`}
                      className="flex gap-4 border-b border-[#2E2E4E]/10 pb-5"
                    >
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={75}
                        height={100}
                        className="h-25 w-18.75 object-cover"
                      />

                      <div>
                        <h3 className="font-serif text-[17px] text-[#2E2E4E]">
                          {book.title}
                        </h3>

                        {book.price && (
                          <p className="mt-2 text-sm text-[#2E2E4E]/60">
                            ${book.price.toFixed(2)}
                          </p>
                        )}
                        {/* Remove Product From Cart Button */}
                        <button
                          type="button"
                          onClick={() => removeFromCart(index)}
                          className="mt-3 mr-8 text-xs tracking-[0.1em] text-[#742C36] uppercase hover:underline"
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleSavedProduct(book)}
                          className="text-xs tracking-[0.1em] text-[#5C2E5C] uppercase hover:underline"
                        >
                          {savedProducts.some((item) => item.id === book.id)
                            ? "Added to Bookmarks"
                            : "Add to Bookmarks"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Actions */}

            {/* Clear Cart Button */}
            <div className="border-t border-[#2E2E4E]/15 pt-6">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={clearCart}
                  className="flex-1 border border-[#5C2E5C] px-4 py-3 text-[13px] tracking-[0.12em] text-[#5C2E5C] uppercase transition hover:bg-[#5C2E5C] hover:text-white"
                >
                  Clear Cart
                </button>

                {/* Checkout Button */}

                <button
                  type="button"
                  onClick={checkout}
                  className="flex-1 bg-[#5C2E5C] px-4 py-3 text-[13px] tracking-[0.12em] text-white uppercase transition hover:opacity-85"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Product Grid */}
      <section className="px-45 pb-16">
        <div className="grid grid-cols-5 gap-x-6 gap-y-10">
          {books.map((book) => (
            <div key={book.id} className="group">
              {/* Gallery Product Image */}
              <div className="relative mb-4 h-100 overflow-hidden bg-[#F8F4EC]">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="h-full w-full object-cover"
                />

                {/* Gallery Product Favorite Button */}
                <button
                  type="button"
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center bg-[#F8F4EC]/90 text-[#2E2E4E] transition hover:text-[#5C2E5C]"
                  aria-label={`Save ${book.title}`}
                >
                  ♡
                </button>
              </div>

              {/* Gallery Product Information */}
              <div>
                <h3 className="font-serif text-[18px] text-[#2E2E4E]">
                  {book.title}
                </h3>

                {book.author && (
                  <p className="mt-1 text-[13px] text-[#2E2E4E]/55">
                    {book.author}
                  </p>
                )}

                {book.price && (
                  <p className="mt-2 text-[14px] text-[#2E2E4E]">
                    ${book.price.toFixed(2)}
                  </p>
                )}

                {/* Gallery Product Add To Cart Button */}
                <button
                  type="button"
                  onClick={() => addToCart(book)}
                  className="mt-4 w-full border border-[#5C2E5C] px-4 py-2.5 text-[12px] tracking-[0.12em] text-[#5C2E5C] uppercase transition hover:bg-[#5C2E5C] hover:text-white"
                >
                  {addedProductId === book.id
                    ? "Added to Cart Successfully"
                    : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Section */}

      {/* Footer */}
    </main>
  );
}
