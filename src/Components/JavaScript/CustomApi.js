import { CgWebsite } from "react-icons/cg";
import { TbDeviceTabletStar } from "react-icons/tb";
import { LuShoppingBag } from "react-icons/lu";
import { AiFillBug } from "react-icons/ai";

// myskills svgs
import html_svg from "../Photos/Projects_imgs/html.svg";
import css_svg from "../Photos/Projects_imgs/css.svg";
import tailwind_svg from "../Photos/Projects_imgs/tailwindcss.svg";
import javascript_svg from "../Photos/Projects_imgs/js.svg";
import reactjs_svg from "../Photos/Projects_imgs/reactjs.svg";
import php_svg from "../Photos/Projects_imgs/php.svg";
import mysql_svg from "../Photos/Projects_imgs/mysql.svg";
import npm_svg from "../Photos/Projects_imgs/npm.svg";
import git_svg from "../Photos/Projects_imgs/git.svg";
import github_svg from "../Photos/Projects_imgs/github.svg";
//Projects images.

import iflix_img from "../Photos/Projects_imgs/iflix.jpg";
import news_website_img from "../Photos/Projects_imgs/news.webp";
import e_commerce_img from "../Photos/Projects_imgs/ecommerce.jpg";
import hangman_img from "../Photos/Projects_imgs/hangman_game.jpg";
import calculator_img from "../Photos/Projects_imgs/calculator.jpg";
import quiz_img from "../Photos/Projects_imgs/quiz app.jpg";
import qr_img from "../Photos/Projects_imgs/QR code.webp";
import randomPass_img from "../Photos/Projects_imgs/random password.jpg";
import english_dic_img from "../Photos/Projects_imgs/english_dictionary.jpg";
import search_github_img from "../Photos/Projects_imgs/search github.jpg";
import todo_img from "../Photos/Projects_imgs/todo website.jpg";
import weather_img from "../Photos/Projects_imgs/weather app.jpg";
import bg_generator from "../Photos/Projects_imgs/background_generator.jpg";
import crypto_img from "../Photos/Projects_imgs/crypto.png";
const serviceData = [
  {
    sno: "01",
    title: "Frontend Development",
    description:
      "I offer frontend development services in ReactJS with great frontend UIs and a strong focus on user experience.",
    sericon: <CgWebsite className="service_icon" />,
  },
  {
    sno: "02",
    title: "Responsive Web Design",
    description:
      "Ensure that websites are optimized for various devices and screen sizes, providing a seamless experience across desktops, tablets, and mobile devices.",
    sericon: <TbDeviceTabletStar className="service_icon" />,
  },
  {
    sno: "03",
    title: "E-Commerce Web Development",
    description:
      "Design and develop e-commerce websites with a focus on user-friendly interfaces, secure payment gateways, and seamless shopping experiences.",
    sericon: <LuShoppingBag className="service_icon" />,
  },
  {
    sno: "04",
    title: "Bug Fixing",
    description:
      "Identify and resolve bugs, glitches, and performance issues in existing websites, ensuring a smooth and error-free user experience.",
    sericon: <AiFillBug className="service_icon" />,
  },
];

//Projects Section!...

const projects = [
  //React.js Projects.
  {
    pro_title: "iFlix Movies",
    pro_img: iflix_img,
    about:
      "iFlix is a movie website which show real time movie and web series data.",
    demo: "https://hassanjavaid1.github.io/reactmovieapp/",
    tech: "ReactJS",
  },
  {
    pro_title: "E-Commerce Website",
    pro_img: e_commerce_img,
    about: "E-Commerce website with a lots of features.",
    demo: "https://hassanjavaid1.github.io/React_BIGCOMMERCE/",
    tech: "ReactJS",
  },
  {
    pro_title: "News Website",
    pro_img: news_website_img,
    about: "News website which show real time news across the world.",
    demo: "https://hassanjavaid1.github.io/React-News-App/",
    tech: "ReactJS",
  },
  {
    pro_title: "Cryptocurrency Website",
    pro_img: crypto_img,
    about: "A Cryptocurrency website which show real time crypto conditions.",
    demo: "https://hassanjavaid1.github.io/Cryptocurrency-App/",
    tech: "ReactJS",
  },
  {
    pro_title: "Weather forecasting.",
    pro_img: weather_img,
    about:
      "A real time weather forecasting website which show every single place weather current situations.",
    demo: "https://hassanjavaid1.github.io/ReactWeatherApp/",
    tech: "ReactJS",
  },
  {
    pro_title: "Search Github.",
    pro_img: search_github_img,
    about:
      "Explore All Github profiles with this website just by searching what you are looking for.",
    demo: "https://hassanjavaid1.github.io/Search_Github_Users/",
    tech: "ReactJS",
  },
  {
    pro_title: "Simple Calculator.",
    pro_img: calculator_img,
    about: "A simple calculator which you can use for basic math calculations.",
    demo: "https://hassanjavaid1.github.io/React_Calculator/",
    tech: "ReactJS",
  },

  // Javascript projects.
  {
    pro_title: "Hangman Game!",
    pro_img: hangman_img,
    about:
      "A hangman game which you can play in your free time either on computer or phone.",
    demo: "https://hassanjavaid1.github.io/Hangman-game/",
    tech: "JavaScript",
  },
  {
    pro_title: "QR Code Generator!",
    pro_img: qr_img,
    about:
      "Real time QR Code Generator which you can use anywhere even on your mobile to scan the code.",
    demo: "https://hassanjavaid1.github.io/QR-Code-Generator/",
    tech: "JavaScript",
  },
  {
    pro_title: "To-Do Web App.",
    pro_img: todo_img,
    about: "A todo webapp which you can use for your daily tasks.",
    demo: "https://hassanjavaid1.github.io/To-Do-List/",
    tech: "JavaScript",
  },
  {
    pro_title: "English Dictionary",
    pro_img: english_dic_img,
    about:
      "English Dictionary for learner with a lots of features like voice pronunciation and word full detail.",
    demo: "https://hassanjavaid1.github.io/JavaScript-English_Dictionary/",
    tech: "JavaScript",
  },
  {
    pro_title: "Quiz Website!",
    pro_img: quiz_img,
    about: "A Quiz website for testing your knowledge about the world.",
    demo: "https://hassanjavaid1.github.io/Quiz-App/",
    tech: "JavaScript",
  },
  {
    pro_title: "Random Password Generator!",
    pro_img: randomPass_img,
    about:
      "RPG You can use it while creating your social accounts with strong password for security.",
    demo: "https://hassanjavaid1.github.io/Random-Passwords-Generator-/",
    tech: "JavaScript",
  },
  {
    pro_title: "Background Generator!",
    pro_img: bg_generator,
    about: "Generate Beautiful Background for your websites in RGB.",
    demo: "https://hassanjavaid1.github.io/Background_Generator/",
    tech: "JavaScript",
  }
];

//MY Resume.

const resumeExperience = [
  {
    workYear: "2024-Present",
    role: "Frontend Web Developer",
    location: "Karachi Pakistan",
  },
  {
    workYear: "2024 Jan - Feb 2024",
    role: "Frontend Developer Intern",
    location: "India Remote",
  },
  {
    workYear: "2023 April - Jan 2024",
    role: "Freelance Developer",
    location: "Karachi Pakistan",
  },
];
const Education = [
  {
    eduYear: "2023 - Present",
    degree: "Intermediate of Computer Science!",
    location: "Ziauddin College",
  },
  {
    eduYear: "2023 - 2024",
    degree: "Frontend Web Developer",
    location: "AdamJee Coaching Center",
  },
  {
    eduYear: "2012 - 2022",
    degree: "Matriculation",
    location: "KPK Board Abbotabad",
  },
];

//Myskills

const mySkills = [
  {
    tech_img: html_svg,
    level: "95%",
    name: "HTML",
    svg_title: "HTML3",
  },
  {
    tech_img: css_svg,
    level: "95%",
    name: "CSS",
    svg_title: "CSS3",
  },
  {
    tech_img: tailwind_svg,
    level: "90%",
    name: "Tailwind CSS",
    svg_title: "Tailwind CSS",
  },
  {
    tech_img: javascript_svg,
    level: "78%",
    name: "JavaScript",
    svg_title: "JavaScript",
  },
  {
    tech_img: reactjs_svg,
    level: "85%",
    name: "ReactJS",
    svg_title: "ReactJS",
  },
  // {
  //   tech_img:php_svg,
  //   level:'50%',
  //   name:'PHP',
  //   svg_title:'PHP',
  // },
  // {
  //   tech_img:mysql_svg,
  //   level:'50%',
  //   name:'MySQL',
  //   svg_title:'MySQL Database.',
  // },
  {
    tech_img: npm_svg,
    level: "90%",
    name: "NPM",
    svg_title: "NPM",
  },
  {
    tech_img: git_svg,
    level: "90%",
    name: "Git",
    svg_title: "Git",
  },
  {
    tech_img: github_svg,
    level: "90%",
    name: "Github",
    svg_title: "Github",
  },
];
export { serviceData, projects, resumeExperience, Education, mySkills };
