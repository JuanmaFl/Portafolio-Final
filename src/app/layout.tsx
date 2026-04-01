import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan Manuel Florez Robledo | Systems Engineer & Full Stack Developer",
  description:
    "Portfolio of Juan Manuel Florez Robledo — Systems Engineer, Full Stack Developer, and AI Enthusiast based in Medellín, Colombia.",
  openGraph: {
    title: "Juan Manuel Florez Robledo | Portfolio",
    description:
      "Systems Engineer | Full Stack Developer | AI Enthusiast based in Medellín, Colombia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#0F172A] text-[#F5F7FA] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
