'use client'

import Link from 'next/link'
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

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm border-b border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400">
                <th className="py-4 pr-4 font-medium align-top w-24">Year</th>
                <th className="py-4 pr-4 font-medium align-top">Project</th>
                <th className="py-4 pr-4 font-medium align-top hidden md:table-cell w-1/4">Built with</th>
                <th className="py-4 font-medium align-top w-24">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-sm">
              {portfolioData.projects.map((project, index) => (
                <tr
                  key={index}
                  className="group hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-colors"
                >
                  <td className="py-6 pr-4 align-top text-gray-500 dark:text-gray-400">
                    {project.date.split('-')[0]}
                  </td>
                  <td className="py-6 pr-4 align-top">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </div>
                  </td>
                  <td className="py-6 pr-4 align-top hidden md:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-6 align-top">
                    <div className="flex items-center gap-3">
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          title="Visit Website"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                      {project.links.source && (
                        <a
                          href={project.links.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          title="View Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr className="border-gray-800 dark:border-gray-700 my-10" />

        <footer className="text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; 2025 Gerlie Daga-as. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
