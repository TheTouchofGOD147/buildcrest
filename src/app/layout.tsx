import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grandeur BuildCrest Construction Group | Building With Purpose",
    template: "%s | Grandeur BuildCrest Construction Group",
  },
  description:
    "Explore Grandeur BuildCrest Construction Group's construction services, project information, career opportunities, and project inquiry options.",
  applicationName: "Grandeur BuildCrest Construction Group",
  openGraph: {
    type: "website",
    siteName: "Grandeur BuildCrest Construction Group",
    title: "Grandeur BuildCrest Construction Group | Building With Purpose",
    description:
      "Construction services, project information, careers, and project inquiries at Grandeur BuildCrest Construction Group.",
  },
  twitter: {
    card: "summary",
    title: "Grandeur BuildCrest Construction Group",
    description:
      "Explore construction services, project information, careers, and project inquiries.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}