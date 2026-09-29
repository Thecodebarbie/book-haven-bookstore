"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    // Newsletter input signup and subscription status
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      
      {/* Footer */}
            <footer className="w-full bg-[#2E2E4E] px-10 py-12 text-white">
              {/* Footer Top */}
              <div className="mb-10 flex items-center justify-between gap-12">
                {/* Logo */}
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/regal-quill-logo.png"
                    alt="Book Haven"
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />
      
                  <div>
                    <span className="whitespace-nowrap font-serif text-2xl">
                      Book Haven
                    </span>
      
                    <p className="mt-1 text-sm text-white/70">
                      Thoughtful books for curious minds.
                    </p>
                  </div>
                </div>
      
                {/* Newsletter */}
                <div className="flex items-center gap-8">
                  <div>
                    <p className="mb-1 text-xs tracking-[0.2em] text-white/60">
                      THE HAVEN LETTER
                    </p>
      
                    <h3 className="font-serif text-2xl">
                      A little something for your inbox.
                    </h3>
      
                    <p className="mt-1 max-w-md text-sm text-white/60">
                      New arrivals, staff picks, author events, and bookstore
                      happenings — thoughtfully delivered.
                    </p>
                  </div>
      
      {!subscribed ? (
        <form
          onSubmit={handleSubscribe}
          className="flex w-80 shrink-0"
        >
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="min-w-0 flex-1 border border-white/30 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#A4ADFF]"
          />
      
          <button
            type="submit"
            className="bg-[#5C2E5C] px-5 py-2.5 text-xs tracking-[0.15em] text-white hover:opacity-80"
          >
            SUBSCRIBE
          </button>
        </form>
      ) : (
        <p className="text-sm text-[#8bb990]">
          Welcome to The Haven Letter! Thanks for subscribing.
        </p>
      )}
                </div>
              </div>
      
              {/* Main Footer */}
              <div className="grid w-full grid-cols-3 gap-12 px-24">
                {/* Shop */}
                <div className="justify-self-start">
                  <h3 className="mb-4 text-xs tracking-[0.2em]">SHOP</h3>

                  <div className="flex flex-col gap-3 text-sm text-white/70">
                    <Link href="/gallery" className="hover:text-[#8bb990]">
                      New Arrivals
                    </Link>
                    <Link href="/#monthly-edit" className="hover:text-[#8bb990]">
                      This Month&apos;s Edit
                    </Link>
                    <Link href="/gallery?category=Fiction" className="hover:text-[#8bb990]">
                      Fiction
                    </Link>
                    <Link href="/gallery?category=Nonfiction" className="hover:text-[#8bb990]">
                      Nonfiction
                    </Link>
                    <Link href="/gallery?category=Young%20Adult" className="hover:text-[#8bb990]">
                      Young Adult
                    </Link>
                    {/* <a href="#" className="hover:text-white">Gifts & Accessories</a> future feature */}
                  </div>
                </div>

                {/* About */}
                <div className="justify-self-center">
                  <h3 className="mb-4 text-xs tracking-[0.2em]">
                    <Link href="/about" className="hover:text-[#8bb990]">
                      ABOUT
                    </Link>
                  </h3>

                  <div className="flex flex-col gap-3 text-sm text-white/70">
                    <Link href="/" className="hover:text-[#8bb990]">
                      Home
                    </Link>
                    {/*<a href="#" className="hover:text-white">Our Story</a> */}
                    <Link href="/haven-circle" className="hover:text-[#8bb990]">
                      The Haven Circle
                    </Link>
                    <Link href="/about#contact" className="hover:text-[#8bb990]">
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="justify-self-end">
                  <h3 className="mb-4 text-xs tracking-[0.2em]">VISIT US</h3>

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
                    <a href="#" className="hover:opacity-60">
                      Instagram
                    </a>
                    <a href="#" className="hover:opacity-60">
                      Facebook
                    </a>
                    <a href="#" className="hover:opacity-60">
                      X
                    </a>
                    <a href="#" className="hover:opacity-60">
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
      
              {/* Bottom Footer */}
              <div className="mt-12 flex w-full items-center justify-between border-t border-white/20 pt-6 text-xs text-white/50">
                <p className="whitespace-nowrap">
                  © 2026 Book Haven Bookstore. All rights reserved.
                </p>
      
                <div className="flex gap-6 whitespace-nowrap">
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </div>
              </div>
            </footer>
     
    </>
  );
}