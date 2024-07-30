import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Review Analysis System',
        description: "Created a system using an API to preprocess and analyze customer reviews with advanced NLP techniques, identifying keyfeatures and attributes mentioned by customers.Designed a React frontend to visualize analysis results, providing insights into customer preferences and productimprovement opportunities",
        tools: ['NLTK', 'React'],

        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'CommandEase - Intuitive Shell Application',
        description: 'Built a user friendly shell application for file manipulation featuring an intuitive graphical user interface (GUI) and simplifiedcommand syntax.Integrated a built-in chatbot to provide real-time assistance and suggestions for efficient command execution.',
        tools: ["C++", "cURL", "wxWidgets"],
        role: '',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'NeuroCare-Advanced Neural Network Analysis of Harmful Brain Activities ',
        description: 'Engineered a cutting-edge multi-model deep learning pipeline to accurately identify harmful brain activities in EEG Data,incorporating advanced neural network architectures and facilitating groundbreaking advancements in neurological health diagnostics.',
        tools: ['Pytorch', 'timm'],
        code: '',
        role: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'EcoKart - Sustainable Shopping Website',
        description: " Developed a full-stack website for sustainable shopping with eco impact calculation, providing a responsive design and intuitive navigation for an enhanced user experience, and integrated user authentication and security measures. Dockerized the application, and utilized Kubernetes for container orchestration to ensure seamless deployment, scalability,and high availability.",
        tools: ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Docker', 'Kubernetes'],
        code: '',
        demo: '',
        image: ayla,
        role: '',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },