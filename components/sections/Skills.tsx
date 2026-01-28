import { portfolioData } from '@/data/portfolio'

const skillCategories = [
  { title: 'Languages', skills: portfolioData.skills.languages, icon: '💻' },
  { title: 'AI/ML', skills: portfolioData.skills.ai, icon: '🤖' },
  { title: 'Cloud & DevOps', skills: portfolioData.skills.cloud, icon: '☁️' },
  { title: 'Version Control', skills: portfolioData.skills.versionControl, icon: '📦' },
  { title: 'Frameworks & Libraries', skills: portfolioData.skills.frameworks, icon: '⚛️' },
  { title: 'Automation', skills: portfolioData.skills.automation, icon: '⚙️' },
  { title: 'Databases', skills: portfolioData.skills.databases, icon: '🗄️' },
  { title: 'Design & Tools', skills: portfolioData.skills.design, icon: '🎨' }
]

export default function Skills() {
  return (
    <section id="skills" className="mb-24 scroll-mt-8">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-gray-900/70 flex items-center justify-center text-lg flex-shrink-0">
              <span aria-hidden="true">{category.icon}</span>
            </div>
            <div className="min-w-0 space-y-1">
              <h3 className="text-base font-semibold">{category.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {category.skills.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

