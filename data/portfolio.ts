import { title } from "process";

export const portfolioData = {
  name: "Gerlie",
  title: "Full-Stack Software Engineer specializing in modern web applications. I build scalable, production-ready systems with a focus on performance and reliability.",
  about: "I’m a full-stack software engineer focused on building production-ready web and application systems using Next.js, Python, and Laravel. I work across modern web apps, mobile solutions, and platform features with an emphasis on performance, maintainability, and shipping real value. Alongside my core development work, I’ve been actively exploring cloud security and AI-driven security practices, particularly how AI can enhance threat detection, automate security workflows, and support secure-by-design development. I move fast from concept to implementation, keeping development practical while steadily deepening my security and AI knowledge to build more resilient systems.",
  profileImage: "/profile/PROFILE.png",
  
  // about: [
  //   "I'm a full-stack software engineer building production-ready web and application systems with Next.js, Python, and Laravel. I've delivered and maintained modern web platforms, mobile solutions, and backend services for international clients, working across different time zones and business requirements. My work emphasizes performance, clean architecture, and maintainable code that ships real business value.",
  //   "Alongside core development, I apply security-minded practices in day-to-day engineering and continue deepening my knowledge of cloud security and AI-assisted security tooling. I'm particularly interested in how AI can support secure-by-design development through threat detection, automated security checks, and smarter infrastructure monitoring. I move quickly from concept to implementation while keeping systems scalable, reliable, and resilient."
  // ],
  
  workExperience: [
    {
      company: "ChronoStep Inc.",
      role: "Software Engineer",
      period: "April 2025 - Present",
      logo: "/company-logos/chronostep-logo.png",
      location: "Cebu City, Cebu"
    },
    {
      company: "Passerelles Numeriques Philippines",
      role: "Web Developer",
      period: "May 2025 - Aug 2025",
      logo: "/company-logos/pn-logo.png",
      location: "Philippines"
    },
    {
      company: "Freelance",
      role: "Freelance Developer",
      period: "August 2024 - Present",
      logo: "/company-logos/upwork.png",
      location: "Remote"
    },
    {
      company: "Japs Digital",
      role: "Technical Support & Sales Associate",
      period: "February 2021 - August 2023",
      logo: "/company-logos/jde.png",
      location: "Onsite"
    },
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
    languages: ["Python", "TypeScript", "JavaScript", "PHP", "C#", "C"],
    ai: ["OpenAI", "Google Gemini", "Anthropic Claude"],
    frameworks: ["React.js", "Next.js", "Node.js", "Laravel", "Flask", "Express.js"],
    // automation: ["n8n", "Make", "Zapier"],
    databases: ["MySQL", "PostgreSQL", "DynamoDB", "Supabase"],
    cloud: ["AWS", "GCP", "Firebase", "Vercel", "Netlify", "GitHub Actions", "Replit"],
    versionControl: ["Git", "GitHub", "Bitbucket"],
    design: ["Figma", "Photoshop", "Canva", "WordPress"]
  },

  projects: [
    {
      title: "LLM-Chatbot",
      date: "2026",
      description: "A Python-based AI chatbot built with Streamlit, designed to provide intelligent, context-aware conversations with a clean and professional interface. The application focuses on maintaining conversation history, customizing chatbot behavior, and delivering a user-friendly chat experience.",
      technologies: ["Python", "Streamlit", "Gemeni API", "HTML", "CSS"],
      links: {
        website: "https://e-para.vercel.app/",
        source: ""
      },
      thumbnail: "/projects/llmchatbot.png"
    },
    {
      title: "Resume Builder",
      date: "2026",
      description: "Harvard style and ATS-friendly resume builder",
      technologies: ["TypeScript", "NextJS"],
      links: {
        website: "https://resume-builder-liard-nine-41.vercel.app/",
        source: ""
      },
      thumbnail: "/projects/resumebuilder.png"
    },
    {
      title: "DailyArc",
      date: "2025",
      description: "A C#-based project tracking system designed to manage tasks, issues, and workflows in a structured backlog. The application focuses on organizing work items, tracking progress, assigning priorities, and improving team visibility throughout the development lifecycle.",
      technologies: ["C#", ".NET Framework", "CSHTML", "Javascript"],
      links: {
        website: "",
        source: ""
      },
      thumbnail: "/projects/dailyarc.png"
    },
    {
      title: "RouteWise",
      date: "2025",
      description: "Mobile Jeepney Route Guide for Cebu Commuters",
      technologies: ["Mobile", "Mapbox", "React", "Capacitor"],
      links: {
        website: "https://routewise-teal.vercel.app",
        source: ""
      },
      thumbnail: "/projects/routewise.png"
    },
    {
      title: "Numo",
      date: "2025",
      description: "Numo is a modern personal finance tracking app built with Expo and Supabase that helps users manage income and expenses with real-time visual insights. It features customizable categories, interactive analytics dashboards, secure authentication with row-level security, and an integrated AI assistant that analyzes spending patterns, provides personalized budgeting insights, and delivers smart financial recommendations directly within the app.",
      technologies: ["expo", "react native", "TypeScript", "Supabase", "Vercel"],
      links: {
        website: "https://expo.dev/accounts/bildproj/projects/numo-finance-app/builds/8d9454a9-d5bf-4fe2-8b7c-6b53d43ca804"
      },
      thumbnail: "/projects/numo2.png"
    },
    {
      title: "SafePlay",
      date: "2025",
      description: "AI-powered Chrome extension using Google Gemini LLM to perform behavioral analysis on in-game chats by monitoring chat to detect grooming, cyberbullying, and emotional abuse.",
      technologies: ["AI", "Gemini", "Javascript"],
      links: {
        website: "https://safeplay.dev",
        source: ""
      },
      thumbnail: "/projects/safeplay.png"
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
    // {
    //   title: "Dailyarc",
    //   date: "December 2025",
    //   description: "It is capable of analyzing and classifying the sentiment of text data into positive, negative, or neutral categories.",
    //   technologies: ["C#", "JavaScript", "Bootstrap", ".NET Core"],
    //   links: {
    //     source: ""
    //   },
    //   thumbnail: "/projects/dailyarc.png"
    // },
    {
      title: "PicJourni – Travel & Memory Journal",
      date: "April 2025",
      description: "PicJourni is a web app that lets users pin the places they’ve visited, capture photos, and write stories. It provides an interactive map to visualize journeys and a simple, beautiful way to relive every trip.",
      technologies: ["Firebase", "Next.js", "TypeScript", "CSS"],
      links: {
        website: "https://pic-journi.vercel.app/"
      },
      thumbnail: "/projects/picjourni.png"
    },
    {
      title: "SaApp",
      date: "2023",
      description: "A web application that generates capstone project ideas for students based on their interests and skills.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      links: {
        website: "https://capstone-generator.brylDaga-as.com",
        source: ""
      },
      thumbnail: "/projects/saapp.png"
    },
    {
      title: "Library System",
      date: "2023",
      description: "Console-Based Library Management System",
      technologies: ["C", "Visual Studio", "Console-Based"],
      links: {
        website: "https://booqed.com",
        source: ""
      },
      thumbnail: "/projects/library-system.png"
    }
  ],

  featuredProjects: [
    {
      title: "DailyArc",
      date: "2025",
      description: "A C#-based project tracking system designed to manage tasks, issues, and workflows in a structured backlog. The application focuses on organizing work items, tracking progress, assigning priorities, and improving team visibility throughout the development lifecycle.",
      technologies: ["C#", ".NET Framework", "CSHTML", "Javascript"],
      links: {
        website: "",
        source: ""
      },
      thumbnail: "/projects/dailyarc.png"
    },
    {
      title: "RouteWise",
      date: "2025",
      description: "Mobile Jeepney Route Guide for Cebu Commuters",
      technologies: ["Mobile", "Mapbox", "React Native", "Expo"],
      links: {
        website: "https://routewise-teal.vercel.app",
        source: ""
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
    },
    {
      title: "Oracle  Certified Vector AI Search Professional ",
      date: "May, 2025",
      issuer: "Issued by Coursera",
      thumbnail: "/certification/oracle-vector-ai-search.png"
    }

  ],

  beyondCode: [
    {
      title: "DOST: Innovation Technology Transfer Summit Visayas 2024",
      date: "2024",
      type: "Leadership and Innovation",
      description: "Top 10 Finalist (out of 75 teams) in the Pitch Quest – Student Category at Marco Polo Hotel, presenting an innovative technology solution to a panel of judges and industry leaders.",
      thumbnail: "/volunteer/dost.jpg",
      link: ""
    },
    {
      title: "GDG Build with AI",
      date: "2025",
      type: "Volunteer",
      description: "Contributed as a technical volunteer for GDG Cebu, assisting participants in hands-on workshops, troubleshooting, and providing support during the event.",
      thumbnail: "/volunteer/gdg.jpg",
      link: ""
    },
    {
      title: "DevCon Cyberseries",
      date: "2024",
      type: "Volunteer",
      description: "Supported school events as part of the technical team for setup, coordination, and documentation.",
      thumbnail: "/volunteer/devconcyber.jpg",
      link: ""
    },
    {
      title: "AWS Community ",
      date: "2024",
      type: "Leadership",
      description: "Organized peer sessions and contributed to initiatives that encourage women in technology.",
      thumbnail: "/volunteer/awsclub.jpg",
      link: ""
    },
    {
      title: "Passerelles Numeriques Philippines",
      date: "2025",
      type: "Volunteer",
      description: "Mentored students in web development and software engineering as part of a nonprofit organization focused on education and empowerment.",
      thumbnail: "/volunteer/pn.jpg",
      link: ""
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

