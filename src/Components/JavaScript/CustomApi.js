//Projects images.

import beluga from "../Photos/Projects_imgs/Beluga.png";
import vibe from "../Photos/Projects_imgs/Vibe.jpg";
import sadequain from "../Photos/Projects_imgs/sadequain.webp";
import stockOrbit from "../Photos/Projects_imgs/stockOrbit.jpeg";
import timecare from "../Photos/Projects_imgs/timecare.webp";
import linkify from "../Photos/Projects_imgs/linkify.jpg";

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
  {
    pro_title: "Time Care",
    pro_img: timecare,
    about:
      "Time Care tracks attendance, manages holidays, and offers workforce insights.",
    demo: "https://cbspakistan.com/timecare-portfolio.html",
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

export { projects, mySkills };
