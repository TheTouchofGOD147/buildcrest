import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Portfolio",
  description:
    "Explore construction project information and the range of project types presented by Grandeur BuildCrest Construction Group.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}