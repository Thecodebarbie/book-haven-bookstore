"use client";

import Image from "next/image";
import { useState } from "react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HavenCirclePage() {

const pastSelections = [
  {
    title: "Summer on 85th Street",
    author: "Mia Collins",
    image: "/images/summer-on-85th-street.png",
  },
  {
    title: "Three Stops From Home",
    author: "Tessa James",
    image: "/images/three-stops-from-home.png",
  },
  {
    title: "The Covert Heir",
    author: "Elena Voss",
    image: "/images/the-covert-heir.png",
  },
  {
    title: "Pretty Plans",
    author: "Sloane Avery",
    image: "/images/pretty-plans.png",
  },
  {
    title: "The Next Chapter Blueprint",
    author: "Jordan Blake",
    image: "/images/the-next-chapter-blueprint.png",
  },
  {
    title: "The Expanded Mindset",
    author: "Avery Bennett",
    image: "/images/the-expanded-mindset.png",
  },
  {
    title: "The Obsidian Heir",
    author: "Lucian Vale",
    image: "/images/the-obsidian-heir.png",
  },
  {
    title: "Pride Before the Fall",
    author: "Jordan Ellis",
    image: "/images/pride-before-the-fall.png",
  },
];

//Pagination 

const [pastPage, setPastPage] = useState(0);

const booksPerPage = 4;

const startIndex = pastPage * booksPerPage;

const visiblePastSelections = pastSelections.slice(
  startIndex,
  startIndex + booksPerPage
);

const totalPastPages = Math.ceil(
  pastSelections.length / booksPerPage
);

  return (
    <>
      <Nav />

      <main className="bg-[#F8F4EC] text-[#2E2E4E]">
        {/* Hero */}
<section
  className="relative flex aspect-16/6 w-full items-center justify-center bg-cover bg-center bg-no-repeat px-6 text-center text-white"
  style={{
    backgroundImage:
      "linear-gradient(rgba(20, 14, 20, 0.25), rgba(20, 14, 20, 0.35)), url('/images/haven-hero.png')",
  }}
>
  <div className="relative z-10">
    <p className="mb-2 text-xs tracking-[0.3em] uppercase">
      Welcome to
    </p>

    <h1 className="font-serif text-5xl md:text-6xl">
      The Haven Circle
    </h1>

    <p className="mx-auto mt-4 max-w-xl font-serif text-lg">
      A community of readers, dreamers, and lifelong learners.
    </p>

    <a
      href="#join-circle"
      className="mt-7 inline-block border border-white/70 bg-[#3E5641]/90 px-8 py-3 text-xs tracking-[0.18em] uppercase transition hover:bg-[#5C2E5C]"
    >
      Join the Circle →
    </a>
  </div>
</section>

{/* This Month's Pick */}
<section className="mx-auto max-w-7xl px-8 py-14">
  <h2 className="mb-7 font-serif text-3xl">
    This Month&apos;s Pick
  </h2>

  <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr_1fr]">
    
    {/* Monthly Book */}
    <div>
      <div className="relative mx-auto aspect-[2/3] w-full max-w-[300px] overflow-hidden">
        <Image
          src="/images/dead-girls-dont-text-back.png"
          alt="Dead Girls Don't Text Back, this month's Haven Circle selection"
          fill
          className="object-contain"
        />
      </div>

      <button
        type="button"
        className="mt-3 w-full bg-[#742C36] px-5 py-3 text-xs tracking-[0.15em] text-white uppercase hover:opacity-90"
      >
        See This Month&apos;s Pick →
      </button>
    </div>

    {/* Book Club & Community Update */}
    <div className="border-l border-[#2E2E4E]/15 pl-8">
      <h3 className="mb-5 font-serif text-xl">
        Book Club &amp; Community 
      </h3>

      <div className="space-y-3">
        <div className="border border-[#2E2E4E]/15 p-4">
          <p className="font-serif">
            📖 This Month&apos;s Discussion
          </p>

          <p className="mt-1 text-sm text-[#2E2E4E]/65">
            Dead Girls Don&apos;t Text Back
          </p>
        </div>

        <div className="border border-[#2E2E4E]/15 p-4">
          <p className="font-serif">
            💬 Discussion Dates &amp; Locations
          </p>

          <p className="mt-1 text-sm text-[#2E2E4E]/65">
            In-store &amp; online
          </p>
        </div>

        <div className="border border-[#2E2E4E]/15 p-4 ">
          <p className="font-serif">
            ♧ New Perspectives, Same Great Stories
          </p>

          <p className="mt-1 text-sm text-[#2E2E4E]/65">
            All readers are welcome.
          </p>
        </div>

        <div className="border border-[#2E2E4E]/15 p-4">
          <p className="font-serif">
            ▣ Read with us on Bookstagram
          </p>

          <p className="mt-1 text-sm text-[#2E2E4E]/65">
            #TheHavenCircle
          </p>
        </div>
      </div>
    </div>

    {/* What's Included */}
    <div className="border-l border-[#2E2E4E]/15 pl-8 ">
      <h3 className="mb-5 font-serif text-xl">
        What&apos;s Included?
      </h3>

      <div className="space-y-3 ">
        {[
          "Exclusive book recommendations",
          "In-store & online book clubs",
          "Member-only events & collaborations",
          "Early access to special offers",
          "Members-only discounts",
        ].map((item) => (
          <div
            key={item}
            className="border border-[#2E2E4E]/15 bg-transparent px-5 py-4 text-sm text-[#2E2E4E] transition duration-200 hover:bg-[#742C36] hover:text-white"
          >
            {item}
          </div>
        ))}

         {/* Join the Circle Button */}
        <a
          href="#join-circle"
          className="block w-full bg-[#742c36] px-5 py-4 text-center text-xs tracking-[0.15em] text-white uppercase transition hover:opacity-80"
        >
          Join the Circle →
        </a>


      </div>
    </div>

  </div>
</section>

{/* Past Selections */}
<section className="border-t border-[#2E2E4E]/10 px-8 py-14">
  <div className="mx-auto max-w-7xl">

    {/* Section Heading + Pagination */}
    <div className="mb-9 flex items-center justify-between">
      <h2 className="font-serif text-3xl">
        Past Selections
      </h2>

      {/* Pagination Arrows */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setPastPage((page) => page - 1)}
          disabled={pastPage === 0}
          aria-label="Previous past selections"
          className="flex h-10 w-10 items-center justify-center border border-[#2E2E4E]/30 text-lg transition hover:bg-[#742c36] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#2E2E4E]"
        >
          ←
        </button>

        <button
          type="button"
          onClick={() => setPastPage((page) => page + 1)}
          disabled={pastPage === totalPastPages - 1}
          aria-label="Next past selections"
          className="flex h-10 w-10 items-center justify-center border border-[#2E2E4E]/30 text-lg transition hover:bg-[#742c36] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#2E2E4E]"
        >
          →
        </button>
      </div>
    </div>

    {/* Books */}
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {visiblePastSelections.map((book) => (
        <div key={book.title} className="text-center">

          {/* Book Cover */}
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[220px] overflow-hidden">
            <Image
              src={book.image}
              alt={`${book.title} by ${book.author}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Book Information */}
          <h3 className="mt-4 font-serif text-lg">
            {book.title}
          </h3>

          <p className="mt-1 text-sm text-[#2E2E4E]/65">
            {book.author}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* What Is The Haven Circle */}
<section className="border-t border-[#2E2E4E]/10 bg-[#F4EEE4] px-8 py-14">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.35fr_2fr]">

    {/* Haven Circle Description */}
    <div>
      <p className="text-xs tracking-[0.2em] uppercase">
        What is
      </p>

      <h2 className="mt-1 font-serif text-4xl">
        The Haven Circle?
      </h2>

<p className="mt-4 max-w-lg leading-7 text-[#2E2E4E]/75">
  The Haven Circle is our community of readers, dreamers, and lifelong
  learners. It&apos;s a space to connect with fellow book lovers,
  discover new perspectives, and take part in meaningful conversations
  — in our store and beyond. Members also gain access to exclusive
  events, special discounts, educational workshops, and resources
  designed to support their next chapter. Throughout the year, members
  can participate in scholarship opportunities, college and career
  workshops, LSAT preparation sessions, author conversations, and other
  programs created to encourage learning, creativity, and personal
  growth.
</p>

      <a
        href="#join-circle"
        className="mt-6 inline-block bg-[#3E5641] px-6 py-3 text-xs tracking-[0.15em] text-white uppercase transition hover:opacity-80"
      >
        BECOME A MEMBER →
      </a>
    </div>

    {/* Haven Circle Benefits */}
    <div className="grid gap-6 md:grid-cols-3">

      {/* Discover */}
      <div className="border-l border-[#2E2E4E]/15 px-6 text-center">
        <Image
          src="/images/discover-icon.png"
          alt=""
          width={80}
          height={80}
          className="mx-auto"
        />

        <h3 className="mt-4 text-sm tracking-[0.18em] uppercase">
          Discover
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#2E2E4E]/70">
          Curated reads and recommendations from our team and community.
        </p>
      </div>

      {/* Connect */}
      <div className="border-l border-[#2E2E4E]/15 px-6 text-center">
        <Image
          src="/images/connect-icon.png"
          alt=""
          width={80}
          height={80}
          className="mx-auto"
        />

        <h3 className="mt-4 text-sm tracking-[0.18em] uppercase">
          Connect
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#2E2E4E]/70">
          Join discussions, book clubs, and in-store events with
          fellow readers.
        </p>
      </div>

      {/* Be Inspired */}
      <div className="border-l border-[#2E2E4E]/15 px-6 text-center">
        <Image
          src="/images/inspire-icon.png"
          alt=""
          width={80}
          height={80}
          className="mx-auto"
        />

        <h3 className="mt-4 text-sm tracking-[0.18em] uppercase">
          Be Inspired
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#2E2E4E]/70">
          Exclusive content, partnerships, and stories that celebrate
          the power of books.
        </p>
      </div>

    </div>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}