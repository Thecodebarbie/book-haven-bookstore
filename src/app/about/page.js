"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  BookMarked,
  Bookmark,
  MessagesSquare,
  UsersRound,
} from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#2E2E4E]">
      <Nav />

      {/* Our Story */}
<section className="bg-[#F7F3ED] px-10 py-20">
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
    {/* Text */}
    <div>
      <p className="mb-4 text-xs tracking-[0.2em] text-[#5C2E5C]">
        OUR PHILOSOPHY
      </p>

      <h1 className="mb-6 font-serif text-5xl leading-tight text-[#2E2E4E]">
        A community built
        <br />
        on stories.
      </h1>

      <p className="mb-5 max-w-lg text-sm leading-7 text-[#2E2E4E]/70">
        Book Haven is an independent bookstore created for readers who
        believe books are more than something to place on a shelf. They
        are an invitation to slow down, discover something new, and
        connect with the stories that stay with us.
      </p>

      <p className="mb-8 max-w-lg text-sm leading-7 text-[#2E2E4E]/70">
        From new releases and timeless favorites to thoughtful staff
        selections, our shelves are curated to create a warm and
        welcoming space for every kind of reader.
      </p>

      <div className="border-l-2 border-[#5C2E5C] pl-5">
        <p className="font-serif text-xl italic text-[#5C2E5C]">
          More than a bookstore.
        </p>

        <p className="mt-1 text-sm text-[#2E2E4E]/60">
          A place to browse, discover, and belong.
        </p>
      </div>
    </div>

    {/* Story Images */}
    <div className="relative min-h-125">
      <Image
        src="/images/storefront.png"
        alt="Books and coffee inside Book Haven"
        width={520}
        height={600}
        className="w-[90%] h-auto"
      />

      <Image
        src="/images/store-nook.png"
        alt="Book Haven storefront"
        width={260}
        height={300}
        className="absolute bottom-0 right-0 h-auto w-[50%] border-8 border-[#F7F3ED] object-contain"
      />
    </div>
  </div>
</section>

{/* Book Haven Highlights */}
<section className="bg-[#5C2E5C] px-10 py-12 text-white">
  <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 text-center md:grid-cols-4">

    {/* Curated with Care */}
    <div className="flex flex-col items-center">
      <BookMarked
        size={26}
        strokeWidth={1.4}
        className="mb-3"
      />

      <h2 className="font-serif text-lg">
        Curated with Care
      </h2>

      <p className="mt-1 text-xs leading-5 text-white/60">
        Thoughtful books worth discovering.
      </p>
    </div>

    {/* Independent & Local */}
    <div className="flex flex-col items-center">
      <UsersRound
        size={26}
        strokeWidth={1.4}
        className="mb-3"
      />

      <h2 className="font-serif text-lg">
        Independent & Local
      </h2>

      <p className="mt-1 text-xs leading-5 text-white/60">
        Rooted in our reading community.
      </p>
    </div>

    {/* Readers First */}
    <div className="flex flex-col items-center">
      <MessagesSquare
        size={26}
        strokeWidth={1.4}
        className="mb-3"
      />

      <h2 className="font-serif text-lg">
        Readers First
      </h2>

      <p className="mt-1 text-xs leading-5 text-white/60">
        A welcoming haven for every reader.
      </p>
    </div>

    {/* Stories That Stay */}
    <div className="flex flex-col items-center">
      <Bookmark
        size={26}
        strokeWidth={1.4}
        className="mb-3"
      />

      <h2 className="font-serif text-lg">
        Stories That Stay
      </h2>

      <p className="mt-1 text-xs leading-5 text-white/60">
        Books selected to inspire and connect.
      </p>
    </div>
  </div>
</section>

{/* Our Mission */}
<section className="bg-[#F7F3ED] px-10 py-24">
  <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

    {/* Mission Image */}
    <div>
      <Image
        src="/images/store-cafe.png"
        alt="Book Haven bookstore and coffee area"
        width={1536}
        height={1024}
        className="h-auto w-full"
      />
    </div>

    {/* Mission Statement */}
    <div>
      <p className="mb-4 text-xs tracking-[0.2em] text-[#5C2E5C]">
        OUR MISSION
      </p>

      <h2 className="mb-6 font-serif text-4xl leading-tight text-[#2E2E4E]">
        Come in. Stay awhile.
      </h2>

      <p className="mb-5 max-w-lg text-sm leading-7 text-[#2E2E4E]/70">
        Our mission is to create a bookstore where discovering your next
        great read feels personal. We bring together thoughtfully selected
        books, a welcoming atmosphere, and a community of readers who share
        a love for stories.
      </p>

      <p className="max-w-lg text-sm leading-7 text-[#2E2E4E]/70">
        Whether you visit to browse the shelves, find a recommendation, or
        settle in with a book and a cup of coffee, Book Haven is a place
        designed for readers to feel at home.
      </p>
    </div>

  </div>
</section>

{/* Hours & Location */}
<section className="bg-white px-10 py-20">
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">

    {/* Visit Book Haven */}
    <div>
      <p className="mb-4 text-xs tracking-[0.2em] text-[#5C2E5C]">
        VISIT BOOK HAVEN
      </p>

      <h2 className="mb-6 font-serif text-4xl text-[#2E2E4E]">
        Find your way to the Haven.
      </h2>

      <p className="max-w-md text-sm leading-7 text-[#2E2E4E]/70">
        Stop by to browse our shelves, discover something new, or settle
        in with a book and a cup of coffee.
      </p>

      <div className="mt-8">
        <p className="font-serif text-lg text-[#2E2E4E]">
          48 Haven Street
        </p>

        <p className="mt-1 text-sm text-[#2E2E4E]/60">
          We look forward to welcoming you.
        </p>
      </div>
    </div>

{/* Store Hours */}
<div className="lg:pl-10">
  <p className="mb-6 text-xs tracking-[0.2em] text-[#5C2E5C]">
    STORE HOURS
  </p>

  <div className="space-y-5 text-sm text-[#2E2E4E]/70">
    <div className="flex justify-between">
      <span>Monday – Friday</span>
      <span>9 a.m. – 8 p.m.</span>
    </div>

    <div className="flex justify-between">
      <span>Saturday</span>
      <span>10 a.m. – 6 p.m.</span>
    </div>

    <div className="flex justify-between">
      <span>Sunday</span>
      <span>11 a.m. – 5 p.m.</span>
    </div>
  </div>
</div>

  </div>
</section>

      <Footer />
    </main>
  );
}