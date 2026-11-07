/**
 * ALL WEBSITE CONTENT LIVES IN THIS FILE.
 */

export interface ImageSlotData {
  src: string | null;
  alt: string;
  label: string;
  initials?: string;
  objectFit: "cover" | "contain";
  objectPosition: string;
}

export interface Project {
  title: string;
  status: string;
  description: string;
  image: ImageSlotData;
}

export interface Honor {
  title: string;
  period: string;
}

export const profile = {
  fullName: "Queenie Jill D. Sumalinog",
  firstName: "Queenie",
  initials: "QS",
  title: "Information Technology Student / Aspiring IT Professional",
  level: "Fourth-year BSIT student",
  school: "Davao del Norte State College",
  locationPublic: "San Vicente, Panabo City, Philippines",
  locationFull: "Purok 5, San Vicente, Panabo City, Philippines",
  email: "queeniejillsumalinog@gmail.com",
  phone: "09919690857",
  photo: {
    src: "/images/profile.jpeg",
    alt: "Portrait of Queenie Jill D. Sumalinog",
    label: "Profile photo",
    initials: "QS",
    objectFit: "cover",
    objectPosition: "center bottom",
  } as ImageSlotData,
};

export const intro =
  "Good day! My name is Queenie Jill D. Sumalinog, a Bachelor of Science in Information Technology student. I am a responsible and hardworking person who is always willing to learn new things, improve my skills, and gain new experiences. I enjoy exploring technology and applying what I learn to different projects and activities.";

export const careerObjective =
  "To apply my knowledge and skills in Information Technology, gain practical experience, and continue learning new technologies. I aim to improve my abilities, contribute to the organization, and grow professionally while building a successful career in the IT field.";

export const personalDescription =
  "I am a hardworking, responsible, and willing-to-learn person. I can work independently and with a team. I am always open to new experiences and opportunities to improve my skills and knowledge.";

export const careerInterests = [
  "Web development",
  "Software development",
  "Database management",
  "Exploring new technologies",
  "Professional growth in IT",
];

export const strengths = [
  "Hardworking",
  "Responsible",
  "Adaptable",
  "Organized",
  "Team Player",
  "Willing to Learn",
];

export const basicInfo = [
  { label: "Location", value: profile.locationPublic },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "Level", value: `${profile.level}, ${profile.school}` },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: profile.school,
  level: "Fourth Year",
  honors: [
    { title: "Second Honor", period: "1st Semester, Year 2021–2024" },
    { title: "Second Honor", period: "2nd Semester, Year 2024–2025" },
    { title: "Second Honor", period: "1st Semester, Year 2026–2027" },
  ] as Honor[],
};

export const skills = [
  { title: "Problem Solving", note: "Working through challenges in academic projects." },
  { title: "Communication", note: "Sharing ideas clearly with classmates and teammates." },
  { title: "Teamwork", note: "Comfortable working independently and with a team." },
  { title: "Adaptability & Organization", note: "Staying flexible and keeping work in order." },
  { title: "Willingness to Learn", note: "Open to new experiences and new technologies." },
];

export const itInterestsNote =
  "I am still growing in IT, with interests in web development, software development and database management. I am learning through my studies and projects.";

export const portfolioTech = {
  heading: "Portfolio tech stack",
  note: "Technologies used to build this website only.",
  items: ["React", "TypeScript", "Vite", "CSS", "GitHub", "Vercel"],
};

export const projects: Project[] = [
  {
    title:
      "Deep Learning and GIS-Based Coral Reef Monitoring and Coverage Analysis Using Underwater Image Processing",
    status: "Ongoing Capstone",
    description:
      "An ongoing capstone project that aims to develop a web-based system for detecting and classifying hard coral, soft coral, and other substrates from underwater images, with hard coral coverage analysis and GIS-based mapping of surveyed reef locations.",
    image: {
      src: "images/coral-project.jpeg",
      alt: "Preview of the coral reef monitoring capstone project",
      label: "Coral reef capstone preview",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
  {
    title: "Prime Venture",
    status: "Academic project",
    description:
      "A real estate website designed to help users find houses and boarding houses for rent or purchase, with an emphasis on finding suitable locations, including potentially lower-flood-risk areas.",
    image: {
      src: "images/prime-venture.jpeg",
      alt: "Preview of the Prime Venture real estate website",
      label: "Prime Venture preview",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
];


export const achievements = [
  {
    kind: "Certification",
    title: "NC II Passer, Computer Systems Servicing (CSS)",
    detail: "2023",
  },
  {
    kind: "Competition",
    title: "Top 16 Finalist, “Venture Prime”",
    detail: "Technopreneurship competition",
  },
  {
    kind: "Academic honors",
    title: "Second Honor",
    detail: "Three listed terms.",
  },
];

export const experienceHeading = "Academic & Project Experience";
export const experienceNote =
  "Academic and competition experience from my studies. No paid employment or internship is listed here.";

export const experience = [
  {
    title: "Coral reef monitoring capstone project",
    tag: "Ongoing",
    detail:
      "Working on a web-based system that aims to detect and classify coral and other substrates from underwater images and map surveyed reef locations.",
  },
  {
    title: "Prime Venture website academic project",
    tag: "Academic project",
    detail:
      "A real estate website for finding houses and boarding houses for rent or purchase.",
  },
  {
    title: "Top 16 finalist, Technopreneurship competition",
    tag: "Recognition",
    detail: "Recognized as a Top 16 finalist for “Venture Prime”.",
  },
];

export const social = {
  github: {
    label: "GitHub",
    handle: "queenie307",
    href: "https://github.com/queenie307/",
  },

  facebook: { label: "Facebook", handle: "Queenie Jill D. Sumalinog" },
  linkedin: { 
    label: "LinkedIn",    
    handle: "Queenie Jill D. Sumalinog",
    href: "https://www.linkedin.com/in/queenie-jill-sumalinog-a33b50449/", },
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "connect", label: "Connect" },
];
