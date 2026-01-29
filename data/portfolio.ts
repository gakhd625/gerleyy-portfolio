export const portfolioData = {
  name: "Gerlie",
  title: "Full-Stack Software Engineer specializing in modern web applications. I build scalable, production-ready systems with a focus on performance and reliability.",
  about: "I’m a full-stack software engineer focused on building production-ready web and application systems using Next.js, Python, and Laravel. I work across modern web apps, mobile solutions, and platform features with an emphasis on performance, maintainability, and shipping real value.Alongside my core development work, I’ve been actively exploring cloud security and AI-driven security practices. I’m particularly interested in how artificial intelligence can enhance threat detection, automate security workflows, and support secure-by-design development. This includes experimenting with AI-powered security tools, generative AI for security operations, and applying security principles directly within application architecture.I move fast from concept to implementation, keeping development practical while steadily deepening my security and AI knowledge to build more resilient systems.",
  profileImage: "/profile/PROFILE.png", 
  
  workExperience: [
    {
      company: "ChronoStep Inc.",
      role: "Software Developer",
      period: "June 2025 - Present",
      logo: "/company-logos/chronostep-logo.png",
      location: "Cebu City, Cebu"
    },
    {
      company: "Passerelles Numeriques Philippines",
      role: "Web Developer",
      period: "January 2025 - Aug 2025",
      logo: "/company-logos/pn-logo.png",
      location: "Onsite - Cebu City, PH"
    },
    {
      company: "Freelance",
      role: "Freelance Developer",
      period: "August 2024 - Present",
      logo: "/company-logos/upwork.png",
      location: "Remote"
    },
    // {
    //   company: "Bilis Delivery",
    //   role: "Lead Full Stack Developer",
    //   period: "April 2024 - December 2025",
    //   logo: "🚚",
    //   location: "Remote"
    // },
    // {
    //   company: "Develop Kreativity",
    //   role: "Co-Founder & Chief Technology Officer",
    //   period: "November 2023 - December 2025",
    //   logo: "💼",
    //   location: "Remote"
    // },
    // {
    //   company: "University of Southern Philippines Foundation",
    //   role: "Full Stack Developer",
    //   period: "July 2023 - July 2026",
    //   logo: "🎓",
    //   location: "Cebu City, PH"
    // },
    // {
    //   company: "MyToolz",
    //   role: "Back End Developer",
    //   period: "July 2021 - December 2021",
    //   logo: "🔧",
    //   location: "Remote"
    // }
  ],

  education: [
    {
      institution: "University of San Jose - Recoletos",
      degree: "Degree in Computer Technology Specialization in Software Development",
      period: "2022 - 2026",
      logo: "/school-logos/usjr.jpg"
    },
    {
      institution: "Valencia Technical Vocational High School",
      degree: "Science, Technology, Engineering, and Mathematics (STEM)",
      period: "2021 - 2023",
      logo: "/school-logos/vtvhs.jpg"
    }
  ],

  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "PHP"],
    ai: ["OpenAI", "Google Gemini", "Anthropic Claude", "Hugging Face Transformers", "Pinecone", "Neo4j", "Azure Document Intelligence"],
    frameworks: ["React.js", "Next.js", "Node.js", "Laravel", "CodeIgniter", "LangChain", "LangGraph", "LangSmith", "Vue.js", "Express.js"],
    automation: ["n8n", "Make", "Zapier"],
    databases: ["MySQL", "PostgreSQL", "DynamoDB", "Supabase", "Redis"],
    cloud: ["AWS", "GCP", "Firebase", "Vercel", "Netlify", "GitHub Actions", "CircleCI", "Serverless Framework", "Digital Ocean", "Replit", "cPanel"],
    versionControl: ["Git", "GitHub", "Bitbucket"],
    design: ["Figma", "Photoshop", "Canva", "WordPress", "Adobe Creative Suite"]
  },

  projects: [
    {
      title: "RouteWise",
      date: "April 2025",
      description: "Mobile Jeepney Route Guide for Cebu Commuters",
      technologies: ["Next.js", "TypeScript", "Capacitor", "Mapbox"],
      links: {
        website: "https://routewise.com",
        source: "https://github.com/routewise"
      },
      thumbnail: "/projects/routewise.png"
    },
    {
      title: "PNHMS",
      date: "August 2025 - October 2025",
      description: "A web-based accounting and financial dashboard system for Passerelles Numeriques Philippines designed to automate manual financial processes for Passerelles Numériques Philippines. It improves accuracy, efficiency, and financial visibility through centralized data management and real-time dashboards.",
      technologies: ["Bootstrap", "JavaScript", "Laravel", "MySQL", "PHP"],
      links: {
        website: "https://pnhms.com"
      },
      thumbnail: "/projects/PNPHMS.png"
    },
    {
      title: "Dailyarc",
      date: "December 2025",
      description: "It is capable of analyzing and classifying the sentiment of text data into positive, negative, or neutral categories.",
      technologies: ["C#", "JavaScript", "Bootstrap", ".NET Core"],
      links: {
        source: "https://github.com/sentiai"
      },
      thumbnail: "/projects/dailyarc.png"
    },
    {
      title: "PicJourni – Travel & Memory Journal",
      date: "April 2025",
      description: "PicJourni is a web app that lets users pin the places they’ve visited, capture photos, and write stories. It provides an interactive map to visualize journeys and a simple, beautiful way to relive every trip.",
      technologies: ["Firebase", "Next.js", "TypeScript", "CSS"],
      links: {
        website: "https://pic-journi.vercel.app/"
      },
      thumbnail: "/projects/picjourni.png"
    }
  ],

  hackathons: [
    {
      title: "National AI Student Challenge 2025- AWS Regional LLM League",
      date: "March 29, 2025",
      location: "Online/Singapore",
      description: "Participated as one of the student innovators representing the Philippines in the National AI Student Challenge 2025, specifically in the AWS Regional LLM League. The competition brought together aspiring AI practitioners to explore cutting-edge applications of large language models (LLMs). ",
      award: "",
      logo: "/hackathons-logo/ai-singapore.png"
    },
    {
      title: "CodeRED Hackathon",
      date: "May 24-25, 2025",
      location: "Cebu City, PH",
      description: "AI-powered Chrome Extension that protects children in online games by monitoring real-time chat to detect grooming, cyberbullying, and emotional abuse.",
      award: "2nd Place / Most Promising Innovation",
      logo: "/hackathons-logo/bidlisisw.png"
    },
    {
      title: "DOST: Innovation Technology Transfer Summit Visayas 2024",
      date: "December 3, 2024",
      location: "Marco Polo Hotel, Cebu City, PH",
      description: "e-PARA is a Cebu-developed digital commuting solution designed to improve daily public transportation by reducing uncertainty in waiting times, routes, and traffic conditions. Built with local commuters and drivers in mind, it leverages technology to optimize jeepney and bus travel, making urban mobility in Cebu.",
      award: "TOP 10 Finalist (out of 72 teams)",
      logo: "/hackathons-logo/DOST.jpg"
    }
  ],

  certifications: [
    {
      title: "AWS CERTIFIED CLOUD PRACTITIONER",
      date: "January 14, 2025",
      issuer: "Issued by Amazon Web Services",
      thumbnail: "/certification/AWS.jpg"
    },
    {
      title: "Oracle Certified Generative AI Professional",
      date: "June 23th, 2024",
      issuer: "Issued by Oracle",
      thumbnail: "/certification/oracle-genai.jpg"
    },
    {
      title: "Google Certified Cybersecurity Professional",
      date: "November, 2024",
      issuer: "Issued by Coursera",
      thumbnail: "/certification/google-cybersecurity.png"
    }

  ],

  contact: {
    email: "gerlieannkatherine.dagaas@gmail.com",
    message: "Want to chat? Just shoot me an email at gerlieannkatherine.dagaas@gmail.com and I'll respond whenever I can. I will ignore all soliciting."
  },

  social: {
    github: "https://github.com/gakhd625",
    linkedin: "https://www.linkedin.com/in/gerlie-ann-daga-as-326554305/",
    twitter: "https://twitter.com/gakhd625",
    instagram: "https://instagram.com/gakhd625",
    tiktok: "https://tiktok.com/@gakhd625"
  }
}

