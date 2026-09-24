import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#5C2E5C]">
      {/* Header */}
<header className="border-b border-[#17233c]/15">
  <div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-between gap-8 px-6 py-6 lg:px-10">
    <a href="#" className="flex shrink-0 items-center gap-3 font-serif text-3xl tracking-tight">
      <Image src="/images/regal-quill-logo.png" alt="Book Haven" width={40} height={40} />
      <span>Book Haven</span>
    </a>

    <nav className="flex shrink-0 items-center gap-8 whitespace-nowrap">
      <a href="#" className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60">
        Books
      </a>
      <a href="#" className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60">
        New Releases
      </a>
      <a href="#" className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60">
        About
      </a>
      <a href="#" className="text-sm tracking-wide text-[#2E2E4E] hover:text-[#5C2E5C] hover:opacity-60">
        Contact
      </a>
      
    </nav>

    <div className="flex shrink-0 items-center gap-5 whitespace-nowrap">
      <button type="button" aria-label="Search" className="text-sm hover:opacity-60">
        Search
      </button>

      <button type="button" aria-label="Wishlist" className="text-sm hover:opacity-60">
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4V4.5Z" />
  </svg>
</button>

      <button type="button" className="text-sm hover:opacity-60">
        Bag (0)
      </button>
    </div>
  </div>
</header>
    </main>
  );
}