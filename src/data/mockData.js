export const KPI_STATS = [
    { label: 'Projects Completed', value: 248, suffix: '+', desc: 'Across infrastructure verticals' },
    { label: 'Districts Served', value: 38, suffix: '', desc: 'Pan-Bihar operational reach' },
    { label: 'Government Partnerships', value: 64, suffix: '+', desc: 'Active public-sector engagements' },
    { label: 'Years of Experience', value: 22, suffix: '', desc: 'Continuous execution record' },
    { label: 'Infrastructure Delivered', value: 999, suffix: ' Cr', desc: 'Total contract value (INR)' },
];

export const SERVICES = [
    {
        id: 'civil',
        title: 'Civil Infrastructure',
        desc: 'Foundation systems, structural concrete works, and large-scale earthworks for public and industrial use.',
        icon: 'Building2',
        capabilities: ['Foundation Engineering', 'RCC Structures', 'Earthworks']
    },
    {
        id: 'roads',
        title: 'Roads & Highways',
        desc: 'NH, SH and rural connectivity corridors — design, build and resurfacing under MoRTH and NHAI specifications.',
        icon: 'Route',
        capabilities: ['Greenfield Highways', 'Bituminous Pavements', 'Rural Roads (PMGSY)']
    },
    {
        id: 'buildings',
        title: 'Government Buildings',
        desc: 'Administrative blocks, judicial complexes, hospitals and schools — built to CPWD and state PWD specifications.',
        icon: 'Landmark',
        capabilities: ['Administrative Blocks', 'Judicial Complexes', 'Public Hospitals']
    },
    {
        id: 'smart-city',
        title: 'Smart City Projects',
        desc: 'Urban mobility, intelligent traffic, command centres and integrated utility corridors for tier-2 and tier-3 cities.',
        icon: 'Network',
        capabilities: ['ICCC Setup', 'Smart Lighting', 'Utility Corridors']
    },
    {
        id: 'industrial',
        title: 'Industrial Construction',
        desc: 'Heavy industrial plants, warehousing parks, cold storage facilities and EPC delivery for manufacturing units.',
        icon: 'Factory',
        capabilities: ['Pre-Engineered Buildings', 'Cold Chain', 'EPC Delivery']
    },
    {
        id: 'water',
        title: 'Water Infrastructure',
        desc: 'Drinking water schemes, sewerage networks, STPs, reservoirs and irrigation channels under Jal Jeevan Mission.',
        icon: 'Droplets',
        capabilities: ['Water Treatment', 'Sewerage Networks', 'Irrigation']
    },
    {
        id: 'public-facilities',
        title: 'Public Facilities',
        desc: 'Bus terminals, sports complexes, market yards and community infrastructure with long-life specifications.',
        icon: 'Users',
        capabilities: ['Transit Hubs', 'Sports Complexes', 'Mandi Yards']
    },
    {
        id: 'pmo',
        title: 'Project Management',
        desc: 'PMC services, third-party inspection, quality audits and supervision consultancy for state and central agencies.',
        icon: 'ClipboardCheck',
        capabilities: ['PMC Services', 'Third-Party QA', 'Independent Engineer']
    },
];

export const FEATURED_PROJECTS = [
    {
        id: 'p1',
        slug: 'patna-gaya-six-lane-expressway',
        title: 'Patna–Gaya Six-Lane Expressway',
        type: 'Roads & Highways',
        location: 'Bihar',
        year: '2024',
        budget: '₹ 1,240 Cr',
        category: 'roads',
        client: 'Ministry of Road Transport & Highways',
        scope: 'Greenfield 168 km six-lane access-controlled expressway with 14 major bridges.',
        image: 'https://images.unsplash.com/photo-1571363604084-c652ecf0a106?auto=format&fit=crop&w=1400&q=80',
        status: 'Under Execution',
        duration: '36 months',
        startDate: 'March 2023',
        completionDate: 'February 2026',
        deliveryModel: 'EPC (Design–Build)',
        teamSize: '320 engineers · 2,400 workforce',
        highlights: [
            'Access-controlled greenfield alignment across 5 districts',
            '14 major bridges including 4 river crossings',
            'Three interchanges and twelve vehicular underpasses',
            'Designed to IRC:SP:99 / IRC:73 specifications',
            'Smart traffic management with ATMS integration'
        ],
        scopeDetailed: 'A 168 km six-lane access-controlled greenfield expressway connecting Patna to Gaya, executed under the MoRTH Bharatmala programme. The contract covers complete design and build — earthwork, pavement, structures, drainage, signage, lighting and an Advanced Traffic Management System (ATMS).',
        compliance: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'MoRTH specifications', 'IRC codes'],
        gallery: [
            'https://images.unsplash.com/photo-1571363604084-c652ecf0a106?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1530855889744-89d44dd4f9b6?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1545974915-94c33fc06fbc?auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'p2',
        slug: 'district-administrative-complex-muzaffarpur',
        title: 'District Administrative Complex',
        type: 'Government Buildings',
        location: 'Muzaffarpur',
        year: '2023',
        budget: '₹ 218 Cr',
        category: 'buildings',
        client: 'Government of Bihar — Building Construction Dept.',
        scope: 'Integrated 9-block administrative complex with GRIHA-4 sustainable design.',
        image: 'https://images.pexels.com/photos/34690264/pexels-photo-34690264.jpeg?auto=compress&cs=tinysrgb&w=1400',
        status: 'Delivered',
        duration: '24 months',
        startDate: 'August 2021',
        completionDate: 'July 2023',
        deliveryModel: 'EPC (Design–Build)',
        teamSize: '140 engineers · 1,100 workforce',
        highlights: [
            '9 integrated administrative blocks on 18 acres',
            'GRIHA-4 sustainable rating with rooftop solar',
            'Rainwater harvesting and grey-water recycling',
            'Public-friendly common atrium and citizen services hall',
            'Universal accessibility across all blocks'
        ],
        scopeDetailed: 'Integrated nine-block district administrative complex on 18 acres in Muzaffarpur, designed for the Bihar Building Construction Department under CPWD-aligned specifications. The complex consolidates 26 district-level offices, a citizen services hall, district court annexe and an integrated parking facility.',
        compliance: ['ISO 9001:2015', 'ISO 14001:2015', 'GRIHA-4', 'CPWD specifications', 'NBC 2016'],
        gallery: [
            'https://images.pexels.com/photos/34690264/pexels-photo-34690264.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'p3',
        slug: 'kosi-cable-stayed-bridge',
        title: 'Kosi River Cable-Stayed Bridge',
        type: 'Bridges & Structures',
        location: 'Supaul',
        year: '2024',
        budget: '₹ 962 Cr',
        category: 'roads',
        client: 'Bihar State Road Development Corporation',
        scope: '2.4 km cable-stayed bridge across Kosi, designed for 100-year flood return.',
        image: 'https://images.unsplash.com/photo-1529926691761-20fb82067c71?auto=format&fit=crop&w=1400&q=80',
        status: 'Under Execution',
        duration: '42 months',
        startDate: 'January 2022',
        completionDate: 'June 2025',
        deliveryModel: 'EPC (Design–Build)',
        teamSize: '180 engineers · 1,400 workforce',
        highlights: [
            '2.4 km cable-stayed structure with 240 m main span',
            'Designed for 100-year flood return period',
            'Off-monsoon foundation works completed ahead of schedule',
            'Twin pylon erection across both river banks',
            'Phase-wise deck launching with form travellers'
        ],
        scopeDetailed: 'A 2.4 km cable-stayed bridge across the Kosi river at Supaul, designed for the Bihar State Road Development Corporation. Includes a 240 m main span, twin H-form pylons, and access viaducts on both banks. Executed under stringent monsoon-window constraints with off-season foundation works.',
        compliance: ['ISO 9001:2015', 'ISO 45001:2018', 'IRC:6 / IRC:112', 'MoRTH bridge specifications', 'NABL site lab'],
        gallery: [
            'https://images.unsplash.com/photo-1529926691761-20fb82067c71?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1473042904451-00171c69419d?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'p4',
        slug: 'bhagalpur-industrial-cluster-phase-2',
        title: 'Bhagalpur Industrial Cluster — Phase II',
        type: 'Industrial Construction',
        location: 'Bhagalpur',
        year: '2023',
        budget: '₹ 540 Cr',
        category: 'industrial',
        client: 'BIADA',
        scope: 'Plug-and-play industrial park with 312 plots, internal roads and utilities.',
        image: 'https://images.pexels.com/photos/5504388/pexels-photo-5504388.jpeg?auto=compress&cs=tinysrgb&w=1400',
        status: 'Delivered',
        duration: '30 months',
        startDate: 'April 2021',
        completionDate: 'October 2023',
        deliveryModel: 'EPC + O&M',
        teamSize: '110 engineers · 950 workforce',
        highlights: [
            '312 industrial plots ready for plug-and-play occupancy',
            '38 km of internal roads and utility corridors',
            '110 MLD water-supply and STP infrastructure',
            'Common Effluent Treatment Plant (CETP)',
            'Solar-powered street lighting throughout the park'
        ],
        scopeDetailed: 'Phase-II development of the Bhagalpur Industrial Cluster spanning 720 acres for BIADA. Includes 312 industrial plots, internal road network, water supply and sewerage systems, a CETP, fire-safety infrastructure and shared administrative facilities.',
        compliance: ['ISO 9001:2015', 'ISO 14001:2015', 'CPCB norms', 'BIS standards', 'Factory Act compliance'],
        gallery: [
            'https://images.pexels.com/photos/5504388/pexels-photo-5504388.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'p5',
        slug: 'eastern-kosi-canal-modernisation',
        title: 'Eastern Kosi Canal Modernisation',
        type: 'Water Infrastructure',
        location: 'Saharsa–Madhepura',
        year: '2022',
        budget: '₹ 386 Cr',
        category: 'water',
        client: 'Water Resources Department, Govt. of Bihar',
        scope: 'Canal lining, command-area drainage and SCADA-controlled regulation works.',
        image: 'https://images.unsplash.com/photo-1705747894609-6a7d17a8cfb7?auto=format&fit=crop&w=1400&q=80',
        status: 'Delivered',
        duration: '28 months',
        startDate: 'November 2019',
        completionDate: 'March 2022',
        deliveryModel: 'EPC (Design–Build)',
        teamSize: '90 engineers · 780 workforce',
        highlights: [
            '124 km of canal lining with command-area drainage',
            'SCADA-controlled regulation across 18 head works',
            'Modernised 48 distributary outlets and 6 escape regulators',
            'Coverage of 86,000 hectares of irrigated command',
            'Sub-soil drainage to reduce waterlogging'
        ],
        scopeDetailed: 'Modernisation of the Eastern Kosi Main Canal system spanning 124 km across Saharsa and Madhepura districts. Scope includes concrete lining, regulation gates, SCADA-controlled flow management, distributary works and command-area drainage to lift irrigation coverage and water-use efficiency.',
        compliance: ['ISO 9001:2015', 'IS 9451 / IS 4515', 'CWC guidelines', 'NABL water testing'],
        gallery: [
            'https://images.unsplash.com/photo-1705747894609-6a7d17a8cfb7?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'p6',
        slug: 'patna-iccc-smart-city',
        title: 'Patna Smart City — Integrated Command Centre',
        type: 'Smart City',
        location: 'Patna',
        year: '2023',
        budget: '₹ 174 Cr',
        category: 'public',
        client: 'Patna Smart City Ltd.',
        scope: 'Integrated Command & Control Centre with 920+ city surveillance nodes.',
        image: 'https://images.pexels.com/photos/7104647/pexels-photo-7104647.jpeg?auto=compress&cs=tinysrgb&w=1400',
        status: 'Delivered',
        duration: '22 months',
        startDate: 'February 2021',
        completionDate: 'December 2022',
        deliveryModel: 'EPC + 5-year O&M',
        teamSize: '60 engineers · 220 workforce',
        highlights: [
            'Integrated Command & Control Centre with 24×7 NOC',
            '920 city-wide surveillance & ANPR nodes',
            'Adaptive traffic signal control at 84 junctions',
            'Citizen-app integration with grievance dashboard',
            'AI-enabled incident detection and dispatch'
        ],
        scopeDetailed: 'Design, build and commissioning of the Patna Smart City Integrated Command and Control Centre (ICCC) under the Smart Cities Mission. Includes a primary NOC with redundancy, deployment of 920 surveillance and ANPR nodes, adaptive traffic signal infrastructure, and integration with city emergency services.',
        compliance: ['ISO 9001:2015', 'ISO 27001 ISMS', 'MeitY guidelines', 'CERT-In compliant', 'STQC accreditation'],
        gallery: [
            'https://images.pexels.com/photos/7104647/pexels-photo-7104647.jpeg?auto=compress&cs=tinysrgb&w=1600',
            'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'p7',
        slug: 'darbhanga-multi-specialty-hospital',
        title: 'Multi-Specialty District Hospital',
        type: 'Public Facilities',
        location: 'Darbhanga',
        year: '2024',
        budget: '₹ 312 Cr',
        category: 'buildings',
        client: 'Bihar Medical Services & Infra. Corp.',
        scope: '500-bed multi-specialty hospital with modular OTs and ICU clusters.',
        image: 'https://images.unsplash.com/photo-1622115469132-124ec9f88fca?auto=format&fit=crop&w=1400&q=80',
        status: 'Under Execution',
        duration: '32 months',
        startDate: 'May 2022',
        completionDate: 'December 2024',
        deliveryModel: 'EPC (Design–Build)',
        teamSize: '130 engineers · 980 workforce',
        highlights: [
            '500-bed multi-specialty district hospital',
            '8 modular operation theatres with HVAC class-100',
            'Dedicated ICU, NICU and PICU clusters',
            'NABH-ready infrastructure with central medical gas',
            'On-site diagnostic block including CT, MRI bays'
        ],
        scopeDetailed: 'A 500-bed multi-specialty district hospital in Darbhanga for the Bihar Medical Services & Infrastructure Corporation. Includes modular operation theatres, dedicated critical-care clusters, an outpatient block, an emergency block, on-site diagnostics, central medical gas distribution and a NABH-ready ward configuration.',
        compliance: ['ISO 9001:2015', 'NABH-ready design', 'NBC 2016', 'BMWM Rules 2016', 'IS HVAC standards'],
        gallery: [
            'https://images.unsplash.com/photo-1622115469132-124ec9f88fca?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80'
        ]
    },
    {
        id: 'p8',
        slug: 'champaran-rural-water-supply',
        title: 'Rural Water Supply — Champaran',
        type: 'Water Infrastructure',
        location: 'East & West Champaran',
        year: '2022',
        budget: '₹ 268 Cr',
        category: 'water',
        client: 'Public Health Engineering Dept.',
        scope: 'Piped water supply to 184 villages under Jal Jeevan Mission.',
        image: 'https://images.unsplash.com/photo-1529792083865-d23889753466?auto=format&fit=crop&w=1400&q=80',
        status: 'Delivered',
        duration: '26 months',
        startDate: 'January 2020',
        completionDate: 'March 2022',
        deliveryModel: 'EPC + 5-year O&M',
        teamSize: '70 engineers · 640 workforce',
        highlights: [
            'Piped water supply to 184 villages',
            '1,86,000 functional household tap connections (FHTCs)',
            '12 overhead service reservoirs and 32 boreholes',
            'Solar-hybrid pumping at 28 stations',
            'IoT-based residual chlorine and flow monitoring'
        ],
        scopeDetailed: 'Multi-village rural water-supply scheme under Jal Jeevan Mission for East and West Champaran. Provides Functional Household Tap Connections (FHTCs) to 184 villages with solar-hybrid pumping, IoT-based real-time monitoring of residual chlorine and flow, and a 5-year operations and maintenance window.',
        compliance: ['ISO 9001:2015', 'BIS 10500 (drinking water)', 'JJM technical specifications', 'NABL water testing'],
        gallery: [
            'https://images.unsplash.com/photo-1529792083865-d23889753466?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=80',
            'https://images.unsplash.com/photo-1495556650867-99590cea3657?auto=format&fit=crop&w=1600&q=80'
        ]
    },
];

export const PROCESS_STEPS = [
    { id: '01', title: 'Planning', desc: 'Feasibility studies, DPR review, stakeholder mapping and risk assessment grounded in field reconnaissance.' },
    { id: '02', title: 'Engineering', desc: 'Design coordination across structural, MEP, geotechnical and environmental disciplines under a unified BIM workflow.' },
    { id: '03', title: 'Procurement', desc: 'Transparent vendor selection, ISO-compliant material specifications and integrated supply-chain logistics.' },
    { id: '04', title: 'Construction', desc: 'Mobilised execution teams, calibrated equipment fleets and zone-wise resource planning for predictable delivery.' },
    { id: '05', title: 'Quality Assurance', desc: 'NABL-accredited lab testing, third-party audits and digital site logs for full traceability.' },
    { id: '06', title: 'Handover', desc: 'Documented closure, asset transition, O&M handbooks and post-handover support windows.' },
];

export const CERTIFICATIONS = [
    { id: 'iso9001', name: 'ISO 9001:2015', issuer: 'Bureau Veritas', category: 'Quality Management', year: '2024' },
    { id: 'iso14001', name: 'ISO 14001:2015', issuer: 'TÜV SÜD', category: 'Environmental Management', year: '2024' },
    { id: 'iso45001', name: 'ISO 45001:2018', issuer: 'DNV', category: 'Occupational Health & Safety', year: '2023' },
    { id: 'cpwd', name: 'CPWD Class-I', issuer: 'Central Public Works Dept.', category: 'Govt. Empanelment', year: '2023' },
    { id: 'morth', name: 'MoRTH Registered', issuer: 'Ministry of Road Transport', category: 'Highway Contractor', year: '2024' },
    { id: 'griha', name: 'GRIHA Council Member', issuer: 'GRIHA Council', category: 'Sustainable Construction', year: '2022' },
    { id: 'nabl', name: 'NABL Accredited Lab', issuer: 'NABL', category: 'Testing & Calibration', year: '2024' },
    { id: 'msme', name: 'MSME Registered', issuer: 'Ministry of MSME', category: 'Enterprise Registration', year: '2021' },
];

export const TESTIMONIALS = [
    {
        id: 't1',
        quote: 'Their execution discipline on the Kosi bridge — including the off-monsoon foundation works — set a benchmark for state-led infrastructure delivery.',
        name: 'Shri R. K. Mishra',
        role: 'Chief Engineer, Bihar State Road Development Corporation',
    },
    {
        id: 't2',
        quote: 'Documentation, quality dossiers and on-site safety culture were consistently above contract requirements. A genuinely dependable execution partner.',
        name: 'Smt. Anjali Verma',
        role: 'Project Director, Bihar Building Construction Department',
    },
    {
        id: 't3',
        quote: 'Across two consecutive irrigation contracts, they delivered ahead of schedule with zero deviation from the technical specifications. Rare in this sector.',
        name: 'Shri P. K. Singh',
        role: 'Superintending Engineer, Water Resources Dept., Govt. of Bihar',
    },
];

export const BIHAR_DIVISIONS = [
    { name: 'Patna', projects: 42, primary: true, x: 50, y: 55 },
    { name: 'Tirhut (Muzaffarpur)', projects: 31, x: 52, y: 38 },
    { name: 'Saran (Chhapra)', projects: 18, x: 38, y: 45 },
    { name: 'Darbhanga', projects: 24, x: 62, y: 32 },
    { name: 'Kosi (Saharsa)', projects: 22, x: 72, y: 38 },
    { name: 'Purnia', projects: 19, x: 82, y: 28 },
    { name: 'Bhagalpur', projects: 27, x: 78, y: 58 },
    { name: 'Munger', projects: 14, x: 68, y: 60 },
    { name: 'Magadh (Gaya)', projects: 33, x: 46, y: 72 },
    { name: 'Shahabad (Ara)', projects: 18, x: 32, y: 62 },
];

export const NEWS_ITEMS = [
    {
        id: 'n1',
        category: 'Tender Win',
        title: 'Diarch Group secures ₹ 412 Cr contract for Bihar Eastern Corridor Phase-III',
        date: 'March 18, 2025',
        excerpt: 'The Ministry of Road Transport & Highways has awarded the next phase of the Eastern Corridor to Diarch Group following a competitive bidding process.',
        image: 'https://images.unsplash.com/photo-1571363604084-c652ecf0a106?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'n2',
        category: 'Project Update',
        title: 'Kosi cable-stayed bridge crosses 78% physical progress',
        date: 'February 24, 2025',
        excerpt: 'Pylon erection complete on both banks; deck launching commenced ahead of monsoon. Project remains four weeks ahead of programme.',
        image: 'https://images.unsplash.com/photo-1529926691761-20fb82067c71?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'n3',
        category: 'Recognition',
        title: 'Awarded \'Infrastructure Partner of the Year\' at Bihar Builders Summit 2024',
        date: 'December 12, 2024',
        excerpt: 'Recognition received from the Department of Building Construction for exemplary on-time delivery across three flagship projects.',
        image: 'https://images.pexels.com/photos/34690264/pexels-photo-34690264.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
        id: 'n4',
        category: 'Industry Insight',
        title: 'How tier-2 cities in Bihar are shaping the next decade of public infrastructure',
        date: 'November 02, 2024',
        excerpt: 'A perspective piece on capital expenditure patterns, smart-city programmes and the rising demand for integrated execution partners.',
        image: 'https://images.pexels.com/photos/7104647/pexels-photo-7104647.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
        id: 'n5',
        category: 'Tender Win',
        title: 'Diarch awarded multi-village water supply scheme in Champaran',
        date: 'October 09, 2024',
        excerpt: 'A ₹ 268 Cr Jal Jeevan Mission contract for piped water supply across 184 villages of East and West Champaran.',
        image: 'https://images.unsplash.com/photo-1705747894609-6a7d17a8cfb7?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'n6',
        category: 'Project Update',
        title: 'Patna ICCC commissioning timeline confirmed for Q1 2025',
        date: 'September 21, 2024',
        excerpt: 'The Integrated Command & Control Centre will be operational ahead of contractual commissioning, with all 920 surveillance nodes integrated.',
        image: 'https://images.pexels.com/photos/7104647/pexels-photo-7104647.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
];

export const LEADERSHIP = [
    {
        id: 'l1',
        name: 'Anand Pratap Singh',
        role: 'Chairman & Managing Director',
        bio: 'Three decades in public infrastructure execution. Former advisor to Bihar State Infrastructure Development Authority.',
        initials: 'AP'
    },
    {
        id: 'l2',
        name: 'Vikram Choudhary',
        role: 'Executive Director — Operations',
        bio: 'Led delivery of over 90 highway and bridge projects across Bihar, Jharkhand and Uttar Pradesh.',
        initials: 'VC'
    },
    {
        id: 'l3',
        name: 'Dr. Meera Kashyap',
        role: 'Chief Engineer — Design & Quality',
        bio: 'PhD in Structural Engineering, IIT Roorkee. Specialist in long-span bridges and seismic-zone construction.',
        initials: 'MK'
    },
    {
        id: 'l4',
        name: 'Rohit Anand',
        role: 'Director — Government Partnerships',
        bio: 'Tendering, contract management and public-sector liaison across central ministries and Bihar state departments.',
        initials: 'RA'
    },
];

export const FAQS = [
    {
        q: 'What types of government contracts does Diarch Group execute?',
        a: 'We execute civil and infrastructure contracts under central agencies (MoRTH, NHAI, CPWD) and Bihar state departments — covering highways, government buildings, water infrastructure, industrial parks, smart-city projects and public facilities.'
    },
    {
        q: 'What is your geographic operating footprint?',
        a: 'Our primary execution geography is Bihar, with active projects across 38 districts. We also undertake selective engagements in Jharkhand, Uttar Pradesh and West Bengal where they align with our delivery model.'
    },
    {
        q: 'Are you empanelled with central government agencies?',
        a: 'Yes — we are a Class-I CPWD empanelled contractor, registered with MoRTH for highway works, and a member of the GRIHA Council. Full documentation is available in the Certifications section.'
    },
    {
        q: 'How do public agencies initiate a partnership discussion?',
        a: 'Public agencies can reach out via the Government Partnerships page or contact our dedicated partnerships team. We respond to formal inquiries within two working days.'
    },
    {
        q: 'What standards govern your project execution?',
        a: 'All projects follow ISO 9001:2015 (Quality), ISO 14001:2015 (Environment) and ISO 45001:2018 (Safety). Site quality regimes are aligned to MoRTH, IRC and IS codes as applicable.'
    },
    {
        q: 'Can capability statements be downloaded?',
        a: 'Yes. A complete capability statement, sector-wise project briefs and compliance certificates are downloadable from the Government Partnerships page.'
    },
];

export const CORE_VALUES = [
    { title: 'Integrity', desc: 'Transparent bidding, honest reporting and zero tolerance for compromise on contract obligations.' },
    { title: 'Excellence', desc: 'Engineering rigour, calibrated quality systems and a relentless focus on delivery outcomes.' },
    { title: 'Accountability', desc: 'Every project, every milestone, every line item — traceable, documented and owned.' },
    { title: 'Sustainability', desc: 'GRIHA-aligned construction practices, resource efficiency and lifecycle-aware design.' },
    { title: 'Innovation', desc: 'BIM-led design coordination, digital site logs and pre-engineered methods to compress delivery cycles.' },
];
