const coopData = [
  {
    roleName: "Fullstack Developer",
    date: "Sept - Dec 2024",
    location: "Mississauga, Ontario",
    company: "Rodan Energy Solutions",
    stack: ["Vue", "Typescript", "Python", "Django", "BeautifulSoup", "MySQL"]
    ,
    tasks: [
      "Developed and automated 10 web scrapers using Python and BeautifulSoup, which retrieve real‑time and forecast locational pricing data from IESO reports, providing 90+ clients with up‑to‑date insights on Ontario’s energy market",
      "Designed and implemented a CRUD interface with advanced filtering functionality using Django and Vue for managing energy peak notifications from 11 regional energy providers",
      "Built a maintenance notice feature allowing admin to schedule platform‑wide alerts to notify users in advance"
    ],
    image: "/images/rodan.png"
  },
  {
    roleName: "Product Designer",
    date: "May - Aug 2024",
    location: "Toronto, Ontario",
    company: "Super.com",
    stack: ["Figma", "Wireframing", "Prototyping", "UX Research", "Amplitude", "Jira"],
    tasks: [
      "Contributed 12 UI/UX enhancements to the Travel app, boosting booking conversion rates by 16% across 540K daily users",
      "Created design artifacts like high-fidelity wireframes and interactive prototypes in Figma, leveraged design system components and user data to inform designs, and clearly proposed ideas to stakeholders"
    ],
    image: "/images/Super_Primary_Blk.png"
  },
  {
    roleName: "Fullstack Developer",
    date: "Sept - Dec 2023",
    location: "Los Angeles, California (Remote)",
    company: "Creator Now",
    stack: ["React", "Typescript", "Express", "TypeORM", "PostgresQL", "Redis"],
    tasks: [
      "Led the development of an admin dashboard app for internal resource management in React, implementing 12 frontend pages and full CRUD functionality for users, content, videos, and lessons, enabling admins to streamline operations",
      "Developed a version editing tool for projects and user badges, boosting engagement by 15% among 44k daily users",
      "Built RESTful API endpoints with Express and TypeORM, optimizing PostgreSQL database performance through query tuning and Redis caching, reducing API calls by 32%"
    ]
    ,
    image: "/images/creatornow.png"
  },
  {
    roleName: "Fullstack Developer",
    date: "Jan - April 2023",
    location: "Ottawa, Ontario",
    company: "Applied Mind",
    stack: ["Vue3", "Typescript", "Python", "GraphQL", "PostgresQL", "SQLAlchemy", "ZeroMQ", "Jest"],
    tasks: [
      "Designed and implemented a real-time messaging system using ZeroMQ, GraphQL, and pub/sub, req/rep architectures, delivering 100+ live sensor status messages to the frontend daily",
      "Developed a dynamic heatmap using d3.js to visualize sensor detection events, enabling users to filter and customize the display using SQLAlchemy and TimescaleDB queries that aggregate time-series data",
      "Built a CSV export tool enabling clients to filter and download sensor detection data, reducing manual review time by 82%"
    ]
    ,
    image: "/images/appliedmind.svg"
  },
  {
    roleName: "Frontend Developer",
    date: "May - Aug 2022",
    location: "Toronto, Ontario",
    company: "Super.com",
    stack: ["React", "Typescript", "Redux", "HTML/CSS", "Jest", "MQTT", "Linux"],
    tasks: [
      "Developed 7 highly interactive and responsive widgets for the infotainment UI in the Ford Mustang Mach-E and F-150, integrating vehicle signal logic to reflect real-time data using the Observer pattern and Redux",
      "Migrated the Smart Hitch feature into its own microservice within the React ecosystem, refactoring legacy code to enhance maintainability and scalability"
    ],
    image: "/images/ford.png"
  },
  {
    roleName: "Fullstack Developer",
    date: "May - Aug 2021",
    location: "Waterloo, Ontario",
    company: "Lean Payments",
    stack: ["React", "Redux", "Node", "AWS", "PostgresQL", "Serverless"],
    tasks: [
      "Spearheaded the integration of Redux into the React codebase, refactoring architecture to streamline API data and user session management, reducing API calls and improving render time by over 1000 ms"
    ]
    ,
    image: "/images/leanpayments.svg"
  },
];

export default coopData;
