import { RiComputerLine, RiCodeBoxFill } from "react-icons/ri";
import { MdAppSettingsAlt } from "react-icons/md";
import {SiGoogleoptimize} from "react-icons/si";
import { BsCircleFill } from "react-icons/bs";
import { IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: RiCodeBoxFill,
    title: "Code  Testing",
    about:
      "<b>Testing</b> the site for <b>usability</b> and <b>fixing</b> any <b>bugs</b>",
  },
  {
    Icon: MdAppSettingsAlt,
    title: "Production and maintenance",
    about:
      "Production and maintenance of websites and web application user interfaces",
  },
  {
    Icon: SiGoogleoptimize,
    title: "Looking at SEO best practices",
    about: "<b>SEO</b> best practices are a set of tasks designed to help improve a website’s search engine rankings.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "TailWind",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "MaterialUI",
    level: "90",
  },
  
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Sass",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "JQuery",
    level: "92",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "94",
  },
  {
    Icon: BsCircleFill,
    name: "NextJS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "70",
  },
];

export const projects: IProject[] = [
  { 
    name: "Linkedin Clone",
    description:
      "Build LinkedIn with React JS (Firebase + Styled Components + Redux)",
    image_path: "/images/linkedin.jpg",
    deployed_url: "https://dummy-linkedin-clone-fa74e.web.app",
    github_url: "https://github.com/FarshadJanmohammadi/Linkedin-clone",
    category: ["react","redux"],
    key_techs: ["React", "Redux", "Firebase","Styled Components"],
  },
  {
    name: "Facebook Clone",
    image_path: "/images/facebook.jpg",
    deployed_url: "https://facebook-clone-2024a.web.app",
    github_url: "https://github.com/FarshadJanmohammadi/FacebookClone-ReactJS",
    category: ["react"],
    description:
      "clone Facebook using React as well as using Context and Reducer to manage the state as well as Firebase to store information",
    key_techs: ["React", "Firebase"],
  },

  {
    name: "Portfolio",
    image_path: "/images/portfolio2.jpg",
    deployed_url: "https://farshadjanmohammadi.ir",
    github_url: "https://github.com/FarshadJanmohammadi/Portfolio",
    category: ["react","next", "redux", "tailwind"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Next",
      "Redux",
      "tailwind",
    ],
  },
  {
    name: "Store Online",
    image_path: "/images/store1.jpg",
    deployed_url: "https://quirky-mccarthy-d20e55.netlify.app",
    github_url: "https://github.com/FarshadJanmohammadi/StoreProject",
    category: ["vanilla"],
    description:
      "An online store project done to demonstrate its programming capabilities",
    key_techs: [
      "html",
      "css",
      "javascript",
    ],
  },
  {
    name: "Dove Website Design",
    image_path: "/images/dov.jpg",
    deployed_url: "https://cocky-villani-90e5be.netlify.app",
    github_url: "https://github.com/FarshadJanmohammadi/DoveWebsite",
    category: ["bootstrap","vanilla"],
    description:
      "Dove website design Responsive using HTML, CSS and Bootstrap library",
    key_techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
  },
  {
    name: "ToDo",
    image_path: "/images/todo.jpg",
    deployed_url: "https://clever-wing-633125.netlify.app",
    github_url: "https://github.com/FarshadJanmohammadi/ToDoList",
    category: ["vanilla"],
    description:
      "Made a Todo using Vinilla JavaScript and using Local Stroge To store lists that the user enters.",
    key_techs: [
      "Vanilla",
    ],
  },
  {
    name: "Tours Section",
    image_path: "/images/tours.jpg",
    deployed_url: "https://singular-kheer-d384b1.netlify.app/",
    github_url: "https://github.com/FarshadJanmohammadi/Tours-React.js",
    category: ["react"],
    description:
      "Tours Section (Mini Project) With ReactJS",
    key_techs: [
      "react",
    ],
  },
  {
    name: "Loremipsum",
    image_path: "/images/loremIpsum.jpg",
    deployed_url: "https://monumental-llama-30963e.netlify.app",
    github_url: "https://github.com/FarshadJanmohammadi/LoremIpsum-React",
    category: ["react"],
    description:
      "LoremIpsum (Mini Project) With ReactJS",
    key_techs: [
      "react",
    ],
  },
  {
    name: "ToDo List",
    image_path: "/images/ToDoList.jpg",
    deployed_url: "https://practical-tereshkova-89d32f.netlify.app",
    github_url: "https://github.com/FarshadJanmohammadi/TodoList-React",
    category: ["react"],
    description:
      "ToDo List (Mini Project) With ReactJS",
    key_techs: [
      "react",
    ],
  },
  {
    name: "Color Random Picker",
    image_path: "/images/colorpicker.jpg",
    deployed_url: "https://nifty-rosalind-3d35bc.netlify.app",
    github_url: "https://github.com/FarshadJanmohammadi/ColorRandomPicker",
    category: ["vanilla"],
    description:
      "Color random picker a project css tools using vanilla JavaScript",
    key_techs: [
      "Vanilla",
    ],
  },
  {
    name: "Reviews",
    image_path: "/images/review.jpg",
    deployed_url: "https://lucid-hodgkin-6105db.netlify.app",
    github_url: "https://github.com/FarshadJanmohammadi/Reviews",
    category: ["vanilla"],
    description:
      "Made a Reviews(mini project) using Vinilla JavaScript",
    key_techs: [
      "Vanilla",
    ],
  },
];
