export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  scope: string[];
};

export const services: Service[] = [
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    subtitle: "Spaces designed for business",
    description:
      "Explore construction planning and delivery considerations for offices, retail facilities, hospitality properties, and institutional buildings.",
    image: "photo-1486406146926-c627a92ad1ab",
    scope: [
      "Office and workplace developments",
      "Retail and mixed-use buildings",
      "Institutional and community facilities",
      "Construction scheduling and coordination",
      "Interior build-outs and finishing",
    ],
  },
  {
    slug: "residential-construction",
    title: "Residential Construction",
    subtitle: "Homes built around everyday living",
    description:
      "Explore residential construction solutions ranging from individual homes to multi-unit developments, with attention to planning, materials, and practical functionality.",
    image: "photo-1600585154340-be6161a56a0c",
    scope: [
      "Custom residential homes",
      "Multi-family housing",
      "Residential site development",
      "Structural and finishing work",
      "Construction coordination",
    ],
  },
  {
    slug: "civil-infrastructure",
    title: "Civil & Infrastructure",
    subtitle: "Foundations for connected communities",
    description:
      "Explore the processes and technical coordination involved in roads, transportation systems, utilities, and public infrastructure.",
    image: "photo-1504307651254-35680f356dfd",
    scope: [
      "Roadway and transportation projects",
      "Site drainage and utilities",
      "Earthworks and grading",
      "Public infrastructure improvements",
      "Civil construction coordination",
    ],
  },
  {
    slug: "industrial-construction",
    title: "Industrial Construction",
    subtitle: "Facilities for modern operations",
    description:
      "Explore construction approaches for warehouses, distribution centers, production facilities, and other operational buildings.",
    image: "photo-1581094794329-c8112a89af12",
    scope: [
      "Warehouses and logistics facilities",
      "Manufacturing and production buildings",
      "Industrial structural systems",
      "Equipment-area preparation",
      "Operational facility improvements",
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    subtitle: "Reimagining existing spaces",
    description:
      "Explore upgrades and transformations for existing commercial and residential properties, from interior improvements to larger renovations.",
    image: "photo-1503387762-592deb58ef4e",
    scope: [
      "Interior remodeling",
      "Commercial property improvements",
      "Residential renovations",
      "Structural modification planning",
      "Finishes and space modernization",
    ],
  },
  {
    slug: "site-preparation",
    title: "Site Preparation",
    subtitle: "Preparing the ground for progress",
    description:
      "Explore the early construction activities that prepare a property for development, including clearing, grading, excavation, and access preparation.",
    image: "photo-1519003722824-194d4455a60c",
    scope: [
      "Site clearing and preparation",
      "Excavation and grading",
      "Earthmoving coordination",
      "Construction access preparation",
      "Foundation-area preparation",
    ],
  },
];

export function serviceImage(id: string, width = 1000) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}