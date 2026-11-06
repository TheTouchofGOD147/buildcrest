import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Careers",
  description:
    "Explore construction career profiles, engineering roles, project management, and field operations opportunities at Grandeur BuildCrest.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}