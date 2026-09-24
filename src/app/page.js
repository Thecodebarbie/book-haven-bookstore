export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#17233c]">
      {/* Header */}
      <header className="border-b border-[#d1c9b8] py-4">
        <div className="flex items-center justify-between"></div>
           {/* Logo */}
          <a
            href="#"
            className="font-serif text-3xl tracking-tight"
          >
            Book Haven
          </a>

          {/* Navigation  */}
            <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm tracking-wide hover:opacity-60">
              New Releases
            </a>
            <a href="#" className="text-sm tracking-wide hover:opacity-60">
              About Us
            </a>
            <a href="#" className="text-sm tracking-wide hover:opacity-60">
              Best Sellers
            </a>
            <a href="#" className="text-sm tracking-wide hover:opacity-60">
              The Haven Circle
            </a>
          </nav>
      </header>
    </main>
  );
}