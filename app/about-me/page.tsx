import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Timeline() {
  const timeline = [
    {
      year: "2026",
      items: ["building something new this year, stay tuned."],
    },
    {
      year: "2025",
      items: [
        "completed my computer science degree.",
        "started working as Fullstack Engineer at English Bhashi.",
      ],
    },
    {
      year: "2023",
      items: [
        "dove deep into web development, mastered cutting-edge technologies and builded more the 5 projects.",
      ],
    },
    {
      year: "2021",
      items: [
        "took admission in computer science degree at Jaypee University of Information Technology, Solan.",
        "started learning about Web Development.",
      ],
    },
    {
      year: "2005-2019",
      items: [
        "completed schooling at Ryan International school, balancing academics with a strong passion for badminton.",
      ],
    },
    {
      year: "2003",
      items: [
        "a computer science engineer was born in Chandigarh, India.",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="font-sans max-w-3xl mx-auto px-2 py-4 sm:py-4">
        <section className="px-4 sm:px-4 py-10 sm:py-10 max-w-4xl mx-auto">

          {/* Title */}
          <h1 className="text-center text-2xl sm:text-3xl font-bold mb-5 sm:mb-8 text-black dark:text-white">
            About Me
          </h1>

          {/* Timeline */}
          <div className="space-y-10 sm:space-y-16 border-t border-gray-300 dark:border-gray-600 pt-8">
            {timeline.map((block, idx) => (
              <div key={idx}>
                
                {/* Year */}
                <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
                  {block.year}
                </h2>

                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  {block.items.map((text, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                        - {text}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
