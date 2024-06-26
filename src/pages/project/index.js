import { GrGithub } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";

import {
  prog1,
  prog2,
  prog3,
  prog4,
  prog5,
  prog6,
  prog7,
  prog8,
  prog9,
  prog10,
} from "../../assets/images";

// projects data
export const projects = [
  {
    id: 2,
    name: "Berkely Square Medical",
    desc: "A website built for a largest private medical clinic in the UK, to boost their online presence and increase sales",
    stack: "Wordpress custom theme, tailwindcss, google analytics",
    imgUrl: prog9,
    website: {
      icon: <TbWorld />,
      url: "https://www.berkeleysquaremedical.com/",
    },
  },
  {
    id: 2,
    name: "Electic Car Charges UK",
    desc: "A webiste innovatively crafted for electric car charging company",
    stack: "Wordpress custom theme, tailwindcss, google analytics",
    imgUrl: prog10,
    website: {
      icon: <TbWorld />,
      url: "https://www.electriccarchargersuk.co.uk/",
    },
  },
  {
    id: 2,
    name: "Electic Car Charges UK  Admin Panel",
    desc: "A professional admin panel for ecc company to manage their users, products and orders",
    stack: "Next JS, MYSQL,Prisma ORM, Tailwindcss",
    imgUrl: prog8,
    website: {
      icon: <TbWorld />,
      url: "https://ecc-admin-dashboard.vercel.app/",
    },
  },
  {
    id: 2,
    name: "Tufan Pharmacy",
    desc: "A professional website buile to boost companines online presence and increase sales",
    stack:
      "Html, Css, Javascript, Tailwindcss,Strapi CMS,Express js, google analytics",
    imgUrl: prog7,

    gitHubUrl: {
      icon: <TbWorld />,
      url: "https://tufahpharma.onrender.com/",
    },
    website: {
      icon: <TbWorld />,
      url: "https://wonders-of-ethiopia.vercel.app/",
    },
  },
  {
    id: 2,
    name: "Tour Booking",
    desc: "A full stack Tour booking app where users can create accounts and book tours, also have an admin user who can add tours",
    stack: "React JS, Node JS, Express JS, Mongo db",
    imgUrl: prog1,

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/47thommy/Wonders-of-Ethiopia.git",
    },
    website: {
      icon: <TbWorld />,
      url: "https://wonders-of-ethiopia.vercel.app/",
    },
  },
  {
    id: 3,
    name: "Game Oasis",
    desc: "a game discovery website with search and filter functionality",
    stack: "React JS, Typescript, external Api",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/47thommy/game-oasis.git",
    },
    website: {
      icon: <TbWorld />,
      url: "https://game-oasis.vercel.app/",
    },
    imgUrl: prog2,
  },

  {
    id: 4,
    name: "Advanced dashboard App",
    desc: "Advanced dashboard application with dynamic data,charts,calendars etc",
    stack: "React JS",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/advanced-dashboard-app",
    },
    website: {
      icon: <TbWorld />,
      url: "https://advanced-dashboard-app.netlify.app",
    },
    imgUrl: prog3,
  },
  {
    id: 5,
    name: "Class Room",
    desc: "Classroom is a one-stop shop for education and learning instructors manage, measure and enrich their learning experience",
    stack: "React JS expressjs Node js Mongodb",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/47thommy/classroom.git",
    },
    website: {
      icon: <TbWorld />,
      url: "https://classroom-blue-six.vercel.app/",
    },
    imgUrl: prog4,
  },
  {
    id: 4,
    name: "Realstate Website",
    desc: "online realstate selling and renting website with google auth, rensing,buying or selling places contacting the house owner directly",
    stack: "React JS, Express JS Mongodb",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Mavrickj9/Pizzashop-in-newyork",
    },
    website: {
      icon: <TbWorld />,
      url: "https://pizzashop-in-newyork.vercel.app/",
    },
    imgUrl: prog5,
  },
  {
    id: 2,
    name: "The Quiditch Fitnessclub",
    desc: "workout tracking website that with user authentication, where each user can track their workout load, rep, sets to progressively overload",
    stack: "React JS Express JS Node JS mongodb",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/47thommy/The-Quidditch-Fitness-Club.git",
    },
    website: {
      icon: <TbWorld />,
      url: "https://the-quidditch-fitness-club.vercel.app/",
    },
    imgUrl: prog6,
  },
];
