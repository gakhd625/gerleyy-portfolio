import { portfolioData } from '@/data/portfolio'
import Image from 'next/image'

export default function Hackathons() {
  return (
    <section id="hackathons" className="mb-24 scroll-mt-8">
      <div className="inline-block px-3 py-1 bg-white border border-black rounded mb-4">
        <span className="text-sm font-medium text-black">Hackathons</span>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-black">I like building things.</h2>
      <p className="text-gray-600 mb-8 leading-relaxed">
        During my time in university, I attended 3+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.
      </p>
      
      <div className="space-y-8 relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        {portfolioData.hackathons.map((hackathon, index) => (
          <div key={index} className="relative flex gap-6 pl-12">
            <div className="absolute left-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-xl z-10 overflow-hidden">
              {hackathon.logo.startsWith('/') ? (
                <Image
                  src={hackathon.logo}
                  alt={hackathon.title}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{hackathon.logo}</span>
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">{hackathon.date}</p>
              <h3 className="text-xl font-semibold mb-2 text-black">{hackathon.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{hackathon.location}</p>
              <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                {hackathon.description}
              </p>
              {hackathon.award && (
                <div className="flex items-center gap-2 text-sm">
                  <span>🏆</span>
                  <span className="text-gray-700">{hackathon.award}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

