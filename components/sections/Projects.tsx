import { portfolioData } from '@/data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-8">
      <div className="inline-block px-3 py-1 bg-black border border-white rounded mb-4">
        <span className="text-sm font-medium">My Projects</span>
      </div>
      <h2 className="text-3xl font-bold mb-4">Check out my latest work</h2>
      <p className="text-gray-400 mb-8">
        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
      </p>
      
      <div className="space-y-8">
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className="flex gap-6 p-4 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <div className="w-24 h-24 rounded bg-gray-800 flex-shrink-0 flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-900 rounded text-xs text-gray-300 border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black border border-white rounded text-sm hover:bg-gray-900 transition-colors flex items-center gap-2"
                  >
                    <span>🌐</span>
                    Website
                  </a>
                )}
                {project.links.source && (
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-black border border-white rounded text-sm hover:bg-gray-900 transition-colors flex items-center gap-2"
                  >
                    <span>📂</span>
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
        >
          View full project archive <span>→</span>
        </a>
      </div>
    </section>
  )
}

