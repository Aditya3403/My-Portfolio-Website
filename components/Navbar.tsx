'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiHome, FiUser, FiFileText, FiCode } from 'react-icons/fi';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="
            fixed bottom-3 left-1/2 -translate-x-1/2 
            bg-white/30 dark:bg-gray-500/30 
            backdrop-blur-md
            border border-white/30 dark:border-gray-700/30
            shadow-lg rounded-full px-6 py-3 z-50 
            flex items-center justify-center gap-6
            text-gray-700 dark:text-white
          "
        >
          {/* Left section */}
          <div className="flex items-center gap-6">
            <Link href="#home" aria-label="Home">
              <FiHome className="text-black dark:text-white text-2xl transition-all duration-300 hover:mr-3" />
            </Link>
            <Link href="#work" aria-label="Code">
              <FiCode className="text-black dark:text-white text-2xl transition-all duration-300 hover:mr-4 hover:ml-3" />
            </Link>
            <Link href="#" aria-label="Resume">
              <FiFileText className="text-black dark:text-white text-2xl transition-all duration-300 hover:mr-4 hover:ml-3" />
            </Link>
            <Link href="#" aria-label="User">
              <FiUser className="text-black dark:text-white text-2xl transition-all duration-300 hover:mr-4 hover:ml-3" />
            </Link>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-black dark:bg-white dark:text-white mx-2"></div>

          {/* Animated Theme Toggler */}
          <AnimatedThemeToggler duration={400} className="text-black dark:text-white scale-110 transition-all duration-300 hover:ml-3" />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
