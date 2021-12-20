import biquadris from '../assets/images/biquadris.png';
import drGoose from '../assets/images/dr_goose.png';
import nhss from '../assets/images/nhss_grad.png';
import shoppingBot from '../assets/images/shopping_bot_main.png';
import sudokuSolver from '../assets/images/sudoku_solver.png';

const WORK_EXPERIENCE = 'Work Experience';
const PERSONAL_PROJECT = 'Personal Project';
const VOLUNTEER_EXPERIENCE = 'Volunteer Experience';
const EXTRA_CURRICULAR = 'Extra Curricular';


const portfolioItems = [
  {
    name: 'Full Stack Software Developer',
    image: '',
    type: WORK_EXPERIENCE, 
  },
  {
    name: 'Biquadris',
    image: biquadris,
    type: PERSONAL_PROJECT, 
  },
  {
    name: 'Dr. Goose',
    image: drGoose,
    type: PERSONAL_PROJECT, 
  },
  {
    name: 'Data Manager',
    image: nhss,
    type: PERSONAL_PROJECT, 
  },
  {
    name: 'Shopping Bot',
    image: shoppingBot,
    type: PERSONAL_PROJECT, 
  },
  {
    name: 'Sudoku Solver',
    image: sudokuSolver,
    type: PERSONAL_PROJECT, 
  },
];

export default portfolioItems;