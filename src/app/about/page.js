"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

      <Footer />
    </main>
  );
}