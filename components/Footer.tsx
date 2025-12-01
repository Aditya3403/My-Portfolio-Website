export default function Footer(){
    return(
    <div className="font-sans max-w-3xl mx-auto px-5 py-8">
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-3xl h-full px-4 py-15 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8 text-gray-600 text-lg dark:text-gray-300">

          {/* Column 1 */}
          <div className="space-y-3">
            <a href="/" className="block hover:text-black dark:hover:text-white">Home</a>
            <a href="/about-me" className="block hover:text-black dark:hover:text-white">About Me</a>
            <a href="#work" className="block hover:text-black dark:hover:text-white">Projects</a>
            {/* <a href="/components" className="block hover:text-black dark:hover:text-white">Components</a> */}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <a href="https://github.com/Aditya3403" className="block hover:text-black dark:hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/adityabansal3403/" className="block hover:text-black dark:hover:text-white">LinkedIn</a>
            <a href="https://x.com/adityatwt_" className="block hover:text-black dark:hover:text-white">Twitter</a>
            <a href="https://www.instagram.com/financefreakaditya/" className="block hover:text-black dark:hover:text-white">Instagram</a>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">

            <a
              href="/contact-me"
              className="block w-full bg-black dark:bg-white dark:text-black text-white text-center p-2 rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg"
            >
              Let's Work Together
            </a>

          </div>


        </div>

        {/* Bottom section */}
        <div className="text-left text-gray-500 dark:text-gray-400 pb-10 pl-5">

          <p className="mt-6 text-lg">
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