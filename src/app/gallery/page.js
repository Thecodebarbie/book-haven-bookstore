"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Nav from "@/components/Nav";

export default function Gallery() {
// Get Cart Data and Functions
const {
  cart,
  cartTotal,
  addToCart: addBookToCart,
  removeFromCart,
  restoreToCart,
  clearCart,
} = useCart();

  // Get Category From Gallery URL
const searchParams = useSearchParams();
const categoryFromUrl = searchParams.get("category");

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const miniCartRef = useRef(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [addedProductId, setAddedProductId] = useState(null);
  const [savedProducts, setSavedProducts] = useState([]);
  // Undo Recently Bookmarked Product in Cart
  const [recentlyBookmarked, setRecentlyBookmarked] = useState(null);
  // Selected Gallery Category
  // Selected Gallery Sort Option
const [sortOption, setSortOption] = useState("Featured");
const [selectedCategory, setSelectedCategory] = useState(
  categoryFromUrl || "All",
);
  // Promo Code
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [discount, setDiscount] = useState(0);
// Footer Newsletter
const [email, setEmail] = useState("");
const [subscribed, setSubscribed] = useState(false);


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

  // Scroll To Gallery Products From Homepage Category Link
useEffect(() => {
  if (categoryFromUrl) {
    document
      .getElementById("gallery-categories")
      ?.scrollIntoView({ behavior: "auto" });
  }
}, [categoryFromUrl]);



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

  const handleAddToCart = (book) => {
    addBookToCart(book);
    setAddedProductId(book.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  const checkout = () => {
    clearCart();
    setOrderComplete(true);
  };

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

// Footer Newsletter Subscription
const handleSubscribe = (e) => {
  e.preventDefault();
  setSubscribed(true);
};

  // Gallery Product Catalog
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
      category: ["Nonfiction", "Young Adult", "Bestsellers"],
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
      price: 25,
      category: ["Fiction", "Young Adult", "Bestsellers"],
      image: "/images/velvet.png",
    },
    {
      id: 11,
      title: "Whisper's of The Forgotten",
      author: "Elise Monroe",
      price: 22,
      category: ["Fiction", "Young Adult", "Bestsellers"],
      image: "/images/whispers.png",
    },
    // Client-Provided Products
    {
      id: 12,
      title: "Brie Mine 4Ever",
      category: ["Books", "Bestsellers"],
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
      title: "Sorcerer's  Chronicles",
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
      category: ["Magazines", "Bestsellers"],
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

  // Filter Gallery Products By Category
  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category.includes(selectedCategory));

// Sort Gallery Products
const sortedBooks = [...filteredBooks].sort((a, b) => {
  if (sortOption === "Price: Low to High") {
    return (a.price ?? 0) - (b.price ?? 0);
  }

  if (sortOption === "Price: High to Low") {
    return (b.price ?? 0) - (a.price ?? 0);
  }

  if (sortOption === "Title: A–Z") {
    return a.title.localeCompare(b.title);
  }

  return 0;
});

  // Cart Products With Bookmark Undo Placeholder
  const displayedCart = [...cart];

  if (recentlyBookmarked) {
    displayedCart.splice(recentlyBookmarked.index, 0, {
      isUndo: true,
      book: recentlyBookmarked.book,
    });
  }

  return (
    <main className="min-h-screen bg-[#F8F4EC] text-[#2E2E4E]">
      <Nav />

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

      <section id="gallery-categories" className="px-45 py-12">
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
            onClick={() => setSelectedCategory("All")}
            className="pb-1 text-[#2E2E4E]/60 hover:border-b hover:border-[#5C2E5C] hover:text-[#5C2E5C]"
          >
            All
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("Fiction")}
            className="pb-1 hover:border-b hover:border-[#5C2E5C] text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
          >
            Fiction
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("Nonfiction")}
            className="pb-1 hover:border-b hover:border-[#5C2E5C] text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
          >
            Nonfiction
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("Children's")}
            className="pb-1 hover:border-b hover:border-[#5C2E5C] text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
          >
            Children&apos;s
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("Young Adult")}
            className="pb-1 hover:border-b hover:border-[#5C2E5C] text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
          >
            Young Adult
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory("Bestsellers")}
            className="pb-1 hover:border-b hover:border-[#5C2E5C] text-[#2E2E4E]/60 hover:text-[#5C2E5C]"
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
                  
                  onClick={() => setSortOption("Featured")}
                  className="block w-full px-4 py-3 text-left font-serif text-[15px] text-[#2E2E4E] hover:bg-[#5C2E5C] hover:text-white"
                >
                  Featured
                </button>

                <button
                  type="button"
                  onClick={() => setSortOption("Price: Low to High")}
                  className="block w-full px-4 py-3 text-left font-serif text-[15px] text-[#2E2E4E] hover:bg-[#5C2E5C] hover:text-white"
                >
                  Price: Low to High
                </button>

                <button
                  type="button"
                  onClick={() => setSortOption("Price: High to Low")}
                  className="block w-full px-4 py-3 text-left font-serif text-[15px] text-[#2E2E4E] hover:bg-[#5C2E5C] hover:text-white"
                >
                  Price: High to Low
                </button>

                <button
                  type="button"
                  onClick={() => setSortOption("Title: A–Z")}
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
              {displayedCart.length === 0 ? (
                <div className="flex h-full items-center justify-center">
                  <p className="font-serif text-[18px] text-[#2E2E4E]/50">
                    {orderComplete
                      ? "Thank you for your order."
                      : "Your cart is empty."}
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  {displayedCart.map((item, index) => {
                    // Bookmark Undo Card
                    if (item.isUndo) {
                      return (
                        <div
                          key={`undo-${item.book.id}`}
                          className="flex items-center justify-between border-b border-[#2E2E4E]/10 py-5"
                        >
                          <p className="font-serif text-[16px] text-[#2E2E4E]">
                            You&apos;ve added &quot;{item.book.title}&quot; to
                            Bookmarks.
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
                          <div className="flex-1">
                            {/* Cart Product Title and Price */}
                            <div className="flex items-start justify-between gap-4">
                              <h3 className="font-serif text-[17px] text-[#2E2E4E]">
                                {book.title}
                              </h3>

                              {book.price && (
                                <p className="shrink-0 text-md text-[#2E2E4E]">
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

            {/* Cart Actions */}

              {/* Promo Code */}
<div className="mb-5 border-t border-[#2E2E4E]/15 pt-5">
  <p className="mb-3 text-xs tracking-[0.12em] text-[#2E2E4E] uppercase">
    Promo Code
  </p>

  <div className="flex">
    <input
      type="text"
      value={promoCode}
      onChange={(e) => setPromoCode(e.target.value)}
      placeholder="Enter promo code"
      className="min-w-0 flex-1 border border-[#2E2E4E]/20 bg-transparent px-3 py-2 text-sm text-[#2E2E4E] outline-none focus:border-[#5C2E5C]"
    />

    <button
      type="button"
      onClick={applyPromoCode}
      className="bg-[#5C2E5C] px-5 text-xs tracking-[0.12em] text-white uppercase hover:opacity-85"
    >
      Apply
    </button>
  </div>

  {/* Promo Code Message */}
  {promoMessage && (
    <p
      className={`mt-2 text-xs ${
        discount > 0 ? "text-[#3E5641]" : "text-[#742C36]"
      }`}
    >
      {promoMessage}
    </p>
  )}
</div>

            {/* Cart Total */}
            <div className="mb-5 flex items-center justify-between border-t border-[#2E2E4E]/15 pt-5">
              <p className="font-serif text-[18px] text-[#2E2E4E]">Total</p>

              <p className="font-serif text-[18px] text-[#2E2E4E]">
                ${cartTotal.toFixed(2)}
              </p>
            </div>
            {/* Discounted Total */}
{discount > 0 && (
  <div className="mb-5 flex items-center justify-between">
    <p className="font-serif text-[18px] text-[#3E5641]">
      Total After Discount
    </p>

    <p className="font-serif text-[18px] text-[#3E5641]">
      ${discountedTotal.toFixed(2)}
    </p>
  </div>
)}
            <div className="border-t border-[#2E2E4E]/15 pt-6">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={clearCart}
                  className="flex-1 border border-[#5C2E5C] px-4 py-3 text-[13px] tracking-[0.12em] text-[#5C2E5C] uppercase transition hover:bg-[#5C2E5C] hover:text-white"
                >
                  Clear Cart
                </button>

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
      <section id="gallery-products"className="px-45 pb-16">
        <div className="grid grid-cols-5 gap-x-6 gap-y-10">
          {sortedBooks.map((book) => (
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
                  className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center border border-white/30 bg-white/25 backdrop-blur-md transition hover:bg-white/40"
                  aria-label={`Save ${book.title}`}
                >
                  {/* Bookmark Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.3}
                    stroke="currentColor"
                    className="h-8 w-8 text-[#2E2E4E]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 16.5 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                  </svg>
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
                  onClick={() => handleAddToCart(book)}
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

            <footer className="w-full bg-[#2E2E4E] px-10 py-12 text-white">
              {/* Footer Top */}
              <div className="mb-10 flex items-center justify-between gap-12">
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/regal-quill-logo.png"
                    alt="Book Haven"
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />
      
                  <div>
                    <span className="whitespace-nowrap font-serif text-2xl">
                      Book Haven
                    </span>
      
                    <p className="mt-1 text-sm text-white/70">
                      Thoughtful books for curious minds.
                    </p>
                  </div>
                </div>
      
                {/* Newsletter */}
                <div className="flex items-center gap-8">
                  <div>
                    <p className="mb-1 text-xs tracking-[0.2em] text-white/60">
                      THE HAVEN LETTER
                    </p>
      
                    <h3 className="font-serif text-2xl">
                      A little something for your inbox.
                    </h3>
      
                    <p className="mt-1 max-w-md text-sm text-white/60">
                      New arrivals, staff picks, author events, and bookstore
                      happenings — thoughtfully delivered.
                    </p>
                  </div>
      
      {!subscribed ? (
        <form
          onSubmit={handleSubscribe}
          className="flex w-80 shrink-0"
        >
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="min-w-0 flex-1 border border-white/30 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#A4ADFF]"
          />
      
          <button
            type="submit"
            className="bg-[#5C2E5C] px-5 py-2.5 text-xs tracking-[0.15em] text-white hover:opacity-80"
          >
            SUBSCRIBE
          </button>
        </form>
      ) : (
        <p className="text-sm text-[#8bb990]">
          Welcome to The Haven Letter! Thanks for subscribing.
        </p>
      )}
                </div>
              </div>
      
              {/* Main Footer */}
              <div className="grid w-full grid-cols-3 gap-12 px-24">
                {/* Shop */}
                <div className="justify-self-start">
                  <h3 className="mb-4 text-xs tracking-[0.2em]">SHOP</h3>
      
                  <div className="flex flex-col gap-3 text-sm text-white/70">
                    <a href="#" className="hover:text-[#8bb990]">
                      New Arrivals
                    </a>
                    <a href="#monthly-edit" className="hover:text-[#8bb990]">
                      This Month&apos;s Edit
                    </a>
                    <a href="#" className="hover:text-[#8bb990]">
                      Fiction
                    </a>
                    <a href="#" className="hover:text-[#8bb990]">
                      Nonfiction
                    </a>
                    <a href="#" className="hover:text-[#8bb990]">
                      Young Adult
                    </a>
                    {/* <a href="#" className="hover:text-white">Gifts & Accessories</a> future feature */}
                  </div>
                </div>
      
                {/* About */}
                <div className="justify-self-center">
                  <h3 className="mb-4 text-xs tracking-[0.2em]">
                    <a href="#about" className="hover:text-[#8bb990]">
                      ABOUT
                    </a>
                  </h3>
      
                  <div className="flex flex-col gap-3 text-sm text-white/70">
                    <a href="#hero" className="hover:text-[#8bb990]">
                      Home
                    </a>
                    {/*<a href="#" className="hover:text-white">Our Story</a> */}
                    <a href="#" className="hover:text-[#8bb990]">
                      The Haven Circle
                    </a>
                    <a href="#" className="hover:text-[#8bb990]">
                      Contact
                    </a>
                  </div>
                </div>
      
                {/* Visit */}
                <div className="justify-self-end">
                  <h3 className="mb-4 text-xs tracking-[0.2em]">VISIT US</h3>
      
                  <p className="text-sm text-white/70">
                    48 Haven Street
                    <br />
                    Monday –Friday: 9 a.m. to 8 p.m.
                    <br />
                    Saturday: 10 a.m. to 6 p.m.
                    <br />
                    Sunday: 11 a.m. to 5 p.m.
                  </p>
      
                  <div className="mt-5 flex gap-4 text-sm">
                    <a href="#" className="hover:opacity-60">
                      Instagram
                    </a>
                    <a href="#" className="hover:opacity-60">
                      Facebook
                    </a>
                    <a href="#" className="hover:opacity-60">
                      X
                    </a>
                    <a href="#" className="hover:opacity-60">
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
      
              {/* Bottom Footer */}
              <div className="mt-12 flex w-full items-center justify-between border-t border-white/20 pt-6 text-xs text-white/50">
                <p className="whitespace-nowrap">
                  © 2026 Book Haven Bookstore. All rights reserved.
                </p>
      
                <div className="flex gap-6 whitespace-nowrap">
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </div>
              </div>
            </footer>
    </main>
  );
}
