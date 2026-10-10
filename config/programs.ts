export type IconName = "chart" | "code" | "brain" | "shield" | "globe" | "coffee" | "database" | "sheet" | "palette" | "megaphone" | "cloud" | "layers";

export interface Program {
  slug: string;
  title: string;
  icon: IconName;
  /** Set to false to show this domain as "Coming Soon" (no detail content needed). */
  available: boolean;
  summary: string;
  overview: string;
  objectives: string[];
  skills: string[];
  prerequisites: string[];
  tasks: string[];
  /** Suggested starting points (names only). Confirm and edit before sharing with learners. */
  resources: string[];
  deliverables: string[];
}

const basics = ["Basic computer skills", "Willingness to complete tasks independently"];
const P = (
  slug: string, title: string, icon: IconName, summary: string, overview: string,
  objectives: string[], skills: string[], extraPrereq: string[], tasks: string[], resources: string[], deliverables: string[]
): Program => ({
  slug, title, icon, available: true, summary, overview, objectives, skills,
  prerequisites: [...extraPrereq, ...basics, "[Editable placeholder] Final eligibility to be confirmed"],
  tasks, resources, deliverables,
});

export const programs: Program[] = [
  P("data-analytics", "Data Analytics", "chart",
    "Clean, explore and present insights from datasets.",
    "Practise the full analytics workflow: asking questions, cleaning data, exploring it, visualising results and communicating insights.",
    ["Prepare messy data for analysis", "Find meaningful patterns", "Build clear charts and summaries", "Document findings professionally"],
    ["Data cleaning", "Exploratory analysis", "Data visualisation", "Basic statistics", "Insight reporting"],
    ["Interest in working with data"],
    ["Task 1: Clean and prepare a dataset", "Task 2: Exploratory analysis", "Task 3: Build visualisations", "Task 4: Write an insights summary", "Final project: End-to-end analysis"],
    ["pandas documentation", "Matplotlib documentation", "Kaggle Learn"],
    ["Cleaned dataset and notebook", "Charts and dashboard or report", "Final analysis project with write-up"]),
  P("python", "Python Programming", "code",
    "Build practical Python skills through coding tasks.",
    "Write clean, working Python, progressing from fundamentals to small applications and scripts.",
    ["Write readable Python programs", "Solve problems with code", "Organise code into functions and modules", "Present work in a portfolio"],
    ["Syntax and data structures", "Functions and modules", "File handling", "Using libraries", "Debugging basics"],
    ["No prior programming required unless confirmed otherwise"],
    ["Task 1: Core syntax exercises", "Task 2: Data structures and functions", "Task 3: File handling script", "Task 4: Mini application", "Final project: Python project with README"],
    ["The official Python Tutorial (docs.python.org)", "Python Beginner's Guide (python.org)"],
    ["Task code submissions", "Final Python project with README", "Short project write-up"]),
  P("ai-machine-learning", "AI & Machine Learning", "brain",
    "Learn core ML concepts by training and evaluating models.",
    "Work through the machine learning workflow: preparing data, training models, evaluating them and explaining results.",
    ["Understand core ML concepts", "Train and evaluate simple models", "Interpret metrics and limits", "Explain results clearly"],
    ["Data preparation", "Supervised learning basics", "Model evaluation", "scikit-learn", "Responsible AI awareness"],
    ["Basic Python is helpful (to be confirmed)"],
    ["Task 1: Prepare a dataset", "Task 2: Train a baseline model", "Task 3: Evaluate and compare models", "Task 4: Document limitations and risks", "Final project: ML mini-project"],
    ["scikit-learn user guide", "Google Machine Learning Crash Course", "Kaggle Learn"],
    ["Model notebook", "Evaluation report", "Final ML mini-project with write-up"]),
  P("cyber-security", "Cyber Security", "shield",
    "Learn defensive security fundamentals through guided tasks.",
    "Build foundational security knowledge with a defensive focus: risks, secure practices and basic incident awareness. All practical work uses only systems you own or are explicitly authorised to test.",
    ["Understand common threats and risks", "Apply secure practices", "Recognise common web vulnerabilities", "Write clear security recommendations"],
    ["Security fundamentals", "Risk assessment", "Secure authentication practices", "Web vulnerability awareness", "Security reporting"],
    ["Basic networking awareness helps (to be confirmed)"],
    ["Task 1: Security fundamentals review", "Task 2: Risk assessment exercise", "Task 3: Secure configuration checklist", "Task 4: Vulnerability awareness report", "Final project: Security recommendations report"],
    ["OWASP Top 10", "NIST Cybersecurity Framework"],
    ["Written task reports", "Security checklist", "Final recommendations report"]),
  P("web-development", "Web Development", "globe",
    "Build responsive, accessible websites.",
    "Learn to design, build and publish responsive websites using core web technologies.",
    ["Structure pages with semantic HTML", "Style responsive layouts", "Add interactivity with JavaScript", "Publish a working site"],
    ["HTML", "CSS", "JavaScript", "Responsive design", "Accessibility basics"],
    ["No prior web experience required unless confirmed otherwise"],
    ["Task 1: Semantic HTML page", "Task 2: Responsive CSS layout", "Task 3: JavaScript interactivity", "Task 4: Accessibility improvements", "Final project: Multi-page website"],
    ["MDN Web Docs", "web.dev"],
    ["Task source code", "Final multi-page website", "Short project write-up"]),
  P("java-programming", "Java Programming", "coffee",
    "Learn object-oriented programming with Java.",
    "Develop Java skills from syntax to object-oriented design and small applications.",
    ["Write correct Java programs", "Apply object-oriented principles", "Use collections and exceptions", "Build a small application"],
    ["Java syntax", "Object-oriented programming", "Collections", "Exception handling", "Debugging"],
    ["No prior Java required unless confirmed otherwise"],
    ["Task 1: Core syntax exercises", "Task 2: Classes and objects", "Task 3: Collections and exceptions", "Task 4: Mini application", "Final project: Java application with README"],
    ["The Java Tutorials (Oracle)", "OpenJDK documentation"],
    ["Task code submissions", "Final Java application with README", "Short project write-up"]),
  P("sql-database-management", "SQL & Database Management", "database",
    "Query, design and manage relational databases.",
    "Learn to write SQL queries and design clean relational database structures.",
    ["Write SELECT queries with joins and aggregates", "Design normalised tables", "Modify and manage data safely", "Explain schema decisions"],
    ["SQL queries", "Joins and aggregation", "Schema design and normalisation", "Data modification", "Query optimisation basics"],
    ["Comfort with tables and spreadsheets helps"],
    ["Task 1: Basic queries", "Task 2: Joins and aggregation", "Task 3: Design a schema", "Task 4: Data modification and constraints", "Final project: Database design and query set"],
    ["PostgreSQL documentation", "SQLite documentation"],
    ["SQL scripts", "Schema diagram", "Final database project with write-up"]),
  P("excel-power-bi", "Excel & Power BI", "sheet",
    "Analyse data and build dashboards.",
    "Use Excel for analysis and Power BI for interactive reporting and dashboards.",
    ["Analyse data with formulas and pivot tables", "Clean and model data", "Build an interactive dashboard", "Present insights to a non-technical audience"],
    ["Excel formulas", "Pivot tables", "Data modelling", "Power BI visuals", "Dashboard design"],
    ["Basic Excel familiarity helps", "Access to Excel and Power BI (to be confirmed)"],
    ["Task 1: Excel formulas and cleaning", "Task 2: Pivot tables and charts", "Task 3: Import and model data in Power BI", "Task 4: Build report pages", "Final project: Business dashboard"],
    ["Microsoft Learn: Excel", "Microsoft Learn: Power BI"],
    ["Excel workbook", "Power BI report file", "Dashboard summary document"]),
  P("ui-ux-design", "UI/UX Design", "palette",
    "Design usable, accessible interfaces.",
    "Learn the design process from user research to wireframes and a tested prototype.",
    ["Understand user needs", "Create wireframes and flows", "Apply visual design principles", "Test and improve a prototype"],
    ["User research basics", "Wireframing", "Visual design", "Prototyping", "Accessibility"],
    ["Access to a design tool such as Figma (to be confirmed)"],
    ["Task 1: User research summary", "Task 2: User flows and wireframes", "Task 3: Visual design system", "Task 4: Interactive prototype", "Final project: Case study"],
    ["Figma Learn", "Nielsen Norman Group articles", "WCAG quick reference (w3.org)"],
    ["Wireframes", "Prototype", "Design case study"]),
  P("digital-marketing", "Digital Marketing", "megaphone",
    "Plan and measure digital marketing campaigns.",
    "Learn core digital marketing channels, content planning and measuring campaign results.",
    ["Understand major digital channels", "Plan content and campaigns", "Measure results with analytics", "Present recommendations"],
    ["Content marketing", "SEO basics", "Social media planning", "Email marketing basics", "Analytics"],
    ["Interest in marketing and communication"],
    ["Task 1: Audience and goals", "Task 2: Content calendar", "Task 3: SEO basics audit", "Task 4: Campaign plan with metrics", "Final project: Marketing strategy"],
    ["Google Skillshop", "HubSpot Academy"],
    ["Content calendar", "Campaign plan", "Final strategy presentation"]),
  P("cloud-computing", "Cloud Computing", "cloud",
    "Understand cloud concepts and core services.",
    "Learn cloud fundamentals: compute, storage, networking, security and cost awareness.",
    ["Explain core cloud concepts", "Compare service models", "Deploy a simple cloud resource", "Understand security and cost basics"],
    ["Cloud fundamentals", "Compute and storage", "Networking basics", "Identity and security", "Cost awareness"],
    ["Basic networking awareness helps", "A cloud provider free account may be needed (to be confirmed)"],
    ["Task 1: Cloud concepts summary", "Task 2: Compute and storage exercise", "Task 3: Simple deployment", "Task 4: Security and cost review", "Final project: Cloud architecture write-up"],
    ["Microsoft Learn: Azure Fundamentals", "AWS documentation", "Google Cloud documentation"],
    ["Task write-ups", "Architecture diagram", "Final cloud project report"]),
  P("full-stack-development", "Full Stack Development", "layers",
    "Build complete web applications, front end to back end.",
    "Combine front-end and back-end skills to build and deploy a complete web application.",
    ["Build user interfaces", "Create server-side logic and APIs", "Connect an app to a database", "Deploy a complete application"],
    ["Front-end development", "Back-end APIs", "Databases", "Version control", "Deployment"],
    ["Basic HTML, CSS and JavaScript knowledge (to be confirmed)"],
    ["Task 1: Front-end interface", "Task 2: Back-end API", "Task 3: Database integration", "Task 4: Authentication and validation", "Final project: Deployed full stack app"],
    ["MDN Web Docs", "Next.js documentation", "Node.js documentation"],
    ["Source code repository", "Deployed application", "Project documentation"]),
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
