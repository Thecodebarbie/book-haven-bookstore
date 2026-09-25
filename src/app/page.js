"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const books = [
   
    {
      category: "Nonfiction",
      title: "Notes on Stillness",
      author: "Jordan Ellis",
      price: "$19.00",
      image: "/images/notes-on-stillness.png",
    },
     {
      category: "Fiction",
      title: "The Far Field",
      author: "Elise Carter",
      price: "$24.00",
      image: "/images/the-far-field.png",
    },
    {
      category: "Children's",
      title: "A Wilder Garden",
      author: "Marlowe James",
      price: "$28.00",
      image: "/images/a-wilder-garden.png",
    },
    {
      category: "Bestsellers",
      title: "The Moon Archive",
      author: "S. L. Monroe",
      price: "$22.00",
      image: "/images/the-moon-archive.png",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#5C2E5C]">
      {/* Promotional Banner */}
      <section className="bg-[#5C2E5C] px-6 py-2 text-center text-sm text-white">
        Free shipping on orders over $50 +20% Off Your First Order — Shop Now!
      </section>

      {/* Header */}
      <header className="border-b border-[#17233c]/15">
        <div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-between gap-8 px-6 py-6 lg:px-10">
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

          <div className="flex shrink-0 items-center gap-5 whitespace-nowrap">
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

            <button type="button" className="text-sm hover:opacity-60">
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
          </div>
        </div>
      </header>

{/* Hero */}
<section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
    {/* Left: Text content */}
    <div className="lg:pl-32">
  <p className="mb-4 text-xs tracking-[0.2em] text-[#5C2E5C]">
    AN INDEPENDENT BOOKSTORE
  </p>
  <h1 className="font-serif text-6xl leading-tight text-[#2E2E4E]">
    Stories
    <br />
    feel
    <br />
    <span className="italic text-[#5C2E5C]">like home.</span>
  </h1>
  <p className="mt-6 max-w-md text-sm leading-relaxed text-[#2E2E4E]/70">
    Thoughtful books for curious minds. Handpicked titles, beautiful
    editions, and a welcoming place for every reader.
  </p>

      <div className="mt-8 flex items-center gap-6">
        <a
          href="#"
          className="bg-[#5C2E5C] px-6 py-3 text-sm tracking-wide text-white hover:opacity-90"
        >
          BROWSE THE COLLECTION →
        </a>
        <a
          href="#"
          className="text-sm tracking-wide text-[#2E2E4E] underline underline-offset-4 hover:opacity-60"
        >
          OUR PHILOSOPHY
        </a>
      </div>
    </div>

    {/* Right: Photo with overlay card */}
    <div className="relative lg:ml-1">
      <Image
        src="/images/bookstore-hero.jpg"
        alt="Cozy bookstore reading nook"
        width={800}
        height={900}
        className="h-[520px] w-full object-cover"
      />

      <div className="absolute bottom-8 left-8 bg-[#f7f3ed] px-6 py-4 shadow-lg">
        <p className="text-xs tracking-[0.15em] text-[#5C2E5C]">
          OPEN EVERY DAY
        </p>
        <p className="mt-1 font-serif text-lg text-[#2E2E4E]">
          Come in, stay a while.
        </p>
        <address className="mt-2 flex items-center gap-1 text-xs not-italic text-[#2E2E4E]/70">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          48 Haven Street · 9–6
        </address>
      </div>
    </div>
  </div>
</section>

      {/* Hero 
<section className="relative flex h-[640px] items-center px-6 lg:px-10">
  <Image
    src="/images/bookstore-hero.jpg"
    alt="Cozy bookstore reading nook"
    fill
    priority
    className="object-cover"
  />
  <div className="absolute inset-0 bg-[#2E2E4E]/50" />

  <div className="relative mx-auto max-w-7xl">
    <p className="mb-4 text-xs tracking-[0.2em] text-[#fcf1fc]">
      AN INDEPENDENT BOOKSTORE
    </p>
    <h1 className="font-serif text-6xl leading-tight text-[#fcf1fc]">
      Stories
      <br />
      feel
      <br />
      <span className="italic text-[#fcf1fc]">like home.</span>
    </h1>
    <p className="mt-6 max-w-md text-sm leading-relaxed text-[#fcf1fc]">
      Thoughtful books for curious minds. Handpicked titles, beautiful
      editions, and a welcoming place for every reader.
    </p>

    <div className="mt-8 flex items-center gap-6">
      <a
        href="#"
        className="bg-[#5C2E5C] px-6 py-3 text-sm tracking-wide text-white hover:opacity-90"
      >
        BROWSE THE COLLECTION →
      </a>
      <a
        href="#"
        className="text-sm tracking-wide text-[#fcf1fc] underline underline-offset-4 hover:opacity-60"
      >
        OUR PHILOSOPHY
      </a>
    </div>
  </div>
</section> */}

      {/* Feature Highlights */}
      <section className="border-b border-[#17233c]/15 bg-[#f7f3ed] px-6 py-14 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 text-center lg:grid-cols-4 lg:divide-x lg:divide-[#17233c]/15">
          <div className="flex flex-col items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 5c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V4c-3-1-6-.5-8 1Z" />
              <path d="M12 5v13" />
            </svg>
            <h2 className="font-serif text-lg text-[#2E2E4E]">
              Curated Collections
            </h2>
            <p className="text-xs text-[#2E2E4E]/70">Thoughtfully chosen, always.</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 9h16v11H4z" />
              <path d="M2 6h20v3H2z" />
              <path d="M12 6v14" />
              <path d="M12 6c-1.5-3-6-3-6 0s4.5 3 6 0Z" />
              <path d="M12 6c1.5-3 6-3 6 0s-4.5 3-6 0Z" />
            </svg>
            <h2 className="font-serif text-lg text-[#2E2E4E]">Unique Gifts</h2>
            <p className="text-xs text-[#2E2E4E]/70">For every book lover.</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 7h11v9H3z" />
              <path d="M14 10h4l3 3v3h-7z" />
              <circle cx="7" cy="18" r="1.6" />
              <circle cx="17.5" cy="18" r="1.6" />
            </svg>
            <h2 className="font-serif text-lg text-[#2E2E4E]">Free Shipping</h2>
            <p className="text-xs text-[#2E2E4E]/70">On orders over $50.</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 20.5S3.5 15.5 3.5 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8.5 2.5c0 6-8.5 11-8.5 11Z" />
            </svg>
            <h2 className="font-serif text-lg text-[#2E2E4E]">A Community</h2>
            <p className="text-xs text-[#2E2E4E]/70">Readers. Dreamers. You.</p>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
<section className="px-6 py-16 lg:px-10">
  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-5">
    <a href="#" className="group relative h-72 overflow-hidden">
      <Image
        src="/images/category-new-arrivals.png"
        alt="New Arrivals"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#2E2E4E]/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-6 text-center text-white">
        <h2 className="text-sm tracking-wide">NEW ARRIVALS</h2>
        <span aria-hidden="true">→</span>
      </div>
    </a>
    <a href="#" className="group relative h-72 overflow-hidden">
      <Image
        src="/images/category-fiction.png"
        alt="Fiction"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#2E2E4E]/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-6 text-center text-white">
        <h2 className="text-sm tracking-wide">FICTION</h2>
        <span aria-hidden="true">→</span>
      </div>
    </a>

    <a href="#" className="group relative h-72 overflow-hidden">
      <Image
        src="/images/category-nonfiction.png"
        alt="Nonfiction"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#2E2E4E]/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-6 text-center text-white">
        <h2 className="text-sm tracking-wide">NONFICTION</h2>
        <span aria-hidden="true">→</span>
      </div>
    </a>

    <a href="#" className="group relative h-72 overflow-hidden">
      <Image
        src="/images/category-yadult.png"
        alt="Young Adult"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#2E2E4E]/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-6 text-center text-white">
        <h2 className="text-sm tracking-wide">YOUNG ADULT</h2>
        <span aria-hidden="true">→</span>
      </div>
    </a>

    <a href="#" className="group relative h-72 overflow-hidden">
      <Image
        src="/images/category-gifts.png"
        alt="Gifts and Accessories"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#2E2E4E]/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-6 text-center text-white">
        <h2 className="text-sm tracking-wide">GIFTS &amp; ACCESSORIES</h2>
        <span aria-hidden="true">→</span>
      </div>
    </a>
  </div>
      </section>

      {/* This Month's Edit */}
<section className="border-b border-[#17233c]/15 px-6 py-16 lg:px-10">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[300px_1fr]">

    {/* Left Side */}
    <div className="lg:border-r lg:border-[#17233c]/15 lg:pr-10">
      <p className="mb-3 text-xs tracking-[0.2em] text-[#5C2E5C]">
        THE BOOKSHELF
      </p>

      <h2 className="font-serif text-4xl text-[#2E2E4E]">
        This month&apos;s edit
      </h2>

      <p className="mt-5 text-sm leading-relaxed text-[#2E2E4E]/70">
        Fresh picks, returning favorites,
        <br />
        and the stories everyone&apos;s talking about.
      </p>

      <a
        href="#"
        className="mt-7 inline-block text-sm tracking-[0.15em] text-[#5C2E5C] underline underline-offset-8 hover:opacity-60"
      >
        SHOP ALL →
      </a>
    </div>

    {/* Right Side */}
    <div>

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap gap-8">
        {["All", "Fiction", "Nonfiction", "Children's", "Bestsellers"].map(
          (category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`pb-1 text-xs tracking-[0.15em] uppercase ${
                selectedCategory === category
                  ? "border-b border-[#5C2E5C] text-[#5C2E5C]"
                  : "text-[#2E2E4E]/50 hover:text-[#5C2E5C]"
              }`}
            >
              {category}
            </button>
          ),
        )}
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredBooks.map((book) => (
          <div
            key={book.title}
            className="border-r border-[#17233c]/15 pr-5"
          >
            {/* Book Cover */}
            <div className="relative bg-white/40 p-4">
              <Image
                src={book.image}
                alt={book.title}
                width={220}
                height={300}
                className="mx-auto h-[250px] w-auto object-contain"
              />

              {/* Heart */}
              <button
                type="button"
                aria-label={`Add ${book.title} to wishlist`}
                className="absolute right-2 top-2 text-xl text-[#5C2E5C]"
              >
                ♡
              </button>
            </div>

            {/* Book Information */}
            <p className="mt-4 text-[10px] tracking-[0.15em] uppercase text-[#5C2E5C]">
              {book.category}
            </p>

            <h3 className="mt-1 font-serif text-lg text-[#2E2E4E]">
              {book.title}
            </h3>

            <p className="mt-1 text-xs text-[#2E2E4E]/60">
              by {book.author}
            </p>

            <p className="mt-3 text-sm text-[#2E2E4E]">
              {book.price}
            </p>

            {/* Add to Bag */}
            <div className="mt-4 border-t border-[#17233c]/15 pt-4">
              <button
                type="button"
                className="text-xs tracking-[0.15em] text-[#2E2E4E] hover:text-[#5C2E5C]"
              >
                ADD TO BAG →
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

 {/* Promotional Banner */}
<section
  className="relative bg-cover bg-center px-6 py-16 lg:px-10"
  style={{
    backgroundImage: "url('/images/promo-banner.png')",
  }}
>
  {/* Shadowy Edge Overlay */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#2E2E4E_0%,transparent_25%,transparent_75%,#2E2E4E_100%)]"></div>
  {/* Text Content */}
  <div className="relative mx-auto max-w-7xl text-white">
    <p className="mb-2 text-xs font-semibold tracking-[0.2em]">
      SPECIAL OFFER
    </p>

    <h2 className="font-serif text-4xl">
      Buy 2, Get 1 50% Off
    </h2>

    <p className="mt-3 max-w-sm text-sm">
      On all in-stock books. Because one
      <br />
      is never enough.
    </p>

    <a
      href="#"
      className="mt-5 inline-block bg-[#5C2E5C] px-8 py-3 text-xs tracking-[0.15em] text-white"
    >
      SHOP THE DEAL →
    </a>
  </div>
</section>

{/* Client Satisfaction */}

<section className="bg-[#f7f3ed] px-6 py-16 lg:px-10">
  <div className="mx-auto max-w-7xl text-center">

    <p className="mb-3 text-xs tracking-[0.2em] text-[#5C2E5C]">
      CLIENT HIGHLIGHTS
    </p>

    <h2 className="font-serif text-4xl text-[#2E2E4E]">
      Loved by our readers
    </h2>

    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">

      {/* Review 1 */}
      <div className="border border-[#2E2E4E]/15 p-8">
        <p className="text-lg text-[#5C2E5C]">★★★★★</p>

        <p className="mt-5 font-serif text-lg italic leading-relaxed text-[#2E2E4E]">
          “Book Haven always feels like coming home. I never leave
          without finding something special.”
        </p>

        <p className="mt-6 text-xs tracking-[0.15em] text-[#2E2E4E]/60">
          — EMILY R.
        </p>
      </div>

      {/* Review 2 */}
      <div className="border border-[#2E2E4E]/15 p-8">
        <p className="text-lg text-[#5C2E5C]">★★★★★</p>

        <p className="mt-5 font-serif text-lg italic leading-relaxed text-[#2E2E4E]">
          “The selection is thoughtful and unique. It&apos;s my favorite
          place to discover new books.”
        </p>

        <p className="mt-6 text-xs tracking-[0.15em] text-[#2E2E4E]/60">
          — SARAH M.
        </p>
      </div>

      {/* Review 3 */}
      <div className="border border-[#2E2E4E]/15 p-8">
        <p className="text-lg text-[#5C2E5C]">★★★★★</p>

        <p className="mt-5 font-serif text-lg italic leading-relaxed text-[#2E2E4E]">
          “Beautiful books, wonderful recommendations, and such a warm
          atmosphere.”
        </p>

        <p className="mt-6 text-xs tracking-[0.15em] text-[#2E2E4E]/60">
          — JORDAN T.
        </p>
      </div>

    </div>
  </div>
</section>

  {/* Footer */}
<footer className="w-full bg-[#2E2E4E] px-10 py-12 text-white">

  {/* Main Footer */}
  <div className="grid w-full grid-cols-4 gap-12">

    {/* Logo */}
    <div>
      <div className="flex items-center gap-4">
        <Image
          src="/images/regal-quill-logo.png"
          alt="Book Haven"
          width={80}
          height={80}
          className="h-20 w-20 object-contain"
        />

        <span className="whitespace-nowrap font-serif text-2xl">
          Book Haven
        </span>
      </div>

      <p className="mt-4 text-sm text-white/70">
        Thoughtful books for curious minds.
      </p>
    </div>

    {/* Shop */}
    <div>
      <h3 className="mb-4 text-xs tracking-[0.2em]">
        SHOP
      </h3>

      <div className="flex flex-col gap-3 text-sm text-white/70">
        <a href="#" className="hover:text-white">New Arrivals</a>
        <a href="#" className="hover:text-white">Fiction</a>
        <a href="#" className="hover:text-white">Nonfiction</a>
        <a href="#" className="hover:text-white">Young Adult</a>
       {/* <a href="#" className="hover:text-white">Gifts & Accessories</a> future feature */}
      </div>
    </div>

    {/* About */}
    <div>
      <h3 className="mb-4 text-xs tracking-[0.2em]">
        ABOUT
      </h3>

      <div className="flex flex-col gap-3 text-sm text-white/70">
      <a href="#" className="hover:text-white">Home</a>
        {/*<a href="#" className="hover:text-white">Our Story</a> */}
        <a href="#" className="hover:text-white">The Haven Circle</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>
    </div>

    {/* Visit */}
    <div>
      <h3 className="mb-4 text-xs tracking-[0.2em]">
        VISIT US
      </h3>

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
        <a href="#" className="hover:opacity-60">Instagram</a>
        <a href="#" className="hover:opacity-60">Facebook</a>
        <a href="#" className="hover:opacity-60">X</a>
                <a href="#" className="hover:opacity-60">TikTok</a>
      </div>
    </div>

  </div>

  {/* Bottom Footer */}
  <div className="mt-12 flex w-full items-center justify-between border-t border-white/20 pt-6 text-xs text-white/50">

    <p className="whitespace-nowrap">
      © 2026 Book Haven Bookstore. All rights reserved.
    </p>

    <div className="flex gap-6 whitespace-nowrap">
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Terms</a>
    </div>

  </div>

</footer>
</main>
  );
}
