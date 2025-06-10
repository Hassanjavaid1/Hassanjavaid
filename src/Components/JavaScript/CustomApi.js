//Projects images.

import beluga from "../Photos/projectImgs/Beluga.png";
import vibe from "../Photos/projectImgs/Vibe.png";
import stockOrbit from "../Photos/projectImgs/stockOrbit.jpeg";
import Bigcommerce from "../Photos/projectImgs/Bigcommerce.png";
import linkify from "../Photos/projectImgs/linkify.jpg";
import javascript_basic from "../Photos/projectImgs/javascript_basic.png";
import hackerRank_logo from "../Photos/projectImgs/hackerRank_logo.png";
import freeCodeCamp_logo from "../Photos/projectImgs/freeCodeCamp_logo.png";
import cbsPak_logo from "../Photos/projectImgs/cbsPak_logo.png";
import frontend_Internship_completion from "../Photos/projectImgs/frontend_internship_completion.jpg";
import frontendReactJS from "../Photos/projectImgs/frontendReactJS.jpg";
//Projects Section!...

const projects = [
  {
    pro_title: "Beluga Blog",
    pro_img: beluga,
    about:
      "A Full-Stack blog web application with Headless CMS using NextJS and Sanity.",
    demo: "https://beluga-blog.vercel.app",
  },
  {
    pro_title: "Vibe",
    pro_img: vibe,
    about:
      "A Full-stack PWA music listening application using NextJS, MySQL, and Cloudinary.",
    demo: "https://vibe-next.vercel.app",
  },
  {
    pro_title: "BIGCOMMERCE",
    pro_img: Bigcommerce,
    about:
      "An e-commerce site with all e-commerce features and API integration using ReactJS.",
    demo: "https://hassanjavaid1.github.io/BIGCOMMERCE",
  },
  {
    pro_title: "Linkify",
    pro_img: linkify,
    about:
      "A Full-stack URL shortener using NodeJS, ExpressJS, MySQL and ReactJS.",
    demo: "https://linkify-shortener.vercel.app",
  },
  {
    pro_title: "Stock Orbit",
    pro_img: stockOrbit,
    about:
      "Mobie app for real-time inventory management and inventory tracking, retail and warehouse users.",
    demo: "https://cbspakistan.com/stock-orbit-portfolio.html",
  },
];

//Myskills

const mySkills = [
  {
    tech_img: "devicon-javascript-plain colored",
    name: "JavaScript",
  },
  {
    tech_img: "devicon-react-original colored",
    name: "ReactJS",
  },
  {
    tech_img: "devicon-nextjs-plain colored",

    name: "NextJS",
  },
  {
    tech_img: "devicon-tailwindcss-original colored",
    name: "Tailwind CSS",
  },
  {
    tech_img: "devicon-html5-plain colored",
    name: "HTML",
  },
  {
    tech_img: "devicon-css3-plain colored",
    name: "CSS",
  },
  {
    tech_img: "devicon-bootstrap-plain colored",
    name: "Bootstrap",
  },

  {
    tech_img: "devicon-npm-original-wordmark colored",
    name: "NPM",
  },
  {
    tech_img: "devicon-nodejs-plain colored",
    name: "NodeJS",
  },
  {
    tech_img: "devicon-mysql-original colored",
    name: "MYSQL",
  },
  {
    tech_img: "devicon-git-plain colored",
    name: "Git",
  },
  {
    tech_img: "devicon-postman-plain colored",

    name: "Postman",
  },
];

// Certifications;

const certifications = [
  {
    title: "JavaScript Basic",
    img: javascript_basic,
    dateOfIssue: "29-04-2025",
    providerLogo: hackerRank_logo,
    providerName: "HackerRank",
    demo: "https://www.hackerrank.com/certificates/7259d99b93a5",
  },
  {
    title: "Frontend Internship Completion",
    img: frontend_Internship_completion,
    dateOfIssue: "01-02-2025",
    providerLogo: cbsPak_logo,
    providerName: "CBS Pakistan",
    demo: "https://www.linkedin.com/in/hassan-javaid159",
  },
  {
    title: "Frontend ReactJS Certificate",
    img: frontendReactJS,
    dateOfIssue: "10-06-2024",
    providerLogo: freeCodeCamp_logo,
    providerName: "freeCodeCamp",
    demo: "https://www.freecodecamp.org/certification/Hassanjavaid/front-end-development-libraries",
  },
];

export { projects, mySkills, certifications };
