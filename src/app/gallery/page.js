import Image from "next/image";

export default function Gallery() {
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

      {/* Gallery Hero */}

{/* Gallery Hero */}
<section className="relative h-[500px] w-full overflow-hidden">
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
  <div className="absolute inset-0 bg-gradient-to-l from-[#5C2E5C]/80 via-[#2E2E4E]/30 to-transparent"></div>

  {/* Hero Text */}
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


      {/* View Cart + Sort */}


      {/* Book Gallery */}


      {/* Promotional Section */}


      {/* Footer */}

    </main>
  );
}