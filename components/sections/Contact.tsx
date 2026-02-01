import { portfolioData } from '@/data/portfolio'


export default function Contact() {
  return (
    <section id="contact" className="mb-24 scroll-mt-8">
      <div className="inline-block px-3 py-1 bg-white dark:bg-slate-800 border border-black dark:border-gray-700 rounded mb-4">
        <span className="text-sm font-medium text-black dark:text-white">Contact</span>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {portfolioData.contact.message.split(portfolioData.contact.email).map((part, index, array) => (
          <span key={index}>
            {part}
            {index < array.length - 1 && (
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline"
              >
                {portfolioData.contact.email}
              </a>
            )}
          </span>
        ))}
      </p>
    </section>
  )
}

