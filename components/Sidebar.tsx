'use client'

import { portfolioData } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import Image from 'next/image'

const navItems = [
  // { id: 'resume', label: 'Resume' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
  { id: 'beyond-code', label: 'Beyond Code' },
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
    <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen flex flex-col bg-white dark:bg-black pl-6 pr-6 md:pl-8 md:pr-4 py-8 md:py-10">
      {/* Header + Profile (uses empty space on md+ like your Dan example) */}
      <div className="mb-6 md:mb-8 flex flex-row items-start justify-between gap-4 md:gap-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 whitespace-nowrap md:whitespace-normal text-black dark:text-white">
            Hi, I'm {portfolioData.name} 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
            {portfolioData.title}
          </p>
        </div>

        <div className="flex justify-end flex-shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {portfolioData.profileImage ? (
              <Image
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center text-2xl md:text-3xl text-gray-700">
                {portfolioData.name[0]}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">About</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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
                      ? 'text-black dark:text-white font-medium'
                      : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <span className="w-8 h-px bg-gray-300 dark:bg-gray-700 mr-3 flex-shrink-0"></span>
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Navigation Menu - Mobile Horizontal Scroll */}
      {/* Hidden on mobile, only visible on desktop */}
    </div>
  )
}

