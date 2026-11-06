import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Construction Quote",
  description:
    "Prepare a construction project inquiry with Grandeur BuildCrest Construction Group. Share your project scope, location, budget, timeline, and requirements.",
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}