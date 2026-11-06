import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ongoing Projects",
  description:
    "Explore Grandeur BuildCrest Construction Group's project showcase and construction project categories.",
};

export default function OngoingProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}