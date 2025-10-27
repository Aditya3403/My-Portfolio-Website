export default function SkillsGrid({ skills }: { skills: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-100 p-3 rounded text-center">
          {skill}
        </div>
      ))}
    </div>
  )
}