import java from "../assets/images/java.jpg";
import dev from "../assets/images/devops.jpeg";
import data from "../assets/images/data-anaylsis.webp";
import aws from "../assets/images/aws.jpg";
import demand from "../assets/images/demand.jpg";
import frontend from "../assets/images/html.webp";

import mat from "../assets/images/mathew.jpeg";
import emm from "../assets/images/Emmanuel.jpeg";

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
    title: "Python Full Stack Development",
    desc: "A complete full-stack journey for anyone looking to build modern web applications using Python. Master HTML, CSS, JavaScript, Tailwind, React, Python, SQL, Django, and Django REST Framework while building real-world, production-ready projects.",
    image: java,
    url: "/python",
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
    desc: "Master essential skills for launching a successful career in data analysis. Learn Excel, SQL, Power BI, data cleaning, visualization, analytics workflows, and how to interpret data for real business decisions.",
    image: data,
    url: "/data-analysis",
  },
  {
    id: 4,
    title: "Front-End Development",
    desc: "Learn essential skills to build modern, responsive, and interactive websites. Master HTML, CSS, Tailwind, JavaScript, and React to create fast and professional web interfaces.",
    image: frontend,
    url: "/front-end",
  },
  {
    id: 5,
    title: "AWS Solutions Architect",
    desc: "Build the skills needed to design and deploy cloud solutions on AWS. Learn Linux fundamentals, AWS core services, architecture best practices, scalability, security, and hands-on cloud implementation.",
    image: aws,
    url: "/solution-architect",
  },
  // {
  //   id: 3,
  //   title: "Demand Planning",
  //   desc: "Learn essential skills for a career in demand planning and supply chain forecasting. Master inventory analysis, demand forecasting models, Excel analytics, data interpretation, and real-world strategies for optimizing supply chain performance.",
  //   image: demand,
  //   url: "/demand-planner",
  // },
];

export const TeamMembers = [
  {
    name: "Ayinde M.B",
    position: "Bsc Physic (O.O.U Ago Iwoye)",
    cert: "MIT (University of Lagos)",
    linkedInURL: "https://www.linkedin.com/in/muritala-muyideen/",
    image: dev,
    location: "Nigeria",
  },
  {
    name: "Emmanuel Oladejo Olatunde",
    position: "Bsc Physic (University of Ibadan)",
    cert: "Microsoft Certified Data-Analysis",
    linkedInURL: "https://www.linkedin.com/in/emmanuel-oladejo-olatunde/",
    image: emm,
    location: "Nigeria",
  },

  {
    name: "Adelowo Mathew Oluwaseun",
    position: "B.Ed In Education (University of Ilorin)",
    cert: " AWS Certified Cloud Practitioner",
    linkedInURL: "",
    image: mat,
    location: "Nigeria",
  },
  {
    name: "Israel Akinoso",
    position: "Bsc Information Tech (Middlesex University)",
    linkedInURL: "https://www.linkedin.com/in/israel-akinoso/",
    image:
      "https://res.cloudinary.com/ds4h5p2np/image/upload/f_auto,q_auto/v1/adexbit/israel_akinoso",
    location: "London, UK",
  },

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
    desc: "Learn essential skills to build modern, responsive, and interactive websites. Master HTML, CSS, Tailwind, JavaScript, and React to create fast and professional web interfaces...",
    image: frontend,
    url: "/front-end",
  },
  {
    id: 2,
    title: "AWS Solutions Architect",
    desc: "Build the skills needed to design and deploy cloud solutions on AWS. Learn Linux fundamentals, AWS core services, architecture best practices, scalability,security and project for your portfolio...",
    image: aws,
    url: "/solution-architect",
  },
  // {
  //   id: 3,
  //   title: "Demand Planning",
  //   desc: "Learn essential skills for a career in demand planning and supply chain forecasting. Master inventory analysis, demand forecasting models, Excel analytics and data interpretation. ",
  //   image: data,
  //   url: "/demand-planner",
  // },

   {
    id: 3,
    title: "DevOps",
    desc: "Essential skills for anyone pursuing a career as a professional DevOps engineer. Learn Linux fundamentals, cloud infrastructure with AWS, Terraform for IaC, CI/CD pipelines, Docker, and Kubernetes...",
    image: dev,
    url: "/dev",
  },
];

export const PythonFullStackModules = [
  {
    title: "Month 1: Web Foundations & JavaScript Basics",
    submodules: [
      {
        name: "Module 1: HTML & CSS Fundamentals (Week 1–2)",
        items: [
          "How the web works: HTTP, browsers & devtools",
          "HTML semantics, document structure, forms and accessibility (ARIA)",
          "CSS fundamentals: selectors, box model, specificity",
          "Layout techniques: Flexbox & CSS Grid",
          "Responsive design & media queries",
          "Best practices for semantic, SEO-friendly markup",
        ],
      },
      {
        name: "Module 2: JavaScript Essentials (Week 3–4)",
        items: [
          "JavaScript syntax, types, operators and control flow",
          "Functions, scope, closures and hoisting",
          "Arrays, objects and built-in methods",
          "DOM manipulation, events and event delegation",
          "Debugging with browser devtools",
          "Working with the Fetch API and promises",
        ],
      },
    ],
  },

  {
    title: "Month 2: Modern JavaScript & Utility-First Styling",
    submodules: [
      {
        name: "Module 3: Modern ES6+ JavaScript (Week 5–6)",
        items: [
          "ES6+ syntax: let/const, arrow functions, template literals",
          "Modules, imports/exports and bundlers (Vite/Parcel/Rollup)",
          "Async/await, error handling and advanced promises",
          "Higher-order functions and functional patterns",
          "Local storage, session storage and web APIs",
          "Build small interactive JS projects",
        ],
      },
      {
        name: "Module 4: Tailwind CSS & Component Styling (Week 7–8)",
        items: [
          "Tailwind setup and configuration (PostCSS / CLI)",
          "Utility-first approach and common utility classes",
          "Responsive design, dark mode and theming in Tailwind",
          "Building reusable UI components with Tailwind",
          "Customizing tailwind.config and creating design systems",
          "Integrating Tailwind with frameworks and projects",
        ],
      },
    ],
  },

  {
    title: "Month 3: React Fundamentals & Advanced Patterns",
    submodules: [
      {
        name: "Module 5: React Basics (Week 9–10)",
        items: [
          "What is React and JSX syntax",
          "Functional components, props and composition",
          "State with useState and basic side-effects with useEffect",
          "Handling events, forms and controlled components",
          "Lists, keys and conditional rendering",
          "Create a mini React app (to-do, dashboard, or portfolio)",
        ],
      },
      {
        name: "Module 6: Advanced React (Week 11–12)",
        items: [
          "Routing with React Router",
          "Context API and state sharing patterns",
          "Custom hooks and code reusability",
          "Performance: memo, useMemo, useCallback, lazy loading",
          "Testing basics for React components (Jest + React Testing Library)",
          "Integrating third-party libraries & building component libraries",
        ],
      },
    ],
  },

  {
    title: "Month 4: Python Programming & Databases",
    submodules: [
      {
        name: "Module 7: Python Fundamentals (Week 13–14)",
        items: [
          "Python syntax, data types and control structures",
          "Functions, modules, packages and virtual environments",
          "Object-oriented programming: classes and inheritance",
          "File I/O, exceptions and logging",
          "Working with CSV, JSON and other data formats",
          "Writing reusable, testable Python code",
        ],
      },
      {
        name: "Module 8: Databases & SQL (Week 15–16)",
        items: [
          "Relational databases concepts: tables, keys and normalization",
          "SQL fundamentals: SELECT, JOINs, GROUP BY, window functions",
          "Designing schemas and indexing for performance",
          "Using PostgreSQL and/or MySQL: setup & clients",
          "ORM basics (SQLAlchemy / Django ORM) and migrations",
          "Data modeling for web applications",
        ],
      },
    ],
  },

  {
    title: "Month 5: Django Core & Django REST Framework",
    submodules: [
      {
        name: "Module 9: Django Web Development (Week 17–18)",
        items: [
          "Django project/app structure and conventions",
          "Models, migrations and Django ORM deep dive",
          "Templates, context and server-side rendering",
          "Forms, validation and authentication with Django auth",
          "Admin site customization and management commands",
          "Building a CRUD web application with Django",
        ],
      },
      {
        name: "Module 10: Django REST Framework (Week 19–20)",
        items: [
          "REST API fundamentals and API design principles",
          "DRF serializers, viewsets and routers",
          "Authentication & authorization (JWT, token, session)",
          "Filtering, pagination and versioning APIs",
          "Throttling, rate-limiting and API documentation (Swagger / Redoc)",
          "Building an end-to-end API and connecting it to a frontend",
        ],
      },
    ],
  },

  {
    title: "Month 6: Deployment, DevOps, Testing & Capstone",
    submodules: [
      {
        name: "Module 11: DevOps & Deployment (Week 21–22)",
        items: [
          "Version control workflows with Git & GitHub",
          "Containerization with Docker and Docker Compose",
          "Serving Python apps with Gunicorn + Nginx",
          "CI/CD basics: GitHub Actions or similar pipelines",
          "Deploying to cloud platforms (Heroku, Render, or VPS)",
          "Monitoring, logging and basic security hardening",
        ],
      },
      {
        name: "Module 12: Testing, Optimization & Capstone (Week 23–24)",
        items: [
          "Unit testing & integration testing in Python (pytest)",
          "API testing and end-to-end testing for full-stack apps",
          "Performance tuning: caching (Redis), query optimization",
          "Security best practices: input validation, CSRF, XSS, CORS",
          "Final capstone: design, build and deploy a complete full-stack app",
          "Portfolio, interview prep, and next steps for job readiness",
        ],
      },
    ],
  },
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

export const DataAnalysisModules = [
  {
    title: "Month 1: Excel Foundations & Data Literacy",
    submodules: [
      {
        name: "Module 1: Excel Basics & Data Foundations (Week 1–2)",
        items: [
          "Understanding data types, structures & analytics mindset",
          "Excel interface, formulas, formatting & shortcuts",
          "Functions: SUM, AVERAGE, COUNT, IF, nested logic",
          "Data cleaning: remove duplicates, text functions, error fixes",
          "Sorting, filtering & conditional formatting",
          "Beginner dashboards & basic chart creation",
        ],
      },
      {
        name: "Module 2: Advanced Excel for Analysts (Week 3–4)",
        items: [
          "Advanced functions: VLOOKUP, XLOOKUP, INDEX/MATCH",
          "PivotTables & PivotCharts for deep insights",
          "What-if analysis, scenario manager & forecasting tools",
          "Data validation & building dynamic models",
          "Excel automation with macros (intro to VBA)",
          "Building a complete Excel reporting system",
        ],
      },
    ],
  },

  {
    title: "Month 2: SQL for Data Analysis",
    submodules: [
      {
        name: "Module 3: SQL Fundamentals (Week 5–6)",
        items: [
          "Understanding relational databases & ERD diagrams",
          "Basic SQL: SELECT, WHERE, ORDER BY, LIMIT",
          "Joins: INNER, LEFT, RIGHT, FULL",
          "Aggregations: SUM, COUNT, AVG, GROUP BY, HAVING",
          "Data cleaning & filtering with SQL",
          "Practical SQL analysis challenges",
        ],
      },
      {
        name: "Module 4: Intermediate & Advanced SQL (Week 7–8)",
        items: [
          "Window functions: RANK, ROW_NUMBER, OVER()",
          "Subqueries & CTEs (WITH statements)",
          "Views, indexes & performance optimization",
          "Building analytical datasets with SQL",
          "Data modeling best practices for analysts",
          "Real-world SQL case studies",
        ],
      },
    ],
  },

  {
    title: "Month 3: Power BI for Business Intelligence",
    submodules: [
      {
        name: "Module 5: Power BI Essentials (Week 9–10)",
        items: [
          "Power BI interface, workspace & datasets",
          "Data import, shaping & Power Query transformations",
          "Building effective data models",
          "Creating visualizations & dashboards",
          "Business KPIs and storytelling with data",
          "Designing a complete mini dashboard",
        ],
      },
      {
        name: "Module 6: Advanced Power BI & DAX (Week 11–12)",
        items: [
          "DAX fundamentals: measures & calculated columns",
          "Time intelligence functions (YTD, MTD, QoQ)",
          "Row-level security & permissions",
          "Optimizing Power BI models performance",
          "Publishing & scheduling automated reports",
          "Build a full business analytics dashboard",
        ],
      },
    ],
  },

  {
    title: "Month 4: Python for Data Analysis",
    submodules: [
      {
        name: "Module 7: Python Essentials (Week 13–14)",
        items: [
          "Python syntax, data types & OOP basics",
          "Loops, functions, modules & virtual environments",
          "Working with files: CSV, JSON & Excel",
          "Error handling, debugging & best coding practices",
          "Numpy fundamentals for numerical computing",
          "Build an analysis script with Python",
        ],
      },
      {
        name: "Module 8: Data Analysis with Pandas (Week 15–16)",
        items: [
          "DataFrames, series & indexing",
          "Data cleaning: handling missing values, duplicates & outliers",
          "Grouping, merging & joining datasets",
          "Statistical analysis with Python",
          "Working with Matplotlib for visualizations",
          "Mini project using Pandas + Matplotlib",
        ],
      },
    ],
  },

  {
    title: "Month 5: Business Analytics, Statistics & Forecasting",
    submodules: [
      {
        name: "Module 9: Business Statistics (Week 17–18)",
        items: [
          "Descriptive & inferential statistics",
          "Probability, distributions & hypothesis testing",
          "Correlation vs causation, regression basics",
          "A/B testing & experimental design",
          "Business case studies for data decisions",
          "Hands-on statistical modeling exercises",
        ],
      },
      {
        name: "Module 10: Forecasting & Real-World Analytics (Week 19–20)",
        items: [
          "Time series analysis fundamentals",
          "Moving averages, smoothing & trend modeling",
          "Demand forecasting basics",
          "Predictive modeling with Python",
          "Analytics solutions for sales, finance & operations",
          "Project: Forecasting model for real business data",
        ],
      },
    ],
  },

  {
    title: "Month 6: Capstone, Portfolio & Job Readiness",
    submodules: [
      {
        name: "Module 11: Capstone Development (Week 21–22)",
        items: [
          "Select a real dataset (finance, HR, marketing, operations)",
          "Define business problem & KPIs",
          "Apply SQL, Excel, Python & Power BI",
          "Build dashboards + insights report",
          "Prepare executive summary & presentation",
          "Peer code review and improvement",
        ],
      },
      {
        name: "Module 12: Career Readiness (Week 23–24)",
        items: [
          "Building a top-tier analytics portfolio",
          "Resume & LinkedIn optimization for data roles",
          "Technical interview prep for SQL, BI & analytics",
          "Mock interviews & analytics case studies",
          "How to get freelance and remote analytics jobs",
          "Final presentation & certification",
        ],
      },
    ],
  },
];
