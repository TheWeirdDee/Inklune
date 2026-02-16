"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, Mic } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-10 md:ml-8 lg:ml-12">
            <Link
              href="/"
              className="text-2xl font-bold text-[#8A63F7]"
            >
              Inklune
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 text-sm text-[#6E6E7E]">
              <Link href="/">Home</Link>
              <Link href="/explore">Explore</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/community">Community</Link>
            </div>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-3 md:mr-0 lg:mr-10">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#D2D2D2]" />

              <input
                type="text"
                placeholder="search stories"
                className="pl-9 pr-10 py-2 text-sm border rounded-full focus:outline-none focus:ring-1 focus:ring-[#8A63F7]"
              />

              <Mic className="absolute right-3 top-2.5 h-4 w-4 text-[#D2D2D2] cursor-pointer hover:text-[#8A63F7]" />
            </div>

            <Link
              href="/signin"
              className="px-4 py-2 text-sm border border-[#8A63F7] rounded-md text-[#212126]"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 text-sm bg-[#8A63F7] text-white rounded-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="md:hidden border-t bg-white"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 px-4 py-4 text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/explore" onClick={() => setOpen(false)}>Explore</Link>
            <Link href="/categories" onClick={() => setOpen(false)}>Categories</Link>
            <Link href="/community" onClick={() => setOpen(false)}>Community</Link>

            {/* Mobile Search with Mic */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#D2D2D2]" />

              <input
  type="text"
  placeholder="search stories"
  className="w-full pl-9 pr-10 py-2 border rounded-xl 
             border border-[#C4C0CF] 
             focus:outline-none focus:ring-1 focus:ring-[#8A63F7]"
/>

              <Mic className="absolute right-3 top-2.5 h-4 w-4 text-[#D2D2D2] cursor-pointer" />
            </div>

            <Link
              href="/signin"
              className="py-2 rounded-xl text-center border border-[#8A63F7] text-[#212126]"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="py-2 bg-[#8A63F7] text-white rounded-xl text-center"
            >
              Sign Up
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
