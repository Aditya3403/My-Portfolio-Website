import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Timeline() {
  const timeline = [
    {
      year: "2025",
      items: [
        "building something new this year, stay tuned.",
      ],
    },
    {
      year: "2024",
      items: [
        "dove deep into web development, mastered cutting-edge technologies and builded more the 20 projects.",
        "started my journey in web3 development, creating decentralized applications and embracing blockchain technology.",
        "got funded by adobe for an project and proud of the progress i've made so far—each step has been a leap forward in my career.",
      ],
    },
    {
      year: "2023",
      items: [
        "shifted focus from cricket due to family priorities, but gained clarity on my passion for technology.",
        "started my bca journey without prior programming knowledge and quickly developed a love for coding.",
        "bought my first laptop and taught myself c programming and web development—sparking my passion for building software.",
      ],
    },
  ];

  return (
    <div className="font-sans max-w-3xl mx-auto px-5 py-8">
    <section className="px-6 py-20 max-w-4xl mx-auto">
      
      {/* Title */}
      <h1 className="text-center text-3xl font-bold mb-16">
        About Me
      </h1>

      {/* Timeline */}
      <div className="space-y-16">
        {timeline.map((block, idx) => (
          <div key={idx}>
            
            {/* Year */}
            <h2 className="text-2xl font-semibold">{block.year}</h2>

            <div className="mt-6 space-y-5">
              {block.items.map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  
                  {/* Mini Line */}
                  <div className="w-10 h-[2px] bg-black mt-[10px]"></div>

                  {/* Text */}
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {text}
                  </p>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>

    <Footer/>
    </div>
  );
}
