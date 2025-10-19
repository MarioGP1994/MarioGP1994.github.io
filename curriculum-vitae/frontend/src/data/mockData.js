import speech from "/assets/volunteeringDay.jpg";

// Mock CV data for full-stack developer
export const cvData = {
  personal: {
    name: "Mario Guillén Piñero",
    title: "Full-Stack Developer",
    tagline: "Building scalable web applications with modern technologies",
    email: "gpmario@gmail.com",
    github: "https://github.com/MarioGP1994",
    linkedin: "https://www.linkedin.com/in/mario-guillén-piñero",
    portfolio: "https://mariogp1994.github.io/"
  },

  about: {
    summary: "Passionate full-stack developer and teacher, recently graduated from a cross-platform development program. Specialized in Java, React, and database technologies. Strong focus on both fixing bugs and creating apps. Love solving complex problems and collaborating with cross-functional teams.",
    highlights: [
      "1 year of development experience in personal projects",
      "Currently working on a project for a charity organization",
      "Familiar with various programming languages",
      "Mentored 1 student"
    ]
  },

  "soft skills": {
    communication: {
      name: "Communication", 
      level: 90
    },
    "problem solving": {
      name: "Problem-solving",
      level: 80
    },
    adaptability: {
      name: "Adaptability",
      level: 80
    },
    "team work": {
      name: "Team Work",
      level: 85
    },
    leadership: {
      name: "Leadership",
      level: 70
    },
    "time management": {
      name: "Time Management",
      level: 85
    },
    creativity: {
      name: "Creativity",
      level: 75
    },
  },

  "hard skills": {
    frontend: [
      { name: "React", level: 75 },
      { name: "Angular", level: 70 },
      { name: "Vanilla JavaScript", level: 70 },
      { name: "TypeScript", level: 70 },
      { name: "HTML5", level: 80 },
      { name: "CSS3", level: 75 },
      { name: "Sass", level: 65},
      { name: "Bootstrap", level: 70},
      { name: "Tailwind CSS", level: 50 },
      { name: "Redux", level: 50 }
    ],
    backend: [
      { name: "Java", level: 75 },
      { name: "Spring Boot", level: 75 },
      { name: "Spring Security", level: 60},
      { name: "Node.js", level: 60 },
      { name: "Python", level: 70 },
      { name: "FastAPI", level: 60 },
      { name: "Express", level: 60 },
      { name: "ASP.NET", level: 60 },
      { name: ".NET", level: 50 },
      { name: "PHP", level: 50 },
      { name: "C++", level: 50 }
    ],
    database: [
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 75 },
      { name: "SQL Server", level: 65 },
      { name: "MongoDB", level: 65 },
    ],
    tools: [
      { name: "Git", level: 70 },
      { name: "Docker", level: 60 },
      { name: "Vite.js", level: 80 },
      { name: "Swagger", level: 80},
      { name: "Postman", level: 80},
      { name: "CI/CD", level: 70 }
    ]
  },

  experience: [
    {
      id: 1,
      company: "EducaChild",
      position: "English Teacher",
      location: "Madrid, Spain",
      duration: "September 2022 - Jule 2023",
      description: "Taught students between 5 and 15 years old, up to the B2 level",
      achievements: [
        "Implemented the EducaChild teaching method as an efective way for entry-level students",
        "Handmade useful resoures for English learning",
        "Mediated and resolved conflicts among students to promote a positive classroom environment"
      ],
      technologies: "None"
    },
    {
      id: 2,
      company: "C.E.I.P Aben Hazam",
      position: "Religion Teacher",
      location: "Leganés, Spain",
      duration: "April 2021 - May 2021",
      description: "Religion Substitute Teacher (1 week): taught students between 3 and 12 years old in religious studies",
      achievements: [
        "Planned lessons and created handmade learning resources",
        "Used formal and informal cooperative techniques to teach major word religions and promote positive human values",
        "Mediated and resolved conflicts among students to promote a positive classroom environment"
      ],
      technologies: "None"
    },
    {
      id: 3,
      company: "Nova Gades S.L.",
      position: "Learning Support Teacher",
      location: "Getafe, Spain",
      duration: "January 2020 - December 2020",
      description: "Supported students between 9 and 12 years old",
      achievements: [
        "Improved students’ understanding of key concepts through engaging and practical learning activities",
        "Taught logical reasoning and critical thinking skills through engaging problem-solving activities",
        "Mediated and resolved conflicts among students to promote a positive classroom environment"
      ],
      technologies: "None"
    },
    {
      id: 4,
      company: "Asociación Murialdo",
      position: "Social Educator",
      location: "Getafe, Spain",
      duration: "January 2020 - December 2020",
      description: "Helping students between 9 and 12 years old",
      achievements: [
        "Designed instructional activities with enrichment opportunities to develop foundational skills",
        "Promoted understanding of core concepts through hands-on activities and lessons",
        "Mediated and resolved conflicts among students to promote a positive classroom environment"
      ],
      technologies: "None"
    },
    {
      id: 5,
      company: "Freelancer",
      position: "Childminder / Live-in Au Pair",
      location: "Dublin, Ireland",
      duration: "August 2017 - Jule 2018",
      description: "Cared for a 6–7-year-old child, assisting with homework, organizing educational and leisure activities, and ensuring a safe, engaging environment",
      achievements: [
        "Self-reliant and organized, accustomed to living independently",
        "Implemented learning techniques, such as the Pomodoro Technique, to enhance his focus and stimulate diffused thinking",
        "Helped him manage stressful situations by fostering emotional awareness and encouraging reflection",
        "Served as a positive role model, demonstrating empathy, responsibility, and patience"
      ],
      technologies: "None"
    }
  ],

  projects: [
    {
      id: 1,
      name: "AGAS Project",
      description: "A calendar-based web app that allows users to schedule and manage appointments",
      technologies: ["React", "Java", "Spring Boot", "Spring Security", "PostgreSQL", "MySQL"],
      highlights: [
        "Conducted meetings with customers to understand their needs and gather requirements",
        "Responsible for the design and development of the project’s database, backend services, and frontend interface",
        "Configured and integrated the project with GitHub, enabling version control, team collaboration, and code tracking"
      ],
      link: "Coming soon",
      github: "https://github.com/MarioGP1994/AGAS-Project"
    },
    {
      id: 2,
      name: "freeCodeCamp Projects",
      description: "Minor projects to develop skills through React and Node",
      technologies: ["React", "Node"],
      highlights: [
        "Developed skills through React and Node",
        "Apply concepts previously understood",
        "Configured and integrated the project with GitHub"
      ],
      link: "https://codepen.io/MARIOGP",
      github: "https://github.com/MarioGP1994/node-express-project"
    },
  ],

  education: [
    {
      id: 1,
      institution: "Colegio La Inmaculada Padres Escolapios de Getafe",
      degree: "Vocational Training in Cross-Platform Application Development",
      duration: "September 2023 - June 2025",
      gpa: "3.28/4.0",
      honors: "None"
    },
    {
      id: 2,
      institution: "Universidad Complutense de Madrid",
      degree: "Bachelor's Degree in Education, Primary Education",
      duration: "November 2013 - June 2017",
      gpa: "3.09/4.0",
      honors: "None"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2025"
    },
    {
      id: 2,
      name: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "2025"
    },
    {
      id: 3,
      name: "BackEnd Development and APIs",
      issuer: "freeCodeCamp",
      date: "2025"
    },
    {
      id: 4,
      name: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "2025"
    },
    {
      id: 5,
      name: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2025"
    },
    {
      id: 6,
      name: "C++ Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "2025"
    },
    {
      id: 7,
      name: "C++ Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2025"
    },
    {
      id: 8,
      name: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2025"
    },
    {
      id: 9,
      name: "Curso de .NET Framework",
      issuer: "OpenWebinars",
      date: "2025"
    },
    {
      id: 10,
      name: "Curso de C# para principiantes",
      issuer: "OpenWebinars",
      date: "2025"
    },
    {
      id: 11,
      name: "Curso de C++: Introducción",
      issuer: "OpenWebinars",
      date: "2025"
    },
    {
      id: 12,
      name: "Curso de Responsive Web Design",
      issuer: "OpenWebinars",
      date: "2025"
    },
    {
      id: 13,
      name: "Fundamentos de React",
      issuer: "OpenWebinars",
      date: "2025"
    },
    {
      id: 14,
      name: "Módulo profesional de Formación y Orientación Laboral",
      issuer: "La Inmaculada Padres Escolapios de Getafe",
      date: "2025"
    },
     {
      id: 15,
      name: "Cambridge English Level 1 Certificate in ESOL International: Level B2",
      issuer: "Cambridge English Assessment",
      date: "2025"
    },
    {
      id: 16,
      name: "Ciberseguridad para microempresas y autónomos",
      issuer: "INCIBE - Instituto Nacional de Ciberseguridad",
      date: "2023"
    },
    {
      id: 17,
      name: "Declaración Eclesiástica de Competencia Académica (DECA)",
      issuer: "Instituto Internacional de Teología a Distancia",
      date: "2021"
    },
    {
      id: 18,
      name: "Manipulador de Alimentos",
      issuer: "Asonaman",
      date: "2020"
    },
    {
      id: 19,
      name: "Learning How to Learn: Powerful mental tools to help you master tough subjects",
      issuer: "Coursera",
      date: "2019"
    },
    {
      id: 20,
      name: "Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential",
      issuer: "Coursera",
      date: "2019"
    },
    {
      id: 21,
      name: "Upper Intermediate (B2)",
      issuer: "Delfin English School",
      date: "2018"
    },
  ],

  englishExamResults: [
    {
      id: 1,
      level: "Advanced (CAE)",
      "overall score": "178",
      date: "April 2023",
      score: 
        {
            "use of english": 186,
            "reading": 186,
            "writing": 173,
            "listening": 159,
            "speaking": 184
        }
    },
  ],

  volunteering: [
    {
      id: 1,
      company: "Asociación Murialdo",
      location: "Getafe, Spain",
      duration: "November 2011 - June 2017",
      type: "Education",
      role: "Social Educator",
      description: "Participated in three social projects (prevention services, summer camps, and the Three Wise Men's season), developing problem-solving, leadership, and adaptability skills. Worked with children and adolescents, often from vulnerable or unstable family backgrounds and at risk of social exclusion"
    },
    {
      id: 2,
      company: "Asociación Getafense de Alcohólicos Rehabilitados El Sur (AGAS)",
      location: "Getafe, Spain",
      duration: "April 2024 - present",
      type: "Computer Science",
      role: "Software Developer",
      description: "Currently developing a web application for appointment management to assist individuals recovering from alcohol addiction, using React for the front-end, Java (Spring Boot, microservices) for the back-end, and PostgreSQL and MySQL for the database"
    }
  ],

  reward: [
    {
      id: 1,
      recognition: "Volunteer of the year",
      issuer: "Comunidad de Madrid",
      date: "April 2016",
      image: speech,
      description: "Awarded for being one of the most outstanding volunteers on International Volunteering Day 2016, after contributing over five years to the charity organization Asociación Murialdo",
      speech: "Let's turn back the clocks to 2016. I was eager to give my speech on International Volunteer Day, sharing my perspective on the experience and encouraging young people to participate in similar projects. I believe it is crucial to dedicate time to making the world a better place, after understanding what drives it and what its needs are. I am grateful to the Murialdo charity organization for supporting me for five years and making this experience meaningful."
    }
  ]
};