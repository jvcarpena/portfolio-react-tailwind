export const profile = {
  name: "JV Carpena",
  fullName: "Jose Victor Carpena",
  roles: ["Python Developer", "Backend Developer", "Web Developer"],
  tagline:
    "I build efficient, reliable web applications and turn real-world problems into clean, maintainable software.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/jvcarpena", icon: "/icons/github.svg" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jose-victor-carpena-02637a2a3/",
    icon: "/icons/linkedin.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/jv.carpena.7",
    icon: "/icons/fb.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/carpena.jv/?next=%2F&hl=en",
    icon: "/icons/ig.svg",
  },
];

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "TaskFlow",
    img: "/images/to-do-app.jpg",
    description:
      "A web app for managing daily tasks, with a clean interface that helps you stay on top of what matters.",
    href: "https://github.com/jvcarpena/TaskFlow-Website",
    stack: ["Flask", "Bootstrap", "SQLite", "Python", "REST API"],
  },
  {
    title: "Top 10 Movies",
    img: "/images/top-movies.jpg",
    description:
      "A Flask movie-database app: add, edit, view and delete movies in a ranked list.",
    href: "https://github.com/jvcarpena/Top-Movies-Website",
    stack: ["Flask", "Bootstrap", "SQLite", "Python", "REST API"],
  },
  {
    title: "Blog Website",
    img: "/images/blog-website.jpg",
    description:
      "A blogging platform for sharing ideas and stories, with full CRUD to create, edit and manage posts.",
    href: "https://github.com/jvcarpena/Blog-Website",
    stack: ["Flask", "Bootstrap", "SQLite", "Python", "REST API"],
  },
  {
    title: "Coffee Shops Album",
    img: "/images/cafe-web.jpg",
    description:
      "A curated album of coffee shops in Calamba City, capturing their ambiance and offerings.",
    href: "https://github.com/jvcarpena/Coffee-Shops-Album",
    stack: ["Flask", "Bootstrap", "SQLite", "Python"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "JavaScript", icon: "/icons/js.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
    ],
  },
  {
    title: "Frameworks & UI",
    items: [
      { name: "Flask", icon: "/icons/flask.svg" },
      { name: "Django", icon: "/icons/django.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Tailwind", icon: "/icons/tailwind.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    ],
  },
  {
    title: "Data & Tools",
    items: [
      { name: "PostgreSQL", icon: "/icons/postgre.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
    ],
  },
];

export const about = [
  "I'm a computer engineering graduate and web developer with experience building dynamic, scalable web applications. My work spans Python (Flask, Django), JavaScript (React) and databases like PostgreSQL.",
  "I love turning ideas into functional, user-friendly applications while prioritizing clean, maintainable code. Right now I'm focused on strengthening my backend skills and exploring cloud technologies.",
];

export const FORMSPREE_URL = "https://formspree.io/f/mbldverl";
