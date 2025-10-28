import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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

const experiences = [
  {
    title: "UI/UX Workshop",
    company_name: "VAST CSE Department",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Attended UI/UX design workshop by Surya Narayanan K V.",
      "Learned fundamentals of user interface and user experience design.",
      "Applied design principles to create intuitive app interfaces.",
      "Gained insights into modern design tools and workflows.",
    ],
  },
  {
    title: "Web Development Bootcamp",
    company_name: "DevLabs Club, VAST",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Completed 3-day intensive web development bootcamp.",
      "Learned from Nickel Mukundan, Sarath VS, and Saurav VS.",
      "Built hands-on projects using HTML, CSS, and JavaScript.",
      "Enhanced skills in responsive web design and modern frameworks.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "MediSync",
    description:
      "A smart medicine reminder app designed for elderly individuals to manage medication schedules effectively, ensuring they never miss a dose and stay healthy.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "notifications",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Localynk",
    description:
      "Hyperlocal Services Marketplace app connecting users to local job and service opportunities, empowering communities and supporting local businesses.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "marketplace",
        color: "green-text-gradient",
      },
      {
        name: "services",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "MathGenie",
    description:
      "An AI-powered math problem solver by Adhi Stories that helps students tackle complex math problems with step-by-step explanations and learning support.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "education",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
