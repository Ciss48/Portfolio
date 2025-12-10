export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  details: {
    overview: string;
    technologies: string[];
    keyFeatures: string[];
    results?: string[];
    viewAllLink?: string; // Optional link to GitHub, Notion, or other external resource
  };
}

export const projects: Project[] = [
  {
    id: "customer-churn-analysis",
    title: "Financial reporting system integrated with stock price forecasting",
    description: "Developed a real-time financial reporting and stock forecasting platform using automated data pipelines, OLAP modeling, and LSTM + embedded predictions.",
    coverImage: "/images/prj_stock.png",
    details: {
      overview: "A real-time financial reporting and stock forecasting system that integrates multi-source market and financial data into a unified analytical platform. It combines automated data pipelines, OLAP modeling, and LSTM-based predictions to deliver interactive dashboards and real-time insights for end users.",
      technologies: ["Python","scikit-learn", "LSTM + embedding", "Mysql", "PowerBI", "TensorFlow / Keras"],
      keyFeatures: [
        "Developed a data pipeline in Python to collect data from APIs, including price_stock, company_info, financial, income, and cashflow datasets.",
        "Built a real-time data integration system that loads data into a MySQL database, designed and optimized the data model, data mart, and OLAP structure for analytics and reporting.",
        "Implemented a predictive model using LSTM combined with word embeddings, leveraging historical stock data and financial news to forecast future stock prices.",
        "Created interactive Power BI dashboards to visualize stock performance, financial metrics, and prediction results.",
        "Deployed the entire system to a website, enabling end users to access real-time reports and model predictions."
      ],
      results: [
        "87% prediction accuracy",
        "dashboard has automatic information aggregation system"
      ],
      viewAllLink: "https://github.com/Ciss48/crawl_web" // Add your project-specific link here
    }
  },
  {
    id: "Model to prevent counterfeiting of bank card transaction",
    title: "Model to prevent counterfeiting of bank card transaction",
    description: "An anomaly detection system designed to identify fraudulent credit card transactions using an unsupervised Autoencoder model trained solely on normal data.",
    coverImage: "/images/prj_fraude.png",
    details: {
      overview: "Built an Autoencoder-based fraud detection model that learns normal transaction patterns and flags suspicious activities through reconstruction error thresholds, providing an effective solution for highly imbalanced financial datasets.",
      technologies: ["Python", "TensorFlow / Keras", "Scikit-learn"],
      keyFeatures: [
        "Developed an unsupervised anomaly detection model using Autoencoder to detect fraudulent credit card transactions by learning only from normal (non-fraudulent) data.",
        "The Autoencoder was trained to reconstruct normal transactions accurately, while fraudulent transactions, being significantly different, resulted in high reconstruction error.",
        "Flagged anomalies based on reconstruction error thresholds, enabling effective fraud detection in highly imbalanced datasets."
      ],
      results: [
        "Main metric: Recall 97,96%",
        "caught a lot of frauds, but also caught a lot of normals by mistake"
      ],
      viewAllLink: "https://github.com/Ciss48/Building_model_to_prevent_counterfeiting_of_bank_card_transactions/blob/main/X%C3%A2y_d%E1%BB%B1ng_model_ch%E1%BB%91ng_gi%E1%BA%A3_m%E1%BA%A1o_giao_d%E1%BB%8Bch_th%E1%BA%BB_ng%C3%A2n_h%C3%A0ng.ipynb" // Add your project-specific link here (GitHub, Notion, etc.)
    }
  }
];

