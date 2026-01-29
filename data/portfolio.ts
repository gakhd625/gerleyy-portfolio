export const portfolioData = {
  name: "Gerlie",
  title: "AI Engineer specializing in multi-agent systems and AI automation. I build scalable AI platforms that deliver measurable impact.",
  about: "I specialize in building production AI systems that solve real business problems at scale. My work focuses on multi-agent architectures, AI automation, and serverless infrastructure that consistently delivers double-digit efficiency gains and cost reductions. I've led teams shipping high-uptime platforms handling thousands of daily transactions, and built autonomous AI agents that resolve the majority of tasks without human intervention. I move fast from concept to production, prioritizing measurable impact over complexity.",
  profileImage: "/profile.jpg", // You'll need to add this image
  
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
      logo: "T",
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
      period: "2020 - 2022",
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
      title: "ThinkOfATitle",
      date: "April 2025",
      description: "ThinkOfATitle is an AI-powered tool that helps you generate creative and professional titles for academic papers, dissertations, theses, and research documents. It leverages Google's Gemini 2.0...",
      technologies: ["Next.js", "TypeScript", "Gemini"],
      links: {
        website: "https://thinkofatitle.com",
        source: "https://github.com/thinkofatitle"
      },
      thumbnail: "/thinkofatitle.jpg"
    },
    {
      title: "Bilis Delivery",
      date: "June 2024 - Present",
      description: "Bilis Delivery is a logistics service that focuses on fast and efficient delivery of various items to your doorstep. This project is built with Laravel and Flutter, providing a web and android application for the...",
      technologies: ["Flutter", "Dart", "Laravel", "MySQL", "Firebase"],
      links: {
        website: "https://bilisdelivery.com"
      },
      thumbnail: "/bilis.jpg"
    },
    {
      title: "SentiAI",
      date: "April 2024",
      description: "It is capable of analyzing and classifying the sentiment of text data into positive, negative, or neutral categories.",
      technologies: ["Python", "JavaScript", "HTML", "CSS"],
      links: {
        source: "https://github.com/sentiai"
      },
      thumbnail: "/sentiai.jpg"
    },
    {
      title: "Lyons Global",
      date: "February 2024",
      description: "Lyons Global is the official website of Lyons Global™. The website is built with WordPress and features a custom theme, custom post types, and custom fields. Our team at Develop Kreativity redesigned the...",
      technologies: ["WordPress"],
      links: {
        website: "https://lyonsglobal.com"
      },
      thumbnail: "/lyons.jpg"
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
      date: "April 30th, 2025",
      issuer: "Issued by Coursera",
      thumbnail: "/google-cert.jpg"
    }
  ],

  contact: {
    email: "dna.chavez@outlook.com",
    message: "Want to chat? Just shoot me an email at dna.chavez@outlook.com and I'll respond whenever I can. I will ignore all soliciting."
  },

  social: {
    github: "https://github.com/dnachavez",
    linkedin: "https://linkedin.com/in/dnachavez",
    twitter: "https://twitter.com/dnachavez",
    instagram: "https://instagram.com/dnachavez",
    tiktok: "https://tiktok.com/@dnachavez"
  }
}

