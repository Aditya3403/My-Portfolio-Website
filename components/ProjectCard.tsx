export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="project-card">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex gap-2">
        {project.tags.map((tag: string, index: number) => (
          <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}