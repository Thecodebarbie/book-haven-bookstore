"use client";

import Image from "next/image";
import { useState } from "react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const communityInvolvement = [
  {
    number: "01",
    title: "Education & Opportunity",
    description:
      "Scholarships, college and career workshops, LSAT preparation, and educational resources designed to support members as they pursue their next chapter.",
    image: "/images/education-and-opportunity.png",
    event: "LSAT Prep Workshop",
    eventDate: "October 17",
  },
  {
    number: "02",
    title: "Community Reads",
    description:
      "In-store and online book clubs that bring readers together for thoughtful conversations, new perspectives, and shared stories.",
    image: "/images/community-reads.png",
    event: "October Book Club",
    eventDate: "October 24",
  },
  {
    number: "03",
    title: "Local Collaborations",
    description:
      "Partnerships with local authors, artists, schools, and organizations to create meaningful events and experiences for the community.",
    image: "/images/local-collaborations.png",
    event: "Author Talk & Signing",
    eventDate: "November 7",
  },
];


const testimonials = [
  {
    quote:
      "The Haven Circle has introduced me to so many amazing books and people. It truly feels like a second home.",
    name: "Claire M.",
    image: "/images/haven-member-claire.png",
  },
  {
    quote:
      "I love being part of a community that values thoughtful conversation, learning, and a shared love for reading.",
    name: "Amara R.",
    image: "/images/haven-member-amara.png",
  },
  {
    quote:
      "Every event I've attended has been inspiring. I always leave with a new perspective and a much longer reading list!",
    name: "Ethan P.",
    image: "/images/haven-member-ethan.png",
  },
];

const faqs = [
  {
    question: "What is The Haven Circle?",
    answer:
      "The Haven Circle is Book Haven's membership community for readers who want to discover new books, join discussions, attend events, and connect with fellow book lovers.",
  },
  {
    question: "What is included with my membership?",
    answer:
      "Members receive access to book clubs, exclusive events, special discounts, educational workshops, scholarship opportunities, author conversations, and other member resources throughout the year.",
  },
  {
    question: "Do I have to purchase the monthly book from Book Haven?",
    answer:
      "No. You are welcome to participate in the monthly discussion whether you purchase your copy from Book Haven or bring your own.",
  },
  {
    question: "Are Haven Circle events available online?",
    answer:
      "Select book discussions, workshops, and community events are available online so members can participate even when they cannot visit the store.",
  },
  {
    question: "Can members suggest future books or events?",
    answer:
      "Yes! Haven Circle members are encouraged to recommend books, discussion topics, workshops, and ideas for future community events.",
  },
];

export default function HavenCirclePage() {

const pastSelections = [
  {
    title: "Summer on 85th Street",
    author: "Kiara Monro",
    image: "/images/summer-on-85th-street.png",
  },
  {
    title: "Three Stops From Home",
    author: "Tessa James",
    image: "/images/three-stops-from-home.png",
  },
  {
    title: "The Covert Heir",
    author: "Nia Cross",
    image: "/images/the-covert-heir.png",
  },
  {
    title: "Pretty Plans",
    author: "Kennedy Blake",
    image: "/images/pretty-plans.png",
  },
  {
    title: "The Next Chapter Blueprint",
    author: "Jayla Monroe",
    image: "/images/the-next-chapter-blueprint.png",
  },
  {
    title: "The Expanded Mindset",
    author: "Marcus Vaughn",
    image: "/images/the-expanded-mindset.png",
  },
  {
    title: "The Obsidian Heir",
    author: "Zariah Kellen",
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

// FAQ
const [openFaq, setOpenFaq] = useState(null);

const toggleFaq = (index) => {
  setOpenFaq(openFaq === index ? null : index);
};

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
      <div className="relative mx-auto aspect-2/3 w-full max-w-[300px] overflow-hidden">
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

{/* Community Involvement */}
<section className="bg-[#F8F4EC] px-8 py-14 text">
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-9">
      <h2 className="font-serif text-3xl">
        Community Involvement
      </h2>

      <p className="mt-2 text-xs tracking-[0.2em] text uppercase">
        How We Give Back
      </p>
    </div>

    {/* Community Cards */}
    <div className="grid gap-8 md:grid-cols-3">
      {communityInvolvement.map((item) => (
        <article key={item.number}>

  {/* Community Image + Event Overlay */}
<div className="group relative aspect-[16/10] overflow-hidden">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="scale-110 object-cover transition-transform duration-500 ease-out group-hover:scale-100"
  />

  {/* Event Overlay */}
  <div className="absolute inset-x-0 bottom-0 bg-[#742c36]/85 p-5">
    <p className="text-xs tracking-[0.18em] text uppercase">
      Upcoming Event
    </p>

    <h4 className="mt-2 font-serif text-xl text-white">
      {item.event}
    </h4>

    <p className="mt-1 text-sm text-white/75">
      {item.eventDate}
    </p>
  </div>
</div>

        </article>
      ))}
    </div>
  </div>
</section>

{/* Member Testimonials */}
<section className="bg-[#F8F4EC] px-8 py-14">
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-8">
      <h2 className="font-serif text-3xl">
        What Our Members Are Saying
      </h2>

      <p className="mt-2 text-xs tracking-[0.2em] text-[#2E2E4E]/55 uppercase">
        From The Haven Circle
      </p>
    </div>

    {/* Testimonials */}
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.name}
          className="border border-[#2E2E4E]/15 p-7"
        >
          {/* Quote */}
          <div className="flex gap-4">
            <span className="font-serif text-5xl leading-none text-[#5C2E5C]/40">
              “
            </span>

            <p className="font-serif leading-7 text-[#2E2E4E]/80">
              {testimonial.quote}
            </p>
          </div>

          {/* Member */}
          <div className="mt-6 flex items-center gap-4">
            <Image
              src={testimonial.image}
              alt={`${testimonial.name} Haven Circle member`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <p className="text-xs tracking-[0.15em] uppercase">
                {testimonial.name}
              </p>

              {/* Member Rating */}
              <p
                className="mt-1 text-sm text-[#742C36]"
                aria-label="5 out of 5 stars"
              >
                ★ ★ ★ ★ ★
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>

  </div>
</section>

{/* Frequently Asked Questions */}
<section className="bg-[#557159] px-8 py-14 text-white">
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-8">
      <h2 className="font-serif text-3xl">
        Frequently Asked Questions
      </h2>

      <p className="mt-2 text-xs tracking-[0.2em] text-white/60 uppercase">
        The Haven Circle
      </p>
    </div>

    {/* FAQ Questions */}
    <div className="border border-white/25">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="border-b border-white/25 last:border-b-0"
        >
          {/* FAQ Button */}
          <button
            type="button"
            onClick={() => toggleFaq(index)}
            className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-white/5"
            aria-expanded={openFaq === index}
          >
            <span className="font-serif text-lg">
              {faq.question}
            </span>

            <span className="ml-6 text-xl">
              {openFaq === index ? "−" : "+"}
            </span>
          </button>

          {/* FAQ Answer */}
          {openFaq === index && (
            <div className="border-t border-white/15 px-6 py-5">
              <p className="max-w-3xl text-sm leading-7 text-white/75">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</section>

      </main>

      <Footer />
    </>
  );
}