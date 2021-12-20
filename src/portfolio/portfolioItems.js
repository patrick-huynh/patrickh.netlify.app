import biquadris from '../assets/images/biquadris.png';
import cooperators from '../assets/images/cooperators.png';
import drGoose from '../assets/images/dr_goose.png';
import nhss from '../assets/images/nhss_grad.png';
import shoppingBot from '../assets/images/shopping_bot_main.png';
import sudokuSolver from '../assets/images/sudoku_solver.png';
import Portfolio from '../enums/Portfolio';


const portfolioItems = [
  {
    name: 'Full Stack Software Developer',
    image: cooperators,
    type: Portfolio.workExperience, 
  },
  {
    name: 'Biquadris',
    image: biquadris,
    type: Portfolio.personalProject, 
  },
  {
    name: 'Dr. Goose',
    image: drGoose,
    type: Portfolio.personalProject, 
  },
  {
    name: 'Data Manager',
    image: nhss,
    type: Portfolio.personalProject, 
  },
  {
    name: 'Shopping Bot',
    image: shoppingBot,
    type: Portfolio.personalProject, 
  },
  {
    name: 'Sudoku Solver',
    image: sudokuSolver,
    type: Portfolio.personalProject, 
  },
];

export default portfolioItems;