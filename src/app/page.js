export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#17233c]">
      {/* Header */}
<header className="border-b border-[#17233c]/15">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-6 lg:px-10">
    <a
      href="#"
      className="shrink-0 font-serif text-3xl tracking-tight"
    >
      Book Haven
    </a>

    <nav className="flex items-center gap-8 whitespace-nowrap">
      <a href="#" className="text-sm tracking-wide hover:opacity-60">
        Books
      </a>
      <a href="#" className="text-sm tracking-wide hover:opacity-60">
        New Releases
      </a>
      <a href="#" className="text-sm tracking-wide hover:opacity-60">
        Best Sellers
      </a>
      <a href="#" className="text-sm tracking-wide hover:opacity-60">
        Gifts
      </a>
    </nav>

    <div className="flex shrink-0 items-center gap-5 whitespace-nowrap">
      <button type="button" className="text-sm hover:opacity-60">
        Search
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