import imgtongTong from "./assets/images/Tongtong.jpg"

const logotext = "THITITHORN";
const meta = {
    title: "Thitithorn Suwarak",
    description: "Hello 👋 I’m Thitithorn Suwarak _ Full stack devloper,based in Pathum Thani, Thailand",
};

const introdata = {
    title: "I’m Thitithorn Suwarak",
    animated: {
        first: "Hello 👋",
        second: "Junior Software Developer",
        third: "based in Pathum Thani, Thailand",
    },
    description: "Junior Software Developer with recent completion of the Generation Bootcamp",
    your_img_url: imgtongTong,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Acquired programming skills in HTML, CSS, JavaScript, and SQL. Developed web applications using MERNStack (React, Node.js, MongoDB), implementingAgile methodologies and teamwork practices. For the finalproject, collaborated with a team to create a tea blending e-commerce application using CRUD operationswith MERN Stack. Personally responsible for implementing user authentication (signin/signup) features and developing an AI-powered tea blend generator interface.",
};
const worktimeline = [{
        jobtitle: "Junior Software Developer",
        where: "Generation Thailand (Bootcamp)",
        date: "2024",
    },
    {
        jobtitle: "ADMIN",
        where: "Government Pharmaceutical Organization",
        date: "2021 - 2024",
    },
    {
        jobtitle: "Supervisor",
        where: "Ninja Logistics",
        date: "2019 - 2021",
    },
];

const skills = [{
        name: "HTML5",
        value: 90,
    },
    {
        name: "CSS",
        value: 75,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "NodeJs",
        value: 75,
    },
];

const services = [{
        title: "Web Development",
        description: "Create modern and responsive websites using the latest web technologies. Skilled in HTML, CSS, and JavaScript to deliver visually appealing and user-friendly web experiences that work seamlessly across all devices.",
    },
    {
        title: "Frontend Development",
        description: "Build interactive user interfaces with React, focusing on creating smooth and engaging user experiences. Develop modern web applications with clean, maintainable code and responsive design principles.",
    },
    {
        title: "Backend Development",
        description: "Develop robust server-side applications using Node.js, handle database management, and create efficient APIs. Ensure secure and scalable solutions for your web applications with modern backend architecture.",
    },
];

const dataportfolio = [{
        img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*y6IcBe5J1AdALzXw.png",
        description: "Generation Thailand React assessment.",
        link: "https://38-thitithorn-react.vercel.app/",
    },
    {
        img: "https://www.appdisqus.com/wp-content/uploads/2022/01/netflix-logo.jpg",
        description: "10-Netflix-2023 Static Web.",
        link: "https://10-netflix-2023.vercel.app/",
    },
    {
        img: "https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo-2048x1280.png",
        description: "Generation Thailand assessment - Colmar Academy.",
        link: "https://38-thitithorn-tong.vercel.app/",
    },
    {
        img: "https://studyopedia.com/wp-content/uploads/2020/07/JavaScript-Logo-539x303.png",
        description: "Generation Thailand Javascript assessment.",
        link: "https://38-thitithorn-js.vercel.app/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "thitithorn.su@gmail.com",
    YOUR_FONE: "063-8575258",
    description: "Junior Software Developer with recent completion of the Generation Bootcamp, specializing in HTML, CSS, and JavaScript. Bringing 3 years of experience as an Administrator at the Government Pharmaceutical Organization and 3 years as a Supervisor at Ninja Logistics. Possesses strong communication, time management, and problem-solving skills, along with a Growth mindset, patience, and the ability to work effectively in a team. Highly motivated to leverage software development skills to create high-quality, customer-focused products. Committed to achieving success in alignment with the core values of customer focus, goal attainment, and teamwork.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Thitithorn",
    facebook: "https://facebook.com/tongtry30",
    linkedin: "https://www.linkedin.com/in/thitithorn",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};