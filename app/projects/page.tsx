'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Globe, Github } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export default function AllProjectsPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-10 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">All Projects</h1>

        {/* Projects Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => {
            const primaryLink = project.links.website || project.links.source

            return (
              <article
                key={`${project.title}-${index}`}
                className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative w-full h-44 bg-gray-100 dark:bg-slate-800">
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
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {project.date?.split('-')[0] ?? project.date}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.links.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        Website
                      </a>
                    )}
                    {project.links.source && (
                      <a
                        href={project.links.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <hr className="border-gray-800 dark:border-gray-700 my-10" />

        <footer className="text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; 2025 Gerlie Daga-as. All rights reserved.
        </footer>
      </div>
    </div>
  )
}