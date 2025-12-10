import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vũ Tiến Dũng - Data Analyst Portfolio",
  description: "Professional portfolio of a Data Analyst specializing in statistical analysis, data visualization, and predictive modeling.",
};

export default function RootLayout({    
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

