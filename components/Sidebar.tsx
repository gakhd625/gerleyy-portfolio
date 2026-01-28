'use client'

import { portfolioData } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import Image from 'next/image'

const navItems = [
  { id: 'resume', label: 'Resume' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

export default function Sidebar() {
  const sectionIds = navItems.map(item => item.id)
  const activeSection = useActiveSection(sectionIds)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full md:w-1/3 md:sticky md:top-0 md:h-screen flex flex-col pl-6 pr-6 md:pl-8 md:pr-10 py-8 md:py-12">
      {/* Header + Profile (uses empty space on md+ like your Dan example) */}
      <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
        <div className="min-w-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Hi, I'm {portfolioData.name} 👋
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {portfolioData.title}
          </p>
        </div>

        <div className="mt-6 md:mt-1 flex justify-center md:justify-end flex-shrink-0">
          <div className="w-28 h-28 md:w-24 md:h-24 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
            {/* Placeholder for profile image - replace with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-3xl">
              {portfolioData.name[0]}
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          {portfolioData.about}
        </p>
      </div>

      {/* Navigation Menu - Desktop Vertical */}
      <nav className="flex-1 hidden md:block">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-2 flex items-center transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <span className="w-8 h-px bg-gray-700 mr-3 flex-shrink-0"></span>
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Navigation Menu - Mobile Horizontal Scroll */}
      <nav className="md:hidden mt-4">
        <ul className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <li key={item.id} className="flex-shrink-0">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`py-2 px-3 text-sm transition-colors duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-white font-medium border-b-2 border-white'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

