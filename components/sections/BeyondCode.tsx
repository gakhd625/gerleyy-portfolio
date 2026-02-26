import { portfolioData } from '@/data/portfolio'
import Image from 'next/image'

export default function BeyondCode() {
  const featuredBeyondCode = portfolioData.beyondCode.slice(0, 2)

  return (
    <section id="beyond-code" className="mb-24 scroll-mt-8">
      <div className="inline-block px-3 py-1 bg-white dark:bg-slate-800 border border-black dark:border-gray-700 rounded mb-4">
        <span className="text-sm font-medium text-black dark:text-white">Beyond Code</span>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Leadership and Volunteer Work</h2>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Here are selected highlights outside software development, from leadership roles to volunteer organizations.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {featuredBeyondCode.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="relative w-full h-48 bg-gray-100 dark:bg-slate-800">
              {item.thumbnail ? (
                item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </a>
                ) : (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">🖼️ Photo placeholder</div>
              )}
            </div>

            <div className="p-4">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-black dark:text-white">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.type} • {item.date}</p>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{item.description}</p>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-white dark:bg-slate-800 border border-black dark:border-gray-700 rounded text-sm hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors inline-flex text-black dark:text-white"
                >
                  View details
                </a>
              ) : (
                <span className="px-3 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-gray-700 rounded text-sm text-gray-500 dark:text-gray-400 inline-flex">
                  Add link later
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="/beyond-code"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm flex items-center gap-2"
        >
          VIEW my beyond code journey <span>→</span>
        </a>
      </div>
    </section>
  )
}