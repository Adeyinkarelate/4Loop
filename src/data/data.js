import java from "../assets/images/java.jpg";
import dev from "../assets/images/dev.jpg";
import data from "../assets/images/data-anaylsis.webp";
import aws from "../assets/images/aws.jpg";
import demand from "../assets/images/demand.jpg";
import frontend from "../assets/images/frontend.jpg";

import mat from "../assets/images/mathew.jpeg"
import emm from "../assets/images/Emmanuel.jpeg"

export const springTestimonial = [
  {
    name: "Ananya Gupta",
    title: "Senior Java Developer, TechNova Solutions",
    testimonial:
      "Spring Boot completely changed how we approach backend development at TechNova. Before adopting it, setting up new microservices required extensive configuration, dependency management, and repetitive XML files. With Spring Boot, our setup time dropped from days to just a few hours. Its opinionated defaults and embedded Tomcat made deployment incredibly smooth. We no longer worry about managing complex application servers or lengthy configurations. \n\nWhat’s even more impressive is the ecosystem — the integration with Spring Security, Spring Data JPA, and Actuator gives us everything we need to build secure, observable, and maintainable applications. The documentation is exceptional, and the community support is top-notch. I can confidently say Spring Boot has allowed us to scale faster while maintaining code quality and developer happiness.",
  },
  {
    name: "Marcus Reed",
    title: "Backend Architect, CloudEdge Systems",
    testimonial:
      "Spring Boot is the cornerstone of our microservices architecture. The ease of creating production-ready services with minimal configuration is unmatched. The way it integrates with Docker and Kubernetes simplifies our CI/CD pipeline, making deployments predictable and consistent. With Spring Boot, we achieved a microservice ecosystem that is both highly decoupled and easy to monitor through built-in Actuator endpoints. \n\nFrom an architectural standpoint, it gives you freedom — you can design reactive systems using WebFlux, or stick with traditional REST APIs, all within the same ecosystem. The consistency in coding standards and structure across our teams has dramatically improved productivity. I’ve worked with many Java frameworks, but none deliver such a balance between flexibility, speed, and reliability as Spring Boot does.",
  },
  {
    name: "Priya Nair",
    title: "Lead Software Engineer, QuantumLeap Technologies",
    testimonial:
      "As a lead engineer managing multiple enterprise-level projects, I needed a framework that could reduce complexity without compromising scalability. Spring Boot did exactly that. It enabled us to break our massive monolith into well-defined microservices, each independently deployable and easy to maintain. The built-in dependency injection and auto-configuration helped us eliminate tons of boilerplate code. \n\nOne of the standout features is Spring Boot’s testing framework. It integrates seamlessly with JUnit and Mockito, allowing us to write cleaner, more maintainable tests that ensure stability across all our environments. Combined with Spring Cloud, it gave us full control over service discovery, configuration, and resilience patterns. Spring Boot isn’t just a framework for building applications — it’s a complete ecosystem for modern Java development.",
  },
  {
    name: "Daniel Kim",
    title: "Microservices Consultant, DevStream Labs",
    testimonial:
      "I’ve worked with clients across finance, healthcare, and logistics — and in every case, Spring Boot proved to be the most reliable choice for building resilient systems. Its focus on convention over configuration saves developers from decision fatigue, while still allowing deep customization when needed. The ease of integrating with third-party services like Kafka, Redis, and Elasticsearch has made it a universal choice for enterprise-grade solutions. \n\nWhat really sets Spring Boot apart is how it encourages best practices. The structure it enforces naturally leads to cleaner code, modular design, and better testing discipline. Every project I’ve implemented with it has benefited from faster delivery cycles and fewer production issues. In a world full of frameworks promising speed, Spring Boot actually delivers stability, maturity, and scalability without compromise.",
  },
];

export const JavaModules = [
  // ------------------ MONTH 1 ------------------
  {
    title: "Month 1: HTML & CSS Fundamentals",
    submodules: [
      {
        name: "Module 1: HTML Basics (Week 1–2)",
        items: [
          "Structure of an HTML Document",
          "Semantic HTML Tags",
          "Forms & Inputs",
          "Media Elements (Images, Audio, Video)",
        ],
      },
      {
        name: "Module 2: CSS Fundamentals (Week 3–4)",
        items: [
          "Selectors & Specificity",
          "Box Model",
          "Flexbox & Grid",
          "Responsive Design Principles",
        ],
      },
    ],
  },

  // ------------------ MONTH 2 ------------------
  {
    title: "Month 2: Tailwind CSS & UI Design",
    submodules: [
      {
        name: "Module 3: Tailwind CSS (Week 5–6)",
        items: [
          "Utility-First Workflow",
          "Layout & Spacing",
          "Typography",
          "Custom Configurations",
        ],
      },
      {
        name: "Module 4: UI/UX Essentials (Week 7–8)",
        items: [
          "Component-Based Design",
          "Design Systems",
          "Building Reusable UI Components",
          "Project: Landing Page UI",
        ],
      },
    ],
  },

  // ------------------ MONTH 3 ------------------
  {
    title: "Month 3: JavaScript & React",
    submodules: [
      {
        name: "Module 5: JavaScript Fundamentals (Week 9–10)",
        items: [
          "Variables, Functions & Scope",
          "DOM Manipulation",
          "Events",
          "ES6+ Features",
        ],
      },
      {
        name: "Module 6: React Development (Week 11–12)",
        items: [
          "Components & Props",
          "State & Effects",
          "Routing",
          "Project: React Multi-Page App",
        ],
      },
    ],
  },

  // ------------------ MONTH 4 ------------------
  {
    title: "Month 4: Java Programming",
    submodules: [
      {
        name: "Module 7: Core Java (Week 13–14)",
        items: [
          "Variables, Loops, Methods",
          "OOP Concepts (Inheritance, Polymorphism)",
          "Exception Handling",
        ],
      },
      {
        name: "Module 8: Java Advanced (Week 15–16)",
        items: [
          "Collections Framework",
          "Java Streams",
          "File Handling & Serialization",
        ],
      },
    ],
  },

  // ------------------ MONTH 5 ------------------
  {
    title: "Month 5: Databases (MongoDB) & Backend Foundations",
    submodules: [
      {
        name: "Module 9: MongoDB (Week 17–18)",
        items: [
          "CRUD Operations",
          "Schema Design",
          "Aggregation Pipeline",
          "Project: NoSQL Database Design",
        ],
      },
    ],
  },

  // ------------------ MONTH 6 ------------------
  {
    title: "Month 6: Spring Boot Backend Development",
    submodules: [
      {
        name: "Module 10: Spring Boot Basics (Week 19–20)",
        items: [
          "Spring Boot Basics",
          "Dependency Injection",
          "Controllers & Services",
        ],
      },
      {
        name: "Module 11: Spring Boot Advanced (Week 21–24)",
        items: [
          "Spring Data JPA",
          "REST APIs",
          "Security & JWT",
          "Final Project: Full Stack Application",
        ],
      },
    ],
  },
];

export const DevOpsModules = [
  {
    title: "Month 1: Linux & GitLab",
    submodules: [
      {
        name: "Module 1: Linux Fundamentals (Week 1–2)",
        items: [
          "Linux Architecture & File System",
          "Essential Commands (ls, grep, find, chmod)",
          "User & Group Management",
          "File Permissions & Ownership",
          "Package Management (apt/yum)",
          "System Monitoring & Logs",
          "Bash Scripting Basics",
        ],
      },
      {
        name: "Module 2: Git & GitLab (Week 3–4)",
        items: [
          "Git Command Line Workflow",
          "Branching, Merging, Rebasing",
          "Resolving Merge Conflicts",
          "GitLab Project & Repository Setup",
          "Merge Requests & Issue Boards",
          "GitLab Runners Introduction",
        ],
      },
    ],
  },

  {
    title: "Month 2: Amazon Web Services (AWS)",
    submodules: [
      {
        name: "Module 3: AWS Core Services (Week 5–6)",
        items: [
          "IAM Users, Roles & Security",
          "EC2 Instances & AMIs",
          "VPC, Subnets, Routing",
          "Security Groups & Firewalls",
          "S3 Buckets & Lifecycle Rules",
          "CloudWatch Monitoring",
        ],
      },
      {
        name: "Module 4: Intermediate AWS (Week 7–8)",
        items: [
          "Load Balancers (ALB/NLB)",
          "Auto Scaling Groups",
          "RDS & DynamoDB Basics",
          "Route 53 DNS Management",
          "Elastic Beanstalk Introduction",
          "CloudFormation Basics",
        ],
      },
    ],
  },

  {
    title: "Month 3: Terraform & CI/CD",
    submodules: [
      {
        name: "Module 5: Terraform (Week 9–10)",
        items: [
          "Infrastructure as Code (IaC) Concepts",
          "Terraform Providers & Resources",
          "Variables, Outputs & Templates",
          "State Management (Local & Remote)",
          "Terraform Modules",
          "Deploying AWS Infra with Terraform",
        ],
      },
      {
        name: "Module 6: CI/CD with GitLab (Week 11–12)",
        items: [
          "Understanding CI/CD Pipelines",
          "GitLab Runners (Shell/Docker)",
          "Writing .gitlab-ci.yml Pipelines",
          "Pipeline Stages & Jobs",
          "Automated Testing & Deployment",
          "CI/CD Best Practices",
        ],
      },
    ],
  },

  {
    title: "Month 4: Docker & Kubernetes",
    submodules: [
      {
        name: "Module 7: Docker (Week 13–14)",
        items: [
          "Docker Installation & Architecture",
          "Images, Containers & Registries",
          "Dockerfiles & Multi-Stage Builds",
          "Volumes & Networking",
          "Docker Compose",
        ],
      },
      {
        name: "Module 8: Kubernetes (Week 15–16)",
        items: [
          "Kubernetes Architecture",
          "Pods, Deployments & Services",
          "ConfigMaps & Secrets",
          "Ingress Controllers",
          "Helm Charts",
          "Deploying Applications to K8s",
        ],
      },
    ],
  },
];

export const courseCategories = [
  {
    id: 1,
    title: "Full Stack Java",
    desc: "Essential skills for anyone pursuing a career as a full-stack Java developer. Learn Java fundamentals, object-oriented programming, Spring Boot, APIs, databases, and real-world application development.",
    image: java,
    url: "/java",
  },
  {
    id: 2,
    title: "DevOps",
    desc: "Essential skills for anyone pursuing a career as a professional DevOps engineer. Learn Linux fundamentals, cloud infrastructure with AWS, Terraform for IaC, CI/CD pipelines, Docker, and Kubernetes for modern application deployment.",
    image: dev,
    url: "/dev",
  },
  {
    id: 3,
    title: "Data Analysis",
    desc: "Essential skills for anyone pursuing a career as a professional data analyst. Learn Excel fundamentals, SQL for data querying, Python for analysis, data visualization with Power BI, and real-world techniques for turning raw data .",
    image: data,
    url: "",
  },
   {
    id: 4,
    title: "Front-End Development",
    desc: "Learn essential skills to build modern, responsive, and interactive websites. Master HTML, CSS, Tailwind, JavaScript, and React to create fast and professional web interfaces.",
    image: frontend,
    url: "/front-end",
  },
  {
    id: 2,
    title: "AWS Solutions Architect",
    desc: "Build the skills needed to design and deploy cloud solutions on AWS. Learn Linux fundamentals, AWS core services, architecture best practices, scalability, security, and hands-on cloud implementation.",
    image: aws,
    url: "/solution-architect",
  },
  {
  id: 3,
  title: "Demand Planning",
  desc: "Learn essential skills for a career in demand planning and supply chain forecasting. Master inventory analysis, demand forecasting models, Excel analytics, data interpretation, and real-world strategies for optimizing supply chain performance.",
  image: demand,
  url: "/demand-planner",
}
];


export const TeamMembers = [
  {
    name: "Ayinde M.B",
    position: "Bsc Physic (O.O.U Ago Iwoye)",
    cert: "MIT (University of Lagos)",
    linkedInURL: "https://www.linkedin.com/in/muritala-muyideen/",
    image:dev,
    location: "Nigeria",
  },
  {
    name: "Emmanuel Oladejo Olatunde",
    position: "Bsc Physic (University of Ibadan)",
    cert: "Microsoft Certified Data-Analysis",
    linkedInURL: "https://www.linkedin.com/in/emmanuel-oladejo-olatunde/",
    image:emm,
    location: "Nigeria",
  },
  
  {
    name: "Adelowo Mathew Oluwaseun",
    position: "Bsc In Education (University of Ilorin)",
    cert: " AWS Certified Cloud Practitioner",
    linkedInURL: "",
    image:mat,    
    location: "Nigeria",
  },
  // {
  //   name: "Israel Akinoso",
  //   position: "Bsc Information Tech (Middlesex University)",
  //   linkedInURL: "https://www.linkedin.com/in/israel-akinoso/",
  //   image:
  //     "https://res.cloudinary.com/ds4h5p2np/image/upload/f_auto,q_auto/v1/adexbit/israel_akinoso",
  //   location: "London, UK",
  // },
  
  // {
  //   name: "George Kolawole",
  //   position: "Forex",
  //   linkedInURL: "https://www.linkedin.com/in/kolawole-george-4b914a212/",
  //   image:
  //     "https://res.cloudinary.com/ds4h5p2np/image/upload/f_auto,q_auto/v1/adexbit/kolawole_george",
  //   location: "Nigeria",
  // },
];


export const shortCategories = [
  
  
  {
    id: 1,
    title: "Front-End Development",
    desc: "Learn essential skills to build modern, responsive, and interactive websites. Master HTML, CSS, Tailwind, JavaScript, and React to create fast and professional web interfaces.",
    image: frontend,
    url: "/front-end",
  },
  {
    id: 2,
    title: "AWS Solutions Architect",
    desc: "Build the skills needed to design and deploy cloud solutions on AWS. Learn Linux fundamentals, AWS core services, architecture best practices, scalability and security.",
    image: aws,
    url: "/solution-architect",
  },
  {
  id: 3,
  title: "Demand Planning",
  desc: "Learn essential skills for a career in demand planning and supply chain forecasting. Master inventory analysis, demand forecasting models, Excel analytics and data interpretation. ",
  image: data,
  url: "/demand-planner",
}
];



export const FrontendModules = [
  {
    title: "Month 1: HTML, CSS & JavaScript Basics",
    submodules: [
      {
        name: "Module 1: HTML & CSS Foundations (Week 1–2)",
        items: [
          "Introduction to the Web & Browsers",
          "HTML Elements, Attributes & Semantic Tags",
          "Forms, Tables & Multimedia Integration",
          "CSS Selectors, Specificity & Inheritance",
          "Box Model, Flexbox & Grid",
          "Responsive Design (Media Queries)",
          "CSS Animations & Transitions",
        ],
      },
      {
        name: "Module 2: Core JavaScript (Week 3–4)",
        items: [
          "Variables, Data Types & Operators",
          "Functions, Scope & Hoisting",
          "Arrays, Objects & Loops",
          "DOM Manipulation",
          "Events & Event Listeners",
          "Basic Fetch API",
          "Debugging & Browser DevTools",
        ],
      },
    ],
  },

  {
    title: "Month 2: Advanced JavaScript & Tailwind CSS",
    submodules: [
      {
        name: "Module 3: Advanced JavaScript (Week 5–6)",
        items: [
          "ES6+ Features (Let/Const, Arrow Functions, Spread)",
          "Asynchronous JS (Promises, Async/Await)",
          "JSON & API Integration",
          "LocalStorage & SessionStorage",
          "Functional Programming Concepts",
          "Modules & Bundling Basics",
          "Building Interactive JS Projects",
        ],
      },
      {
        name: "Module 4: Tailwind CSS (Week 7–8)",
        items: [
          "Tailwind Installation & Configuration",
          "Utility-First Styling",
          "Responsive Layouts & Dark Mode",
          "Customizing Themes (tailwind.config.js)",
          "Reusable UI Components",
          "Animations & Transitions in Tailwind",
          "Building a Complete Tailwind UI Page",
        ],
      },
    ],
  },

  {
    title: "Month 3: React & Figma",
    submodules: [
      {
        name: "Module 5: React Fundamentals (Week 9–10)",
        items: [
          "What is React & JSX",
          "Components, Props & State",
          "Handling Events & Forms",
          "Conditional Rendering & Lists",
          "Hooks: useState & useEffect",
          "React Project Setup (Vite/Create React App)",
          "Mini Project: React Dashboard or Portfolio",
        ],
      },
      {
        name: "Module 6: Figma + Advanced React (Week 11–12)",
        items: [
          "Figma Interface & Tools",
          "Creating Layouts & Components",
          "Design Systems & Style Guides",
          "Exporting Assets for Developers",
          "React Router (Navigation)",
          "Context API for State Management",
          "Final Project: Design → Code Conversion",
        ],
      },
    ],
  },
];


export const AWSArchitectModules = [
  {
    title: "Month 1: Linux & AWS Core Foundations",
    submodules: [
      {
        name: "Module 1: Linux for Cloud Engineers (Week 1–2)",
        items: [
          "Linux Architecture & File System",
          "Essential Commands (ls, grep, chmod, tar, nano, vi)",
          "Users, Groups & Permissions",
          "Managing Processes & Services",
          "Networking Basics (SSH, SCP)",
          "Bash Scripting Essentials",
          "Deploying Applications on Linux Servers",
        ],
      },
      {
        name: "Module 2: AWS Core Services (Week 3–4)",
        items: [
          "AWS Global Infrastructure",
          "IAM: Users, Roles, Policies, MFA",
          "Amazon EC2: Instances, AMIs, Key Pairs",
          "VPC, Subnets, Routing & Security Groups",
          "S3 Buckets, Versioning & Lifecycle Rules",
          "RDS & DynamoDB Introduction",
          "CloudWatch Metrics & Alarms",
        ],
      },
    ],
  },

  {
    title: "Month 2: Architecting on AWS",
    submodules: [
      {
        name: "Module 3: Networking & Security (Week 5–6)",
        items: [
          "Advanced VPC Architecture",
          "NAT Gateways, Internet Gateways & NACLs",
          "Route 53: DNS, Routing Policies",
          "KMS Encryption & Secrets Manager",
          "Identity Federation (SSO & Cognito)",
          "Shared Responsibility Model",
          "Well-Architected Framework: Security Pillar",
        ],
      },
      {
        name: "Module 4: Compute, Storage & High Availability (Week 7–8)",
        items: [
          "Elastic Load Balancers (ALB, NLB)",
          "Auto Scaling Groups & Scaling Policies",
          "Elastic Beanstalk Basics",
          "EFS vs EBS vs S3 Storage Options",
          "Serverless Introduction (Lambda, API Gateway)",
          "SQS, SNS & Event-Driven Patterns",
          "Architecting Highly Available Systems",
        ],
      },
    ],
  },

  {
    title: "Month 3: Infrastructure as Code, Monitoring & Final Architecture",
    submodules: [
      {
        name: "Module 5: Infrastructure as Code & Deployment (Week 9–10)",
        items: [
          "CloudFormation Templates (YAML/JSON)",
          "Stacks, Parameters & Outputs",
          "Building Reusable CloudFormation Modules",
          "Deploying VPC + EC2 with CloudFormation",
          "Intro to Terraform vs CloudFormation",
          "CI/CD Integration Concepts",
          "Automating Cloud Deployments",
        ],
      },
      {
        name: "Module 6: Monitoring, Cost Optimization & Exam Prep (Week 11–12)",
        items: [
          "CloudWatch Logs, Metrics & Alarms",
          "AWS Config & Trusted Advisor",
          "Cost Explorer & Budget Alarms",
          "Architecting for Cost Optimization",
          "Case Studies: Real World Architectures",
          "Exam Domains & Study Strategy",
          "Final Capstone: Build a Full AWS Architecture",
        ],
      },
    ],
  },
];


export const DemandPlannerModules = [
  {
    title: "Month 1: Supply Chain & Forecasting Foundations",
    submodules: [
      {
        name: "Module 1: Supply Chain & Demand Planning Basics (Week 1–2)",
        items: [
          "Introduction to Supply Chain & Operations",
          "Demand Planning vs Supply Planning",
          "Roles of a Demand Planner",
          "Types of Demand (Stable, Seasonal, Lumpy)",
          "Qualitative Forecasting (Expert Opinion, Surveys)",
          "Quantitative Forecasting (Time-Series Basics)",
          "Forecast Accuracy Metrics (MAPE, ME, RMSE)",
        ],
      },
      {
        name: "Module 2: Data & Inventory Management (Week 3–4)",
        items: [
          "Introduction to Planning Data",
          "Master Data Management (SKU, Customer, Location)",
          "Inventory Types & Classifications",
          "Safety Stock & Reorder Point Calculations",
          "ABC Analysis & Product Segmentation",
          "Lead Time Analysis",
          "Managing and Cleaning Data for Forecasting",
        ],
      },
    ],
  },

  {
    title: "Month 2: Forecasting Techniques & Tools",
    submodules: [
      {
        name: "Module 3: Forecasting Methods (Week 5–6)",
        items: [
          "Moving Average & Weighted Moving Average",
          "Exponential Smoothing (SES, DES, TES)",
          "Trend & Seasonality Analysis",
          "Regression Forecasting",
          "Causal Forecasting Techniques",
          "Demand Sensing vs Demand Shaping",
          "Evaluating & Improving Forecast Accuracy",
        ],
      },
      {
        name: "Module 4: Excel & Power BI for Demand Planning (Week 7–8)",
        items: [
          "Excel for Demand Forecasting",
          "PivotTables, Lookup Functions, Dashboards",
          "Scenario & What-If Analysis",
          "Trendlines & Statistical Tools",
          "Power BI Interface & Data Modeling",
          "Building Demand Dashboards",
          "Presenting Forecast Insights to Management",
        ],
      },
    ],
  },

  {
    title: "Month 3: S&OP, Optimization & Capstone",
    submodules: [
      {
        name: "Module 5: Integrated Planning & Optimization (Week 9–10)",
        items: [
          "Sales & Operations Planning (S&OP)",
          "Demand Review & Supply Review Process",
          "Capacity Planning & Constraint Management",
          "Inventory Optimization & Balancing Service Levels",
          "Collaboration with Sales, Marketing & Finance",
          "Risk Management in Demand Planning",
          "KPIs: Forecast Accuracy, Fill Rate, Service Levels",
        ],
      },
      {
        name: "Module 6: Final Project & Practical Applications (Week 11–12)",
        items: [
          "Building a Complete Demand Forecast",
          "Identifying Drivers of Demand",
          "Creating an Executive Planning Dashboard",
          "Scenario Planning & Sensitivity Analysis",
          "Budgeting & Operational Forecasting",
          "Final Capstone: End-to-End Demand Plan",
          "Career Preparation (CV, Portfolio, Interviews)",
        ],
      },
    ],
  },
];
