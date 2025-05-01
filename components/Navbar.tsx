"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          OnlineKurs
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link href="/courses" className="hover:text-blue-600">Kurslar</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Bog‘lanish</Link></li>
        </ul>
      </nav>

      {/* Responsive menyu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 bg-white">
          <li className="py-2"><Link href="/courses">Kurslar</Link></li>
          <li className="py-2"><Link href="/contact">Bog‘lanish</Link></li>
        </ul>
      )}
    </header>
  );
}
