import Link from "next/link";

export default function Footer() {
  return (
    <div className="font-sans max-w-3xl mx-auto px-5 sm:py-8">
      <footer className="w-full border-t border-gray-200 dark:border-gray-600 mt-12 sm:mt-16">
        <div
          className="
            max-w-3xl
            h-full
            px-4
            py-6 sm:py-12
            grid
            grid-cols-3
            gap-8
            text-gray-600
            text-xs sm:text-sm md:text-lg
            dark:text-gray-300
          "
        >
          {/* Column 1 */}
          <div className="space-y-1.5 sm:space-y-3">
            <Link href="/" className="block hover:text-black dark:hover:text-white">
              Home
            </Link>
            <Link
              href="/about-me"
              className="block hover:text-black dark:hover:text-white"
            >
              About Me
            </Link>
            <a href="#work" className="block hover:text-black dark:hover:text-white">
              Projects
            </a>
          </div>

          {/* Column 2 */}
          <div className="space-y-1.5 sm:space-y-3">
            <a
              href="https://github.com/Aditya3403"
              className="block hover:text-black dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adityabansal3403/"
              className="block hover:text-black dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/adityatwt_"
              className="block hover:text-black dark:hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/financefreakaditya/"
              className="block hover:text-black dark:hover:text-white"
            >
              Instagram
            </a>
          </div>

          {/* Column 3 */}
          <div className="space-y-1.5 sm:space-y-3 col-span-3 sm:col-span-1">
            <Link
              href="/contact-me"
              className="
                block
                bg-black
                dark:bg-white
                dark:text-black
                text-white
                text-center
                px-3
                py-2
                rounded-full
                font-medium
                transition-all
                hover:scale-105
                hover:shadow-lg
                whitespace-nowrap
              "
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-left text-gray-500 dark:text-gray-400 pb-6 sm:pb-10 pl-5">
          <p className="mt-3 sm:mt-6 text-xs sm:text-lg leading-relaxed">
            Designed & Developed by{" "}
            <a
              href="https://twitter.com/adityatwt_"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              @adityatwt_
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
