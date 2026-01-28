import { portfolioData } from '@/data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="mb-24 scroll-mt-8">
      <div className="inline-block px-3 py-1 bg-black border border-white rounded mb-4">
        <span className="text-sm font-medium">Certifications</span>
      </div>
      <h2 className="text-3xl font-bold mb-4">Professional credentials</h2>
      <p className="text-gray-400 mb-8 leading-relaxed">
        I continuously invest in professional development to stay current with industry best practices and emerging technologies. These certifications validate my expertise and commitment to excellence.
      </p>
      
      <div className="space-y-6">
        {portfolioData.certifications.map((cert, index) => (
          <div
            key={index}
            className="flex gap-6 p-4 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <div className="w-24 h-24 rounded bg-gray-800 flex-shrink-0 flex items-center justify-center">
              <span className="text-2xl">📜</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{cert.date}</p>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

