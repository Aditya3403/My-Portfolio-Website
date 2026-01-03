'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiHome, FiUser, FiFileText, FiCode } from 'react-icons/fi';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    sessionStorage.setItem("scrollTarget", id);

    if (pathname !== "/") {
      router.push("/");
    } else {
      scrollToTarget(id);
    }
  };

  const scrollToTarget = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
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
            fixed bottom-3 left-1/2 -translate-x-1/2 
            bg-white/30 dark:bg-gray-500/30 
            backdrop-blur-md
            border border-white/30 dark:border-gray-700/30
            shadow-lg rounded-full
            px-3 sm:px-6
            py-2 sm:py-3
            z-50 
            flex items-center justify-center
            gap-4 sm:gap-6
            text-gray-700 dark:text-white
          "
        >
          {/* Left section */}
          <div className="flex items-center gap-4 sm:gap-6">
            <FiHome
              onClick={() => navigateToSection("home")}
              className="text-black dark:text-white text-xl sm:text-2xl transition-all duration-300 hover:mr-3"
            />
            <FiCode
              onClick={() => navigateToSection("work")}
              className="text-black dark:text-white text-xl sm:text-2xl transition-all duration-300 hover:mr-4 hover:ml-3"
            />
            <Link href="/my-resume" aria-label="Resume">
              <FiFileText className="text-black dark:text-white text-xl sm:text-2xl transition-all duration-300 hover:mr-4 hover:ml-3" />
            </Link>
            <Link href="/about-me" aria-label="User">
              <FiUser className="text-black dark:text-white text-xl sm:text-2xl transition-all duration-300 hover:mr-4 hover:ml-3" />
            </Link>
          </div>

          {/* Divider */}
          <div className="w-px h-5 sm:h-6 bg-black dark:bg-white mx-1 sm:mx-2"></div>

          {/* Theme Toggle */}
          <AnimatedThemeToggler
            duration={400}
            className="text-black dark:text-white scale-100 sm:scale-110 transition-all duration-300 hover:ml-3"
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
