import nike from '../../src/assets/nike.png';
import pedros from '../../src/assets/pedros.png';
import thriftbazaar from '../../src/assets/thriftbazaar.png';
import turfsync from '../../src/assets/turfsync.png';
import sapradesigns from '../../src/assets/sapradesigns.png';

export const projects = [
    {
        id: 1,
        name:"TurfSync",
        description:"TurfSync is a full-stack web application designed for seamless sports turf booking, ensuring hassle-free reservations while preventing double bookings using MongoDB. it offers a fast and responsive user experience. To enhance security, JWT authentication is implemented for safe user login and data protection. Additionally, optimized slot availability checks have reduced booking errors by 50%, making the system more efficient and reliable.",
        link:"https://turfnext-frontend.onrender.com/",
        tech:["React.js","Javascript","HTML","CSS","TailwindCSS","Express.js", "Node.js", "MongoDB"],
        thumbnail:turfsync,
    },
    {
        id: 2,
        name:"ThriftBazaar",
        description:"ThriftBazaar is a thrift store application designed for buying and reselling pre-owned items, Focused on delivering a seamless shopping experience, the frontend was developed with responsive design principles, ensuring smooth navigation across all devices. Performance optimizations led to a 40% improvement in page load speeds, enhancing browsing efficiency and user engagement.",
        link:"https://thriftbazaar.vercel.app/",
        tech:["Next.js","React.js","Javascript","HTML","CSS","TailwindCSS"],
        thumbnail:thriftbazaar,
    },
    {
        id: 3,
        name:"SapraDesigns",
        description:"Sapra Designs is a personal project developed to showcase an interior design business, featuring a sleek and modern front-end. The application delivers a responsive and dynamic user interface, ensuring a visually appealing and seamless browsing experience across all devices.",
        link:"https://sapradesigns.netlify.app/",
        tech:["React.js","Javascript","HTML","CSS","TailwindCSS"],
        thumbnail:sapradesigns,
    },
    {
        id: 4,
        name:"Nike Clone",
        description:"Nike Clone is a responsive frontend of an e-commerce web application replicating the look and feel of the Nike store, the platform features an intuitive UI and smooth navigation. With a mobile-friendly layout and optimized performance, the clone provides a fast and engaging user experience across all devices.",
        link:"https://nikeshoescopy.netlify.app/",
        tech:["React.js","Javascript","HTML","CSS","Bootstrap"],
        thumbnail:nike,
    },
    {
        id: 5,
        name:"Pedro's Pizzaria Clone",
        description:"Pedro's Pizzaria is a sleek and interactive website designed to showcase a pizza restaurant, Featuring a responsive and user-friendly interface.",
        link:"https://pizzapedro.netlify.app/",
        tech:["Javascript","HTML","CSS"],
        thumbnail:pedros,
    },
];

export const experience = [
    {
        id: 1,
        company: "Upwork - Freelance",
        role:"Next.js Developer ",
        tech:[
            "Next.js", "React.js", "TailwindCSS", 
            "JavaScript", "HTML", "CSS"
        ],
        time:"2024-2024",
        description:"As a Freelance Web Developer, I have delivered high-quality web projects, enhancing client satisfaction and retention. With expertise in Next.js, React.js, shadcn/ui, Tailwind CSS, and JavaScript, I build responsive and accessible web interfaces. Specializing in dynamic form development, Additionally, I have strengthened my client communication, time management, and problem-solving skills, ensuring efficient project delivery.",
    },
    {
        id: 2,
        company: "Deloitte",
        role:"Associate Analyst - SAP ABAP Developer",
        tech:[
            "SAP", "SAP ABAP", "RICEF objects"
        ],
        time:"2022-2023",
        description:"As an SAP ABAP Developer, I supported development projects, ensuring requirements and quality standards were met. Specializing in RICEF development, I delivered high-impact solutions across reports, interfaces, conversions, enhancements, and forms. I collaborated with functional teams to align technical solutions with business needs and worked closely with cross-functional teams to resolve challenges. Through effective problem-solving and coordination, I contributed to seamless project execution and achieved 95% on-time project delivery.",
    },
];