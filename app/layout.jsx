import localFont from "next/font/local";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Giang Le | Backend Developer",
  description:
    "Senior Backend Developer with 6+ years of experience in Golang, microservices architecture, cloud-native infrastructure, and agentic AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
