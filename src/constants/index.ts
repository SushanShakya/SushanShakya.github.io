import type {
  TExperience,
  TNavLink,
  TProject,
  TService,
  TSocial,
  TTechnology,
  TTestimonial,
} from "../types";

import {
  android,
  bens,
  bysst,
  creator,
  django,
  fb,
  figma,
  flutter,
  flutterArchitecture,
  freelance,
  git,
  github,
  hafnia,
  ims,
  incwell,
  invicta,
  javascript,
  linkedin,
  linux,
  lmu,
  maghao,
  manoj,
  medium,
  mynewearth,
  myra,
  nazeekai,
  prasid,
  python,
  raralabs,
  reactjs,
  redux,
  rimes,
  roads,
  smartforce,
  suman,
  typescript,
  vim,
  warpedBloc,
  younginnov,
} from "../assets";


export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "socials",
    title: "Socials",
  },
];

const services: TService[] = [
  {
    title: "Flutter",
    icon: flutter,
  },
  {
    title: "React Native",
    icon: reactjs,
  },
  {
    title: "Python",
    icon: python,
  },
  {
    title: "Scripting",
    icon: creator,
  },
];

const technologies: TTechnology[] = [

  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "VIM",
    icon: vim,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    "title": "Senior Software Craftsman",
    "companyName": "MyNewEarth",
    "icon": mynewearth, // Placeholder
    "iconBg": "#F5909E", // Placeholder
    "date": "Jan 2025 - Present",
    "points": [
      "Develop a holistic platform for wellness practitioners",
      "Create standards for coding practices",
    ]
  },
  {
    "title": "Full Stack Developer Consultant",
    "companyName": "RIMES",
    "icon": rimes, // Placeholder
    "iconBg": "#fff", // Placeholder
    "date": "June 2024 - July 2025",
    "points": [
      "Led development of nationwide Decision Support System for Department of Roads, Nepal",
      "Trained 100+ Road Engineers on usage of data systems",
      "Responsible for stakeholder meetings and entire product development cycle",
    ]
  },
  {
    "title": "Software Craftsman",
    "companyName": "Rara Labs",
    "icon": raralabs, // Placeholder
    "iconBg": "#2B2B2B", // Placeholder
    "date": "August 2022 - June 2024",
    "points": [
      "Initiator of Clean Architecture and TDD practices",
      "Interviewed potential candidates for mobile development positions",
      "Researched and created a library for Bloc-like state management in React Native with scoped updates",
      "Investigated topics like reflection while researching the Go language",
      "Cleaned up messy and duplicated code in JavaScript",
      "Automated daily workflow for APK distribution",
      "Created technical content"
    ]
  },
  {
    "title": "React Native Developer",
    "companyName": "Invicta Global",
    "icon": invicta, // Placeholder
    "iconBg": "#fff", // Placeholder
    "date": "Aug 2022 - Present",
    "points": [
      "Led a team of 3 developers based in India",
      "Enhanced a project written in JavaScript to improve performance by 50%",
      "Revitalized messy and duplicated code in Javascript and migrated codebase to Typescript"
    ]
  },
  {
    "title": "Freelance Flutter Developer",
    "companyName": "Freelance Professional",
    "icon": freelance, // Placeholder
    "iconBg": "#fff", // Placeholder
    "date": "May 2020 - Present",
    "points": [
      "Developed multiple types of projects including E-commerce, Hotel Booking, CRMs",
      "Collaborated directly or indirectly with companies like Xtraviz, Longtail e-media, Hi-foods, Smartforce, YBC Cleaning, and more",
      "Managed outsourced small scale Full Stack Mobile App. Development projects"
    ]
  },
  {
    "title": "Software Engineer",
    "companyName": "Maghao",
    "icon": maghao, // Placeholder
    "iconBg": "#F1005E", // Placeholder
    "date": "May 2021 - August 2022",
    "points": [
      "Built and developed beautiful UIs in Flutter",
      "Led the core mobile app development",
      "Developed 3 apps for customers, sellers, and riders",
      "Worked with location-based systems and integrated Google Maps"
    ]
  },
  {
    "title": "Head of Mobile Applications",
    "companyName": "Lanceme Up",
    "icon": lmu, // Placeholder
    "iconBg": "#000", // Placeholder
    "date": "April 2021 - August 2022",
    "points": [
      "Handled application development for the entire company",
      "Built the mobile components of software products",
      "Handled multiple client projects simultaneously",
      "Collaborated with designers and developers to create well-crafted mobile applications",
      "Worked under extreme pressure and completed a one-month client project within 9 days"
    ]
  },
  {
    "title": "Flutter Developer",
    "companyName": "Smartforce",
    "icon": smartforce, // Placeholder
    "iconBg": "#006BFF", // Placeholder
    "date": "September 2021 - December 2021",
    "points": [
      "Responsible for project research and selecting appropriate technologies",
      "Created mobile UI based on existing designs",
      "Worked with PostgreSQL database and Algolia search index",
      "Utilized Firebase backend with Flutter frontend"
    ]
  },
  {
    "title": "Mobile Application Developer",
    "companyName": "YoungInnovations Pvt. Ltd.",
    "icon": younginnov, // Placeholder 
    "iconBg": "#fff", // Placeholder
    "date": "October 2020 - February 2021",
    "points": [
      "Researched and learned about state management with BLoC",
      "Developed a mobile application for a Grievance Collection System",
      "Automated tasks using WorkManager"
    ]
  },
  {
    "title": "Flutter Developer",
    "companyName": "E Deals Nepal",
    "icon": freelance, // Placeholder
    "iconBg": "#fff", // Placeholder 
    "date": "May 2020 - September 2020",
    "points": [
      "Modified existing software to improve performance",
      "Refactored code and used state management techniques to clean up the code",
      "Designed and created user interface and connected it to the backend",
      "Fixed bugs in the existing code"
    ]
  },
  {
    "title": "Software Engineering Intern",
    "companyName": "Incwell",
    "icon": incwell, // Placeholder 
    "iconBg": "#fff", // Placeholder
    "date": "February 2020 - May 2020",
    "points": [
      "Researched and learned about the Flutter framework",
      "Completed assigned tasks to improve problem-solving skills",
      "Redesigned an existing app with Flutter",
      "Built software for an event called Cosmo-Concepts"
    ]
  },
  {
    "title": "Technical Support",
    "companyName": "IMS",
    "icon": ims, // Placeholder 
    "iconBg": "#fff", // Placeholder
    "date": "May 2019 - Aug 2019",
    "points": [
      "Dealt Directly with Customers Regarding Database Issues",
      "Accomplished Data Backup for customers",
      "Completed Yearly Closing for Multiple Companies"
    ]
  }
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Sushan's inquisitive nature, explorative attitude, and dedication to learning make it a pleasure to work with him. His curiosity and passion for discovery are trully inspiring.",
    name: "Suman Baral",
    designation: "Project Management and Land Administration Specialist",
    company: "The World Bank",
    image: suman,
  },
  {
    testimonial:
      "He is fast, gets the quality work done but more than that, gets it done in style. He has a solid understanding of software architecture, design patterns and can produce testable units of work",
    name: "Manoj Ghimire",
    designation: "Co-founder/CEO",
    company: "Rara Labs",
    image: manoj,
  },
  {
    testimonial:
      "He's been instrumental in projects with national and international clients, consistently delivering clean code that's a breeze to work with.",
    name: "Prasid Karki",
    designation: "Senior Frontend Engineer",
    company: "Niural",
    image: prasid,
  },
  // {
  //   testimonial:
  //     "What truly sets Sushan apart is his collaborative spirit. ",
  //   name: "Ishwor Luitel",
  //   designation: "Data Analyst",
  //   company: "Therapy Focus",
  //   image: ishwor,
  // },
];

const projects: TProject[] = [
  {
    "name": "MyNewEarth",
    "description": "A holistic platform for wellness experts",
    "tags": [
      { "name": "Python", "color": "green-text-gradient" },
      { "name": "Postgres", "color": "blue-text-gradient" },
      { "name": "Flutter", "color": "green-text-gradient" },
      { "name": "AWS", "color": "blue-text-gradient" },
      { "name": "Heroku", "color": "green-text-gradient" },
    ],
    "image": mynewearth, // Placeholder
    "playStoreLink": "https://play.google.com/store/apps/details?id=com.conscialink.conscialinkapp&hl=en",
    "appStoreLink": "https://apps.apple.com/us/app/mynewearth/id6447554498"
  },
  {
    "name": "NAVIGATE DSS",
    "description": "Decision Support System built for Department of Roads, Nepal",
    "tags": [
      { "name": "Postgres", "color": "blue-text-gradient" },
      { "name": "PHP", "color": "green-text-gradient" },
      { "name": "Angular", "color": "blue-text-gradient" },
      { "name": "Python", "color": "green-text-gradient" }
    ],
    "image": roads, // Placeholder
    "sourceCodeLink": "https://navigate.dor.gov.np/",
  },
  {
    "name": "Hafnia Analytics Software",
    "description": "Analytics software used by pool partners of Hafnia (a subsidiary of BW Group) to track and analyze data.",
    "tags": [
      { "name": "Flutter", "color": "blue-text-gradient" },
      { "name": "Analytics", "color": "green-text-gradient" }
    ],
    "image": hafnia, // Placeholder
    "playStoreLink": "https://play.google.com/store/apps/details?id=com.hafnia&hl=en&gl=US",
    "appStoreLink": "https://apps.apple.com/us/app/hafnia-pool-analytics/id1621871886"
  },
  {
    "name": "[warped_bloc] Package",
    "description": "A Flutter package designed to reduce boilerplate code for BLoC state management, simplifying development and improving code readability.",
    "tags": [
      { "name": "Flutter", "color": "blue-text-gradient" },
      { "name": "BLoC", "color": "green-text-gradient" },
      { "name": "StateManagement", "color": "pink-text-gradient" }
    ],
    "image": warpedBloc, // Placeholder
    "sourceCodeLink": "https://pub.dev/packages/warped_bloc"
  },
  {
    "name": "Flutter Architecture Generator",
    "description": "A VS Code extension that helps developers generate a structured Flutter project architecture with over 1300 downloads, promoting code organization and best practices.",
    "tags": [
      { "name": "Flutter", "color": "blue-text-gradient" },
      { "name": "VSCodeExtension", "color": "purple-text-gradient" },
      { "name": "CodeGeneration", "color": "teal-text-gradient" }
    ],
    "image": flutterArchitecture, // Placeholder
    "sourceCodeLink": 'https://github.com/SushanShakya/flutter_folder_structure_generator' // Information not available
  },
  {
    "name": "Myra Mobile Banking",
    "description": "Mobile banking system developed for SACOOS (NEFSCUN Project), providing users with convenient financial services.",
    "tags": [
      { "name": "Flutter", "color": "blue-text-gradient" },
      { "name": "MobileBanking", "color": "orange-text-gradient" }
    ],
    "image": myra, // Placeholder
    "playStoreLink": "https://play.google.com/store/apps/details?id=myra.erp.app",
  },
  {
    "name": "Bysst Music Platform",
    "description": "A platform designed for musicians and artists to share their work and connect with audiences.",
    "tags": [
      { "name": "MobileApp", "color": "blue-text-gradient" },
      { "name": "Music", "color": "indigo-text-gradient" }
    ],
    "image": bysst, // Placeholder 
    "playStoreLink": "https://play.google.com/store/apps/details?id=studio.sdev.music_dist_bysstmusic",
    "appStoreLink": "https://apps.apple.com/np/app/bysst-music-distribution/id6474940090"
  },
  {
    "name": "Ben's Market App",
    "description": "App Designed for customers of Ben's Market Store in US.",
    "tags": [
      { "name": "MobileApp", "color": "blue-text-gradient" },
      { "name": "Rewards", "color": "indigo-text-gradient" },
      { "name": "Loyalty", "color": "red-text-gradient" }
    ],
    "image": bens, // Placeholder 
    "playStoreLink": "https://play.google.com/store/apps/details?id=com.bensmarket.app",
    "appStoreLink": "https://apps.apple.com/us/app/bens-market/id6446094973"
  },
  {
    "name": "Nazeekai",
    "description": "Special offer, take part in a loyalty program, earn rewards or receive coupons.",
    "tags": [
      { "name": "MobileApp", "color": "blue-text-gradient" },
      { "name": "Bluetooth", "color": "indigo-text-gradient" },
    ],
    "image": nazeekai, // Placeholder 
    "playStoreLink": "https://play.google.com/store/apps/details?id=com.starnet.najeekai",
  },
];

const socials: TSocial[] = [
  {
    name: "Github",
    icon: github,
    link: "https://github.com/SushanShakya",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sushan-shakya-8953711a6/",
  },
  {
    name: "Facebook",
    icon: fb,
    link: "https://www.facebook.com/sushaan.shakya",
  },
  {
    name: "Medium",
    icon: medium,
    link: "https://medium.com/@sushaanshakya88",
  },

]
export { experiences, projects, services, socials, technologies, testimonials };

