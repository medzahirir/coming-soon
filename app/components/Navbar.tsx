"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";




export default function Navbar() {


const [menuOpen, setMenuOpen] = useState(false);
    
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // active après 50px
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (

    <motion.nav
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
  scrolled 
    ? "bg-gray-900/95 shadow-lg backdrop-blur-md" 
    : "bg-transparent"
}`}
>
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo */}
    <Link href="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition">
      MZ Portfolio
    </Link>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-8 text-gray-300">
      <Link href="/" className="hover:text-green-400 transition">Accueil</Link>
      <Link href="/projects" className="hover:text-green-400 transition">Projets</Link>
      <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
      <Link href="/about" className="hover:text-green-400 transition">À propos</Link>
    </div>

    {/* Mobile Burger */}
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-300 focus:outline-none"
      >
        {menuOpen ? "✖" : "☰"}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="md:hidden bg-gray-800/95 flex flex-col items-center py-4 space-y-4"
    >
      <Link href="/" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Accueil</Link>
      <Link href="/projects" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Projets</Link>
      <Link href="/contact" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link>
      <Link href="/about" className="hover:text-green-400 transition" onClick={() => setMenuOpen(false)}>À propos</Link>
    </motion.div>
  )}
</motion.nav>
  );
}

