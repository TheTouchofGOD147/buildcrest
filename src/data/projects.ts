export type Project = {
  slug: string;
  title: string;
  city: string;
  state: string;
  type: string;
  positions: string;
  image: string;
  summary: string;
  scope: string[];
  roles: string[];
};

export const projects: Project[] = [
  {
    slug: "riverside-medical-center",
    title: "Riverside Medical Center",
    city: "Orlando",
    state: "FL",
    type: "Commercial Construction",
    positions: "20+",
    image: "photo-1504307651254-35680f356dfd",
    summary: "A healthcare construction project highlighting the planning, structural work, and coordination involved in a modern medical facility.",
    scope: [
      "Site preparation and foundation planning",
      "Structural construction and building envelope",
      "Mechanical, electrical, and plumbing coordination",
      "Interior finishing and quality inspections"
    ],
    roles: ["General Laborer", "Electrician", "Carpenter", "Site Supervisor"]
  },
  {
    slug: "i75-highway-expansion",
    title: "I-75 Highway Expansion",
    city: "Atlanta",
    state: "GA",
    type: "Road & Infrastructure",
    positions: "35+",
    image: "photo-1760708626681-59a5373819a6",
    summary: "An infrastructure project showcasing roadway expansion, earthworks, drainage, and construction logistics.",
    scope: [
      "Earthworks and grading",
      "Roadway preparation and paving",
      "Drainage and utility coordination",
      "Traffic management and safety planning"
    ],
    roles: ["Equipment Operator", "Road Crew Worker", "Survey Technician", "Safety Coordinator"]
  },
  {
    slug: "sunpeak-industrial-facility",
    title: "SunPeak Industrial Facility",
    city: "Dallas",
    state: "TX",
    type: "Industrial Construction",
    positions: "40+",
    image: "photo-1722079358008-2c72a8973998",
    summary: "An industrial development highlighting facility construction, structural systems, and specialized trade coordination.",
    scope: [
      "Industrial site development",
      "Structural framing and building systems",
      "Utility and equipment infrastructure",
      "Testing, inspections, and commissioning"
    ],
    roles: ["Welder", "Equipment Operator", "Electrician", "Construction Foreman"]
  },
  {
    slug: "maple-grove-housing-development",
    title: "Maple Grove Housing Development",
    city: "Phoenix",
    state: "AZ",
    type: "Residential Construction",
    positions: "25+",
    image: "photo-1676802037786-3697d60497ae",
    summary: "A residential development featuring coordinated homebuilding, site infrastructure, and finishing trades.",
    scope: [
      "Residential site preparation",
      "Foundations and structural framing",
      "Roofing, insulation, and exterior work",
      "Interior finishing and final inspections"
    ],
    roles: ["Carpenter", "Plumber", "Painter", "General Laborer"]
  },
  {
    slug: "denver-civic-center",
    title: "Denver Civic Center Redevelopment",
    city: "Denver", state: "CO",
    type: "Commercial Construction",
    positions: "18+",
    image: "photo-1743819344477-3b67c19621e9",
    summary: "A civic redevelopment highlighting public facilities, structural improvements, and coordinated building trades.",
    scope: ["Site preparation", "Structural improvements", "Building systems", "Interior finishing"],
    roles: ["Carpenter", "Electrician", "Project Coordinator", "Site Supervisor"]
  },
  {
    slug: "pacific-coast-transit-hub",
    title: "Pacific Coast Transit Hub",
    city: "Los Angeles", state: "CA",
    type: "Road & Infrastructure",
    positions: "32+",
    image: "photo-1706581324170-d847716c4512",
    summary: "A transportation project covering access roads, passenger infrastructure, and utility coordination.",
    scope: ["Groundworks", "Transportation access", "Drainage systems", "Safety inspections"],
    roles: ["Equipment Operator", "Survey Technician", "Concrete Worker", "Safety Coordinator"]
  },
  {
    slug: "chicago-logistics-center",
    title: "Chicago Logistics Center",
    city: "Chicago", state: "IL",
    type: "Industrial Construction",
    positions: "28+",
    image: "photo-1632643363807-0a4618b44443",
    summary: "A logistics facility featuring industrial building systems and large-scale construction coordination.",
    scope: ["Site development", "Structural framing", "Electrical systems", "Facility commissioning"],
    roles: ["Welder", "Electrician", "Equipment Operator", "Foreman"]
  },
  {
    slug: "seattle-waterfront-residences",
    title: "Seattle Waterfront Residences",
    city: "Seattle", state: "WA",
    type: "Residential Construction",
    positions: "22+",
    image: "photo-1673190889421-c02cccd99e2f",
    summary: "A residential development showcasing modern housing construction and building-envelope work.",
    scope: ["Foundation construction", "Structural framing", "Exterior finishing", "Interior installation"],
    roles: ["Carpenter", "Plumber", "Painter", "General Laborer"]
  },
  {
    slug: "nashville-community-hospital",
    title: "Nashville Community Hospital",
    city: "Nashville", state: "TN",
    type: "Healthcare Construction",
    positions: "26+",
    image: "photo-1609867271967-a82f85c48531",
    summary: "A healthcare development featuring medical building construction and technical systems coordination.",
    scope: ["Structural work", "Mechanical systems", "Electrical installations", "Quality inspections"],
    roles: ["Electrician", "HVAC Technician", "Carpenter", "Site Supervisor"]
  },
  {
    slug: "boston-harbor-office-complex",
    title: "Boston Harbor Office Complex",
    city: "Boston", state: "MA",
    type: "Commercial Construction",
    positions: "24+",
    image: "photo-1662120399978-738d233edbec",
    summary: "An office development covering commercial construction from foundations to interior fit-out.",
    scope: ["Site preparation", "Structural construction", "Building envelope", "Interior fit-out"],
    roles: ["Concrete Worker", "Electrician", "Drywall Installer", "Foreman"]
  },
  {
    slug: "charlotte-greenfield-homes",
    title: "Charlotte Greenfield Homes",
    city: "Charlotte", state: "NC",
    type: "Residential Construction",
    positions: "20+",
    image: "photo-1746787510909-92956787bb5f",
    summary: "A housing development focused on residential site planning and coordinated homebuilding.",
    scope: ["Land preparation", "Foundations", "Framing and roofing", "Interior finishing"],
    roles: ["Carpenter", "Roofer", "Plumber", "Painter"]
  },
  {
    slug: "detroit-manufacturing-expansion",
    title: "Detroit Manufacturing Expansion",
    city: "Detroit", state: "MI",
    type: "Industrial Construction",
    positions: "30+",
    image: "photo-1723134016539-2ee1950ec2c0",
    summary: "A manufacturing facility expansion involving structural, utility, and industrial building systems.",
    scope: ["Facility expansion", "Steel framing", "Industrial utilities", "Equipment infrastructure"],
    roles: ["Welder", "Millwright", "Electrician", "Equipment Operator"]
  },
  {
    slug: "miami-coastal-infrastructure",
    title: "Miami Coastal Infrastructure",
    city: "Miami", state: "FL",
    type: "Road & Infrastructure",
    positions: "27+",
    image: "photo-1772852340517-b11ec88979fc",
    summary: "An infrastructure project highlighting drainage improvements, roadway construction, and resilient site planning.",
    scope: ["Site grading", "Drainage construction", "Roadway improvements", "Environmental controls"],
    roles: ["Civil Technician", "Equipment Operator", "Concrete Worker", "Safety Coordinator"]
  },
  {
    slug: "las-vegas-convention-expansion",
    title: "Las Vegas Convention Expansion",
    city: "Las Vegas", state: "NV",
    type: "Commercial Construction",
    positions: "34+",
    image: "photo-1744296133544-bbc0906cbc89",
    summary: "A convention facility expansion covering structural construction and complex building systems.",
    scope: ["Structural expansion", "Mechanical installations", "Electrical coordination", "Interior finishing"],
    roles: ["Ironworker", "Electrician", "HVAC Technician", "Site Supervisor"]
  },
  {
    slug: "minneapolis-energy-campus",
    title: "Minneapolis Energy Campus",
    city: "Minneapolis", state: "MN",
    type: "Industrial Construction",
    positions: "21+",
    image: "photo-1504917595217-d4dc5ebe6122",
    summary: "An energy-support facility highlighting industrial structures and utility infrastructure.",
    scope: ["Site development", "Industrial structures", "Electrical infrastructure", "Systems testing"],
    roles: ["Electrician", "Welder", "Equipment Operator", "Safety Coordinator"]
  },
  {
    slug: "philadelphia-urban-renewal",
    title: "Philadelphia Urban Renewal",
    city: "Philadelphia", state: "PA",
    type: "Residential Construction",
    positions: "19+",
    image: "photo-1676802865175-d13cbd7f57d1",
    summary: "An urban residential redevelopment featuring renovation, structural upgrades, and finishing trades.",
    scope: ["Site assessment", "Structural upgrades", "Building systems", "Interior renovation"],
    roles: ["Carpenter", "Electrician", "Plumber", "Painter"]
  }];

export const usStates = [
  ["AL", "Alabama"],
  ["AK", "Alaska"],
  ["AZ", "Arizona"],
  ["AR", "Arkansas"],
  ["CA", "California"],
  ["CO", "Colorado"],
  ["CT", "Connecticut"],
  ["DE", "Delaware"],
  ["FL", "Florida"],
  ["GA", "Georgia"],
  ["HI", "Hawaii"],
  ["ID", "Idaho"],
  ["IL", "Illinois"],
  ["IN", "Indiana"],
  ["IA", "Iowa"],
  ["KS", "Kansas"],
  ["KY", "Kentucky"],
  ["LA", "Louisiana"],
  ["ME", "Maine"],
  ["MD", "Maryland"],
  ["MA", "Massachusetts"],
  ["MI", "Michigan"],
  ["MN", "Minnesota"],
  ["MS", "Mississippi"],
  ["MO", "Missouri"],
  ["MT", "Montana"],
  ["NE", "Nebraska"],
  ["NV", "Nevada"],
  ["NH", "New Hampshire"],
  ["NJ", "New Jersey"],
  ["NM", "New Mexico"],
  ["NY", "New York"],
  ["NC", "North Carolina"],
  ["ND", "North Dakota"],
  ["OH", "Ohio"],
  ["OK", "Oklahoma"],
  ["OR", "Oregon"],
  ["PA", "Pennsylvania"],
  ["RI", "Rhode Island"],
  ["SC", "South Carolina"],
  ["SD", "South Dakota"],
  ["TN", "Tennessee"],
  ["TX", "Texas"],
  ["UT", "Utah"],
  ["VT", "Vermont"],
  ["VA", "Virginia"],
  ["WA", "Washington"],
  ["WV", "West Virginia"],
  ["WI", "Wisconsin"],
  ["WY", "Wyoming"]
] as const;
export function projectImage(id: string, width = 900) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}