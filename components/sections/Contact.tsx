import { portfolioData } from '@/data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="mb-24 scroll-mt-8">
      <div className="inline-block px-3 py-1 bg-black border border-white rounded mb-4">
        <span className="text-sm font-medium">Contact</span>
      </div>
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-gray-400 leading-relaxed">
        {portfolioData.contact.message.split(portfolioData.contact.email).map((part, index, array) => (
          <span key={index}>
            {part}
            {index < array.length - 1 && (
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-blue-400 hover:text-blue-300 underline"
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

