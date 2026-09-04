export type Locale = "en" | "fr";

export type ProjectStat = {
    label: string;
    value: string;
};

export type Project = {
    title: string;
    eyebrow: string;
    description: string;
    longDescription: string;
    status: string;
    year: string;
    role: string;
    tags: string[];
    stack: string[];
    highlights: string[];
    stats: ProjectStat[];
    github: string;
    link: string;
};

export type ParcoursItem = {
    type: "experience" | "formation";
    title: string;
    subtitle: string;
    context: string;
    period: string;
    description: string[];
    modules?: string[];
};

export type LabelledValue = {
    label: string;
    value: string;
};

export type TitledBody = {
    title: string;
    body: string;
};

type Dictionary = {
    nav: Record<"hero" | "about" | "parcours" | "competences" | "projets" | "passions" | "contact", string>;
    hero: {
        photoAlt: string;
        tagline: string;
        availability: string;
        studentAt: string;
        apprenticeAt: string;
        location: string;
        ctaContact: string;
        ctaCv: string;
        ctaProjects: string;
        scrollLabel: string;
    };
    sections: {
        about: { title: string; lede: string };
        parcours: { title: string; lede: string };
        competences: { title: string; lede: string };
        projets: { title: string; lede: string };
        contact: { title: string; lede: string };
    };
    about: {
        paragraphs: string[];
        pillars: TitledBody[];
        workStyleTitle: string;
        workStyle: TitledBody[];
        availabilityTitle: string;
        availabilityLead: string;
        availabilityHighlights: LabelledValue[];
        availability: LabelledValue[];
        availabilityNote: string;
        availabilityCta: string;
    };
    parcoursLabels: { experience: string; formation: string; modules: string };
    parcours: ParcoursItem[];
    competences: {
        core: string;
        coreLede: string;
        working: string;
        workingLede: string;
        explored: string;
        exploredLede: string;
        ai: string;
        aiLede: string;
        groups: Record<"front" | "back" | "mobile" | "data" | "devops" | "quality", string>;
        aiSkills: string[];
    };
    projets: Project[];
    modal: {
        close: string;
        viewCode: string;
        openProject: string;
        overview: string;
        highlights: string;
        stack: string;
        keywords: string;
    };
    projectCardCta: string;
    passions: {
        title: string;
        lede: string;
        main: string[];
        subs: string[];
    };
    contact: {
        email: { title: string; subtitle: string; cta: string };
        github: { title: string; subtitle: string; cta: string };
        linkedin: { title: string; subtitle: string; cta: string };
        note: string;
    };
    footer: { rights: string; source: string };
    a11y: { toggleTheme: string; github: string; switchLang: string };
};

export const translations: Record<Locale, Dictionary> = {
    en: {
        nav: {
            hero: "Home",
            about: "About",
            parcours: "Background",
            competences: "Skills",
            projets: "Projects",
            passions: "Passions",
            contact: "Contact",
        },
        hero: {
            photoAlt: "Photo of Maël Demory",
            tagline: "Two years building production software inside companies, while training as an engineer.",
            availability: "Seeking a software engineering internship abroad · June – September 2027",
            studentAt: "Engineering student at",
            apprenticeAt: "Software Engineer Apprentice at",
            location: "Hauts-de-France, France — open to relocating worldwide",
            ctaContact: "Get in touch",
            ctaCv: "Download my CV",
            ctaProjects: "See my projects",
            scrollLabel: "Go to the About section",
        },
        sections: {
            about: { title: "What I bring to a team.", lede: "" },
            parcours: { title: "Engineering education and apprenticeship experience.", lede: "" },
            competences: { title: "The technologies I work with, and how well I know them.", lede: "" },
            projets: { title: "A selection of personal and university projects.", lede: "" },
            contact: { title: "Let's talk about your projects or an opportunity.", lede: "" },
        },
        about: {
            paragraphs: [
                "I'm a PHP and JavaScript developer at Arjo France, the French arm of a Swedish medical-device group. I work day to day on the internal applications the subsidiary runs on, both extending them and keeping them running.",
                "My job is to turn a business need into a workable technical solution, then maintain it over time. A good part of that happens in old, shared codebases, where staying consistent with what is already there matters more than an elegant solution of my own. That is what would make me useful quickly in a new team.",
            ],
            pillars: [
                {
                    title: "Two years in a company, not internships",
                    body: "Two apprenticeship contracts back to back, on software real teams use every day.",
                },
                {
                    title: "From a business need to a technical solution",
                    body: "The need comes from the business. The technical design, the build and the follow-up with users are mine.",
                },
                {
                    title: "A regulated industrial environment",
                    body: "A medical-device group certified ISO 13485 and ISO 9001, where traceability shapes every change.",
                },
                {
                    title: "AI-assisted development",
                    body: "Set up for my team, used on production code with a human reviewing every change.",
                },
            ],
            workStyleTitle: "How I work",
            workStyle: [
                {
                    title: "I finish things",
                    body: "The spare-parts feature took six months and I was on it from the empty file to training the support team. Including the parts I had no idea how to do in December.",
                },
                {
                    title: "Old code doesn't scare me",
                    body: "Most of my professional work happens in applications older than my studies. I read a lot before I touch anything.",
                },
                {
                    title: "I can talk to people who aren't developers",
                    body: "Every feature I've shipped went through review meetings with the people who use it.",
                },
                {
                    title: "Small commits, reviewed",
                    body: "One issue per task, one commit per page or per routine, and a senior developer reads it before it goes anywhere.",
                },
            ],
            availabilityTitle: "Availability and languages",
            availabilityLead: "I am looking for a software engineering internship abroad.",
            availabilityHighlights: [
                { label: "Dates", value: "21 June to late Sept. 2027" },
                { label: "Duration", value: "9 to 12 weeks" },
                { label: "Location", value: "Worldwide" },
                { label: "English", value: "C1, TOEIC 900/990" },
            ],
            availability: [
                { label: "Framework", value: "French engineering-school internship agreement (IMT Nord Europe). EU citizen, so no visa is required within the EU and the EEA." },
                { label: "Other languages", value: "French, native speaker. Spanish, B1." },
            ],
            availabilityNote: "French day to day with the team, English for code, commits and documentation. Technical interviews in either language.",
            availabilityCta: "Get in touch",
        },
        parcoursLabels: { experience: "Experience", formation: "Education", modules: "Modules" },
        parcours: [
            {
                type: "experience",
                title: "Software Engineer Apprentice",
                subtitle: "Arjo France",
                context: "Swedish medical-device group listed on Nasdaq Stockholm, with around 7,000 employees in more than 100 countries. ISO 13485 and ISO 9001 certified.",
                period: "Sept. 2025 – Present",
                description: [
                    "Build and maintain the internal business applications that run the French subsidiary's operations, covering service contracts, equipment fleet, spare parts, technician scheduling and invoicing. Around 500 to 600 people use them daily. Stack: PHP 8, SQL Server, JavaScript, jQuery, Bootstrap, Vite.",
                    "Delivered a complete spare-parts maintenance referential from scratch over six months, from a specification written by the technical support team: nine back-office pages, around 22,000 lines of code, 220 commits. It replaced manual Excel and PDF handling with a single source of truth, computes per-customer pricing automatically from the M3 ERP, and publishes validated data to the customer portal.",
                    "Contributed 213 commits across 391 files to a team-wide modernisation of a legacy monolith: migrated back-office tables to server-side pagination and sorting, rebuilt more than twenty scheduled jobs on a shared template, and traced a systemic data-access defect that had been causing nightly false alerts.",
                    "Extended the SQL Server FileStream storage layer the team had introduced, around 1,300 lines extended rather than rewritten: built the supervision dashboard used by the IT department, and brought a second application onto it, putting around ten document directories under transactional backup.",
                    "Set up the team's AI-assisted development workflow (custom agents, hooks and skills), now used on production code under systematic human review.",
                ],
            },
            {
                type: "formation",
                title: "MSc in Engineering — Computer Science, Telecommunications & Networks",
                subtitle: "IMT Nord Europe",
                context: "French Grande École of engineering, part of Institut Mines-Télécom, the public network of French graduate engineering schools. Diplôme d'Ingénieur accredited by the Commission des titres d'ingénieur, master's level.",
                period: "Sept. 2025 – 2028",
                description: [
                    "Three-year apprenticeship track, two weeks of classes for every five weeks in the company, closing on a final-year engineering project.",
                    "The course includes a compulsory period of international mobility, which is the internship I am currently looking for.",
                    "Ten-day study trip to York, in the United Kingdom, devoted to preparing the TOEIC.",
                    "Several projects shown on this site come out of these modules: the RayTracer from object-oriented programming, the F1 Ticket System from blockchain, and Gatcha from Web API and data, with its monitoring stack coming from software engineering.",
                ],
                modules: [
                    "Object-oriented programming",
                    "Data structures",
                    "Web API and data",
                    "Software engineering",
                    "Blockchain",
                    "Mobile development",
                    "Data science",
                    "Business intelligence",
                    "Systems and networks",
                    "Shell and Unix",
                    "Graph theory",
                    "Accounting",
                    "Communication",
                    "Entrepreneurship",
                    "Professional English",
                ],
            },
            {
                type: "experience",
                title: "Web Developer Apprentice",
                subtitle: "IMT Nord Europe",
                context: "Digital Tools & Services team of the school's IT department.",
                period: "Feb. 2024 – Aug. 2025",
                description: [
                    "Sole developer on three internal web applications for the school's intranet portal: business-card ordering, student event requests and new-hire recruitment tracking. Database design through to the front end, for around 100 staff and student users.",
                    "Met the departments concerned (catering, reprographics, student life, HR) alongside my manager and my tutor, to collect their feedback and take the tools further.",
                    "Followed the team's engineering practices: GitLab, one issue per task on a kanban board, the issue number referenced in every commit, and staged deployment through pre-production before release.",
                    "Stack: PHP/Laravel, MySQL, JavaScript, Bootstrap.",
                ],
            },
            {
                type: "formation",
                title: "Bachelor of Technology in Computer Science (BUT) — Application Design & Development",
                subtitle: "IUT de Lens — Université d'Artois",
                context: "Three-year French Bachelor of Technology, 180 ECTS credits, Application Design and Development track.",
                period: "2022 – 2025",
                description: [
                    "Application design and development, databases, UML modelling, testing, networks, agile methods and project management.",
                    "Travel-themed social network, in a team of four, as lead developer: Spring Boot API and React front end.",
                    "Concert-ticket mobile app, in a team of three: Laravel API and React Native client.",
                    "A two-dimensional Minecraft remake, written on my own in Java.",
                ],
            },
        ],
        competences: {
            core: "Core",
            coreLede: "daily, in production",
            working: "Working knowledge",
            workingLede: "shipped with it at least once",
            explored: "Explored",
            exploredLede: "studied and prototyped",
            ai: "AI-assisted development",
            aiLede: "part of my daily workflow",
            groups: {
                front: "Front end",
                back: "Back end",
                mobile: "Mobile",
                data: "Data",
                devops: "DevOps and infrastructure",
                quality: "Quality and tooling",
            },
            aiSkills: ["Claude Code", "Agentic development", "AI agents", "MCP", "Prompt engineering", "LLM"],
        },
        projets: [
            {
                title: "F1dle",
                eyebrow: "Formula 1 puzzle site",
                description: "Six Formula 1 guessing games on one site, backed by a Laravel API holding every driver since 1950. Three Fly.io apps, with Prometheus and Grafana watching them.",
                longDescription:
                    "It started as one Wordle clone for F1 drivers and kept growing. There are six modes now, including one where you name the world champion for every season back to 1950, and a Connections-style grid. Most of the work sits behind the game: an API that caches race results in MySQL and falls back to the Ergast data source when a season is missing, five sync commands to seed it, and a component library I wrote instead of installing. Tuning the hints took longer than the game logic. Too few and it is luck, too many and there is nothing left to work out.",
                status: "Live",
                year: "2024 – 2026",
                role: "Product, frontend, API and infrastructure",
                tags: ["React", "TypeScript", "Laravel", "MySQL", "Docker", "Fly.io", "Prometheus", "Grafana", "Personal"],
                stack: ["React + TypeScript", "Laravel 11", "MySQL 8", "Tailwind CSS", "Docker", "Fly.io", "Prometheus", "Grafana"],
                highlights: [
                    "Six modes sharing one engine, from the classic driver guess to Higher or Lower, Constructor Grid and a Connections board.",
                    "Laravel API over five tables covering every driver, champion and race since 1950, with results cached in MySQL and an external fallback when a season is missing.",
                    "Three separate Fly.io apps, a public front end, a private API and MySQL on a volume, plus Prometheus and Grafana with a provisioned dashboard.",
                    "Interface entirely in English and French, a component library built in-house, and 13 test files covering the game modes and the API.",
                ],
                stats: [
                    { label: "Code", value: "~9,400 lines" },
                    { label: "Game modes", value: "6" },
                    { label: "Data", value: "F1 since 1950" },
                ],
                github: "https://github.com/MaelDemory/F1dle",
                link: "https://f1dle-md.fly.dev",
            },
            {
                title: "Boring Notch",
                eyebrow: "Open-source contribution, macOS",
                description: "A fork of the macOS app Boring Notch with six opt-in indicators added to the MacBook notch: weather, CPU and memory, VPN, Bluetooth device battery, Focus modes and DeepSeek API credit.",
                longDescription:
                    "The upstream project has over 1,400 commits and is not mine. My contribution sits ten commits ahead of it, 23 files and around 1,550 lines. Each indicator follows the same shape, a manager, its models and its view, and stays off until you enable it in Settings. The system monitor reads CPU load and memory pressure straight from the Mach APIs, VPN detection goes through Network and SystemConfiguration, and Bluetooth battery through IOKit. The fork also carries a fix: HUD replacement was being silently disabled whenever the XPC helper did not inherit the main app's Accessibility grant.",
                status: "Open source",
                year: "2026",
                role: "Feature development and bug fix",
                tags: ["Swift", "SwiftUI", "macOS", "IOKit", "Open source", "Personal"],
                stack: ["Swift", "SwiftUI", "Combine", "Mach APIs", "IOKit", "Network", "SystemConfiguration"],
                highlights: [
                    "Six indicators added, each on the same manager / models / view split, all off by default and toggled from Settings.",
                    "CPU load and memory pressure read through the Mach APIs, VPN detection through Network and SystemConfiguration, Bluetooth battery through IOKit.",
                    "A fix for HUD replacement, which was silently disabled when the XPC helper did not inherit the Accessibility grant.",
                    "Translations added to the project's localisation file, and a README documenting the fork's additions along with the known limit on how the DeepSeek key is stored.",
                ],
                stats: [
                    { label: "Contribution", value: "10 commits, +1,550 lines" },
                    { label: "Indicators", value: "6" },
                    { label: "Upstream", value: "1,400+ commits" },
                ],
                github: "https://github.com/MaelDemory/boring.notch",
                link: "",
            },
            {
                title: "Kablam!",
                eyebrow: "Multiplayer game, built from scratch",
                description: "Online Bomberman for 2 to 4 players. Share a four-letter code, three minutes a match. TypeScript monorepo with an authoritative server and a simulation shared by client and server.",
                longDescription:
                    "I wanted to understand how online games stay in sync, so I built one. The server owns the game state and broadcasts snapshots at 20 Hz. The client runs the same movement code locally so your character reacts immediately, then reconciles by replaying its inputs once the authoritative state arrives. The simulation sits in a shared package imported by both sides, with a seeded PRNG so the same sequence of inputs always produces the same match. There is a test that checks exactly that.",
                status: "Live",
                year: "2026",
                role: "Simulation, netcode, client and infrastructure",
                tags: ["TypeScript", "WebSocket", "PixiJS", "Netcode", "Monorepo", "Docker", "Fly.io", "Personal"],
                stack: ["TypeScript", "Node.js + ws", "PixiJS", "Vite", "Vitest", "Docker", "Fly.io"],
                highlights: [
                    "Client-side prediction with input replay reconciliation, so movement feels instant on a 20 Hz server.",
                    "Deterministic simulation in a package imported by both client and server, seeded PRNG, and a dedicated determinism test.",
                    "Solo mode against bots at three difficulty levels, sudden death, and a leaderboard that survives restarts.",
                    "Architecture decisions written down before coding, including the options I rejected and the reason for each.",
                ],
                stats: [
                    { label: "Code", value: "~3,100 lines of TS" },
                    { label: "Tick rate", value: "20 Hz" },
                    { label: "Players", value: "2 to 4" },
                ],
                github: "https://github.com/MaelDemory/BomberMan",
                link: "https://bomberman-mael.fly.dev",
            },
            {
                title: "RayTracer",
                eyebrow: "GPU rendering engine",
                description: "Ray-tracing renderer in Java that dispatches automatically to the GPU through Vulkan compute, with a parallel CPU fallback. Renders a 100,000-triangle scene in 8K.",
                longDescription:
                    "This was a university assignment that I kept working on afterwards, because the CPU version was too slow to be interesting. It now has a Vulkan compute path, with the GLSL shader compiled to SPIR-V when the program starts, and it falls back to a multi-threaded CPU renderer when there is no GPU. The reference scene is the Stanford Dragon at 100,000 triangles, rendered at 7680x4320. Without the BVH it simply never finishes.",
                status: "Open source",
                year: "2025",
                role: "Architecture, rendering pipeline and GPU programming",
                tags: ["Java", "Vulkan", "GPU", "Multi-threading", "BVH", "Docker", "University & personal"],
                stack: ["Java", "Vulkan compute (LWJGL)", "GLSL to SPIR-V", "BVH", "Docker", "Maven"],
                highlights: [
                    "Vulkan compute backend with GLSL shaders compiled to SPIR-V at runtime, and an automatic multi-threaded CPU fallback when no GPU is available.",
                    "BVH acceleration structure, without which the reference scene (the Stanford Dragon, 100,000 triangles at 7680x4320) would not be renderable.",
                    "Containerised with Docker and covered by a unit-test suite across geometry, camera and colour.",
                ],
                stats: [
                    { label: "Geometry", value: "100k triangles" },
                    { label: "Output", value: "8K (7680x4320)" },
                    { label: "Backends", value: "Vulkan / CPU" },
                ],
                github: "https://github.com/MaelDemory/Raytracer",
                link: "",
            },
            {
                title: "Retro games in the browser",
                eyebrow: "WebAssembly and deployment",
                description: "Quake 3 InstaGib and the 1993 Doom, both playable from a link, both multiplayer over WebSockets. Two engines compiled to WebAssembly, packaged and shipped.",
                longDescription:
                    "These are integration projects rather than engine work, and both READMEs credit the people whose ports I built on. What I did is everything between a compiled engine and a working URL: multi-stage Docker builds, an Emscripten compilation step, a WebSocket relay for rooms, and patching the Quake client so it follows the page protocol instead of the hard-coded one. Getting them onto Fly.io in a shape where the machine sleeps between games is why they cost close to nothing to leave online.",
                status: "Live",
                year: "2026",
                role: "Packaging, networking and deployment",
                tags: ["WebAssembly", "Docker", "WebSocket", "Fly.io", "Emscripten", "Personal"],
                stack: ["Docker", "Emscripten", "Node.js + ws", "Fly.io", "WebAssembly"],
                highlights: [
                    "Two engines compiled to WebAssembly, one container each, with only freely redistributable game content shipped.",
                    "WebSocket relay handling rooms, up to 4 players on Doom and 12 on the Quake server.",
                    "Fly.io auto-stop on both. Doom runs at doom-mael.fly.dev, Quake InstaGib at quake-mael.fly.dev.",
                ],
                stats: [
                    { label: "Engines", value: "ioquake3, Chocolate Doom" },
                    { label: "Target", value: "WebAssembly" },
                    { label: "Hosting", value: "Fly.io, auto-stop" },
                ],
                github: "https://github.com/MaelDemory/doom-mp",
                link: "https://doom-mael.fly.dev",
            },
            {
                title: "F1 Ticket System",
                eyebrow: "Ethereum smart contract",
                description: "Formula 1 ticketing on Ethereum. Tickets live on-chain, with a capped resale market, automatic refunds when a race is cancelled, and role-based access.",
                longDescription:
                    "A thousand lines of Solidity with a React front end talking to it through ethers.js. The hard parts were all the ones where money can get stuck: refunds when a race is cancelled, funds locked per race, and a pull-payment pattern so no single account can block a withdrawal. Resale is capped at twice the original price to make scalping pointless, with a 5% cut going back to the platform.",
                status: "Open source",
                year: "2026",
                role: "Smart contract and front end",
                tags: ["Solidity", "Ethereum", "Hardhat", "React", "ethers.js", "University"],
                stack: ["Solidity", "Hardhat + Ignition", "React 19", "ethers.js v6", "Ganache", "MetaMask"],
                highlights: [
                    "39 contract functions covering races, three ticket categories, dynamic pricing, waitlists and loyalty points.",
                    "Three roles with different powers, admin, organiser and support, enforced in the contract rather than the interface.",
                    "Front end with wallet connection, on-chain event listeners for live notifications, and PDF tickets carrying a QR code.",
                ],
                stats: [
                    { label: "Contract", value: "1,000 lines of Solidity" },
                    { label: "Functions", value: "39" },
                    { label: "Front end", value: "React 19, ethers v6" },
                ],
                github: "https://github.com/MaelDemory/projet-blockchain-CI1",
                link: "",
            },
            {
                title: "Claude-config",
                eyebrow: "AI development harness",
                description: "The agentic development setup I built for my team at Arjo and use on my own projects: 13 specialised subagents, 26 skills, hooks, and a one-command installer.",
                longDescription:
                    "Working with an AI assistant on production code only pays off if it follows the same rules as everyone else, so I wrote the rules down as configuration. One subagent per role, one skill per recurring task, and a workflow that runs plan, build, review, simplify, test. The installer took the longest. It is idempotent, it backs up whatever it replaces, it merges permissions into an existing config without touching hooks somebody else set up, and it skips a component cleanly when an optional dependency is missing.",
                status: "Open source",
                year: "2026",
                role: "Design and tooling",
                tags: ["Developer tooling", "AI agents", "Bash", "PowerShell", "MCP", "Personal"],
                stack: ["Claude Code", "Bash", "PowerShell", "Git submodules", "MCP"],
                highlights: [
                    "13 subagents and 26 skills, three of them read-only by construction rather than by instruction.",
                    "Installers for macOS, Linux and Windows, idempotent and reversible, with the platform differences documented.",
                    "Degrades gracefully: a missing tool disables its own hook instead of breaking the session.",
                ],
                stats: [
                    { label: "Subagents", value: "13" },
                    { label: "Skills", value: "26" },
                    { label: "Platforms", value: "macOS, Linux, Windows" },
                ],
                github: "https://github.com/MaelDemory/Claude-config",
                link: "",
            },
            {
                title: "Gatcha",
                eyebrow: "Distributed microservices",
                description: "Gacha-style game built as seven services behind an NGINX gateway: authentication, players, monsters, summoning and combat, with a Next.js front end.",
                longDescription:
                    "Two of us built this for a distributed systems module. I took the Player service, wrote the Combat API, and set up Prometheus and Grafana so we could see what our seven services were actually doing. The thing I would do differently is the monster ownership model, which I had to move to UUIDs halfway through once the summoning service started needing it.",
                status: "University project",
                year: "2025",
                role: "Player and Combat services, observability stack",
                tags: ["Spring Boot", "MongoDB", "Next.js", "Docker", "Microservices", "Prometheus", "Grafana", "University"],
                stack: ["Spring Boot", "MongoDB", "Next.js", "NGINX", "Docker", "Prometheus", "Grafana", "SonarQube"],
                highlights: [
                    "Built the Player service end to end on Spring Boot and MongoDB, from the model and repository through to the controller, including the refactor to UUID-based monster ownership.",
                    "Built the Combat API and the monster renaming feature across the services it touched.",
                    "Set up the whole observability stack: Prometheus metrics collection and Grafana dashboards, with alerting rules.",
                ],
                stats: [
                    { label: "Team", value: "2 developers" },
                    { label: "Architecture", value: "7 services" },
                    { label: "My scope", value: "Player, Combat, monitoring" },
                ],
                github: "https://github.com/RayzerDev/Gatcha",
                link: "https://gatcha-md-front.fly.dev/",
            },
            {
                title: "Travel Social Network",
                eyebrow: "Team project — lead developer",
                description: "A complete social network built around travel, with a Spring Boot API and a React front end, delivered by a team of four.",
                longDescription:
                    "Four of us, and I ended up being the one making the calls: how to split it, what the conventions were, what the API looked like. First time I had done that. It went well enough, though I badly underestimated how much time goes into stopping four people from writing the same thing twice.",
                status: "University project",
                year: "2024",
                role: "Lead developer",
                tags: ["Spring Boot", "React", "REST API", "Team leadership", "University"],
                stack: ["Spring Boot", "React", "REST API", "Relational database"],
                highlights: [
                    "Led a team of four: work breakdown, shared conventions and architecture decisions.",
                    "Spring Boot REST API backing a React single-page front end.",
                    "First hands-on experience of the coordination cost of a multi-developer codebase.",
                ],
                stats: [
                    { label: "Team", value: "4 developers" },
                    { label: "Role", value: "Lead developer" },
                    { label: "Stack", value: "Spring Boot / React" },
                ],
                github: "",
                link: "",
            },
            {
                title: "Accounting Data Extractor",
                eyebrow: "Document automation",
                description: "Web application that reads PDF invoices and automatically extracts the hours worked per client.",
                longDescription:
                    "I was re-typing the same numbers off PDF invoices every month, so I wrote something to do it for me. It reads the invoices and gives back hours per client. The web part took an afternoon. Getting the extraction to be right took a lot longer than that.",
                status: "Personal tool",
                year: "2025",
                role: "Functional design and development",
                tags: ["Python", "Flask", "PDF parsing", "Personal"],
                stack: ["Python", "Flask", "PDF parsing"],
                highlights: [
                    "Automated reading of PDF invoices, replacing a manual pass through each document.",
                    "Per-client aggregation of billable hours, ready to use downstream.",
                    "A deliberately narrow scope: one repetitive task, removed properly.",
                ],
                stats: [
                    { label: "Input", value: "PDF invoices" },
                    { label: "Output", value: "Hours per client" },
                    { label: "Purpose", value: "Removing manual work" },
                ],
                github: "",
                link: "",
            },
            {
                title: "Concert Ticket App",
                eyebrow: "Team project — mobile",
                description: "Mobile application for managing concert tickets, with a Laravel API and a React Native client, built by a team of three.",
                longDescription:
                    "Three of us. Laravel on one side, React Native on the other, and I worked across both. The constraint that shaped it was that a ticket has to still work when the phone has no signal, which inside a concert venue is most of the time.",
                status: "University project",
                year: "2024",
                role: "Developer — API and mobile client",
                tags: ["Laravel", "React Native", "Mobile", "REST API", "University"],
                stack: ["Laravel", "React Native", "REST API", "MySQL"],
                highlights: [
                    "Laravel REST API consumed by a React Native client.",
                    "Worked to a shared API contract with the rest of the team.",
                    "Cross-platform mobile delivery from a single codebase.",
                ],
                stats: [
                    { label: "Team", value: "3 developers" },
                    { label: "Platforms", value: "iOS and Android" },
                    { label: "Stack", value: "Laravel / React Native" },
                ],
                github: "",
                link: "",
            },
            {
                title: "Portfolio",
                eyebrow: "This site",
                description: "The site you are reading: my background, skills and projects, in English and French.",
                longDescription:
                    "The site you are on. I wanted something that reads like a page rather than a CV template, so there is one accent colour, no gradients, and the only showy thing is the name at the top reacting to the cursor. Everything exists in English and French. The theme is resolved before the first paint so it never flashes white.",
                status: "Continuously evolving",
                year: "2026",
                role: "Product design, frontend and integration",
                tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Personal"],
                stack: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
                highlights: [
                    "Floating navigation with automatic detection of the visible section.",
                    "Full English and French content, theme resolved before the first paint.",
                    "Reduced-motion and reduced-transparency preferences respected throughout.",
                ],
                stats: [
                    { label: "Approach", value: "Editorial UI" },
                    { label: "Languages", value: "English and French" },
                    { label: "Rendering", value: "Static prerender" },
                ],
                github: "https://github.com/MaelDemory/CV-NextJS-Demory-Mael",
                link: "",
            },
        ],
        modal: {
            close: "Close project details",
            viewCode: "View the code",
            openProject: "Open the project",
            overview: "Overview",
            highlights: "Highlights",
            stack: "Technologies & tools",
            keywords: "Keywords",
        },
        projectCardCta: "Details",
        passions: {
            title: "Passions.",
            lede: "What drives me outside of code.",
            main: ["Formula 1 🏎️", "New technologies 🚀", "Cars 🚗"],
            subs: ["Travel ✈️ — 8 countries", "Fashion 👟", "Video games 🎮", "Photography 📸", "Weight training 🏋️"],
        },
        contact: {
            email: { title: "Email", subtitle: "Direct channel", cta: "Send me an email" },
            github: { title: "GitHub", subtitle: "Code & projects", cta: "View my GitHub" },
            linkedin: { title: "LinkedIn", subtitle: "Professional profile", cta: "View my LinkedIn" },
            note: "Based in France (CET). I usually reply within 24 hours.",
        },
        footer: { rights: "All rights reserved.", source: "Portfolio source code" },
        a11y: { toggleTheme: "Toggle theme", github: "GitHub", switchLang: "Switch language" },
    },
    fr: {
        nav: {
            hero: "Accueil",
            about: "À propos",
            parcours: "Parcours",
            competences: "Compétences",
            projets: "Projets",
            passions: "Passions",
            contact: "Contact",
        },
        hero: {
            photoAlt: "Photo de Maël Demory",
            tagline: "Passioné par les nouvelles technologies, futur ingénieur logiciel et développeur PHP/JavaScript.",
            availability: "À la recherche d'un stage d'ingénieur logiciel à l'étranger · juin – septembre 2027",
            studentAt: "Étudiant ingénieur à",
            apprenticeAt: "Alternant ingénieur logiciel chez",
            location: "Hauts-de-France, France — mobile dans le monde entier",
            ctaContact: "Me contacter",
            ctaCv: "Télécharger mon CV",
            ctaProjects: "Voir mes projets",
            scrollLabel: "Aller à la section À propos",
        },
        sections: {
            about: { title: "Ce que j'apporte à une équipe.", lede: "" },
            parcours: { title: "Formation d'ingénieur et expérience en alternance.", lede: "" },
            competences: { title: "Les technologies que j'utilise, et à quel niveau.", lede: "" },
            projets: { title: "Une sélection de projets personnels et universitaires.", lede: "" },
            contact: { title: "Discutons de vos projets ou d'une opportunité.", lede: "" },
        },
        about: {
            paragraphs: [
                "Je suis développeur PHP et JavaScript chez Arjo France, filiale française d'un groupe suédois de dispositifs médicaux. J'interviens au quotidien sur les applications de gestion internes qui pilotent l'activité de la filiale, aussi bien pour les faire évoluer que pour les maintenir.",
                "Mon travail consiste à traduire un besoin exprimé par un métier en une solution technique réalisable, puis à en assurer la maintenance dans la durée. Une bonne partie se déroule dans des bases de code legacy, où la cohérence avec l'existant compte davantage que l'élégance d'une solution isolée. C'est ce qui me rendrait rapidement opérationnel dans une nouvelle équipe.",
            ],
            pillars: [
                {
                    title: "Deux ans d'alternance en entreprise",
                    body: "Deux contrats d'alternance consécutifs, sur des logiciels utilisés tous les jours par de vraies équipes.",
                },
                {
                    title: "D'un besoin métier à une solution technique",
                    body: "Le besoin vient du métier. La conception technique, le développement et le suivi auprès des utilisateurs relèvent de mon périmètre.",
                },
                {
                    title: "Un environnement industriel régulé",
                    body: "Un groupe de dispositifs médicaux certifié ISO 13485 et ISO 9001, où la traçabilité conditionne chaque développement.",
                },
                {
                    title: "Du développement assisté par IA",
                    body: "Mis en place pour mon équipe, appliqué à du code de production sous vérification humaine.",
                },
            ],
            workStyleTitle: "Ma façon de travailler",
            workStyle: [
                {
                    title: "Mener une fonctionnalité de bout en bout",
                    body: "La fonctionnalité pièces détachées s'est étalée sur six mois, du fichier vide jusqu'à la formation du support technique, en passant par une trentaine de retours traités et validés un par un.",
                },
                {
                    title: "Intervenir sur du code existant",
                    body: "L'essentiel de mon travail se déroule dans des applications antérieures à mes études. Comprendre le travail d'autrui avant d'agir est un exercice très différent du développement d'une fonctionnalité neuve.",
                },
                {
                    title: "Dialoguer avec des interlocuteurs non techniques",
                    body: "Mes interlocuteurs se répartissent en deux cercles : l'équipe technique au quotidien, et les métiers pour qui je développe. Expliquer un sujet technique à un non-spécialiste fait partie du travail.",
                },
                {
                    title: "Rigueur méthodologique",
                    body: "Commits atomiques, estimation des tâches dans Azure DevOps, revue de code systématique par les développeurs expérimentés de l'équipe, corrections traçables et validées une à une.",
                },
            ],
            availabilityTitle: "Disponibilité et langues",
            availabilityLead: "Je recherche un stage d'ingénieur logiciel à l'étranger.",
            availabilityHighlights: [
                { label: "Dates", value: "21 juin à fin sept. 2027" },
                { label: "Durée", value: "9 à 12 semaines" },
                { label: "Zone", value: "Monde entier" },
                { label: "Anglais", value: "C1, TOEIC 900/990" },
            ],
            availability: [
                { label: "Cadre", value: "Convention de stage d'école d'ingénieur (IMT Nord Europe). Citoyen de l'UE, aucun visa requis dans l'UE et l'EEE." },
                { label: "Autres langues", value: "Français langue maternelle. Espagnol B1." },
            ],
            availabilityNote: "Français au quotidien avec l'équipe, anglais pour le code, les commits et la documentation. Entretien technique dans l'une ou l'autre langue.",
            availabilityCta: "Me contacter",
        },
        parcoursLabels: { experience: "Expérience", formation: "Formation", modules: "Modules" },
        parcours: [
            {
                type: "experience",
                title: "Ingénieur logiciel en alternance",
                subtitle: "Arjo France",
                context: "Groupe suédois de dispositifs médicaux coté au Nasdaq Stockholm, environ 7 000 collaborateurs dans plus de 100 pays. Certifié ISO 13485 et ISO 9001.",
                period: "Sept. 2025 – aujourd'hui",
                description: [
                    "Développement et maintenance des applications de gestion internes qui pilotent l'activité de la filiale : contrats de service, parc d'équipements, pièces détachées, planification des interventions et facturation. Entre 500 et 600 utilisateurs. Stack : PHP 8, SQL Server, JavaScript, jQuery, Bootstrap, Vite.",
                    "Création de zéro, sur six mois, d'une fonctionnalité complète de gestion des pièces détachées de maintenance : neuf pages de back-office, environ 22 000 lignes de code, 220 commits. À partir d'un cahier des charges formalisé par les cheffes de projet, j'ai assuré la conception technique, le développement, puis le traitement d'une trentaine de retours des utilisateurs testeurs.",
                    "Elle remplace une gestion manuelle par fichiers Excel et PDF par un référentiel unique, calcule automatiquement la tarification de chaque client depuis l'ERP M3 et publie les pièces validées sur le portail client.",
                    "Contribution de 213 commits sur 391 fichiers à un chantier collectif de modernisation d'un monolithe historique : migration des tableaux du back-office vers une pagination et un tri côté serveur, reconstruction de plus de vingt traitements planifiés sur un template commun, et correction d'un défaut de la couche d'accès aux données qui provoquait des annulations de transactions et des alertes injustifiées.",
                    "Extension de la couche de stockage SQL Server FileStream mise en place par l'équipe (environ 1 300 lignes, étendues sans réécriture) : création de la page de supervision utilisée par le Service DATA, puis généralisation à un second périmètre applicatif, ce qui permet de placer une dizaine de répertoires documentaires sous sauvegarde transactionnelle.",
                    "Mise en place du workflow de développement assisté par IA de l'équipe (agents personnalisés, hooks, skills), appliqué à du code de production sous vérification humaine systématique.",
                ],
            },
            {
                type: "formation",
                title: "Cursus d'ingénieur — Informatique, Télécommunications et Réseaux",
                subtitle: "IMT Nord Europe",
                context: "Grande école d'ingénieurs, membre de l'Institut Mines-Télécom, réseau public de grandes écoles françaises. Diplôme d'ingénieur accrédité par la Commission des titres d'ingénieur, niveau master.",
                period: "Sept. 2025 – 2028",
                description: [
                    "Cursus en trois ans par apprentissage, au rythme de deux semaines de cours pour cinq semaines en entreprise, clos par un projet de fin d'études.",
                    "Le cursus comprend une période de mobilité internationale obligatoire, qui correspond au stage que je recherche actuellement.",
                    "Séjour d'étude de dix jours à York, au Royaume-Uni, consacré à la préparation du TOEIC.",
                    "Plusieurs projets présentés sur ce site sont issus de ces modules : le RayTracer de la programmation orientée objet, le F1 Ticket System de la blockchain, et Gatcha du module Web API et data, dont la stack de monitoring vient de l'ingénierie logicielle.",
                ],
                modules: [
                    "Programmation orientée objet",
                    "Structures de données",
                    "Web API et data",
                    "Ingénierie logicielle",
                    "Blockchain",
                    "Développement mobile",
                    "Data science",
                    "Business intelligence",
                    "Systèmes et réseaux",
                    "Shell et Unix",
                    "Théorie des graphes",
                    "Comptabilité",
                    "Communication",
                    "Valeurs entrepreneuriales",
                    "Anglais professionnel",
                ],
            },
            {
                type: "experience",
                title: "Développeur web en alternance",
                subtitle: "IMT Nord Europe",
                context: "Pôle Outils et Services Numériques de la direction informatique de l'école.",
                period: "Févr. 2024 – août 2025",
                description: [
                    "Seul développeur sur trois applications web internes du portail intranet de l'école : commande de cartes de visite, demandes d'événements étudiants et suivi du recrutement des nouveaux arrivants. Une centaine d'utilisateurs, personnel et étudiants.",
                    "Sur la base d'un cahier des charges définissant le périmètre fonctionnel et le flux de validations, j'ai pris en charge la modélisation de la base de données, le back-end et le front-end de chaque application.",
                    "Réunions régulières avec les services concernés (restauration, reprographie, vie étudiante, ressources humaines), en présence de mon responsable et de ma tutrice, pour recueillir leurs retours et faire évoluer les outils.",
                    "Suivi du travail par tableau kanban GitLab, avec une issue par tâche et le numéro d'issue reporté dans chaque commit, puis déploiement en pré-production avant la mise en production.",
                    "Stack : PHP/Laravel, MySQL, JavaScript, Bootstrap.",
                ],
            },
            {
                type: "formation",
                title: "BUT Informatique — Parcours Conception et développement d'applications",
                subtitle: "IUT de Lens — Université d'Artois",
                context: "Bachelor universitaire de technologie en trois ans, 180 crédits ECTS, parcours Conception et développement d'applications.",
                period: "2022 – 2025",
                description: [
                    "Conception et développement d'applications, bases de données, modélisation UML, tests, réseaux, méthodes agiles et gestion de projet.",
                    "Réseau social sur le thème du voyage, en équipe de quatre, en tant que lead développeur : API Spring Boot et front React.",
                    "Application mobile de gestion de tickets de concert, en équipe de trois : API Laravel et client React Native.",
                    "Reproduction de Minecraft en deux dimensions, développée seul en Java.",
                ],
            },
        ],
        competences: {
            core: "Cœur",
            coreLede: "au quotidien, en production",
            working: "Maîtrise pratique",
            workingLede: "déjà livré avec",
            explored: "Exploré",
            exploredLede: "étudié et prototypé",
            ai: "Développement assisté par IA",
            aiLede: "intégré à mon quotidien",
            groups: {
                front: "Front",
                back: "Back",
                mobile: "Mobile",
                data: "Données",
                devops: "DevOps et infrastructure",
                quality: "Qualité et outillage",
            },
            aiSkills: ["Claude Code", "Développement agentique", "Agents IA", "MCP", "Prompt engineering", "LLM"],
        },
        projets: [
            {
                title: "F1dle",
                eyebrow: "Site de jeux Formule 1",
                description: "Six jeux de devinettes Formule 1 sur un même site, adossés à une API Laravel qui contient tous les pilotes depuis 1950. Trois apps Fly.io, surveillées par Prometheus et Grafana.",
                longDescription:
                    "Le projet a démarré comme un simple clone de Wordle appliqué aux pilotes de Formule 1, puis s'est étoffé jusqu'à six modes de jeu, dont un consistant à nommer le champion du monde de chaque saison depuis 1950 et une grille inspirée de Connections. L'essentiel du travail se situe derrière le jeu : une API qui met les résultats de courses en cache dans MySQL et bascule sur la source Ergast lorsqu'une saison est absente, cinq commandes de synchronisation pour l'alimenter, et une bibliothèque de composants développée en interne. Le réglage des indices a demandé plus de temps que la logique de jeu elle-même.",
                status: "En ligne",
                year: "2024 – 2026",
                role: "Produit, frontend, API et infrastructure",
                tags: ["React", "TypeScript", "Laravel", "MySQL", "Docker", "Fly.io", "Prometheus", "Grafana", "Personnel"],
                stack: ["React + TypeScript", "Laravel 11", "MySQL 8", "Tailwind CSS", "Docker", "Fly.io", "Prometheus", "Grafana"],
                highlights: [
                    "Six modes qui partagent un même moteur, du classique « devine le pilote » au Higher or Lower, à la grille des écuries et à un plateau façon Connections.",
                    "API Laravel sur cinq tables couvrant tous les pilotes, champions et courses depuis 1950, avec les résultats mis en cache dans MySQL et un repli externe quand une saison manque.",
                    "Trois apps Fly.io distinctes, un front public, une API privée et MySQL sur un volume, plus Prometheus et Grafana avec un dashboard provisionné.",
                    "Interface intégralement en anglais et en français, une bibliothèque de composants maison, et 13 fichiers de tests sur les modes de jeu et l'API.",
                ],
                stats: [
                    { label: "Code", value: "~9 400 lignes" },
                    { label: "Modes de jeu", value: "6" },
                    { label: "Données", value: "F1 depuis 1950" },
                ],
                github: "https://github.com/MaelDemory/F1dle",
                link: "https://f1dle-md.fly.dev",
            },
            {
                title: "Boring Notch",
                eyebrow: "Contribution open source, macOS",
                description: "Fork de l'application macOS Boring Notch, enrichi de six indicateurs optionnels dans l'encoche du MacBook : météo, CPU et mémoire, VPN, batterie des périphériques Bluetooth, modes de concentration et solde de l'API DeepSeek.",
                longDescription:
                    "Le projet d'origine compte plus de 1 400 commits et ne m'appartient pas. Ma contribution tient dans dix commits en avance sur l'upstream, soit 23 fichiers et environ 1 550 lignes ajoutées. Chaque indicateur suit le même découpage (un manager, ses modèles, sa vue) et reste désactivé par défaut, activable depuis les réglages. Le moniteur système interroge directement les APIs Mach pour la charge processeur et la pression mémoire, la détection du VPN passe par Network et SystemConfiguration, et la batterie des périphériques Bluetooth par IOKit. Le fork embarque également un correctif : le remplacement du HUD système était silencieusement désactivé lorsque le helper XPC n'héritait pas de l'autorisation d'accessibilité de l'application principale.",
                status: "Open source",
                year: "2026",
                role: "Développement de fonctionnalités et correctif",
                tags: ["Swift", "SwiftUI", "macOS", "IOKit", "Open source", "Personnel"],
                stack: ["Swift", "SwiftUI", "Combine", "APIs Mach", "IOKit", "Network", "SystemConfiguration"],
                highlights: [
                    "Six indicateurs ajoutés, chacun sur le même découpage manager / modèles / vue, désactivés par défaut et activables depuis les réglages.",
                    "Lecture de la charge CPU et de la pression mémoire via les APIs Mach, détection du VPN via Network et SystemConfiguration, batterie Bluetooth via IOKit.",
                    "Correctif sur le remplacement du HUD système, désactivé à tort lorsque le helper XPC n'hérite pas de l'autorisation d'accessibilité.",
                    "Traductions ajoutées au fichier de localisation du projet, et README documentant les apports du fork ainsi que la limite connue du stockage de la clé DeepSeek.",
                ],
                stats: [
                    { label: "Contribution", value: "10 commits, +1 550 lignes" },
                    { label: "Indicateurs", value: "6" },
                    { label: "Projet amont", value: "1 400+ commits" },
                ],
                github: "https://github.com/MaelDemory/boring.notch",
                link: "",
            },
            {
                title: "Kablam!",
                eyebrow: "Jeu multijoueur, écrit de zéro",
                description: "Un Bomberman en ligne de 2 à 4 joueurs. On partage un code à quatre lettres, la partie dure trois minutes. Monorepo TypeScript, serveur autoritaire, simulation partagée entre le client et le serveur.",
                longDescription:
                    "L'objectif de départ était de comprendre comment un jeu en ligne maintient la cohérence entre plusieurs joueurs. Le serveur détient l'état de la partie et diffuse des snapshots à 20 Hz. Le client rejoue localement le même code de déplacement, ce qui permet une réaction immédiate, puis se réconcilie en rejouant ses inputs à réception de l'état autoritaire. La simulation est isolée dans un package importé par le client comme par le serveur, avec un générateur pseudo-aléatoire à graine : une même suite d'inputs produit toujours la même partie, et un test dédié le vérifie.",
                status: "En ligne",
                year: "2026",
                role: "Simulation, netcode, client et infrastructure",
                tags: ["TypeScript", "WebSocket", "PixiJS", "Netcode", "Monorepo", "Docker", "Fly.io", "Personnel"],
                stack: ["TypeScript", "Node.js + ws", "PixiJS", "Vite", "Vitest", "Docker", "Fly.io"],
                highlights: [
                    "Prédiction côté client et réconciliation par rejeu des inputs, pour que le déplacement reste instantané malgré un serveur à 20 Hz.",
                    "Simulation déterministe dans un package importé par le client et le serveur, PRNG à graine, et un test de déterminisme dédié.",
                    "Mode solo contre des bots à trois niveaux de difficulté, mort subite, et un classement qui survit aux redémarrages.",
                    "Choix d'architecture écrits avant de coder, avec les options écartées et la raison de chacune.",
                ],
                stats: [
                    { label: "Code", value: "~3 100 lignes de TS" },
                    { label: "Fréquence", value: "20 Hz" },
                    { label: "Joueurs", value: "2 à 4" },
                ],
                github: "https://github.com/MaelDemory/BomberMan",
                link: "https://bomberman-mael.fly.dev",
            },
            {
                title: "RayTracer",
                eyebrow: "Moteur de rendu GPU",
                description: "Moteur de lancer de rayons en Java qui bascule automatiquement sur le GPU via Vulkan compute, avec un repli CPU parallèle. Rend une scène de 100 000 triangles en 8K.",
                longDescription:
                    "Le projet initial a été réalisé dans un cadre universitaire, puis repris à titre personnel pour en améliorer les performances. Il dispose aujourd'hui de plusieurs backends : un chemin Vulkan compute, dont le shader GLSL est compilé en SPIR-V au démarrage, et un rendu CPU multi-threadé qui prend le relais en l'absence de GPU, la détection étant automatique. La scène de référence est le Stanford Dragon, soit 100 000 triangles rendus en 7680x4320 ; sans la structure d'accélération BVH, le calcul n'aboutit pas.",
                status: "Open source",
                year: "2025",
                role: "Architecture, pipeline de rendu et programmation GPU",
                tags: ["Java", "Vulkan", "GPU", "Multi-threading", "BVH", "Docker", "Universitaire et personnel"],
                stack: ["Java", "Vulkan compute (LWJGL)", "GLSL vers SPIR-V", "BVH", "Docker", "Maven"],
                highlights: [
                    "Backend Vulkan compute avec shaders GLSL compilés en SPIR-V à l'exécution, et repli CPU multi-threadé automatique en l'absence de GPU.",
                    "Structure d'accélération BVH, sans laquelle la scène de référence (le Stanford Dragon, 100 000 triangles en 7680x4320) ne serait pas calculable.",
                    "Conteneurisé avec Docker et couvert par une suite de tests unitaires (géométrie, caméra, couleur).",
                ],
                stats: [
                    { label: "Géométrie", value: "100k triangles" },
                    { label: "Sortie", value: "8K (7680x4320)" },
                    { label: "Backends", value: "Vulkan / CPU" },
                ],
                github: "https://github.com/MaelDemory/Raytracer",
                link: "",
            },
            {
                title: "Jeux rétro dans le navigateur",
                eyebrow: "WebAssembly et déploiement",
                description: "Quake 3 InstaGib et le Doom de 1993, jouables depuis un lien, tous les deux en multijoueur par WebSockets. Deux moteurs compilés en WebAssembly, empaquetés et mis en ligne.",
                longDescription:
                    "Il s'agit de projets d'intégration et non de développement de moteur : les README créditent les auteurs des portages utilisés. Ma contribution couvre tout ce qui sépare un moteur compilé d'une URL fonctionnelle, à savoir les builds Docker multi-étapes, la compilation Emscripten, le relais WebSocket pour la gestion des rooms, et l'adaptation du client Quake pour qu'il suive le protocole de la page plutôt qu'une valeur codée en dur. Le déploiement sur Fly.io a été conçu pour que la machine s'arrête entre deux parties, ce qui permet de laisser les deux jeux en ligne à un coût négligeable.",
                status: "En ligne",
                year: "2026",
                role: "Empaquetage, réseau et déploiement",
                tags: ["WebAssembly", "Docker", "WebSocket", "Fly.io", "Emscripten", "Personnel"],
                stack: ["Docker", "Emscripten", "Node.js + ws", "Fly.io", "WebAssembly"],
                highlights: [
                    "Deux moteurs compilés en WebAssembly, un conteneur chacun, avec uniquement du contenu de jeu librement redistribuable.",
                    "Relais WebSocket pour les rooms, jusqu'à 4 joueurs sur Doom et 12 sur le serveur Quake.",
                    "Auto-stop Fly.io sur les deux. Doom tourne sur doom-mael.fly.dev, Quake InstaGib sur quake-mael.fly.dev.",
                ],
                stats: [
                    { label: "Moteurs", value: "ioquake3, Chocolate Doom" },
                    { label: "Cible", value: "WebAssembly" },
                    { label: "Hébergement", value: "Fly.io, auto-stop" },
                ],
                github: "https://github.com/MaelDemory/doom-mp",
                link: "https://doom-mael.fly.dev",
            },
            {
                title: "F1 Ticket System",
                eyebrow: "Smart contract Ethereum",
                description: "Billetterie Formule 1 sur Ethereum. Les billets vivent on-chain, avec un marché de revente plafonné, des remboursements automatiques à l'annulation d'une course et une gestion de rôles.",
                longDescription:
                    "Application de billetterie Formule 1 sur Ethereum, composée d'un contrat Solidity d'un millier de lignes et d'un front React qui dialogue avec lui via ethers.js. Les points les plus délicats concernent les cas où des fonds peuvent rester bloqués : remboursements à l'annulation d'une course, verrouillage des fonds par course, et pattern pull-payment qui empêche qu'un compte bloque un retrait. La revente est plafonnée au double du prix d'origine, avec une commission de 5 % reversée à la plateforme.",
                status: "Open source",
                year: "2026",
                role: "Smart contract et front-end",
                tags: ["Solidity", "Ethereum", "Hardhat", "React", "ethers.js", "Universitaire"],
                stack: ["Solidity", "Hardhat + Ignition", "React 19", "ethers.js v6", "Ganache", "MetaMask"],
                highlights: [
                    "39 fonctions de contrat couvrant les courses, trois catégories de billets, la tarification dynamique, les listes d'attente et les points de fidélité.",
                    "Trois rôles aux pouvoirs distincts, admin, organisateur et support, appliqués dans le contrat et pas dans l'interface.",
                    "Front-end avec connexion du wallet, écoute des événements on-chain pour les notifications, et billets PDF avec QR code.",
                ],
                stats: [
                    { label: "Contrat", value: "1 000 lignes de Solidity" },
                    { label: "Fonctions", value: "39" },
                    { label: "Front-end", value: "React 19, ethers v6" },
                ],
                github: "https://github.com/MaelDemory/projet-blockchain-CI1",
                link: "",
            },
            {
                title: "Claude-config",
                eyebrow: "Harnais de développement IA",
                description: "Le dispositif de développement agentique que j'ai monté pour mon équipe chez Arjo et que j'utilise sur mes projets : 13 subagents spécialisés, 26 skills, des hooks et un installeur en une commande.",
                longDescription:
                    "Travailler avec une IA sur du code de production suppose qu'elle respecte les mêmes règles que le reste de l'équipe. Ces règles sont donc écrites sous forme de configuration : un subagent par rôle, une skill par tâche récurrente, et un enchaînement plan, build, revue, simplification, tests. L'installeur a représenté l'essentiel du travail. Il est idempotent, sauvegarde les fichiers qu'il remplace, fusionne les permissions dans une configuration existante sans toucher aux hooks déjà en place, et ignore proprement un composant lorsqu'une dépendance optionnelle est absente.",
                status: "Open source",
                year: "2026",
                role: "Conception et outillage",
                tags: ["Outillage développeur", "Agents IA", "Bash", "PowerShell", "MCP", "Personnel"],
                stack: ["Claude Code", "Bash", "PowerShell", "Submodules git", "MCP"],
                highlights: [
                    "13 subagents et 26 skills, dont trois en lecture seule par construction plutôt que par consigne.",
                    "Installeurs macOS, Linux et Windows, idempotents et réversibles, avec les différences de plateforme documentées.",
                    "Dégradation propre : un outil absent désactive son propre hook au lieu de casser la session.",
                ],
                stats: [
                    { label: "Subagents", value: "13" },
                    { label: "Skills", value: "26" },
                    { label: "Plateformes", value: "macOS, Linux, Windows" },
                ],
                github: "https://github.com/MaelDemory/Claude-config",
                link: "",
            },
            {
                title: "Gatcha",
                eyebrow: "Microservices distribués",
                description: "Jeu de type gacha construit en sept services derrière une passerelle NGINX : authentification, joueurs, monstres, invocation et combat, avec un front Next.js.",
                longDescription:
                    "Projet réalisé à deux dans le cadre d'un module sur les systèmes distribués. J'ai pris en charge le service Player, l'API Combat et la stack d'observabilité (Prometheus et Grafana), qui permet de suivre le comportement des sept services. Le modèle de possession des monstres constitue le point que je reprendrais : il a fallu le repasser en UUID en cours de projet, lorsque le service d'invocation en a eu besoin.",
                status: "Projet universitaire",
                year: "2025",
                role: "Services Player et Combat, stack d'observabilité",
                tags: ["Spring Boot", "MongoDB", "Next.js", "Docker", "Microservices", "Prometheus", "Grafana", "Universitaire"],
                stack: ["Spring Boot", "MongoDB", "Next.js", "NGINX", "Docker", "Prometheus", "Grafana", "SonarQube"],
                highlights: [
                    "Création complète du service Player en Spring Boot et MongoDB, du modèle et du repository jusqu'au contrôleur, y compris le passage des monstres à une identification par UUID.",
                    "Développement de l'API Combat et de la fonctionnalité de renommage des monstres sur les services concernés.",
                    "Mise en place de toute la stack d'observabilité : collecte de métriques Prometheus et tableaux de bord Grafana, avec règles d'alerting.",
                ],
                stats: [
                    { label: "Équipe", value: "2 développeurs" },
                    { label: "Architecture", value: "7 services" },
                    { label: "Mon périmètre", value: "Player, Combat, monitoring" },
                ],
                github: "https://github.com/RayzerDev/Gatcha",
                link: "https://gatcha-md-front.fly.dev/",
            },
            {
                title: "Réseau social Voyage",
                eyebrow: "Projet d'équipe — lead développeur",
                description: "Un réseau social complet sur le thème du voyage, avec une API Spring Boot et un front React, livré par une équipe de quatre.",
                longDescription:
                    "Plus gros projet d'équipe du BUT, et première expérience d'encadrement. Au-delà du développement, mon rôle a consisté à découper le travail, à fixer les conventions communes aux quatre membres et à trancher les choix d'architecture suffisamment tôt pour que les différentes parties restent assemblables. Le temps consacré à éviter que deux personnes développent la même chose a été nettement supérieur à mon estimation initiale.",
                status: "Projet universitaire",
                year: "2024",
                role: "Lead développeur",
                tags: ["Spring Boot", "React", "API REST", "Encadrement d'équipe", "Universitaire"],
                stack: ["Spring Boot", "React", "API REST", "Base de données relationnelle"],
                highlights: [
                    "Encadrement d'une équipe de quatre : découpage du travail, conventions communes et décisions d'architecture.",
                    "API REST Spring Boot alimentant un front React en single-page.",
                    "Première confrontation concrète au coût de coordination d'une base de code à plusieurs.",
                ],
                stats: [
                    { label: "Équipe", value: "4 développeurs" },
                    { label: "Rôle", value: "Lead développeur" },
                    { label: "Stack", value: "Spring Boot / React" },
                ],
                github: "",
                link: "",
            },
            {
                title: "Extracteur de données comptables",
                eyebrow: "Automatisation documentaire",
                description: "Application web qui lit des factures PDF et en extrait automatiquement les heures travaillées par client.",
                longDescription:
                    "Cet outil répond à une tâche répétitive : le report manuel, chaque mois, des heures figurant sur des factures PDF. L'application lit les factures et restitue les heures par client. La partie web a demandé un après-midi ; la fiabilisation de l'extraction, nettement plus.",
                status: "Outil personnel",
                year: "2025",
                role: "Conception fonctionnelle et développement",
                tags: ["Python", "Flask", "Lecture de PDF", "Personnel"],
                stack: ["Python", "Flask", "Lecture de PDF"],
                highlights: [
                    "Lecture automatisée des factures PDF, en remplacement d'un passage manuel sur chaque document.",
                    "Agrégation des heures facturables par client, directement exploitable en aval.",
                    "Un périmètre volontairement étroit : une tâche répétitive, supprimée correctement.",
                ],
                stats: [
                    { label: "Entrée", value: "Factures PDF" },
                    { label: "Sortie", value: "Heures par client" },
                    { label: "Objectif", value: "Supprimer du manuel" },
                ],
                github: "",
                link: "",
            },
            {
                title: "Application de tickets de concert",
                eyebrow: "Projet d'équipe — mobile",
                description: "Application mobile de gestion de tickets de concert, avec une API Laravel et un client React Native, réalisée par une équipe de trois.",
                longDescription:
                    "Projet réalisé à trois, avec une API Laravel d'un côté et un client React Native de l'autre, sur lesquels je suis intervenu. La contrainte structurante tenait à ce qu'un ticket reste utilisable lorsque le téléphone ne capte pas, situation fréquente dans une salle de concert.",
                status: "Projet universitaire",
                year: "2024",
                role: "Développeur — API et client mobile",
                tags: ["Laravel", "React Native", "Mobile", "API REST", "Universitaire"],
                stack: ["Laravel", "React Native", "API REST", "MySQL"],
                highlights: [
                    "API REST Laravel consommée par un client React Native.",
                    "Travail sur un contrat d'API partagé avec le reste de l'équipe.",
                    "Livraison mobile multiplateforme depuis une base de code unique.",
                ],
                stats: [
                    { label: "Équipe", value: "3 développeurs" },
                    { label: "Plateformes", value: "iOS et Android" },
                    { label: "Stack", value: "Laravel / React Native" },
                ],
                github: "",
                link: "",
            },
            {
                title: "Portfolio",
                eyebrow: "Ce site",
                description: "Le site que vous lisez : mon parcours, mes compétences et mes projets, en anglais et en français.",
                longDescription:
                    "Le site sur lequel vous vous trouvez. L'objectif était qu'il se lise comme une page éditoriale plutôt que comme un modèle de CV : une seule couleur d'accent, aucun dégradé, et un unique effet marqué, le nom en haut de page qui réagit à la proximité du curseur. Le contenu existe intégralement en anglais et en français, et le thème est résolu avant le premier rendu pour éviter tout flash.",
                status: "En évolution continue",
                year: "2026",
                role: "Design produit, frontend et intégration",
                tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Personnel"],
                stack: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
                highlights: [
                    "Navigation flottante avec détection automatique de la section visible.",
                    "Contenu intégralement bilingue, thème résolu avant le premier rendu.",
                    "Préférences de mouvement et de transparence réduits respectées partout.",
                ],
                stats: [
                    { label: "Approche", value: "UI éditoriale" },
                    { label: "Langues", value: "Anglais et français" },
                    { label: "Rendu", value: "Prérendu statique" },
                ],
                github: "https://github.com/MaelDemory/CV-NextJS-Demory-Mael",
                link: "",
            },
        ],
        modal: {
            close: "Fermer les détails du projet",
            viewCode: "Voir le code",
            openProject: "Ouvrir le projet",
            overview: "Aperçu",
            highlights: "Points clés",
            stack: "Technologies et outils",
            keywords: "Mots-clés",
        },
        projectCardCta: "Détails",
        passions: {
            title: "Passions.",
            lede: "Ce qui m'anime en dehors du code.",
            main: ["Formule 1 🏎️", "Nouvelles technologies 🚀", "Voitures 🚗"],
            subs: ["Voyage ✈️ — 8 pays", "Mode 👟", "Jeux vidéo 🎮", "Photographie 📸", "Musculation 🏋️"],
        },
        contact: {
            email: { title: "Email", subtitle: "Canal direct", cta: "M'envoyer un email" },
            github: { title: "GitHub", subtitle: "Code et projets", cta: "Voir mon GitHub" },
            linkedin: { title: "LinkedIn", subtitle: "Profil professionnel", cta: "Voir mon LinkedIn" },
            note: "Basé en France (CET). Je réponds généralement sous 24 heures.",
        },
        footer: { rights: "Tous droits réservés.", source: "Code source du portfolio" },
        a11y: { toggleTheme: "Changer de thème", github: "GitHub", switchLang: "Changer de langue" },
    },
};
