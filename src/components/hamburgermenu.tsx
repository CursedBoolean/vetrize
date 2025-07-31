"use client";

import { useState } from "react";
import Link from "next/link";

interface HamburgerMenuProps {
  className?: string;
}

export default function HamburgerMenu({ className = "" }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`sm:hidden ${className}`}>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#171A51] transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#171A51] transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#171A51] transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#F3F4F6] shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="w-8 h-8 flex items-center justify-center text-[#171A51] hover:bg-gray-200 rounded"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 px-6 py-4 text-xl font-semibold text-[#171A51]">
          <Link
            href="#hero"
            scroll={true}
            className="hover:opacity-90 py-2 border-b border-gray-200"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="#services"
            scroll={true}
            className="hover:opacity-90 py-2 border-b border-gray-200"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="#equipes"
            scroll={true}
            className="hover:opacity-90 py-2 border-b border-gray-200"
            onClick={closeMenu}
          >
            Nos Docteurs
          </Link>
          <Link
            href="#contact"
            scroll={true}
            className="hover:opacity-90 py-2 border-b border-gray-200"
            onClick={closeMenu}
          >
            Contactez Nous
          </Link>
        </nav>
      </div>
    </div>
  );
}