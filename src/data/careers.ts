export type Career = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
};

export const careers: Career[] = [
  {
    slug: "construction-project-manager",
    title: "Construction Project Manager",
    category: "Management",
    summary: "Learn about coordinating construction projects, schedules, budgets, subcontractors, and project delivery.",
    responsibilities: [
      "Coordinate construction schedules and milestones",
      "Monitor project budgets and resources",
      "Communicate with clients, contractors, and project teams",
      "Review progress reports and project documentation",
      "Support quality and safety requirements"
    ],
    qualifications: [
      "Experience in construction or project management",
      "Strong planning and communication skills",
      "Knowledge of construction scheduling",
      "Ability to coordinate multiple teams",
      "Relevant education or industry certification may be beneficial"
    ]
  },
  {
    slug: "civil-engineer",
    title: "Civil Engineer",
    category: "Engineering",
    summary: "Explore engineering roles supporting structural, site-development, transportation, and infrastructure projects.",
    responsibilities: [
      "Review engineering drawings and specifications",
      "Support site and infrastructure planning",
      "Coordinate with technical teams and contractors",
      "Assist with technical documentation",
      "Support compliance with applicable engineering standards"
    ],
    qualifications: [
      "Relevant civil engineering education",
      "Knowledge of engineering drawings",
      "Strong analytical and problem-solving skills",
      "Familiarity with construction processes",
      "Professional licensure may be required for certain duties"
    ]
  },
  {
    slug: "site-supervisor",
    title: "Construction Site Supervisor",
    category: "Management",
    summary: "Explore the daily coordination of construction crews, site activities, materials, and safety practices.",
    responsibilities: [
      "Coordinate daily site activities",
      "Communicate work assignments and priorities",
      "Monitor materials and equipment usage",
      "Report project progress",
      "Promote safe working practices"
    ],
    qualifications: [
      "Practical construction site experience",
      "Team leadership and communication skills",
      "Knowledge of construction workflows",
      "Awareness of jobsite safety procedures",
      "Ability to interpret work plans and schedules"
    ]
  },
  {
    slug: "heavy-equipment-operator",
    title: "Heavy Equipment Operator",
    category: "Field Operations",
    summary: "Learn about operating construction equipment for excavation, grading, earthmoving, and site preparation.",
    responsibilities: [
      "Operate authorized construction equipment",
      "Perform routine pre-operation checks",
      "Follow site plans and supervisor instructions",
      "Report equipment concerns",
      "Follow applicable safety procedures"
    ],
    qualifications: [
      "Relevant equipment operating experience",
      "Required licenses or certifications where applicable",
      "Understanding of equipment safety",
      "Ability to work in outdoor site environments",
      "Strong attention to instructions and surroundings"
    ]
  },
  {
    slug: "carpenter",
    title: "Construction Carpenter",
    category: "Skilled Trades",
    summary: "Explore carpentry roles involving framing, installation, measurement, and building components.",
    responsibilities: [
      "Measure and prepare building materials",
      "Perform framing and installation tasks",
      "Interpret relevant drawings",
      "Maintain tools and work areas",
      "Follow quality and safety procedures"
    ],
    qualifications: [
      "Carpentry experience or relevant training",
      "Ability to use appropriate hand and power tools",
      "Knowledge of construction measurements",
      "Attention to detail",
      "Ability to follow worksite safety requirements"
    ]
  },
  {
    slug: "construction-laborer",
    title: "Construction Laborer",
    category: "Field Operations",
    summary: "Learn about general construction support, site preparation, material handling, and teamwork.",
    responsibilities: [
      "Assist with site preparation",
      "Move and organize construction materials",
      "Support skilled trades and site crews",
      "Maintain clean work areas",
      "Follow supervisor instructions and safety practices"
    ],
    qualifications: [
      "Willingness to learn construction procedures",
      "Ability to follow instructions",
      "Reliable teamwork and communication",
      "Ability to meet applicable physical job requirements",
      "Prior construction experience may be helpful"
    ]
  },
  {
    slug: "safety-coordinator",
    title: "Construction Safety Coordinator",
    category: "Safety & Compliance",
    summary: "Explore construction safety coordination, workplace inspections, training support, and incident documentation.",
    responsibilities: [
      "Support site safety inspections",
      "Maintain safety documentation",
      "Help coordinate safety orientations",
      "Report identified hazards",
      "Assist with safety improvement activities"
    ],
    qualifications: [
      "Knowledge of construction safety practices",
      "Strong documentation and communication skills",
      "Relevant safety training",
      "Ability to identify and report hazards",
      "Additional credentials may be required depending on the role"
    ]
  },
  {
    slug: "administrative-coordinator",
    title: "Administrative & Project Coordinator",
    category: "Office & Support",
    summary: "Explore administrative roles supporting project records, scheduling, communication, and construction operations.",
    responsibilities: [
      "Maintain project and office documentation",
      "Coordinate schedules and correspondence",
      "Assist with reports and recordkeeping",
      "Communicate with internal teams",
      "Support administrative project workflows"
    ],
    qualifications: [
      "Strong organization and communication skills",
      "Experience with common office software",
      "Attention to confidentiality and detail",
      "Ability to manage multiple priorities",
      "Administrative experience may be beneficial"
    ]
  }
,
  {
    slug: "structural-engineer",
    title: "Structural Engineer",
    category: "Engineering",
    summary: "Explore Structural design, building stability, technical reviews, and coordination.",
    responsibilities: [
      "Review structural design calculations",
      "Coordinate structural drawings",
      "Evaluate building loads",
      "Support construction technical reviews",
      "Document engineering changes"
    ],
    qualifications: [
      "Structural engineering education",
      "Knowledge of structural analysis",
      "Engineering software proficiency",
      "Ability to interpret technical drawings",
      "Professional licensure where required"
    ]
  },
  {
    slug: "construction-estimator",
    title: "Construction Estimator",
    category: "Engineering",
    summary: "Explore Cost estimates, material quantities, budgets, and bid preparation.",
    responsibilities: [
      "Prepare construction cost estimates",
      "Review project drawings and specifications",
      "Calculate labor and material quantities",
      "Support bid preparation",
      "Maintain pricing documentation"
    ],
    qualifications: [
      "Construction estimating experience",
      "Strong numerical skills",
      "Spreadsheet proficiency",
      "Blueprint reading ability",
      "Knowledge of construction materials"
    ]
  },
  {
    slug: "quantity-surveyor",
    title: "Quantity Surveyor",
    category: "Engineering",
    summary: "Explore Construction measurement, cost planning, valuations, and contract administration.",
    responsibilities: [
      "Measure construction quantities",
      "Prepare cost plans",
      "Review payment valuations",
      "Support contract administration",
      "Monitor cost variations"
    ],
    qualifications: [
      "Quantity surveying education or experience",
      "Construction measurement skills",
      "Knowledge of contracts",
      "Cost reporting ability",
      "Strong attention to detail"
    ]
  },
  {
    slug: "land-surveyor",
    title: "Land Surveyor",
    category: "Engineering",
    summary: "Explore Site boundaries, elevation measurements, mapping, and construction layout.",
    responsibilities: [
      "Conduct site measurements",
      "Establish construction reference points",
      "Prepare survey records",
      "Interpret site plans",
      "Coordinate surveying data"
    ],
    qualifications: [
      "Surveying education or training",
      "Survey equipment proficiency",
      "Mapping knowledge",
      "Strong accuracy and documentation skills",
      "Licensure where required"
    ]
  },
  {
    slug: "architect",
    title: "Architect",
    category: "Engineering",
    summary: "Explore Building design, architectural drawings, spatial planning, and technical coordination.",
    responsibilities: [
      "Develop architectural designs",
      "Prepare and review building drawings",
      "Coordinate with engineering teams",
      "Review design requirements",
      "Support construction documentation"
    ],
    qualifications: [
      "Architectural education",
      "Design software proficiency",
      "Knowledge of building codes",
      "Strong design communication",
      "Professional licensure where required"
    ]
  },
  {
    slug: "cad-technician",
    title: "CAD Technician",
    category: "Engineering",
    summary: "Explore Digital drafting, construction drawings, revisions, and technical documentation.",
    responsibilities: [
      "Prepare technical drawings",
      "Update drawing revisions",
      "Maintain CAD documentation",
      "Coordinate drawing standards",
      "Support engineering teams"
    ],
    qualifications: [
      "CAD software proficiency",
      "Technical drafting training",
      "Drawing interpretation skills",
      "Document control knowledge",
      "Attention to detail"
    ]
  },
  {
    slug: "electrician",
    title: "Construction Electrician",
    category: "Skilled Trades",
    summary: "Explore Electrical installation, wiring, distribution systems, and safety.",
    responsibilities: [
      "Install electrical systems",
      "Interpret electrical plans",
      "Test electrical installations",
      "Troubleshoot electrical faults",
      "Follow electrical safety procedures"
    ],
    qualifications: [
      "Electrical trade training",
      "Knowledge of electrical codes",
      "Safe tool operation",
      "Electrical troubleshooting skills",
      "Licensure where required"
    ]
  },
  {
    slug: "plumber",
    title: "Construction Plumber",
    category: "Skilled Trades",
    summary: "Explore Pipework, plumbing systems, fixtures, and building water infrastructure.",
    responsibilities: [
      "Install plumbing fixtures",
      "Fit and connect piping systems",
      "Read plumbing drawings",
      "Test installed systems",
      "Follow plumbing safety standards"
    ],
    qualifications: [
      "Plumbing trade experience",
      "Pipe installation knowledge",
      "Blueprint reading skills",
      "Tool proficiency",
      "Licensure where required"
    ]
  },
  {
    slug: "hvac-technician",
    title: "HVAC Technician",
    category: "Skilled Trades",
    summary: "Explore Heating, ventilation, air conditioning installation, and system testing.",
    responsibilities: [
      "Install HVAC equipment",
      "Inspect ventilation systems",
      "Test heating and cooling systems",
      "Read mechanical plans",
      "Perform equipment checks"
    ],
    qualifications: [
      "HVAC technical training",
      "Mechanical system knowledge",
      "Diagnostic skills",
      "Applicable refrigerant certifications",
      "Worksite safety awareness"
    ]
  },
  {
    slug: "welder",
    title: "Construction Welder",
    category: "Skilled Trades",
    summary: "Explore Metal fabrication, welding operations, structural connections, and inspection.",
    responsibilities: [
      "Perform approved welding operations",
      "Read fabrication drawings",
      "Prepare metal components",
      "Inspect completed welds",
      "Maintain welding equipment"
    ],
    qualifications: [
      "Welding training",
      "Relevant welding certifications",
      "Blueprint interpretation",
      "Metal fabrication knowledge",
      "Welding safety awareness"
    ]
  },
  {
    slug: "mason",
    title: "Construction Mason",
    category: "Skilled Trades",
    summary: "Explore Brickwork, blockwork, stone installation, and masonry construction.",
    responsibilities: [
      "Lay bricks and blocks",
      "Prepare masonry materials",
      "Follow construction layouts",
      "Check alignment and levels",
      "Maintain masonry quality"
    ],
    qualifications: [
      "Masonry experience",
      "Material preparation knowledge",
      "Measurement skills",
      "Tool proficiency",
      "Attention to workmanship"
    ]
  },
  {
    slug: "concrete-finisher",
    title: "Concrete Finisher",
    category: "Skilled Trades",
    summary: "Explore Concrete placement, leveling, finishing, and surface quality.",
    responsibilities: [
      "Prepare concrete work areas",
      "Assist with concrete placement",
      "Level concrete surfaces",
      "Apply finishing techniques",
      "Follow curing procedures"
    ],
    qualifications: [
      "Concrete finishing experience",
      "Finishing tool proficiency",
      "Knowledge of concrete materials",
      "Surface quality awareness",
      "Construction safety knowledge"
    ]
  },
  {
    slug: "crane-operator",
    title: "Crane Operator",
    category: "Field Operations",
    summary: "Explore Crane operations, lifting coordination, load handling, and equipment checks.",
    responsibilities: [
      "Operate authorized crane equipment",
      "Perform equipment inspections",
      "Coordinate lifting operations",
      "Follow approved lift plans",
      "Report equipment concerns"
    ],
    qualifications: [
      "Applicable crane certification",
      "Crane operating experience",
      "Load-handling knowledge",
      "Strong communication skills",
      "Lifting safety awareness"
    ]
  },
  {
    slug: "excavation-operator",
    title: "Excavation Equipment Operator",
    category: "Field Operations",
    summary: "Explore Excavation, earthmoving, trenching, grading, and site preparation.",
    responsibilities: [
      "Operate excavation equipment",
      "Follow grading plans",
      "Perform equipment checks",
      "Coordinate with ground crews",
      "Observe excavation safety procedures"
    ],
    qualifications: [
      "Excavation equipment experience",
      "Relevant operator credentials",
      "Knowledge of grading",
      "Equipment inspection skills",
      "Site safety awareness"
    ]
  },
  {
    slug: "construction-foreman",
    title: "Construction Foreman",
    category: "Field Operations",
    summary: "Explore Crew leadership, daily work coordination, site productivity, and safety.",
    responsibilities: [
      "Supervise assigned crews",
      "Coordinate daily work activities",
      "Monitor construction progress",
      "Communicate material needs",
      "Support site safety and quality"
    ],
    qualifications: [
      "Construction field experience",
      "Crew leadership skills",
      "Knowledge of construction methods",
      "Scheduling ability",
      "Strong communication"
    ]
  },
  {
    slug: "procurement-specialist",
    title: "Construction Procurement Specialist",
    category: "Office & Support",
    summary: "Explore Materials purchasing, supplier coordination, procurement records, and deliveries.",
    responsibilities: [
      "Source construction materials",
      "Coordinate supplier quotations",
      "Prepare purchase documentation",
      "Track deliveries",
      "Maintain procurement records"
    ],
    qualifications: [
      "Procurement experience",
      "Supplier communication skills",
      "Spreadsheet proficiency",
      "Organizational ability",
      "Knowledge of construction materials"
    ]
  }
];
export const careerCategories = [
  "All Careers",
  ...new Set(careers.map(career => career.category))
];