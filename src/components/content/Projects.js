import SuDoKuSolverThumb from '../../images/SuDoKuSolver.jpeg';
import WeatherThumb from '../../images/weather_app_thumbnail.png';
import DABThumbnail from '../../images/DAB_Thumbnail.png'
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const iconStyle = {
  position: 'relative',
  fontSize: '40px',
  margin: '0px',
  padding: '0px',
  bottom: '700px',
  left: '150px',
};


let ProjectList = [
  {
    ProjectName: 'Sudoku Solver',
    ProjectImage: SuDoKuSolverThumb,
    altText: 'A preview of the Sudoku Solving Algorithm Page',
    oneLiner:
      'A recursive backtracking algorithm written from scratch that can solve exetreme difficulty puzzles quickly.',
    ProjectDescription:
      'This is an algorithm I wrote from scratch that uses tree traversal, recursion and depth first search to quickly solve puzzles.\n\t The function begins by finding all cells that have a definite answer and entering that answer. It will keep going through the board until it a completes a full iteration with no new values found. It then finds the cell with the fewest possibilities and implements a guess and then recursively calls the function. It will continue to work assuming that the guess was correct until the entire board is full and the solutionis validated or until it is impossible to contiune. If it is impossible to continue it will work back up the tree trying alternate guesses.\n\t The front end is a simple interface to input unfinished puzzles written in Typescript, React and Next.js',
    TechUsed: [
      <FaReact style={iconStyle} />,
      <SiNextdotjs style={iconStyle} />,
      <SiTailwindcss style={iconStyle} />,
      <SiTypescript style={iconStyle} />,
    ],
    DeploymentLink: 'https://sudoku-solver-amhaag.vercel.app/',
    RepoLink: 'https://github.com/AMHaag/sudoku-solver',
  },
  {
    ProjectName: 'Weather App',
    ProjectImage: WeatherThumb,
    altText: 'Weather App Thumbnail',
    oneLiner: 'A simple weather app written in pure Javascript',
    ProjectDescription:
      'A simple weather app written in vanilla Javascript and Jquery.',
    TechUsed: [],
    DeploymentLink: 'https://amhaag.github.io/Weather-App/',
    RepoLink: 'https://github.com/AMHaag/Weather-App',
  },
  {
    ProjectName: 'Dinos-Are-Birds',
    ProjectImage: DABThumbnail,
    altText: 'Dinos are birds Thumbnail',
    oneLiner: 'A fun take on the chrome dinosaur game',
    ProjectDescription:
      'This was a bootcamp project built with Handlebars.js, CSS and MySQL to authenticate users and save high scores. \n\n This is currently in the process of being redeployed as the team member from bootcamp has not maintained the deployment and I am researching alternate hosting options now that Heroku no longer has a free tier. ',
    TechUsed: [],
    DeploymentLink: '',
    RepoLink: 'https://github.com/AMHaag/dinos-are-birds',
  },
];
export default ProjectList;
