import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HavenCirclePage() {
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

      </main>

      <Footer />
    </>
  );
}