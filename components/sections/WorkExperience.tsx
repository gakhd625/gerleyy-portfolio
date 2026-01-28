import Image from 'next/image'

import { portfolioData } from '@/data/portfolio'

export default function WorkExperience() {
  return (
    <section id="experience" className="mb-24 scroll-mt-8">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-6">
        {portfolioData.workExperience.map((exp, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-xl overflow-hidden">
              {typeof exp.logo === 'string' && exp.logo.startsWith('/') ? (
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              ) : (
                exp.logo
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{exp.company}</h3>
              <p className="text-gray-400 mb-2">{exp.role}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              {exp.location && (
                <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

