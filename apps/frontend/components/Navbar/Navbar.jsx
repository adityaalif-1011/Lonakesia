'use client';

import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 h-20 bg-[rgba(252,251,247,0.9)] backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center font-extrabold text-xl">
            L
          </div>
          <span className="font-black text-2xl tracking-tight">
            Lokanesia
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 font-bold text-sm">
          <a href="#" className="hover:text-orange-500 transition">Pilihan Bahasa</a>
          <a href="#" className="hover:text-orange-500 transition">Metode Belajar</a>
          <a href="#" className="hover:text-orange-500 transition">Komunitas</a>
        </div>

        {/* CTA */}
        <button className="hidden md:inline-flex bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition">
          Mulai Belajar
        </button>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl font-bold"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 py-8 bg-[#fcfbf7] border-t border-gray-200 flex flex-col gap-6 font-bold">
          <a href="#">Pilihan Bahasa</a>
          <a href="#">Metode Belajar</a>
          <a href="#">Komunitas</a>
          <button className="mt-4 bg-orange-500 text-white py-3 rounded-full font-extrabold">
            Mulai Belajar
          </button>
        </div>
      )}
    </nav>
  );
}
