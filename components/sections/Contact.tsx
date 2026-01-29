import { portfolioData } from '@/data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="mb-24 scroll-mt-8">
      <div className="inline-block px-3 py-1 bg-white border border-black rounded mb-4">
        <span className="text-sm font-medium text-black">Contact</span>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-black">Get in Touch</h2>
      <p className="text-gray-600 leading-relaxed">
        {portfolioData.contact.message.split(portfolioData.contact.email).map((part, index, array) => (
          <span key={index}>
            {part}
            {index < array.length - 1 && (
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-blue-600 hover:text-blue-700 underline">
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

