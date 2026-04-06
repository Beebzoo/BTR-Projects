/* ============================================================================
   BTR PROJECT CATALOG
   ============================================================================
   This file holds every project shown on projects.html.
   To add a new project, copy one of the existing entries below, paste it
   just before the closing  ];  and edit the fields.

   FULL INSTRUCTIONS: see README.md in the repo root.

   ----------------------------------------------------------------------------
   FIELDS (each project is a JavaScript object inside { ... }):

     title         (required) — short project title
     supervisor    (required) — supervisor full name(s)
     institution   (required) — department / institute / company
     location      (required) — city or campus
     email         (required) — student contact email
     disciplines   (required) — array, e.g. ["Chemistry","Biotechnology"]
     types         (required) — array, e.g. ["Experimental","Computational"]
     description   (required) — 1–2 sentence summary shown on the card
     dateAdded     (required) — "YYYY-MM" string, used to show project age
     background    (optional) — longer paragraph with scientific context
     details       (optional) — array of bullet points
     methods       (optional) — methods / techniques / software
     recommended   (optional) — recommended courses / background
     note          (optional) — extra note (e.g. "interview required")

   ----------------------------------------------------------------------------
   ALLOWED DISCIPLINES (use these exact strings):
     Bioinformatics, Biomedical Sciences, Biotechnology, Chemistry,
     Ecology & Fieldwork, Materials Science, Neuroscience, Physics,
     Sustainability, Other

   ALLOWED TYPES:
     Experimental, Theoretical, Computational, Literature Review

   ----------------------------------------------------------------------------
   COMMON MISTAKES:
     - Forgetting the comma after  }  between projects
     - Forgetting to wrap text in "double quotes"
     - Using a discipline that isn't in the list above (the filter won't match)
   ============================================================================ */

window.BTR_PROJECTS = [
  {
    title: "Gravitational Wave Research",
    supervisor: "Dr. Sebastian Steinlechner & GWFP Team",
    institution: "Department of Gravitational Waves and Fundamental Physics",
    location: "Maastricht (DUB30)",
    email: "secretariat-gwfp@maastrichtuniversity.nl",
    disciplines: ["Physics"],
    types: ["Experimental","Theoretical"],
    description: "Work on technologies for next-generation gravitational-wave detectors like the Einstein Telescope. Multiple project areas available.",
    background: "Maastricht University is one of the leading places for gravitational-wave research, hosting the ETpathfinder prototype facility.",
    details: ["Gravitational-wave theory: modeling and analyzing sources","Laser interferometry for better detectors","Quantum optics and metrology","Optical coatings for laser mirrors","Electronics and data acquisition"],
    dateAdded: "2024-01"
  },
  {
    title: "Theoretical Particle Physics",
    supervisor: "Dr. Keri Vos",
    institution: "Gravitational Waves and Fundamental Physics (GWFP)",
    location: "Maastricht (DUB30, Room 1.050)",
    email: "k.vos@maastrichtuniversity.nl",
    disciplines: ["Physics"],
    types: ["Theoretical","Computational"],
    description: "Test the Standard Model of particle physics through theoretical and data-analysis projects.",
    background: "Investigates open questions like matter-antimatter asymmetry in the universe.",
    details: ["The Matter-Antimatter asymmetry","The flavor structure of Dark Matter","Solving the B→πK puzzle with New Physics","Charm physics: phenomenological/applied"],
    recommended: "Particle Physics, Quantum Mechanics, and Theory of Relativity courses",
    dateAdded: "2024-01"
  },
  {
    title: "Bio-based Biodegradable Fibers (Glaukos)",
    supervisor: "Dr. Cristina Palacios-Mateo",
    institution: "AMIBM",
    location: "Brightlands Chemelot Campus",
    email: "c.palaciosmateo@maastrichtuniversity.nl",
    disciplines: ["Materials Science","Sustainability"],
    types: ["Experimental"],
    description: "Develop bio-based, biodegradable textile fibers as an alternative to PET, in a Horizon 2020 EU project.",
    background: "Two thirds of all fibers produced globally are synthetic. Glaukos develops bio-based, biodegradable fibers for clothing and fishing gear.",
    details: ["Characterize granulates (DSC, GPC, Rheology)","Spin fibers through FET semi-industrial line","Characterize fibers (tensile strength, microscopy, crystallinity)"],
    methods: "DSC, GPC, rheology, fiber spinning, microscopy",
    dateAdded: "2024-01"
  },
  {
    title: "Engineered Cutinase for PET De-polymerization",
    supervisor: "Dr. Cristina Palacios-Mateo",
    institution: "AMIBM",
    location: "Brightlands Chemelot Campus",
    email: "c.palaciosmateo@maastrichtuniversity.nl",
    disciplines: ["Biotechnology","Chemistry"],
    types: ["Experimental"],
    description: "Optimize production of an engineered enzyme (LCC variant) capable of degrading PET plastic in 10 hours.",
    background: "Recent research has identified highly effective PETases. This project optimizes production and preservation of the LCC variant.",
    details: ["Transform E.coli with plasmid","Express LCC variant","Purify through IMAC","SDS-Page and sequencing","pNPB activity assay"],
    methods: "Protein expression, IMAC purification, SDS-PAGE, enzyme assays",
    dateAdded: "2024-01"
  },
  {
    title: "Silica Aerogel from Waste Materials",
    supervisor: "Marina Borzova (PhD), Dr. Katrin Schollbach",
    institution: "Eindhoven University of Technology",
    location: "Eindhoven",
    email: "m.borzova@tue.nl",
    disciplines: ["Materials Science","Sustainability"],
    types: ["Experimental"],
    description: "Develop sustainable silica aerogel from waste materials like mineral wool and glass for circular insulation.",
    background: "3.7M poorly insulated Dutch homes need renovation. Silica aerogel is highly effective but expensive.",
    methods: "XRD, XRF, BET, DSC, thermal conductivity, ambient pressure drying",
    dateAdded: "2024-01"
  },
  {
    title: "3D Printing: Polyamide Crystallization Control",
    supervisor: "Dr. Jules Harings",
    institution: "AMIBM — Macromolecular Physics & Technology",
    location: "Brightlands Chemelot Campus",
    email: "jules.harings@maastrichtuniversity.nl",
    disciplines: ["Materials Science","Chemistry"],
    types: ["Experimental"],
    description: "Develop bio-inspired polyamide formulations for 3D printing (FDM/SLS) with improved interfacial bonding.",
    background: "3D printed thermoplastics have inferior mechanical properties due to insufficient mixing at weld interfaces. Uses water/ions to control crystallization, inspired by biology.",
    methods: "Polarized Optical Microscopy, DSC, FTIR, rheology, dynamic mechanical testing",
    dateAdded: "2024-01"
  },
  {
    title: "Non-Crystallizing Deep Eutectic Solvents",
    supervisor: "Dr. Laura Kollau",
    institution: "Circular Chemical Engineering, UM",
    location: "Brightlands Chemelot Campus",
    email: "laura.kollau@maastrichtuniversity.nl",
    disciplines: ["Chemistry","Sustainability"],
    types: ["Experimental"],
    description: "Investigate fundamental properties of non-crystallizing deep eutectic solvents (DESs) as sustainable solvents.",
    details: ["Evaluate known non-crystallizing DESs","Predict and test new combinations","Analyze theoretical parameters","Determine driving factors for crystallization kinetics"],
    methods: "DSC, 1D and 2D NMR, organic synthesis",
    dateAdded: "2024-01"
  },
  {
    title: "MEMS-based Microfluidic Droplet Analysis",
    supervisor: "Lukas Bartsch (PhD), Dr. Laura Kollau",
    institution: "Circular Chemical Engineering, UM",
    location: "Brightlands Chemelot Campus",
    email: "laura.kollau@maastrichtuniversity.nl",
    disciplines: ["Chemistry"],
    types: ["Experimental"],
    description: "Develop methodology using thermophysical sensors (ρ, μ) to measure microdroplet volumes in microfluidic systems.",
    background: "Current optical methods require expensive setups. MEMS-based multisensory systems offer an inline alternative.",
    methods: "MEMS sensors, microfluidic reactor operation, data analysis",
    dateAdded: "2024-01"
  },
  {
    title: "Beta-Turn Mimics via Stereoselective Ugi Reaction",
    supervisor: "Dr. Jordy M. Saya",
    institution: "AMIBM — Biobased Organic Chemistry",
    location: "Brightlands Chemelot Campus",
    email: "j.saya@maastrichtuniversity.nl",
    disciplines: ["Chemistry"],
    types: ["Experimental"],
    description: "Synthesize β-turn mimics using Ugi multicomponent reaction for protein-protein interaction inhibitors.",
    background: "β-turns are key protein structures. Traditional synthesis (SPPS) of D-Pro-L-Pro is difficult; Ugi enables single-step synthesis.",
    methods: "Ugi MCR, organic synthesis, peptide chemistry, chromatography",
    dateAdded: "2024-01"
  },
  {
    title: "Glycerol → Dihydroxyacetone via Photocatalysis",
    supervisor: "Dr. Jordy M. Saya",
    institution: "AMIBM — Biobased Organic Chemistry",
    location: "Brightlands Chemelot Campus",
    email: "j.saya@maastrichtuniversity.nl",
    disciplines: ["Chemistry","Sustainability"],
    types: ["Experimental"],
    description: "Convert biodiesel-waste glycerol into high-value dihydroxyacetone via cooperative photocatalysis.",
    background: "Biodiesel produces 10 wt% glycerol byproduct. Nature-inspired triple photoredox/cobalt/boronic-acid catalysis enables selective oxidation.",
    methods: "Photochemistry, catalysis, organic synthesis, spectroscopy",
    dateAdded: "2024-01"
  },
  {
    title: "Modified Asinger Reaction for Thiazoline Polymers",
    supervisor: "Dr. Jordy M. Saya",
    institution: "AMIBM — Biobased Organic Chemistry",
    location: "Brightlands Chemelot Campus",
    email: "j.saya@maastrichtuniversity.nl",
    disciplines: ["Chemistry","Materials Science"],
    types: ["Experimental"],
    description: "Develop novel thiazoline-containing polymers using the underexplored Asinger MCR for opto/wearable electronics.",
    methods: "Multicomponent reactions, polymer synthesis, material characterization",
    dateAdded: "2024-01"
  },
  {
    title: "Structure-Based Virtual Screening for Sepsis",
    supervisor: "Dr. Gerry A.F. Nicolaes",
    institution: "Cardiovascular Research Institute Maastricht",
    location: "Maastricht",
    email: "g.nicolaes@maastrichtuniversity.nl",
    disciplines: ["Biomedical Sciences","Chemistry"],
    types: ["Computational","Experimental"],
    description: "Use structural bioinformatics and virtual screening to identify drug candidates for severe sepsis.",
    details: ["Study 3D structures of sepsis proteins","Dock >1M small molecules in silico","Predict top 1000 binders","Test for cell viability","Optimize best compounds"],
    methods: "Structural bioinformatics, molecular docking, virtual screening",
    note: "Limited capacity — interview required.",
    dateAdded: "2024-01"
  },
  {
    title: "Cytotoxic Inflammatory Processes in Sepsis (Histones)",
    supervisor: "Dr. Gerry A.F. Nicolaes",
    institution: "Cardiovascular Research Institute Maastricht",
    location: "Maastricht",
    email: "g.nicolaes@maastrichtuniversity.nl",
    disciplines: ["Biomedical Sciences","Chemistry"],
    types: ["Experimental"],
    description: "Study cytotoxicity of extracellular histones and develop prototype drugs to interfere with histone toxicity in sepsis.",
    background: "Extracellular histones are major mediators of death in sepsis (mortality up to 80%).",
    methods: "Recombinant protein expression, proteomics, MS, cell culture",
    dateAdded: "2024-01"
  },
  {
    title: "Novel Diagnostic Methods for Sepsis at ICU",
    supervisor: "Dr. Gerry A.F. Nicolaes",
    institution: "Cardiovascular Research Institute Maastricht",
    location: "Maastricht",
    email: "g.nicolaes@maastrichtuniversity.nl",
    disciplines: ["Biomedical Sciences"],
    types: ["Experimental"],
    description: "Develop sensitive and fast methods to assess clinical status of ICU sepsis patients using novel biomarkers.",
    methods: "Protein isolation, bioassays, statistical analysis, clinical diagnostics",
    dateAdded: "2024-01"
  },
  {
    title: "Chemical Ecology and Ecophysiology of Ladybirds",
    supervisor: "Dr. John Sloggett",
    institution: "Department of Biology",
    location: "Maastricht (PHS 2.006)",
    email: "j.sloggett@maastrichtuniversity.nl",
    disciplines: ["Ecology & Fieldwork"],
    types: ["Experimental"],
    description: "Study chemical defenses, ecophysiology, and anthropogenic effects on ladybird beetles.",
    details: ["Chemical Ecology: alkaloid toxicity, chemical defenses","Ecophysiology: climate change effects, mating behavior","Anthropogenic effects: invasives, urbanization"],
    methods: "Behavioral studies, analytical chemistry, mathematical modeling",
    dateAdded: "2024-01"
  },
  {
    title: "Evolutionary Plant Biology and Biodiversity",
    supervisor: "Dr. Roy Erkens",
    institution: "Department of Biology",
    location: "Maastricht (PHS B2.019)",
    email: "roy.erkens@maastrichtuniversity.nl",
    disciplines: ["Ecology & Fieldwork"],
    types: ["Experimental"],
    description: "Investigate plant diversity origins and biodiversity patterns in Limburg and the Neotropics.",
    details: ["Biodiversity of the Grensmaas region","Herbarium of Natural History Museum Maastricht","Urban evolution using Dandelion","Redlisting Annonaceae trees","Biogeography using GIS"],
    methods: "GIS, morphometrics, SEM, phytochemistry",
    dateAdded: "2024-01"
  },
  {
    title: "Ancient Engineering & Human-Environment Interaction",
    supervisor: "Dr. Kyle Jazwa",
    institution: "Department of Archaeology",
    location: "Maastricht (PHS B2.018)",
    email: "k.jazwa@maastrichtuniversity.nl",
    disciplines: ["Ecology & Fieldwork","Other"],
    types: ["Computational","Experimental"],
    description: "Study ancient technology, construction, and settlement in the eastern Mediterranean.",
    details: ["Architectural Design Networks","Human Behavioral Ecology","Architectural Innovation in antiquity","Experimental Archaeology: brewing methods"],
    methods: "ArcGIS, photogrammetry, statistics, digital reconstructions",
    dateAdded: "2024-01"
  },
  {
    title: "Ecosystem Acclimation in Mediterranean Forests",
    supervisor: "Dr. Salvador Aljazairi",
    institution: "Department of Ecology, University of Granada",
    location: "Granada, Spain (Sierra Nevada NP)",
    email: "sal@ugr.es",
    disciplines: ["Ecology & Fieldwork"],
    types: ["Experimental"],
    description: "Study C and N cycling in Mediterranean forests and how climate change affects ecosystem processes.",
    methods: "Stable isotopes (δ¹³C and δ¹⁵N), soil analysis, plant physiology",
    dateAdded: "2024-01"
  },
  {
    title: "Wildlife Research & Rehab in Peruvian Amazon",
    supervisor: "Hoja Nueva Team",
    institution: "Hoja Nueva (Wildlife Conservation)",
    location: "Las Piedras region, Peruvian Amazon",
    email: "info@hojanueva.org",
    disciplines: ["Ecology & Fieldwork"],
    types: ["Experimental"],
    description: "Hands-on wildlife conservation, rehabilitation, ecological research and environmental education.",
    details: ["Camera trap mammal monitoring","Anuran reproductive ecology","Habitat classification with GIS","Study design and report writing"],
    dateAdded: "2024-01"
  },
  {
    title: "Biodesalination Technology Development",
    supervisor: "Neha Silva",
    institution: "Aestuarium (Biotech startup)",
    location: "Brightlands Chemelot Campus",
    email: "neha.silva@aestuarium.nl",
    disciplines: ["Biotechnology","Sustainability"],
    types: ["Experimental","Computational"],
    description: "Conduct Life Cycle Assessments on bio-desalination using bio-engineered bacteria.",
    methods: "LCA, modeling, sustainability analysis",
    dateAdded: "2024-01"
  },
  {
    title: "Mussel Adhesive Proteins in Plants",
    supervisor: "Dr. Julia Jansing & Assoc. Prof. Luisa Bortesi",
    institution: "AMIBM — Molecular & Applied Biotechnology",
    location: "Brightlands Chemelot Campus",
    email: "julia.jansing@maastrichtuniversity.nl",
    disciplines: ["Biotechnology"],
    types: ["Experimental"],
    description: "Produce mussel foot proteins (Mfps) in plants and E. coli — water-resistant adhesives for medical/industrial use.",
    details: ["Plasmid cloning (Golden Gate)","Bacterial transformation","Protein expression and purification","SDS-PAGE & Western blot","Material property testing"],
    methods: "Golden Gate cloning, agroinfiltration, protein purification",
    dateAdded: "2024-01"
  },
  {
    title: "Squid Ring Teeth Proteins (Suckerins)",
    supervisor: "Dr. Julia Jansing & Assoc. Prof. Luisa Bortesi",
    institution: "AMIBM — Molecular & Applied Biotechnology",
    location: "Brightlands Chemelot Campus",
    email: "julia.jansing@maastrichtuniversity.nl",
    disciplines: ["Biotechnology"],
    types: ["Experimental"],
    description: "Improve production of suckerins with wet adhesion and thermoplastic properties.",
    methods: "Golden Gate cloning, agroinfiltration, protein purification, material testing",
    dateAdded: "2024-01"
  },
  {
    title: "Silk Protein Production in Tobacco Plants",
    supervisor: "Lara Bitar, Dr. Julia Jansing, Assoc. Prof. Luisa Bortesi",
    institution: "AMIBM — Molecular & Applied Biotechnology",
    location: "Brightlands Chemelot Campus",
    email: "l.bitar@maastrichtuniversity.nl",
    disciplines: ["Biotechnology"],
    types: ["Experimental"],
    description: "Use plants as factories for silk proteins for biomedical applications.",
    methods: "DNA assembly, transient plant transformation, SDS-PAGE, Western blot",
    dateAdded: "2024-01"
  },
  {
    title: "Mycobacterium tuberculosis ESX-1 Secretion System",
    supervisor: "Dr. Ye Gao",
    institution: "M4I Institute — Nanoscopy",
    location: "Maastricht",
    email: "y.gao@maastrichtuniversity.nl",
    disciplines: ["Biomedical Sciences","Biotechnology"],
    types: ["Experimental"],
    description: "Study the ESX-1 secretion system of Mtb to understand pathogenicity and virulence.",
    methods: "Bioinformatics, protein purification, MS, cryo-EM, NMR, X-ray, SAXS",
    dateAdded: "2024-01"
  },
  {
    title: "Steroid Hormones & Gut Microbiome",
    supervisor: "Lena Best & Prof. Christoph Kaleta",
    institution: "Christian-Albrechts-University Kiel",
    location: "Kiel, Germany",
    email: "L.Best@iem.uni-kiel.de",
    disciplines: ["Biomedical Sciences","Bioinformatics"],
    types: ["Computational"],
    description: "Investigate how menopause-related hormonal changes impact gut microbiome composition.",
    methods: "Statistical methods, metabolic modeling, cohort data analysis",
    dateAdded: "2024-01"
  },
  {
    title: "Host-Microbiome Interactions in Aging Female Mice",
    supervisor: "Lena Best & Prof. Christoph Kaleta",
    institution: "Christian-Albrechts-University Kiel",
    location: "Kiel, Germany",
    email: "L.Best@iem.uni-kiel.de",
    disciplines: ["Bioinformatics","Biomedical Sciences"],
    types: ["Computational"],
    description: "Study sex-specific differences in host-microbiome metabolic interactions across the lifespan.",
    methods: "Metagenomics assembly, RNA-seq, metabolic modeling, random forests, WGCNA",
    dateAdded: "2024-01"
  },
  {
    title: "Combined PPI & Alcohol Effects on Gut Microbiome",
    supervisor: "Prof. Christoph Kaleta & Karlis Moors",
    institution: "Christian-Albrechts-University Kiel",
    location: "Kiel, Germany",
    email: "k.moors@iem.uni-kiel.de",
    disciplines: ["Bioinformatics","Biomedical Sciences"],
    types: ["Computational"],
    description: "Investigate combined PPI and alcohol effects on human gut microbiome composition and function.",
    methods: "PopGen cohort analysis, microbiome composition, statistics",
    dateAdded: "2024-01"
  },
  {
    title: "Computational Modeling of Kidney Physiology & Dialysis",
    supervisor: "Dr. Aurélie Carlier",
    institution: "Maastricht University",
    location: "Maastricht",
    email: "a.carlier@maastrichtuniversity.nl",
    disciplines: ["Biomedical Sciences","Bioinformatics"],
    types: ["Computational"],
    description: "Develop ODE/PDE/agent-based models to optimize kidney treatments and understand physiology in health and disease.",
    details: ["Hemodialysis modeling","Nephron toxin transport","PBPK models for CKD/AKI","Sex-specific PBPK","Proximal tubule metabolism"],
    methods: "ODEs, PDEs, agent-based models (VCell, Python, Matlab)",
    dateAdded: "2024-01"
  },
  {
    title: "Interactive Biological Pathways for Rare Diseases",
    supervisor: "Dr. Friederike Ehrhart",
    institution: "Department of Bioinformatics",
    location: "Maastricht",
    email: "friederike.ehrhart@maastrichtuniversity.nl",
    disciplines: ["Bioinformatics"],
    types: ["Computational"],
    description: "Create and analyze biological pathway models for rare diseases using WikiPathways.",
    methods: "PathVisio, WikiPathways, Cytoscape, omics data integration",
    dateAdded: "2024-01"
  },
  {
    title: "Metabolic Modeling of Senescence",
    supervisor: "Dr. Marian Breuer",
    institution: "Maastricht Centre for Systems Biology",
    location: "Maastricht",
    email: "marian.breuer@maastrichtuniversity.nl",
    disciplines: ["Bioinformatics","Biomedical Sciences"],
    types: ["Computational"],
    description: "Construct genome-scale metabolic network models of senescent cells to understand aging.",
    methods: "COBRA Toolbox, MATLAB, network analysis",
    dateAdded: "2024-01"
  },
  {
    title: "DRP1 Knockdown Metabolic Phenotype",
    supervisor: "Dr. Marian Breuer & Dr. Mike Gerards",
    institution: "Maastricht Centre for Systems Biology",
    location: "Maastricht",
    email: "marian.breuer@maastrichtuniversity.nl",
    disciplines: ["Bioinformatics"],
    types: ["Computational"],
    description: "Analyze metabolic impact of DRP1 knockdown (mitochondrial fission factor) via computational modeling.",
    methods: "COBRA Toolbox, MATLAB, data integration",
    dateAdded: "2024-01"
  },
  {
    title: "Metabolic Diversity of Brain Glial Cells",
    supervisor: "Prof. Renaud Jolivet & Dr. Marian Breuer",
    institution: "Maastricht Centre for Systems Biology",
    location: "Maastricht",
    email: "r.jolivet@maastrichtuniversity.nl",
    disciplines: ["Bioinformatics","Neuroscience"],
    types: ["Computational"],
    description: "Build genome-scale metabolic models for different glial cell types in the brain.",
    methods: "COBRA Toolbox, MATLAB, network analysis",
    dateAdded: "2024-01"
  },
  {
    title: "Curating Metabolic Pathways for Network Models",
    supervisor: "Prof. Jolivet, Dr. Breuer & Dr. Adriaens",
    institution: "Maastricht Centre for Systems Biology",
    location: "Maastricht",
    email: "r.jolivet@maastrichtuniversity.nl",
    disciplines: ["Bioinformatics"],
    types: ["Computational","Literature Review"],
    description: "Curate metabolic pathways for use in computational models of brain cells, heart disease and aging.",
    methods: "PathVisio, WikiPathways, metabolic modeling",
    dateAdded: "2024-01"
  },
  {
    title: "Carotenoid Synthesis Modeling in Tomato",
    supervisor: "Dr. Ruth Grosseholz",
    institution: "Department of Systems Biology",
    location: "Maastricht",
    email: "Ruth.Grosseholz@maastrichtuniversity.nl",
    disciplines: ["Bioinformatics"],
    types: ["Computational"],
    description: "Build a dynamic ODE model of the carotenoid biosynthetic pathway in tomato.",
    methods: "COPASI, ODE modeling, simulation",
    dateAdded: "2024-01"
  },
  {
    title: "Signal Propagation in Plant Tissues",
    supervisor: "Dr. Ruth Grosseholz",
    institution: "Department of Systems Biology",
    location: "Maastricht",
    email: "Ruth.Grosseholz@maastrichtuniversity.nl",
    disciplines: ["Bioinformatics"],
    types: ["Computational"],
    description: "Model ROS and Ca²⁺ signal propagation in plant tissues using VirtualLeaf.",
    methods: "VirtualLeaf, reaction-diffusion, Python, image analysis",
    dateAdded: "2024-01"
  },
  {
    title: "Cytoskeleton & Membrane Protein Diffusion",
    supervisor: "Dr. Ruth Grosseholz",
    institution: "Department of Systems Biology",
    location: "Maastricht",
    email: "Ruth.Grosseholz@maastrichtuniversity.nl",
    disciplines: ["Bioinformatics"],
    types: ["Computational"],
    description: "Model how the cytoskeleton influences membrane protein diffusion in plant cells via Smoldyn simulations.",
    methods: "Smoldyn, particle-based simulation, Python/R",
    dateAdded: "2024-01"
  }
];
