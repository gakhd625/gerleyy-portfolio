import Image from 'next/image'

import { portfolioData } from '@/data/portfolio'

export default function Education() {
  return (
    <section id="education" className="mb-24 scroll-mt-8">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {portfolioData.education.map((edu, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 text-xl overflow-hidden">
              {typeof edu.logo === 'string' && edu.logo.startsWith('/') ? (
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              ) : (
                edu.logo
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
              <p className="text-gray-400 mb-2">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

