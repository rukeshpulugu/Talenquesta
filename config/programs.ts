export interface Program {
  slug: string;
  title: string;
  icon: "chart" | "code" | "database" | "sheet" | "brain" | "globe";
  available: boolean;
  summary: string;
  overview?: string;
  skills?: string[];
  objectives?: string[];
  prerequisites?: string[];
  tasks?: string[];
  deliverables?: string[];
  evaluation?: string[];
  certificate?: string[];
}

const commonEval = [
  "Correctness and completeness of submitted work",
  "Clarity of code, analysis and documentation",
  "Following task instructions and deadlines",
  "Original work — copied or plagiarised submissions are not accepted",
];

export const programs: Program[] = [
  {
    slug: "data-analytics",
    title: "Data Analytics",
    icon: "chart",
    available: true,
    summary: "Clean, explore and interpret real-style datasets, then present your findings clearly.",
    overview:
      "A structured, project-based virtual internship where you practise the full analytics workflow: asking questions, cleaning data, exploring it, visualising results and communicating insights.",
    skills: ["Data cleaning and preparation", "Exploratory data analysis", "Data visualisation", "Basic statistics", "Insight reporting"],
    objectives: [
      "Prepare messy data for analysis",
      "Explore datasets and find meaningful patterns",
      "Build clear charts and summaries",
      "Document your process and findings professionally",
    ],
    prerequisites: ["Basic computer skills", "Interest in working with data", "Willingness to complete tasks independently", "Final prerequisites will be confirmed before applications open"],
    tasks: [
      "Weekly structured tasks released through the program (schedule to be finalised)",
      "A guided mini-project early in the program",
      "A final portfolio project",
      "Review and feedback on submitted work",
    ],
    deliverables: ["Task submissions", "A final analysis project with documentation", "A short written summary of insights"],
    evaluation: commonEval,
    certificate: [
      "Complete all required tasks and the final project",
      "Submit work by the stated deadlines",
      "Meet the evaluation criteria listed here",
      "Exact thresholds will be confirmed before applications open",
    ],
  },
  {
    slug: "python",
    title: "Python Programming",
    icon: "code",
    available: true,
    summary: "Build practical Python skills through coding tasks and small projects.",
    overview:
      "A structured, project-based virtual internship focused on writing clean, working Python. You progress from fundamentals to small applications and scripts.",
    skills: ["Python syntax and data structures", "Functions and modular code", "File handling", "Working with libraries", "Debugging and testing basics"],
    objectives: [
      "Write readable Python programs",
      "Solve practical problems with code",
      "Organise code into reusable functions and modules",
      "Publish and describe your work in a portfolio",
    ],
    prerequisites: ["Basic computer skills", "A laptop or computer with internet access", "No prior programming experience required unless stated otherwise (to be confirmed)"],
    tasks: [
      "Weekly structured coding tasks (schedule to be finalised)",
      "A guided mini-project",
      "A final portfolio project",
      "Review and feedback on submitted work",
    ],
    deliverables: ["Task submissions", "A final Python project with a README", "Short project write-up"],
    evaluation: commonEval,
    certificate: [
      "Complete all required tasks and the final project",
      "Submit work by the stated deadlines",
      "Meet the evaluation criteria listed here",
      "Exact thresholds will be confirmed before applications open",
    ],
  },
  { slug: "sql-databases", title: "SQL and Databases", icon: "database", available: false, summary: "Query, design and manage relational data." },
  { slug: "excel-power-bi", title: "Excel and Power BI", icon: "sheet", available: false, summary: "Spreadsheet modelling and business dashboards." },
  { slug: "artificial-intelligence", title: "Artificial Intelligence", icon: "brain", available: false, summary: "Hands-on introduction to AI concepts and tools." },
  { slug: "web-development", title: "Web Development", icon: "globe", available: false, summary: "Build and ship modern, responsive websites." },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
