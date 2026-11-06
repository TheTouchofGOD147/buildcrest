import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Services",
  description:
    "Explore commercial construction, residential construction, civil infrastructure, renovation, and site development services at Grandeur BuildCrest.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}