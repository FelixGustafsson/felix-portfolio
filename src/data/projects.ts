import gameDiscoveryProjectImage from '../assets/gameDiscoveryProject.png';
import ecommerce from '../assets/ecommerce.png';

export const data = [
  {
    type: 'experience',
    title: 'Web development & IT-services',
    location: 'Lund, Sweden',
    description:
      'Run my own firm where I offer web development, design and general IT services for local companies.',
    tags: ['Wordpress', 'Web development', 'Business'],
    dates: '2023 - PRESENT',
  },
  {
    type: 'experience',
    title: 'Mandatory military service',
    location: 'Halmstad, Sweden',
    description:
      'Solid education within the Swedish armed forces, network technology and communications equipment.',
    tags: ['Teamwork', 'Stress management', 'Network technology'],
    dates: '2022 - 2023',
  },
  {
    type: 'experience',
    title: 'Salesperson | Elgiganten',
    location: 'Malmö, Sweden',
    description:
      'Sold various technology products along with upselling in the form of services.',
    tags: ['Teamwork', 'Stress management', 'Technology'],
    dates: '2022 - 2023',
  },
  {
    type: 'experience',
    title: 'TryckX UF | JA Worldwide',
    location: 'Lund, Sweden',
    description:
      'Ran a UF company together with 3 partners. We printed company clothing and sweathers for schools and I was responsible for marketing, website and design.',
    tags: ['Teamwork', 'Business', 'Design'],
    dates: '2021 - 2022',
  },
  {
    type: 'experience',
    title: 'Salesperson | Mediamarkt',
    location: 'Malmö, Sweden',
    description:
      'Sold various technology products along with upselling in the form of services.',
    tags: ['Teamwork', 'Stress management', 'Network technology'],
    dates: '2020 - 2022',
  },
  {
    type: 'project',
    title: 'Game Discovery App',
    description:
      'A game discovery website application where you can search for games and filter. All the data is fetched through the Rawg API.',
    imageURL: gameDiscoveryProjectImage,
    projectURL: 'https://game-discovery-portfolio.netlify.app/',
    tags: ['React', 'Typescript', 'Rawg API', 'Chakra UI'],
  },
  {
    type: 'project',
    title: 'Ecommerce App',
    description:
      'A fully functional ecommerce website with authentication and connected database using firebase.',
    imageURL: ecommerce,
    projectURL: 'https://felix-portfolio-ecommerce.netlify.app/',
    tags: ['React', 'Firebase', 'Styled Components'],
  },
];
