type Experience = {
  role: string;
  description: string;
  period: string;
};

export default function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{experience.role}</h3>
      <p className="text-gray-600">{experience.description}</p>
      <p className="text-gray-500 text-sm">{experience.period}</p>
    </div>
  );
}