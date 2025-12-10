export interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "3/2024",
    image: "/images/Google Data Analyst.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/CPXW2L9F96X2"
  },
  {
    name: "SQL Advanced",
    issuer: "HackerRank",
    year: "9/2024",
    image: "/images/SQL (Advnaced).png",
    link: "https://www.hackerrank.com/certificates/d22285d48001"
  },
  {
    name: "Analyzing and Visualizing Data on Power BI",
    issuer: "MCI",
    year: "11/2023",
    image: "/images/vu-tien-dung-analyzing-and-visualizing-data-on-power-bi.png",
    link: "https://cdn.mcivietnam.com/hocvien/media/certification/vu-tien-dung-analyzing-and-visualizing-data-on-power-bi.png"
  },
  {
    name: "Python for Data Analysis",
    issuer: "MCI",
    year: "9/2024",
    image: "/images/MCI_Python.png",
    link: "https://cdn.mcivietnam.com/hocvien/media/certification/vu-tien-dung-python-foundation-in-data-analytics.png"
  },
  {
    name: "MOS Excel",
    issuer: "Microsoft",
    year: "9/2023",
    image: "/images/MOS.png",
    link: "https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=251"
  },
  {
    name: "PL-300: Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    year: "12/2025",
    image: "/images/pl-300.png",
    link: "https://www.credly.com/badges/62b63991-4e5a-40a5-938d-7382005195a5/public_url"
  }
];

