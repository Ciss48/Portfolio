export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  result?: string;
}

export const experiences: Experience[] = [
  {
    company: "Pixon Games (FPT Adtrue)",
    role: "Data Analyst",
    duration: "1/2025 - 12/2025",
    responsibilities: [
      "Processed and analyzed large-scale datasets in Google BigQuery, conducting in-depth research to identify and implement cost optimization strategies -> Query cost is 200 times higher",
      "Designed and maintained daily ETL pipelines to feed data into interactive dashboards, ensuring both automation and cost efficiency.",
      "Performed advanced user behavior analysis (event sequences, engagement patterns, retention trends) to uncover actionable insights and guide product optimization.",
      "Built and deployed user segmentation models, combining rule-based logic and machine learning approaches for personalized targeting.",
      "Developed predictive models such as purchase prediction, churn prediction, and LTV forecasting to enhance decision-making and optimize overall game performance.",
      "Evaluated the impact of recommendations and model outcomes through A/B testing, ensuring measurable business improvements."
    ],
    result: "=> Achieved a 5% increase in product revenue, contributing significantly to overall profitability."
  } ,
  {
    company: "Vpbank",
    role: "Young Talent - Data Analyst",
    duration: "3/2024 - 12/2024",
    responsibilities: [
      "Analyze requirements from leadership, ask clarifying questions, and apply problem-solving frameworks (such as the 5 Whys and 5W1H) to fully understand the context and root causes behind each request.",
      "Gather and explore data, collaborating closely with cross-functional teams to understand business processes and translate that knowledge into effective solutions.",
      "Build clear, insightful dashboards that directly answer key business questions and address the underlying problem with precision and clarity."
    ],
    result: "=> Successfully delivered 10+ dashboards, providing actionable insights that directly impacted business decisions and improved operational efficiency."
  },
  {
    company: "MCI Consultant",
    role: "Data Analyst Assisstant",
    duration: "2023 - 2025",
    responsibilities: [
      "Assisted in delivering SQL, Python, and Power BI courses for corporate clients (including Viettel, Tasco, VTV, and others).",
      "Supported learners throughout the training program by answering questions, providing guidance, and offering personalized assistance to ensure everyone kept pace with the instructor.",
      "Reviewed and graded assignments, providing constructive feedback to help learners improve their understanding and overall performance."
    ],
    result: "=> Received highly positive feedback from learners and multiple invitations to continue collaborating as a Teaching Assistant from senior instructors. Verified by: HRM MCI – Ms. Trang Pear."
  }
];

