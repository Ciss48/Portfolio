export interface Award {
  name: string;
  issuer: string;
  year: string;
  image: string;
  link?: string;
}

export const awards: Award[] = [
  {
    name: "Champion The Xplorators",
    issuer: "FTU University",
    year: "7/2025",
    image: "/images/xplorator.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7345379968022953984/"
  },
  {
    name: "Second Place in The Economaist",
    issuer: "National Economics University",
    year: "9/2024",
    image: "/images/á quân.JPG",
    link: "https://www.facebook.com/share/p/1ADjkEph48/"
  },
  {
    name: "Outstanding Achievement in Youth Union activities",
    issuer: "Ha Noi University Science and Technology",
    year: "2022",
    image: "/images/Giấy khen Bách KHoa.jpeg",
    link: "#"
  }
];

