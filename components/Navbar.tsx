// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiHome, FiUser, FiFileText, FiCode, FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="
            fixed bottom-5 left-1/2 -translate-x-1/2 
            bg-white/30 dark:bg-gray-900/30 
            backdrop-blur-md
            border border-white/30 dark:border-gray-700/30
            shadow-lg rounded-full px-6 py-3 z-50 
            flex items-center justify-center gap-6
            text-gray-700 dark:text-gray-200
          "
        >
          {/* Left section */}
          <div className="flex items-center gap-6">
            <Link href="#home" aria-label="Home">
              <FiHome className="text-black text-2xl" />
            </Link>
            <Link href="#work" aria-label="Code">
              <FiCode className="text-black text-2xl" />
            </Link>
            <Link href="#" aria-label="Resume">
              <FiFileText className="text-black text-2xl" />
            </Link>
            <Link href="#" aria-label="User">
              <FiUser className="text-black text-2xl" />
            </Link>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-black dark:bg-gray-700/30 mx-2"></div>

          {/* Theme Icon */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-black text-2xl"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
