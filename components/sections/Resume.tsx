export default function Resume() {
  return (
    <section id="resume" className="mb-24 scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <div className="bg-gray-900 rounded-lg p-8 min-h-[600px] flex items-center justify-center">
          <div className="text-center text-gray-500">
            <p className="mb-4">PDF Resume Viewer</p>
            <p className="text-sm">Embed your resume PDF here or link to download</p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-white hover:text-gray-300 underline"
            >
              View Resume PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

