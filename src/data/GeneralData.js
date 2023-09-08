import expressJs from '../assets/LanguageAndFrameworks/Expressjs.png';
import NextJS from '../assets/LanguageAndFrameworks/nextjs.svg';
import ReactLogo from '../assets/LanguageAndFrameworks/reactlogo.png';
import JsLogo from '../assets/LanguageAndFrameworks/jslogo.png';

import ListenFile from '../assets/projects/listenfile.png';
import AniIndex from '../assets/projects/aniindex.png';
import cropPl from '../assets/projects/cropPlanner.png';
import ignis from '../assets/projects/ignisTaste.png';
import kaibaM from '../assets/projects/kaibaMusic.png';
import setoM from '../assets/projects/setoCraft.png';

const About = {
  Name: 'Rayhan Febriyan Saputra',
  TitleJob: 'Student',
  JobLoc: 'Budi Luhur University',
  Location: 'Jakarta, Indonesia',
  IntroText: 'a 6th-semester student majoring in Informatics Engineering at Budi Luhur University. Graduated from Dicoding Academy in 2023 with a focus on Web Development in Front-End and Back-End, interests using the JavaScript language, with skills in React Js, Express Js, and Rest API. Experienced in IT Support and Lab Management. Ready to contribute to the information technology industry.',
  Social: {
    LinkedIn: {
      link: 'https://www.linkedin.com/in/rayhan-febriyan-saputra-945a05162/',
      name: 'Rayhan Febriyan Saputra',
    },
    Instagram: {
      link: 'https://www.instagram.com/_reean/',
      name: 'Ray..n',
    },
    Github: {
      link: 'https://github.com/CardinalRPH',
      name: 'CardinalRPH',
    },
  },
  LanguageNFramework: {
    language: [
      {
        name: 'JavaScript',
        icon: JsLogo,
      },
    ],
    framework: [
      {
        name: 'ExpressJs',
        icon: expressJs,
      }, {
        name: 'ReactJs',
        icon: ReactLogo,
      }, {
        name: 'NextJs',
        icon: NextJS,
      },
    ],
  },
  PortoContent: [
    {
      name: 'Listen from Your file',
      link: 'https://cardinalrph.github.io/Listen-From-Your-File/',
      image: ListenFile,
      github: 'https://github.com/CardinalRPH/Listen-From-Your-File',
    },
    {
      name: 'Ani Index Char',
      link: 'https://cardinalrph.github.io/AniIndexChar/',
      image: AniIndex,
      github: 'https://github.com/CardinalRPH/AniIndexChar',
    },
    {
      name: 'Crop Planner (Offline)',
      link: 'https://cropplanner.netlify.app/',
      image: cropPl,
      github: 'https://github.com/CardinalRPH/Capstone_Project',
    },
    {
      name: 'Ignis Taste',
      link: 'https://ignis-taste.netlify.app/',
      image: ignis,
      github: 'https://github.com/CardinalRPH/Ignis_Taste',
    },
    {
      name: 'Kaiba Music Discord Bot',
      link: '',
      image: kaibaM,
      github: 'https://github.com/CardinalRPH/DsicordBot_Kaiba',
    },
    {
      name: 'Cloud Seto Discord Bot',
      link: '',
      image: setoM,
      github: 'https://github.com/CardinalRPH/cloud-seto-bot',
    },
  ],
};

export default About;
