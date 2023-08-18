// import one from '../assets/svg/projects/one.svg'
// import two from '../assets/svg/projects/two.svg'
// import three from '../assets/svg/projects/three.svg'
// import four from '../assets/svg/projects/four.svg'
// import five from '../assets/svg/projects/five.svg'
// import six from '../assets/svg/projects/six.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'
import KFC from '../assets/svg/projects/KFC_logo.svg'
import DOTANDKEY from '../assets/svg/projects/DOT&KEY.svg'
import weather from '../assets/svg/projects/snowflake_weather_app_icon_4x.webp'
import stopWatch from '../assets/svg/projects/stop-watch-icon-20.svg'
import  myntra from '../assets/svg/projects/myntra.svg'

export const projectsData = [
    {
        id: 5,
        projectName: 'Myntra - clone',
        projectDesc: 'This project is a clone of E-Commerce website using REACT UI,CSS,JavaScript,ES6.',
        tags: ['React', 'Material UI','CSS','JSX','ES6',],
        code: 'https://github.com/Sangita-Kumari/MyntraClone',
        demo: 'https://myntra-clone-react-xi.vercel.app/',
        image: myntra
    },
    {
        id: 1,
        projectName: 'KFC-CLONE',
        projectDesc: 'This project aims to build a clone of E-Commerce website using HTML,CSS,JavaScript .  ',
        tags: ['HTML', 'CSS', 'JavaScripts'],
        code: 'https://github.com/Sangita-Kumari/KFC_CLONE',
        demo: 'https://sage-dolphin-365e39.netlify.app/index.html',
        image: KFC
    },
    {
        id: 2,
        projectName: 'Movie App',
        projectDesc: 'This is Movie app for android and ios.',
        tags: ['React-native', 'CSS','JavaScripts','ES6'],
        code: 'https://github.com/Sangita-Kumari/Movie_React-Native',
        demo: 'https://github.com/Sangita-Kumari/Movie_React-Native.git',
        image: 'data:image/jpeg;base64,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'
    },
    // {
    //     id: 3,
    //     projectName: 'Weather App',
    //     projectDesc: 'Weather forecast systems and applications predict weather conditions based on multiple parameters.',
    //     tags: ['HTML', 'CSS', 'JavaScripts','ES6'],
    //     code: 'https://github.com/salove16/weather_App',
    //     demo: 'https://remarkable-lamington-f89f26.netlify.app/',
    //     image: weather
    // },
    // {
    //     id: 4,
    //     projectName: 'Stopwatch Timer',
    //     projectDesc: 'This project is a fun one where i build a stopwatch timer with start stop reset resume functionality .',
    //     tags: ['REACT', 'CSS','VITE','HTML','JavaScript','ES6'],
    //     code: 'https://github.com/salove16/StopWatch_timer',
    //     demo: 'https://stop-watch-timer-salove16.vercel.app/',
    //     image: stopWatch
    // },
   
    // {
    //     id: 6,
    //     projectName: 'Uber Lite',
    //     projectDesc: 'Uber clone',
    //     tags: ['Flutter'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: six
    // },
    // {
    //     id: 7,
    //     projectName: 'Stock Market App',
    //     projectDesc: 'A simple stock market API app',
    //     tags: ['React', 'Redux', 'Bootstrap'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: seven
    // },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/

