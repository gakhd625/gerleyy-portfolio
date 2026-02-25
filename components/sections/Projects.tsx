import { portfolioData } from '@/data/portfolio'
import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-8">
      <div className="inline-block px-3 py-1 bg-white dark:bg-slate-800 border border-black dark:border-gray-700 rounded mb-4">
        <span className="text-sm font-medium text-black dark:text-white">My Projects</span>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Check out my latest work</h2>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {portfolioData.featuredProjects.map((project, index) => {
          const primaryLink = project.links.website || project.links.source

          return (
            <article
              key={`${project.title}-${index}`}
              className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative w-full h-48 bg-gray-100 dark:bg-slate-800">
                {project.thumbnail ? (
                  primaryLink ? (
                    <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </a>
                  ) : (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">🖼️</div>
                )}
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-black dark:text-white">{project.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{project.date}</p>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded text-xs text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
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
                      className="px-3 py-2 bg-white dark:bg-slate-800 border border-black dark:border-gray-700 rounded text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 text-black dark:text-white"
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
                      className="px-3 py-2 bg-white dark:bg-slate-800 border border-black dark:border-gray-700 rounded text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 text-black dark:text-white"
                    >
                      <span>📂</span>
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-8">
        <a
          href="/projects"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm flex items-center gap-2"
        >
          View full project archive <span>→</span>
        </a>
      </div>
    </section>
  )
}