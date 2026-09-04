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
                    title: "I have been working in a company for two years",
                    body: "Two apprenticeship contracts back to back, on software real teams use every day.",
                },
                {
                    title: "I turn a business need into a technical solution",
                    body: "The need comes from the business. The technical design, the build and the follow-up with users are mine.",
                },
                {
                    title: "I develop in a regulated setting",
                    body: "A medical-device group certified ISO 13485 and ISO 9001, where traceability shapes every change.",
                },
                {
                    title: "I set up my team's AI workflow",
                    body: "Custom agents, hooks and skills, applied to production code with a human reviewing every change.",
                },
                {
                    title: "I test and I measure",
                    body: "Rules and sensitive calculations are covered by automated tests, and I only claim a performance gain once I have measured it under a repeatable protocol.",
                },
                {
                    title: "I work without disturbing what is already there",
                    body: "When I contribute to someone else's project, I add rather than rewrite: I follow the conventions already in place and keep my changes to what is strictly needed.",
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
                description: "A site of Formula 1 guessing games. You have to find a driver or a champion, and hints appear with each attempt. Six different modes, fed by the data of every Grand Prix since 1950.",
                longDescription:
                    "The project started as a plain Wordle clone applied to Formula 1 drivers, then grew to six game modes, one of which asks you to name the world champion of every season back to 1950. Most of the work sits behind the game though, in the part that stores and serves the data. Race results are kept in a local database rather than requested again for every match, and the site only reaches out to a public online source when a season is still missing. Tuning the hints took longer than the game logic: too few and the match comes down to luck, too many and there is nothing left to work out.",
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
                description: "A macOS app that turns the MacBook notch into a small dashboard. I added six pieces of information, each one switchable on its own: weather, processor and memory load, VPN status, Bluetooth device battery, the Focus mode in use, and a DeepSeek account balance.",
                longDescription:
                    "Boring Notch is a free application built by a team that has already put more than 1,400 changes into it. I am not its author: I worked on my own copy of the project, what is called a fork, to add features and offer a fix. The six indicators I wrote all follow the same shape, one part that fetches the information, one that formats it and one that displays it, and each stays off until the user turns it on in Settings. I also fixed a defect in the original application: the replacement of macOS system indicators would switch itself off without warning, because a helper component did not inherit the permissions granted to the main app.",
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
                eyebrow: "Multiplayer engine, two games",
                description: "Two multiplayer games playable in the browser, a Bomberman and a Worms. You create a match, share a four-letter code, and the others type it in to join. Both run on the same engine, which I wrote for the occasion.",
                longDescription:
                    "The engine shared by both games is 340 lines and holds nothing specific to either one: the time loop, the random draw and the messages exchanged over the network. The rules of Bomberman and those of Worms each live in their own module, and a registry declares them to the server and the client alike, so adding a game means writing its module and registering it there. Bomberman was the first case, Worms the validation. The shared difficulty is that the player's machine and the server must compute exactly the same match. The client therefore anticipates the outcome to react without waiting for the network, then corrects itself when the server's version arrives. The slightest difference in calculation between the two would make the match diverge, which is why decimal numbers are banned from the game state.",
                status: "Live",
                year: "2026",
                role: "Engine, netcode, games, client and infrastructure",
                tags: ["TypeScript", "WebSocket", "PixiJS", "Netcode", "Determinism", "Monorepo", "Docker", "Fly.io", "Personal"],
                stack: ["TypeScript", "Node.js + ws", "PixiJS", "Vite", "Vitest", "Docker", "Fly.io"],
                highlights: [
                    "A 340-line generic engine and a game registry: the rules of Bomberman and Worms are two interchangeable modules, imported identically by client and server.",
                    "Determinism enforced by fixed-point arithmetic, with no float in the game state, and by a trigonometric table computed in integers rather than through Math.sin, which is not specified bit for bit.",
                    "Client-side prediction with input replay reconciliation, so movement stays instant despite an authoritative server running at 20 Hz.",
                    "11 test files, 2,003 lines, including a determinism test, a fixed-point test, one prediction test per game and an end-to-end test on the server.",
                ],
                stats: [
                    { label: "Code", value: "~6,200 lines of TS" },
                    { label: "Tick rate", value: "20 Hz server" },
                    { label: "Players", value: "2 to 4" },
                ],
                github: "https://github.com/MaelDemory/BomberMan",
                link: "https://bomberman-mael.fly.dev",
            },
            {
                title: "RayTracer",
                eyebrow: "Multi-backend rendering engine",
                description: "A program that produces synthetic images by simulating the path of light. You describe a scene in a text file and it computes the render, with its shadows and reflections, using the graphics card when one is available and the processor otherwise.",
                longDescription:
                    "The project started as a university assignment and I picked it up again on my own time to work on its performance. Computing an image this way means following millions of light rays, which a graphics card does far faster than a processor. The program therefore tries three paths in order: Metal, Apple's interface for talking to graphics cards, then Vulkan, its cross-platform equivalent, and finally the processor alone if no card can be used. Metal comes first on a Mac because it addresses the hardware directly, where Vulkan has to go through a translation layer. A path that is unavailable hands over to the next without interrupting the render, and an option forces a given one so the three can be compared on the same machine.",
                status: "Open source",
                year: "2025 – 2026",
                role: "Backend architecture, optimisation and GPU programming",
                tags: ["Java", "Metal", "Vulkan", "GPU", "BVH", "FFM API", "Docker", "University & personal"],
                stack: ["Java 24+", "Metal Shading Language", "Vulkan compute (LWJGL)", "Objective-C", "Foreign Function & Memory API", "Maven", "Docker"],
                highlights: [
                    "Three backends behind one interface, probed in the order Metal, Vulkan, CPU, with automatic fallback and a system property to force a specific path.",
                    "The Metal path renders x2.0 to x13.9 faster than the CPU, measured on an Apple M5 at 1920x1080. The 100,000-triangle dragon gains x4.5, but the largest gain goes to a scene of only 92 primitives traced over twelve reflection bounces: the speedup follows the work each pixel demands, not the number of objects.",
                    "490-line Metal kernel carrying the BVH, called from Java through the Foreign Function & Memory API; the Command Line Tools are enough, since the shader is compiled at runtime.",
                    "Fidelity checked pixel by pixel across seven scenes of 2,073,600 pixels: between 0.007% and 0.84% differ from the CPU render, and the differences sit on silhouettes, where in single precision a grazing ray can fall on the wrong side of an edge.",
                ],
                stats: [
                    { label: "Dragon, 100k triangles", value: "551 ms at 1080p" },
                    { label: "Metal over CPU", value: "x2.0 to x13.9" },
                    { label: "Pixels identical to CPU", value: "99.1% at worst" },
                ],
                github: "https://github.com/MaelDemory/Raytracer",
                link: "",
            },
            {
                title: "Retro games in the browser",
                eyebrow: "WebAssembly and deployment",
                description: "Quake 3 and the 1993 Doom, playable together from a single link with nothing to install. You open the page, share the address of the match, and play in the browser.",
                longDescription:
                    "Both games date from the 1990s and were not written by me: other developers converted their original code so it could run in a browser, and the READMEs credit their work. My contribution is everything between that converted code and a web address you can click and play. It covers packaging the game and its server, a relay that connects the players of a same match, and a fix to the Quake client, which insisted on contacting a hard-coded address instead of the page's own. Hosting is configured so the machine shuts down between matches and wakes on the first visitor, which is what makes leaving both games online cost almost nothing.",
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
                description: "A Formula 1 ticketing site, built for the blockchain module of my engineering degree. You connect your wallet, pick a race and a seating category, and buy. After that you can transfer your ticket, resell it on the built-in market, or get a refund if the race is cancelled. Everything goes through Ethereum, so any operation stays verifiable by anyone.",
                longDescription:
                    "The contract covers a ticket's whole life, from purchase to resale or refund. The contract sets out three privileged roles, admin, race organiser and support, each limited to the operations that concern it. Everything else is open to any connected wallet: buying, transferring, reselling, claiming a refund or joining a waiting list needs no particular authorisation. The delicate parts are the ones where money can get stuck: sales proceeds are never sent automatically, they are recorded and then withdrawn on an explicit request, and what must stay available to refund a race is kept apart from what the platform can cash in. A ticket's price moves with how full the race is, down when many seats remain and up when almost none do, and the site can work out the exact price before the buyer confirms, without committing anything.",
                status: "Open source",
                year: "2026",
                role: "Smart contract and front end",
                tags: ["Solidity", "Ethereum", "Hardhat", "React", "ethers.js", "University"],
                stack: ["Solidity", "Hardhat Ignition", "React", "Vite", "ethers.js", "Tailwind CSS", "Ganache", "MetaMask"],
                highlights: [
                    "1,004-line contract with 39 functions, fifteen events making every operation traceable on-chain, three access modifiers, and a pull-payment pattern so no single account can block a withdrawal.",
                    "Dynamic pricing from -10% above 70% of seats remaining to +10% below 20%, resale capped at twice the price paid, a secondary market, per-race and per-category waiting lists, and loyalty points.",
                    "Refunds when a race is cancelled, one by one or in batches, including a forced refund reserved for the support role.",
                    "5,543-line React front end over eight pages, bilingual, with PDF ticket export, contract event listeners and EVM errors translated into readable messages.",
                ],
                stats: [
                    { label: "Contract", value: "1,004 lines, 39 functions" },
                    { label: "Resale", value: "capped at 2x price paid" },
                    { label: "Front end", value: "8 pages, bilingual" },
                ],
                github: "https://github.com/MaelDemory/projet-blockchain-CI1",
                link: "https://f1-ticket-system.fly.dev/",
            },
            {
                title: "Claude-config",
                eyebrow: "AI development harness",
                description: "A ready-to-use setup for working with an AI development assistant. One command installs it, and the assistant then inherits specialised roles, procedures for recurring tasks and the team's rules. It is the setup I put in place at Arjo.",
                longDescription:
                    "Working with an AI on production code only pays off if it follows the same rules as the rest of the team. Those rules are therefore written down once as configuration: one specialised assistant per role, one procedure per recurring task, and an enforced sequence running from plan to build, then review, simplification and tests. The installer took most of the work, because it lands on a machine that already has a configuration of its own. It can be run again safely, backs up what it replaces, adds to existing settings without overwriting the ones already there, and simply skips a component when the tool it depends on is not installed.",
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
                description: "An online game where you summon monsters at random, level them up and send them into battle. A university project built by two of us for the Web API and data module of my engineering degree, split into seven independent services rather than one application.",
                longDescription:
                    "A university project built by two of us, for the Web API and data module of my engineering degree. Rather than one application, the game is split into seven independent programs talking to each other over the network, each responsible for one part of the game: accounts, players, monsters, summoning, combat. I took on the players service, the combat one, and the monitoring of the whole, meaning the tools that continuously collect what the seven services are doing and show it on dashboards. The part I would do differently is how a monster is attached to its owner: I had to change its identifier partway through, once another service needed it.",
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
                description: "A social network built around travel, where everyone shares their destinations and follows other people's. A four-person team project from my bachelor's degree, where I was the lead developer.",
                longDescription:
                    "The largest team project of my degree, and my first experience of leading others. Beyond writing code, my role was to split the work, agree the conventions the four of us would follow, and settle the architecture decisions, meaning how the different parts of the software fit together, early enough that they would still assemble at the end. The time spent stopping two people from building the same thing was well beyond my initial estimate.",
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
                description: "A web tool where you drop invoices in PDF form and get back the number of hours worked for each client, without having to read them off one by one.",
                longDescription:
                    "This tool answers a repetitive task: copying out by hand, every month, the hours listed on PDF invoices. The application reads the invoices and returns the hours per client. The visible part, where you drop the files, took an afternoon. Making the reading reliable, meaning that the result can be trusted without checking it by hand, took considerably longer.",
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
                description: "A mobile app for buying concert tickets and showing them at the door, including when the phone has no signal. A three-person team project from my bachelor's degree.",
                longDescription:
                    "A three-person project. The work was split in two, a server holding the tickets and the accounts, and the application installed on the phone, and I worked on both. The constraint that shaped everything was that a ticket has to stay usable when the phone has no signal, which inside a concert venue is most of the time.",
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
                description: "The site you are reading. It presents my background, my skills and my projects, in English and French, and doubles as a project in its own right.",
                longDescription:
                    "The site you are on. The aim was for it to read like an editorial page rather than a CV template: a single accent colour, no gradients, and one deliberate flourish, the name at the top whose weight reacts to how close the cursor is. Everything exists in English and French, and the choice between light and dark theme is applied before the page appears, to avoid the brief white flash you get on many sites.",
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
                    title: "Je travaille en entreprise depuis deux ans",
                    body: "Deux contrats d'alternance consécutifs, sur des logiciels utilisés tous les jours par de vraies équipes.",
                },
                {
                    title: "Je traduis un besoin métier en solution technique",
                    body: "Le besoin vient du métier. La conception technique, le développement et le suivi auprès des utilisateurs relèvent de mon périmètre.",
                },
                {
                    title: "Je développe dans un cadre régulé",
                    body: "Un groupe de dispositifs médicaux certifié ISO 13485 et ISO 9001, où la traçabilité conditionne chaque développement.",
                },
                {
                    title: "J'ai monté le workflow IA de mon équipe",
                    body: "Agents personnalisés, hooks et skills, appliqués à du code de production sous vérification humaine.",
                },
                {
                    title: "Je teste et je mesure",
                    body: "Les règles et les calculs sensibles sont couverts par des tests automatisés, et je n'annonce un gain de performance qu'après l'avoir mesuré selon un protocole reproductible.",
                },
                {
                    title: "J'interviens sans déranger l'existant",
                    body: "Quand je contribue au projet de quelqu'un d'autre, j'ajoute plutôt que je ne réécris : je respecte les conventions en place et je limite mes modifications au strict nécessaire.",
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
                description: "Un site de jeux de devinettes sur la Formule 1. Il faut retrouver un pilote ou un champion, et des indices se dévoilent à chaque essai. Six modes différents, alimentés par les données de tous les Grands Prix depuis 1950.",
                longDescription:
                    "Le projet a démarré comme un simple clone de Wordle appliqué aux pilotes de Formule 1, puis s'est étoffé jusqu'à six modes de jeu, dont un où il faut nommer le champion du monde de chaque saison depuis 1950. L'essentiel du travail se situe derrière le jeu, dans le fonctionnement qui stocke et sert les données. Les résultats de courses sont conservés dans une base locale plutôt que redemandés à chaque partie, et le site ne va les chercher sur une source publique en ligne que lorsqu'une saison manque.",
                status: "En ligne",
                year: "2024 – 2026",
                role: "Produit, frontend, API et infrastructure",
                tags: ["React", "TypeScript", "Laravel", "MySQL", "Docker", "Fly.io", "Prometheus", "Grafana", "Personnel"],
                stack: ["React + TypeScript", "Laravel 11", "MySQL 8", "Tailwind CSS", "Docker", "Fly.io", "Prometheus", "Grafana"],
                highlights: [
                    "Six modes qui partagent un même moteur, du classique « devine le pilote » au Higher or Lower, à la grille des écuries et à un plateau façon Connections.",
                    "API Laravel sur cinq tables couvrant tous les pilotes, champions et courses depuis 1950, avec les résultats mis en cache dans MySQL et un repli externe quand une saison manque.",
                    "Trois apps Fly.io distinctes, un front public, une API privée et MySQL sur un volume, plus Prometheus et Grafana avec un dashboard.",
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
                description: "Une application macOS qui transforme l'encoche du MacBook en petit tableau de bord. J'y ai ajouté six informations, activables une par une : météo, charge du processeur et de la mémoire, état du VPN, batterie des appareils Bluetooth, mode de concentration en cours et solde de compte DeepSeek.",
                longDescription:
                    "Boring Notch est une application libre développée par une équipe qui lui a déjà consacré plus de 1 400 modifications. Je n'en suis pas l'auteur : j'ai travaillé sur ma propre copie du projet, pour y ajouter des fonctionnalités et proposer une correction. Les six indicateurs que j'ai écrits suivent tous la même organisation, une partie qui va chercher l'information, une partie qui la met en forme et une partie qui l'affiche, et chacun reste éteint tant que l'utilisateur ne l'active pas dans les réglages. J'ai également corrigé un défaut de l'application d'origine : le remplacement des indicateurs système de macOS se désactivait sans prévenir, parce qu'un composant auxiliaire n'héritait pas des autorisations accordées à l'application principale.",
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
                eyebrow: "Moteur multijoueur, deux jeux",
                description: "Deux jeux multijoueurs jouables dans le navigateur, un Bomberman et un Worms. On crée une partie, on partage un code à quatre lettres, les autres le saisissent pour rejoindre. Les deux tournent sur le même moteur, que j'ai écrit pour l'occasion.",
                longDescription:
                    "Le moteur commun aux deux jeux tient en 340 lignes et ne contient rien de spécifique à l'un ou à l'autre : la boucle de temps, le tirage aléatoire et les messages échangés sur le réseau. Les règles de Bomberman et celles de Worms vivent chacune dans leur module, et un registre les déclare au serveur comme au client, si bien qu'ajouter un jeu revient à écrire son module puis à l'inscrire à cet endroit. Bomberman a servi de premier cas, Worms de validation. La difficulté commune est que la machine du joueur et celle du serveur doivent calculer exactement la même partie. Le client anticipe donc le résultat pour réagir sans attendre le réseau, puis se corrige quand la version du serveur arrive. Le moindre écart de calcul entre les deux ferait diverger la partie.",
                status: "En ligne",
                year: "2026",
                role: "Moteur, netcode, jeux, client et infrastructure",
                tags: ["TypeScript", "WebSocket", "PixiJS", "Netcode", "Déterminisme", "Monorepo", "Docker", "Fly.io", "Personnel"],
                stack: ["TypeScript", "Node.js + ws", "PixiJS", "Vite", "Vitest", "Docker", "Fly.io"],
                highlights: [
                    "Moteur générique de 340 lignes et registre de jeux : les règles de Bomberman et de Worms sont deux modules interchangeables, importés à l'identique par le client et par le serveur.",
                    "Déterminisme assuré par une arithmétique en virgule fixe, sans aucun flottant dans l'état du jeu, et par une table trigonométrique calculée en entiers plutôt que par Math.sin, qui n'est pas spécifiée bit à bit.",
                    "Prédiction côté client et réconciliation par rejeu des inputs, pour que le déplacement reste instantané malgré un serveur autoritaire à 20 Hz.",
                    "11 fichiers de tests, soit 2 003 lignes, dont un test de déterminisme, un test de la virgule fixe, un test de prédiction par jeu et un test de bout en bout côté serveur.",
                ],
                stats: [
                    { label: "Code", value: "~6 200 lignes de TS" },
                    { label: "Fréquence", value: "serveur à 20 Hz" },
                    { label: "Joueurs", value: "2 à 4" },
                ],
                github: "https://github.com/MaelDemory/BomberMan",
                link: "https://bomberman-mael.fly.dev",
            },
            {
                title: "RayTracer",
                eyebrow: "Moteur de rendu multi-backend",
                description: "Un programme qui fabrique des images de synthèse en simulant le trajet de la lumière. On lui décrit une scène dans un fichier texte, il en calcule le rendu avec ses ombres et ses reflets, en utilisant la carte graphique quand elle est disponible et le processeur sinon.",
                longDescription:
                    "Le projet initial a été réalisé dans un cadre universitaire, puis repris à titre personnel pour en travailler les performances. Le projet de base a été conçu pour que le CPU fasse les calculs, or calculer une image de cette façon demande de suivre des millions de rayons lumineux, ce qu'une carte graphique fait bien plus vite qu'un processeur. Le programme essaie donc trois chemins dans l'ordre : Metal, l'interface d'Apple pour parler aux cartes graphiques, puis Vulkan, son équivalent multiplateforme, et enfin le processeur seul si aucune carte n'est exploitable. Metal passe en premier sur Mac parce qu'il s'adresse directement au matériel, là où Vulkan doit traverser une couche de traduction. Un chemin indisponible laisse la place au suivant sans interrompre le rendu, et une option permet d'en forcer un pour comparer les trois sur une même machine.",
                status: "Open source",
                year: "2025 – 2026",
                role: "Architecture des backends, optimisation et programmation GPU",
                tags: ["Java", "Metal", "Vulkan", "GPU", "BVH", "FFM API", "Docker", "Universitaire et personnel"],
                stack: ["Java 24+", "Metal Shading Language", "Vulkan compute (LWJGL)", "Objective-C", "Foreign Function & Memory API", "Maven", "Docker"],
                highlights: [
                    "Trois backends derrière une même interface, sondés dans l'ordre Metal, Vulkan, CPU, avec repli automatique et sélection forçable par propriété système.",
                    "Le chemin Metal accélère le rendu de ×2,0 à ×13,9 par rapport au CPU, sur Apple M5 en 1920×1080. Le dragon de 100 000 triangles gagne ×4,5, mais le meilleur gain revient à une scène de 92 primitives seulement, à douze rebonds de réflexion : l'accélération suit le travail demandé par pixel, pas le nombre d'objets.",
                    "Kernel Metal de 490 lignes embarquant le BVH, appelé depuis Java par la Foreign Function & Memory API ; les Command Line Tools suffisent, le shader étant compilé à l'exécution.",
                    "Fidélité contrôlée pixel par pixel sur sept scènes de 2 073 600 pixels : entre 0,007 % et 0,84 % s'écartent du rendu CPU, et les différences se concentrent sur les silhouettes, où un rayon rasant peut basculer du mauvais côté d'une arête en simple précision.",
                ],
                stats: [
                    { label: "Dragon, 100 k triangles", value: "551 ms en 1080p" },
                    { label: "Gain Metal sur CPU", value: "×2,0 à ×13,9" },
                    { label: "Pixels identiques au CPU", value: "99,1 % au pire" },
                ],
                github: "https://github.com/MaelDemory/Raytracer",
                link: "",
            },
            {
                title: "Jeux rétro dans le navigateur",
                eyebrow: "WebAssembly et déploiement",
                description: "Quake 3 et le Doom de 1993, jouables à plusieurs depuis un simple lien, sans rien installer. On ouvre la page, on partage l'adresse de la partie, et on joue dans le navigateur.",
                longDescription:
                    "Ces deux jeux datent des années 1990 et n'ont pas été écrits par moi : d'autres développeurs ont converti leur code d'origine pour qu'il puisse tourner dans un navigateur, et les README créditent leur travail. Ma contribution est tout ce qui sépare ce code converti d'une adresse web sur laquelle on clique pour jouer. Cela comprend la mise en boîte du jeu et de son serveur, un relais qui met en relation les joueurs d'une même partie, et la correction du client de Quake, qui s'obstinait à contacter une adresse écrite en dur au lieu de celle de la page. L'hébergement est configuré pour que la machine s'éteigne entre deux parties et se rallume au premier visiteur, ce qui permet de laisser les deux jeux en ligne pour un coût négligeable.",
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
                description: "Un site de billetterie Formule 1, réalisé pour le module blockchain de mon cursus d'ingénieur. On connecte son portefeuille, on choisit une course et une catégorie de place, on achète. Ensuite on peut transférer son billet, le revendre sur le marché intégré ou se faire rembourser si la course est annulée. Tout passe par Ethereum, donc chaque opération reste vérifiable par n'importe qui.",
                longDescription:
                    "Le contrat couvre le cycle de vie complet d'un billet, de l'achat à la revente ou au remboursement. Le contrat distingue trois rôles privilégiés, l'administrateur, l'organisateur de courses et le support, chacun limité aux opérations qui le concernent. Tout le reste est ouvert à n'importe quel portefeuille connecté : acheter, transférer, revendre, se faire rembourser ou rejoindre une liste d'attente ne demande aucune autorisation particulière. Les points délicats sont ceux où de l'argent peut rester bloqué : le produit des ventes n'est jamais envoyé automatiquement, il est comptabilisé puis retiré sur demande explicite, et ce qui doit rester disponible pour rembourser une course est tenu séparé de ce que la plateforme peut encaisser. Le prix d'un billet varie selon le remplissage, à la baisse quand il reste beaucoup de places et à la hausse quand il n'en reste presque plus, et le site sait calculer le prix exact avant que l'acheteur ne valide, sans rien engager.",
                status: "Open source",
                year: "2026",
                role: "Smart contract et front-end",
                tags: ["Solidity", "Ethereum", "Hardhat", "React", "ethers.js", "Universitaire"],
                stack: ["Solidity", "Hardhat Ignition", "React", "Vite", "ethers.js", "Tailwind CSS", "Ganache", "MetaMask"],
                highlights: [
                    "Contrat de 1 004 lignes et 39 fonctions, quinze événements qui rendent chaque opération traçable on-chain, trois modificateurs d'accès, et un pattern pull-payment qui empêche qu'un compte bloque un retrait.",
                    "Tarification dynamique de −10 % au-dessus de 70 % de places restantes à +10 % en dessous de 20 %, revente plafonnée au double du prix payé, marché secondaire, listes d'attente par course et par catégorie, et points de fidélité.",
                    "Remboursements à l'annulation d'une course, à l'unité ou par lot, y compris un remboursement forcé réservé au rôle support.",
                    "Front React de 5 543 lignes réparties sur huit pages, bilingue, avec export PDF des billets, écoute des événements du contrat et traduction des erreurs EVM en messages lisibles.",
                ],
                stats: [
                    { label: "Contrat", value: "1 004 lignes, 39 fonctions" },
                    { label: "Revente", value: "plafonnée à 2× le prix payé" },
                    { label: "Front", value: "8 pages, bilingue" },
                ],
                github: "https://github.com/MaelDemory/projet-blockchain-CI1",
                link: "https://f1-ticket-system.fly.dev/",
            },
            {
                title: "Claude-config",
                eyebrow: "Harnais de développement IA",
                description: "Une configuration prête à l'emploi pour travailler avec une IA de développement. Une commande suffit à l'installer, et l'assistant hérite alors d'agents spécialisés, de skills pour les tâches courantes et des règles de l'équipe. Il s'agit d'un dispositif destiné à mon usage personnel.",
                longDescription:
                    "Travailler avec une IA sur du code de production suppose qu'elle respecte les mêmes règles que le reste de l'équipe. Ces règles sont donc écrites une fois pour toutes sous forme de configuration : un agent spécialisé par rôle, une skill par tâche qui revient souvent, et un enchaînement imposé qui va du plan au développement, puis à la relecture, à la simplification et aux tests. L'installeur a représenté l'essentiel du travail, parce qu'il arrive sur un poste qui a déjà sa propre configuration. Il peut être relancé sans risque, sauvegarde ce qu'il remplace, complète les réglages existants sans écraser ceux qui étaient déjà là, et se contente d'ignorer un composant quand l'outil dont il dépend n'est pas installé.",
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
                description: "Un jeu en ligne où l'on invoque des monstres au hasard, où on les fait progresser et où on les envoie au combat. Projet universitaire réalisé à deux pour le module Web API et data de mon cursus d'ingénieur, découpé en sept micro-services indépendants plutôt qu'en une seule application.",
                longDescription:
                    "Projet universitaire réalisé à deux, pour le module Web API et data de mon cursus d'ingénieur. Plutôt qu'une seule application, le jeu est découpé en sept micro-services indépendants qui se parlent par le réseau, chacun responsable d'une partie du jeu : les comptes, les joueurs, les monstres, l'invocation, le combat. J'ai pris en charge le service des joueurs, celui des combats, et la surveillance de l'ensemble, c'est-à-dire les outils qui collectent en continu ce que font les sept services et les restituent sur des tableaux de bord.",
                status: "Projet universitaire",
                year: "2025",
                role: "Services Player et Combat, stack d'observabilité",
                tags: ["Spring Boot", "MongoDB", "Next.js", "Docker", "Microservices", "Prometheus", "Grafana", "Universitaire"],
                stack: ["Spring Boot", "MongoDB", "Next.js", "NGINX", "Docker", "Prometheus", "Grafana", "SonarQube"],
                highlights: [
                    "Création complète du service Player en Spring Boot et MongoDB, du modèle et du repository jusqu'au contrôleur.",
                    "Développement de l'API Combat et de la fonctionnalité de renommage des monstres sur les services concernés.",
                    "Mise en place de toute la stack d'observabilité : collecte de métriques Prometheus et tableaux de bord Grafana, avec règles d'alerting.",
                ],
                stats: [
                    { label: "Équipe", value: "2 développeurs" },
                    { label: "Architecture", value: "7 micro-services" },
                    { label: "Mon périmètre", value: "Player, Combat, monitoring" },
                ],
                github: "https://github.com/RayzerDev/Gatcha",
                link: "https://gatcha-md-front.fly.dev/",
            },
            {
                title: "Réseau social Voyage",
                eyebrow: "Projet d'équipe — lead développeur",
                description: "Un réseau social consacré au voyage, où chacun partage ses destinations et suit celles des autres. Projet d'équipe du BUT réalisé à quatre, dont j'étais le lead développeur.",
                longDescription:
                    "Plus gros projet d'équipe du BUT, et première expérience d'encadrement. Au-delà du développement, mon rôle a consisté à découper le travail, à fixer les conventions communes aux quatre membres et à trancher les choix d'architecture, c'est-à-dire la façon dont les différentes parties du logiciel s'emboîtent, suffisamment tôt pour qu'elles restent assemblables à la fin. Le temps consacré à éviter que deux personnes développent la même chose a été nettement supérieur à mon estimation initiale.",
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
                title: "Application de tickets de concert",
                eyebrow: "Projet d'équipe — mobile",
                description: "Une application mobile pour acheter ses billets de concert et les présenter à l'entrée, y compris quand le téléphone ne capte pas. Projet d'équipe du BUT réalisé à trois.",
                longDescription:
                    "Projet réalisé à trois. Le travail était séparé en deux parties, un serveur qui détient les billets et les comptes, et l'application installée sur le téléphone, et je suis intervenu sur les deux. La contrainte qui a tout structuré tenait à ce qu'un billet reste utilisable lorsque le téléphone ne capte pas, situation fréquente dans une salle de concert.",
                status: "Projet universitaire",
                year: "2024",
                role: "Développeur — API et client mobile",
                tags: ["Laravel", "React Native", "Mobile", "API REST", "Universitaire"],
                stack: ["Laravel", "React Native", "API REST", "MySQL"],
                highlights: [
                    "API REST Laravel appelée par un client React Native.",
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
                description: "Le site que vous lisez. Il présente mon parcours, mes compétences et mes projets, en anglais et en français, et sert aussi de projet à part entière.",
                longDescription:
                    "Le site sur lequel vous vous trouvez. L'objectif était qu'il se lise comme une page éditoriale plutôt que comme un modèle de CV : une seule couleur d'accent, aucun dégradé, et un unique effet marqué, le nom en haut de page dont la graisse réagit à la proximité du curseur. Le contenu existe intégralement en anglais et en français, et le choix entre thème clair et thème sombre est appliqué avant que la page ne s'affiche, pour éviter le bref éclair blanc qu'on voit sur beaucoup de sites.",
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
