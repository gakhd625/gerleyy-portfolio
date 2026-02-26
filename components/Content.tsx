'use client'

import { portfolioData } from '@/data/portfolio'
import WorkExperience from './sections/WorkExperience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Hackathons from './sections/Hackathons'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import BeyondCode from './sections/BeyondCode'

export default function Content() {
  return (
    <div className="w-full px-6 md:pl-6 md:pr-8 py-8 md:py-10 bg-white dark:bg-black text-black dark:text-white">
      {/* <Resume /> */}
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <Hackathons />
      <Certifications />
      <BeyondCode />
      <Contact />
    </div>
  )
}

