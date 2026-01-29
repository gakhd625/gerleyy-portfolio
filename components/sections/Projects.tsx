import { portfolioData } from '@/data/portfolio'
import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-8">
      <div className="inline-block px-3 py-1 bg-white border border-black rounded mb-4">
        <span className="text-sm font-medium text-black">My Projects</span>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-black">Check out my latest work</h2>
      <p className="text-gray-600 mb-8">
        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
      </p>
      
      <div className="space-y-8">
        {portfolioData.projects.map((project, index) => (
          <div
            key={index}
            className="flex gap-6 p-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-24 h-24 rounded bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-2xl">📄</span>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-black">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.date}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700 border border-gray-300"
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
                    className="px-4 py-2 bg-white border border-black rounded text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 text-black"
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
                    className="px-4 py-2 bg-white border border-black rounded text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 text-black"
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
          className="text-gray-600 hover:text-black transition-colors text-sm flex items-center gap-2"
        >
          View full project archive <span>→</span>
        </a>
      </div>
    </section>
  )
}

