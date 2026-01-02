import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Timeline() {
  const timeline = [
    {
      year: "2026",
      items: [
        "building something new this year, stay tuned.",
      ],
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
        "took admission in computer science degree at Jaypee University of Information Technology, Solan. ",
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
    <Navbar/>
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

            <div className="mt-6 space-y-3">
              {block.items.map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  
                  {/* Text */}
                  <p className="text-gray-700 text-lg leading-relaxed">
                    - {text}
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
    </>
  );
}
