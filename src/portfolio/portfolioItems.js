import biquadris from "../assets/images/biquadris.png";
import cooperators from "../assets/images/cooperators.png";
import drGoose from "../assets/images/dr_goose.png";
import nhss from "../assets/images/nhss_grad.png";
import shoppingBot from "../assets/images/shopping_bot_main.png";
import sudokuSolver from "../assets/images/sudoku_solver.png";
import staples from "../assets/images/staples.png";
import Portfolio from "../enums/Portfolio";

const portfolioItems = [
  {
    name: "Full Stack Software Developer",
    image: cooperators,
    type: Portfolio.workExperience,
    company: "The Co-operators",
    date: "Sep. 2021 - Dec. 2021",
    description: [
      "Developed web applications using HTML, CSS, and JS frameworks for product owners in an Agile workflow",
      "Created front-end user interfaces using React.js, Redux, and RESTful APIs",
      "Integrated back-end functionality using Node.js in conjunction with MongoDB",
      "Tracked project tasks using JIRA and managed code using Git as the version control system",
    ],
  },
  {
    name: "Operations Associate",
    image: staples,
    type: Portfolio.workExperience,
    company: "Staples",
    date: "Jul. 2020 - Oct. 2020",
    description: [
      "Analyzed customer’s needs and referred them to different products and services using customer service skills which resulted in a 50% increase in business/enterprise referrals",
      "Coordinated with floors team in a high-stress environment to maintain order and safety during COVID pandemic",
    ],
  },
  {
    name: "Biquadris",
    image: biquadris,
    type: Portfolio.personalProject,
    company: Portfolio.personalProject,
    date: "Jun. 2021",
    github: "https://github.com/patrick-huynh/cs246/tree/main/final",
    description: [
      "A CS246 final project, a 2-player Tetris-based game that allows players to compete in real time. Used advanced C++ as well as object oriented programming techniques.",
      "Polymorphism, SRP, RAII",
      "C++ with X11",
      "Team project management and experience with Git",
      "Implemented using various design patterns (Observer, Factory, Template",
    ],
  },
  {
    name: "Dr. Goose",
    image: drGoose,
    type: Portfolio.personalProject,
    company: "Hack the North 2020++",
    date: "Jan. 2021",
    github: "https://github.com/patrick-huynh/Hack-the-North-2020-",
    description: [
      "An all-in-one student utility Google Chrome extension built in JS. Built to maximize productivity and minimizing the chance of burn out.",
      "Optimized for students",
      "For online-learning",
      "Chrome API",
      "JavaScript/CSS",
    ],
  },
  {
    name: "Data Manager",
    image: nhss,
    type: Portfolio.personalProject,
    company: Portfolio.personalProject,
    date: "Jun. 2020 - Aug. 2020",
    description: [
      "Collaborated with a team to advertise, sell, and distribute school merchandise to high school graduates.",
      "Northview '20 Graduation Apparel",
      "Student-run initiative",
      "Over 80+ orders",
      "Generated over $4000 in revenue",
    ],
  },
  {
    name: "Shopping Bot",
    image: shoppingBot,
    type: Portfolio.personalProject,
    company: Portfolio.personalProject,
    date: "Apr. 2021",
    github: "https://github.com/patrick-huynh/Shopping-Bot",
    description: [
      "A light-weight bot that notifies users when new or out of stock online products are restocked on a variety of online store.",
      "Alerts through SMS texts",
      "Python",
    ],
  },
  {
    name: "Sudoku Solver",
    image: sudokuSolver,
    type: Portfolio.personalProject,
    company: Portfolio.personalProject,
    date: "May. 2021",
    github: "https://github.com/patrick-huynh/Sudoku-Solver/tree/master",
    description: [
      "A simple sudoku solver that uses backtracking algorithm to generate a possible solution.",
      "C/C++",
      "Built using the backtracking algorithm",
    ],
  },
];

export default portfolioItems;
