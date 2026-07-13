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
    period: string;
    description: string;
};

type Dictionary = {
    nav: Record<"hero" | "parcours" | "competences" | "projets" | "passions" | "contact", string>;
    hero: {
        photoAlt: string;
        tagline: string;
        studentAt: string;
        apprenticeAt: string;
        location: string;
        ctaContact: string;
        ctaCv: string;
        ctaProjects: string;
        scrollLabel: string;
    };
    sections: {
        parcours: { title: string; lede: string };
        competences: { title: string; lede: string };
        projets: { title: string; lede: string };
        contact: { title: string; lede: string };
    };
    parcoursLabels: { experience: string; formation: string };
    parcours: ParcoursItem[];
    competences: {
        web: string;
        mobile: string;
        app: string;
        db: string;
        devops: string;
        other: string;
        ai: string;
        aiSkills: string[];
        soft: string;
        softSkills: string[];
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
    };
    footer: { rights: string; source: string };
    a11y: { toggleTheme: string; github: string; switchLang: string };
};

export const translations: Record<Locale, Dictionary> = {
    en: {
        nav: {
            hero: "Home",
            parcours: "Background",
            competences: "Skills",
            projets: "Projects",
            passions: "Passions",
            contact: "Contact",
        },
        hero: {
            photoAlt: "Photo of Maël Demory",
            tagline: "Software Engineer Apprentice & computer science engineering student.",
            studentAt: "Engineering student at",
            apprenticeAt: "Software Engineer Apprentice at",
            location: "Hauts-de-France, France",
            ctaContact: "Get in touch",
            ctaCv: "Download my CV",
            ctaProjects: "See my projects",
            scrollLabel: "Go to the Background section",
        },
        sections: {
            parcours: { title: "Background.", lede: "Engineering education and apprenticeship experience." },
            competences: { title: "Skills.", lede: "The technologies I work with every day." },
            projets: { title: "Projects.", lede: "A selection of personal and university projects." },
            contact: { title: "Contact.", lede: "Let's talk about your projects or an opportunity." },
        },
        parcoursLabels: { experience: "Experience", formation: "Education" },
        parcours: [
            {
                type: "experience",
                title: "Software Engineer Apprentice",
                subtitle: "Arjo France",
                period: "2025 - 2028",
                description: "- Designing and developing new features while ensuring the longevity and evolution of the internal application ecosystem. - Cross-functional collaboration with business teams to turn their needs into concrete, high-performing technical solutions. - Driving proposals on architecture and process optimization to raise software quality standards. - Active technology watch and knowledge sharing to foster continuous improvement within the tech team.",
            },
            {
                type: "formation",
                title: "Master's-level Engineering degree in Computer Science, Telecommunications & Networks",
                subtitle: "IMT Nord Europe",
                period: "2025 - 2028",
                description: "- Graduate engineering program with a specialization in computer science. - Advanced courses in software development, systems architecture, artificial intelligence, blockchain and data analysis.",
            },
            {
                type: "experience",
                title: "Web Developer Apprentice",
                subtitle: "IMT Nord Europe",
                period: "2024 - 2025",
                description: "- Design and evolution of web applications for the internal portal (Back end: PHP/Laravel | Front end: CSS frameworks). - Modeling and optimized management of relational databases (MySQL). - Applying Agile principles and ensuring software maintainability through weekly code reviews. - Close collaboration with the school's departments to assess their needs and design tailored technical solutions.",
            },
            {
                type: "formation",
                title: "Bachelor's degree in Computer Science (BUT) — Application Design & Development",
                subtitle: "IUT de Lens - Université d'Artois",
                period: "2022 - 2025",
                description: "- Training in software development, databases, networks and project management. - Several team projects, including a full travel-themed social network, a mobile app for managing concert tickets and a 2D Minecraft remake.",
            },
        ],
        competences: {
            web: "Web development",
            mobile: "Mobile development",
            app: "Application development",
            db: "Databases",
            devops: "DevOps & infrastructure",
            other: "Other technical skills",
            ai: "AI-assisted development",
            aiSkills: ["Claude Code", "Agentic development", "AI agents", "MCP", "Prompt engineering", "LLM"],
            soft: "Soft skills",
            softSkills: ["Adaptability", "Continuous learning", "Communication", "Problem solving", "Teamwork", "Leadership"],
        },
        projets: [
            {
                title: "Portfolio",
                eyebrow: "Personal editorial showcase",
                description: "My personal portfolio presenting my background, skills and projects.",
                longDescription:
                    "This site was designed as a reading experience rather than a mere CV page. The goal is to combine a strong art direction, clear anchored navigation and animations subtle enough to highlight the content without getting in the way of reading.",
                status: "Continuously evolving",
                year: "2026",
                role: "Product design, frontend and integration",
                tags: ["Next.js", "React", "Tailwind CSS", "Personal"],
                stack: ["Next.js 16", "React 19", "Framer Motion", "Tailwind CSS"],
                highlights: [
                    "Floating navigation with automatic detection of the visible section.",
                    "Consistent visual surface system across desktop and mobile.",
                    "Focus on micro-interactions and the editorial hierarchy of the content.",
                ],
                stats: [
                    { label: "Approach", value: "Editorial UI" },
                    { label: "Audience", value: "Recruiters" },
                    { label: "Focus", value: "Storytelling" },
                ],
                github: "https://github.com/MaelDemory/CV-NextJS-Demory-Mael",
                link: "#",
            },
            {
                title: "RayTracer",
                eyebrow: "Experimental rendering engine",
                description: "Image generator based on ray tracing, developed in Java with multi-threading or GPU optimizations to speed up rendering.",
                longDescription:
                    "A project focused on performance and a deep understanding of 3D rendering. It allowed me to work on geometry, light, rendering quality and above all on reducing computation times through several execution strategies.",
                status: "Advanced academic prototype",
                year: "2025",
                role: "Architecture, computation and optimization",
                tags: ["Java", "Optimization", "Multi-threading", "GPU", "University"],
                stack: ["Java", "Parallel programming", "Rendering pipeline", "Optimization"],
                highlights: [
                    "Comparison of several execution modes to speed up image computation.",
                    "Work on rendering stability and higher resolutions.",
                    "A strongly experimentation-driven approach with performance profiling.",
                ],
                stats: [
                    { label: "Field", value: "3D / Rendering" },
                    { label: "Technique", value: "Parallelism" },
                    { label: "Nature", value: "R&D" },
                ],
                github: "https://github.com/MaelDemory/Raytracer",
                link: "#",
            },
            {
                title: "API Gatcha",
                eyebrow: "Distributed fullstack",
                description: "Fullstack web application recreating a simple gacha-style game, with authentication, creation and real-time tracking features.",
                longDescription:
                    "This project combines a modern interface, a backend API and several infrastructure components to recreate a simple yet complete game experience. The challenge was as much architectural as functional, with real attention paid to authentication, service-to-service communication and observability.",
                status: "Complete fullstack project",
                year: "2025",
                role: "Backend, frontend and infrastructure",
                tags: ["SpringBoot", "Next.js", "MongoDB", "REST API", "Docker", "Microservices architecture", "Monitoring", "University"],
                stack: ["Spring Boot", "Next.js", "MongoDB", "Docker", "Monitoring"],
                highlights: [
                    "End-to-end authentication and application flow management.",
                    "Service decomposition with integrated monitoring tools.",
                    "A consistent product experience across game, management and tracking.",
                ],
                stats: [
                    { label: "Stack", value: "Fullstack" },
                    { label: "Architecture", value: "Services" },
                    { label: "Bonus", value: "Monitoring" },
                ],
                github: "https://github.com/RayzerDev/Gatcha",
                link: "",
            },
            {
                title: "Accounting Data Extractor",
                eyebrow: "Document automation",
                description: "Web application that analyzes PDF invoices and automatically extracts hours worked per client.",
                longDescription:
                    "The goal was to eliminate a repetitive manual task by turning billing documents into directly usable information. The core of the work lies in processing reliability, result readability and genuine time savings on business data.",
                status: "Focused personal tool",
                year: "2025",
                role: "Functional design and web development",
                tags: ["Python", "Flask", "Personal"],
                stack: ["Python", "Flask", "Document processing", "Business analysis"],
                highlights: [
                    "Automation of a PDF-reading process focused on productivity.",
                    "Extraction of billing-relevant information per client.",
                    "A pragmatic approach centered on genuine time savings.",
                ],
                stats: [
                    { label: "Purpose", value: "Productivity" },
                    { label: "Format", value: "PDF" },
                    { label: "Output", value: "Hours / client" },
                ],
                github: "",
                link: "",
            },
            {
                title: "Chromium Keyboard Shortcuts Extension",
                eyebrow: "Browser ergonomics",
                description: "Extension for Chromium-based browsers (Chrome, Edge, OperaGX, Brave...) that maps custom keyboard shortcuts to click actions on any element of a web page.",
                longDescription:
                    "This project stems from a very concrete need: speeding up web interfaces that don't offer enough shortcuts. The extension maps keyboard interactions onto the DOM to make certain actions faster, smoother and more customizable.",
                status: "Release-ready personal tool",
                year: "2024",
                role: "Extension development and UX",
                tags: ["JavaScript", "Chrome Extension", "Personal"],
                stack: ["JavaScript", "Chromium APIs", "DOM", "Keyboard shortcuts"],
                highlights: [
                    "Mapping custom keyboard shortcuts to concrete web actions.",
                    "A focus on browser ergonomics and everyday usability.",
                    "Compatibility designed for several Chromium-based browsers.",
                ],
                stats: [
                    { label: "Target", value: "Chromium browsers" },
                    { label: "Interaction", value: "Keyboard" },
                    { label: "Benefit", value: "Speed" },
                ],
                github: "https://github.com/MaelDemory/extension_raccourci",
                link: "",
            },
            {
                title: "F1dle",
                eyebrow: "Themed web game",
                description: "Wordle-style game for Formula 1: guess a random driver in a limited number of attempts, with hints based on the drivers' characteristics and performances.",
                longDescription:
                    "F1dle blends Formula 1 culture, fast game mechanics and a clear interface. The project turns a personal passion into a light, replayable and instantly understandable web experience, with a hint system that guides without spoiling the joy of discovery.",
                status: "Personal online game",
                year: "2024",
                role: "Product, frontend and game logic",
                tags: ["Laravel", "API", "React", "Tailwind CSS", "ShadCN UI", "Personal"],
                stack: ["Laravel", "React", "Tailwind CSS", "API", "Game logic"],
                highlights: [
                    "A simple, readable game concept instantly recognizable for F1 fans.",
                    "Progressive hints based on drivers and their performances.",
                    "Balancing game enjoyment, interface clarity and visual identity.",
                ],
                stats: [
                    { label: "Genre", value: "Guessing game" },
                    { label: "Theme", value: "Formula 1" },
                    { label: "Experience", value: "Fast-paced" },
                ],
                github: "https://github.com/MaelDemory/F1dle",
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
            subs: ["Fashion 👟", "Video games 🎮", "Travel ✈️", "Photography 📸", "Weight training 🏋️"],
        },
        contact: {
            email: { title: "Email", subtitle: "Direct channel", cta: "Send me an email" },
            github: { title: "GitHub", subtitle: "Code & projects", cta: "View my GitHub" },
            linkedin: { title: "LinkedIn", subtitle: "Professional profile", cta: "View my LinkedIn" },
        },
        footer: { rights: "All rights reserved.", source: "Portfolio source code" },
        a11y: { toggleTheme: "Toggle theme", github: "GitHub", switchLang: "Switch language" },
    },
    fr: {
        nav: {
            hero: "Accueil",
            parcours: "Parcours",
            competences: "Compétences",
            projets: "Projets",
            passions: "Passions",
            contact: "Contact",
        },
        hero: {
            photoAlt: "Photo de Maël Demory",
            tagline: "Ingénieur logiciel en alternance & étudiant ingénieur en informatique.",
            studentAt: "Étudiant ingénieur à",
            apprenticeAt: "Alternant ingénieur logiciel chez",
            location: "Hauts-de-France, France",
            ctaContact: "Me contacter",
            ctaCv: "Télécharger mon CV",
            ctaProjects: "Voir mes projets",
            scrollLabel: "Aller à la section Parcours",
        },
        sections: {
            parcours: { title: "Parcours.", lede: "Formation d'ingénieur et expérience en alternance." },
            competences: { title: "Compétences.", lede: "Les technologies avec lesquelles je travaille au quotidien." },
            projets: { title: "Projets.", lede: "Une sélection de projets personnels et universitaires." },
            contact: { title: "Contact.", lede: "Discutons de vos projets ou d'une opportunité." },
        },
        parcoursLabels: { experience: "Expérience", formation: "Formation" },
        parcours: [
            {
                type: "experience",
                title: "Ingénieur logiciel en alternance",
                subtitle: "Arjo France",
                period: "2025 - 2028",
                description: "- Conception et développement de nouvelles fonctionnalités, tout en assurant la pérennité et l'évolution de l'écosystème applicatif interne. - Collaboration transverse avec les équipes métiers pour traduire leurs enjeux en solutions techniques concrètes et performantes. - Force de proposition sur l'architecture et l'optimisation des processus, afin d'élever les standards de qualité logicielle. - Veille technologique active et partage de connaissances pour stimuler l'amélioration continue au sein de l'équipe tech.",
            },
            {
                type: "formation",
                title: "Cursus d'ingénieur Informatique, Télécommunications et Réseaux",
                subtitle: "IMT Nord Europe",
                period: "2025 - 2028",
                description: "- Poursuite d'études en cursus d'ingénieur avec une spécialisation en informatique. - Cours avancés en développement logiciel, architecture des systèmes, intelligence artificielle, blockchain et analyse de données.",
            },
            {
                type: "experience",
                title: "Développeur web en alternance",
                subtitle: "IMT Nord Europe",
                period: "2024 - 2025",
                description: "- Conception et évolution d'applications web pour le portail interne (Back-end : PHP/Laravel | Front-end : Frameworks CSS). - Modélisation et gestion optimisée de bases de données relationnelles (MySQL). - Application des principes Agiles et garantie de la maintenabilité logicielle grâce à des revues de code hebdomadaires. - Collaboration étroite avec les différents pôles de l'école pour auditer leurs besoins et concevoir des solutions techniques sur-mesure.",
            },
            {
                type: "formation",
                title: "BUT Informatique - Parcours Conception et développement d'applications",
                subtitle: "IUT de Lens - Université d'Artois",
                period: "2022 - 2025",
                description: "- Formation en développement, bases de données, réseaux et gestion de projet. - Réalisation de plusieurs projets en équipe, notamment un réseau social complet sur le thème du voyage, une application mobile de gestion de tickets de concert et une reproduction de Minecraft en 2D.",
            },
        ],
        competences: {
            web: "Développement web",
            mobile: "Développement mobile",
            app: "Développement d'application",
            db: "Base de données",
            devops: "DevOps et infrastructure",
            other: "Autres compétences techniques",
            ai: "Développement assisté par IA",
            aiSkills: ["Claude Code", "Développement agentique", "Agents IA", "MCP", "Prompt engineering", "LLM"],
            soft: "Soft skills",
            softSkills: ["Adaptabilité", "Apprentissage continu", "Communication", "Résolution de problèmes", "Travail d'équipe", "Leadership"],
        },
        projets: [
            {
                title: "Portfolio",
                eyebrow: "Vitrine éditoriale personnelle",
                description: "Mon portfolio personnel présentant mon parcours, mes compétences et mes projets.",
                longDescription:
                    "Ce site a été pensé comme une expérience de lecture plutôt qu'une simple page CV. L'objectif est de faire cohabiter une direction artistique marquée, une navigation ancrée lisible et des animations suffisamment subtiles pour valoriser le contenu sans nuire à la lecture.",
                status: "En évolution continue",
                year: "2026",
                role: "Design produit, frontend et intégration",
                tags: ["Next.js", "React", "Tailwind CSS", "Personnel"],
                stack: ["Next.js 16", "React 19", "Framer Motion", "Tailwind CSS"],
                highlights: [
                    "Navigation flottante avec repérage automatique de la section visible.",
                    "Système de surfaces visuelles cohérent entre desktop et mobile.",
                    "Travail sur les micro-interactions et la hiérarchie éditoriale du contenu.",
                ],
                stats: [
                    { label: "Approche", value: "Editorial UI" },
                    { label: "Cible", value: "Recruteurs" },
                    { label: "Focus", value: "Narration" },
                ],
                github: "https://github.com/MaelDemory/CV-NextJS-Demory-Mael",
                link: "#",
            },
            {
                title: "RayTracer",
                eyebrow: "Moteur de rendu expérimental",
                description: "Générateur d'images via la méthode de ray tracing, développé en java avec des optimisations multi-threading ou GPU pour accélérer le rendu.",
                longDescription:
                    "Projet orienté performance et compréhension fine du rendu 3D. Il m'a permis de travailler sur la géométrie, la lumière, la qualité de rendu et surtout sur la réduction des temps de calcul grâce à plusieurs stratégies d'exécution.",
                status: "Prototype académique avancé",
                year: "2025",
                role: "Architecture, calcul et optimisation",
                tags: ["Java", "Optimisation", "Multi-threading", "GPU", "Universitaire"],
                stack: ["Java", "Programmation parallèle", "Pipeline de rendu", "Optimisation"],
                highlights: [
                    "Comparaison de plusieurs modes d'exécution pour accélérer le calcul d'image.",
                    "Travail sur la stabilité du rendu et la montée en résolution.",
                    "Approche très orientée expérimentation et profilage des performances.",
                ],
                stats: [
                    { label: "Domaine", value: "3D / Rendering" },
                    { label: "Levier", value: "Parallélisme" },
                    { label: "Nature", value: "R&D" },
                ],
                github: "https://github.com/MaelDemory/Raytracer",
                link: "#",
            },
            {
                title: "API Gatcha",
                eyebrow: "Fullstack distribué",
                description: "Application web fullstack reconstituant un simple jeu de type Gatcha, intégrant des fonctionnalités d'authentification, de création et de suivi des projets en temps réel.",
                longDescription:
                    "Ce projet assemble une interface moderne, une API backend et plusieurs briques d'infrastructure pour reproduire une expérience de jeu simple mais complète. L'intérêt était autant fonctionnel qu'architectural, avec une vraie attention portée à l'authentification, à la communication entre services et à l'observabilité.",
                status: "Projet fullstack complet",
                year: "2025",
                role: "Backend, frontend et infra",
                tags: ["SpringBoot", "Next.js", "MongoDB", "API REST", "Docker", "Architecture microservices", "Monitoring", "Universitaire"],
                stack: ["Spring Boot", "Next.js", "MongoDB", "Docker", "Monitoring"],
                highlights: [
                    "Authentification et gestion de flux applicatifs de bout en bout.",
                    "Découpage en services avec intégration d'outils de monitoring.",
                    "Travail sur une expérience produit cohérente entre jeu, gestion et suivi.",
                ],
                stats: [
                    { label: "Stack", value: "Fullstack" },
                    { label: "Architecture", value: "Services" },
                    { label: "Plus", value: "Monitoring" },
                ],
                github: "https://github.com/RayzerDev/Gatcha",
                link: "",
            },
            {
                title: "Extracteur d'informations comptables",
                eyebrow: "Automatisation documentaire",
                description: "Application web pour analyser les fichiers PDF de facturation et extraire automatiquement les heures travaillées par client.",
                longDescription:
                    "L'objectif était de réduire une tâche manuelle répétitive en transformant des documents de facturation en informations directement exploitables. Le cœur du travail repose sur la fiabilité du traitement, la lisibilité des résultats et la capacité à faire gagner du temps sur des données métier.",
                status: "Outil personnel ciblé",
                year: "2025",
                role: "Conception fonctionnelle et développement web",
                tags: ["Python", "Flask", "Personnel"],
                stack: ["Python", "Flask", "Traitement documentaire", "Analyse métier"],
                highlights: [
                    "Automatisation d'un processus de lecture de PDF orienté productivité.",
                    "Extraction d'informations utiles à la facturation par client.",
                    "Approche pragmatique centrée sur le gain de temps réel.",
                ],
                stats: [
                    { label: "Usage", value: "Productivité" },
                    { label: "Format", value: "PDF" },
                    { label: "Sortie", value: "Heures / client" },
                ],
                github: "",
                link: "",
            },
            {
                title: "Extension Chromium de raccourcis clavier",
                eyebrow: "Ergonomie navigateur",
                description: "Extension pour le moteur de rendu Chromium (Chrome, Edge, OperaGX, Brave...) permettant d'associer des raccourcis clavier personnalisés à des actions de clic sur n'importe quel élément d'une page web.",
                longDescription:
                    "Ce projet part d'un besoin très concret: accélérer l'usage d'interfaces web qui ne proposent pas assez de raccourcis. L'extension permet de mapper des interactions clavier sur le DOM pour rendre certaines actions plus rapides, plus fluides et plus personnalisables.",
                status: "Outil personnel publiable",
                year: "2024",
                role: "Développement extension et UX",
                tags: ["JavaScript", "Chrome Extension", "Personnel"],
                stack: ["JavaScript", "Chromium APIs", "DOM", "Raccourcis clavier"],
                highlights: [
                    "Association de raccourcis clavier personnalisés à des actions web concrètes.",
                    "Réflexion autour de l'ergonomie et du confort d'usage navigateur.",
                    "Compatibilité pensée pour plusieurs navigateurs basés sur Chromium.",
                ],
                stats: [
                    { label: "Cible", value: "Navigateurs Chromium" },
                    { label: "Interaction", value: "Clavier" },
                    { label: "Bénéfice", value: "Rapidité" },
                ],
                github: "https://github.com/MaelDemory/extension_raccourci",
                link: "",
            },
            {
                title: "F1dle",
                eyebrow: "Jeu web thématique",
                description: "Jeu de type Wordle pour la Formule 1, l'objectif étant de deviner un pilote aléatoire en un nombre limité de tentatives, avec des indices basés sur les caractéristiques des pilotes et de leurs performances.",
                longDescription:
                    "F1dle mélange culture Formule 1, mécanique de jeu rapide et interface claire. Le projet vise à transformer une passion personnelle en expérience web légère, rejouable et immédiatement compréhensible, avec une couche d'indices capable de guider sans casser le plaisir de découverte.",
                status: "Jeu personnel en ligne",
                year: "2024",
                role: "Produit, frontend et logique de jeu",
                tags: ["Laravel", "API", "React", "Tailwind CSS", "ShadCN UI", "Personnel"],
                stack: ["Laravel", "React", "Tailwind CSS", "API", "Logique de jeu"],
                highlights: [
                    "Concept de jeu simple, lisible et immédiatement identifiable pour les fans de F1.",
                    "Mise en place d'indices progressifs autour des pilotes et de leurs performances.",
                    "Travail d'équilibre entre plaisir de jeu, clarté de l'interface et identité visuelle.",
                ],
                stats: [
                    { label: "Genre", value: "Guessing game" },
                    { label: "Thème", value: "Formule 1" },
                    { label: "Expérience", value: "Rapide" },
                ],
                github: "https://github.com/MaelDemory/F1dle",
                link: "",
            },
        ],
        modal: {
            close: "Fermer la fiche projet",
            viewCode: "Voir le code",
            openProject: "Ouvrir le projet",
            overview: "Vue d'ensemble",
            highlights: "Points forts",
            stack: "Technologies et outils",
            keywords: "Mots-clés",
        },
        projectCardCta: "Détails",
        passions: {
            title: "Passions.",
            lede: "Ce qui m'anime en dehors du code.",
            main: ["Formule 1 🏎️", "Nouvelles technologies 🚀", "Automobile 🚗"],
            subs: ["Mode 👟", "Jeux vidéo 🎮", "Voyages ✈️", "Photo 📸", "Musculation 🏋️"],
        },
        contact: {
            email: { title: "Email", subtitle: "Canal direct", cta: "Écrire un email" },
            github: { title: "GitHub", subtitle: "Code & projets", cta: "Voir mon GitHub" },
            linkedin: { title: "LinkedIn", subtitle: "Profil professionnel", cta: "Voir mon LinkedIn" },
        },
        footer: { rights: "Tous droits réservés.", source: "Code source du portfolio" },
        a11y: { toggleTheme: "Basculer le thème", github: "GitHub", switchLang: "Changer de langue" },
    },
};
