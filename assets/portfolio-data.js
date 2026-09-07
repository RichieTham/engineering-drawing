/*
  EDIT THIS FILE to update the website.

  Keep quotation marks and commas in place. To add a project, copy one complete
  project object inside `projects`, change its values, and add the image file to
  assets/images/. All image paths are relative so the site works on GitHub Pages.
*/

window.PORTFOLIO_DATA = {
  profile: {
    name: "Tham Weng Hung",
    role: "Drafter · Product Design Engineer",
    location: "Singapore",
    email: "rthamwh@gmail.com",
    phone: "+65 9723 1411",
    linkedin: "https://www.linkedin.com/in/weng-hung-tham/",
    availability: "Available for selected freelance drafting projects",
    headline: "Fabrication-ready drawings. Practical mechanical design. Clear handover.",
    intro: "I help fabricators, contractors, product teams and individual clients turn ideas, sketches and existing parts into coordinated CAD models and engineering drawing packages.",
    about: "Mechanical and project engineer with more than four years of experience across product development, sheet-metal fabrication, CNC production support and infrastructure delivery. My work connects design intent to the details needed for fabrication, assembly and site handover."
  },

  services: [
    { number: "01", title: "CAD drafting", description: "Drawing clean-up, 2D detailing, redlines, as-builts and coordinated drawing sets." },
    { number: "02", title: "Mechanical design", description: "Part and assembly modelling, packaging studies, interfaces and design development." },
    { number: "03", title: "Sheet metal", description: "Fabrication drawings, cut profiles, bend information and CNC-ready DXF geometry." },
    { number: "04", title: "Documentation", description: "GA, detail, assembly, exploded and BOM packages with a clear technical handover." }
  ],

  experience: [
    { period: "2025—NOW", company: "HollySys (Asia Pacific)", role: "Project Engineer", summary: "Infrastructure installation, testing, commissioning, technical documentation and as-built coordination." },
    { period: "2023—2025", company: "Petracarbon", role: "Product Engineer & Sales Support", summary: "Industrial tooling, precision CAD, CNC documentation and production support." },
    { period: "2021—2023", company: "Metalex Engineering", role: "Drafter cum Machine Operator", summary: "Sheet-metal drafting, fabrication information and CNC production." }
  ],

  projects: [
    {
      slug: "petracarbon-industrial-tooling",
      category: "Professional",
      title: "Industrial Tooling & Assemblies",
      focus: "From-scratch product development",
      period: "2023–2025",
      organization: "Petracarbon Pte. Ltd.",
      summary: "Mechanical design and assembly development for air motors, torque-wrench systems and flange-facing machines.",
      description: "Developed products and assemblies from initial requirements through detailed CAD and production support. The work covered component packaging, interfaces, manufacturability, CNC requirements and technical documentation for industrial tooling.",
      role: "Product Engineer & Sales Support",
      deliverables: ["3D part and assembly models", "Manufacturing and assembly drawings", "CNC and production-support documentation", "Design revisions based on technical feedback"],
      tools: ["SolidWorks", "AutoCAD", "CNC programming"],
      tags: ["Mechanical design", "Assemblies", "Industrial tooling"],
      images: [],
      confidentiality: "Company geometry is not reproduced. This case study describes scope and responsibilities without disclosing proprietary drawings."
    },
    {
      slug: "metalex-sheet-metal-fabrication",
      category: "Professional",
      title: "Sheet-Metal & Fabrication Systems",
      focus: "CAD-to-shop-floor delivery",
      period: "2021–2023",
      organization: "Metalex Engineering Pte. Ltd.",
      summary: "Sheet-metal and fabrication designs ranging from custom house-number plates to doors, frames and scaffolding systems.",
      description: "Prepared practical designs and fabrication information in a production environment, translating customer requirements into accurate drawings and CNC-ready outputs. Hands-on machine exposure informed material use, bend allowances and shop-floor communication.",
      role: "Drafter cum Machine Operator",
      deliverables: ["2D fabrication drawings", "True-to-scale cut profiles", "CNC-ready DXF geometry", "Production revisions and shop-floor support"],
      tools: ["AutoCAD", "CNC laser / plasma", "Bending & rolling"],
      tags: ["Sheet metal", "Fabrication", "CNC"],
      images: [],
      confidentiality: "Original employer drawings are withheld. Similar self-directed samples can be added without exposing client or company IP."
    },
    {
      slug: "enclosed-mobile-service-platform",
      category: "Academic",
      title: "Enclosed Mobile Service Platform",
      focus: "Product architecture + assembly documentation",
      period: "RMIT study",
      organization: "RMIT University",
      summary: "A compact six-wheel platform developed from exterior product form through general arrangement and exploded assembly documentation.",
      description: "This study demonstrates assembly-level modelling rather than a single isolated part. The enclosure, hinged lid, container interface, wheel layout and lower chassis were coordinated as a complete product and communicated through orthographic, section and exploded views.",
      role: "Mechanical design, 3D modelling and drawing preparation",
      deliverables: ["Complete SolidWorks assembly", "General arrangement drawing", "Exploded view with item balloons and BOM", "Key envelope dimensions and section view"],
      tools: ["SolidWorks"],
      tags: ["3D assembly", "BOM", "Technical drawing"],
      images: [
        { src: "assets/images/service-platform-cad.png", alt: "SolidWorks model of an enclosed six-wheel mobile service platform", caption: "Assembly model and exterior packaging study" },
        { src: "assets/images/service-platform-ga.png", alt: "General arrangement drawing of the enclosed mobile service platform", caption: "Orthographic, section and isometric drawing views" },
        { src: "assets/images/service-platform-exploded.png", alt: "Exploded assembly drawing with balloons and bill of materials", caption: "Exploded assembly documentation and BOM" }
      ],
      confidentiality: "Academic work. Dimensions are shown in millimetres where indicated."
    },
    {
      slug: "roller-lift-transfer-platform",
      category: "Academic",
      title: "Roller-Lift Transfer Platform",
      focus: "Mechanism + structural integration",
      period: "RMIT study",
      organization: "RMIT University",
      summary: "A mobile scissor-lift platform integrating a roller deck, structural frame, actuated linkage and compact base enclosure.",
      description: "The assembly explores vertical motion, load-transfer geometry and packaging of the mechanism within a compact mobile base. The drawing set communicates the working envelope, storage dimensions, wheel arrangement and internal assembly relationships.",
      role: "Mechanical design, assembly modelling and drawing preparation",
      deliverables: ["Multi-component assembly model", "Dimensioned general arrangement", "Section view through the mechanism", "Stored and operating envelope definition"],
      tools: ["SolidWorks"],
      tags: ["Mechanisms", "Scissor lift", "Assembly design"],
      images: [
        { src: "assets/images/roller-lift-cad.png", alt: "SolidWorks model of a mobile roller-lift transfer platform", caption: "Roller deck, linkage and mobile base assembly" },
        { src: "assets/images/roller-lift-ga.png", alt: "Dimensioned general arrangement drawing of the roller-lift platform", caption: "Envelope dimensions, section view and component arrangement" }
      ],
      confidentiality: "Academic work. Dimensions are shown in millimetres where indicated."
    },
    {
      slug: "mobile-equipment-platform",
      category: "Academic",
      title: "Mobile Equipment Platform",
      focus: "Chassis + equipment mounting study",
      period: "RMIT study",
      organization: "RMIT University",
      summary: "A compact mobile chassis concept with an elevated equipment mount, perimeter enclosure and integrated wheel modules.",
      description: "A focused modelling study exploring chassis proportions, enclosure geometry and a vertical mounting structure for controls or sensing equipment.",
      role: "3D modelling and product-form development",
      deliverables: ["3D concept model", "Component packaging study"],
      tools: ["SolidWorks"],
      tags: ["Product design", "3D modelling", "Mobile platform"],
      images: [
        { src: "assets/images/mobile-equipment-platform.png", alt: "SolidWorks model of a compact mobile equipment platform with an elevated mount", caption: "Chassis, enclosure and equipment-mounting study" }
      ],
      confidentiality: "Academic work."
    }
  ]
};
