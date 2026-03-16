"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import photoCV from "@/assets/images/photo_cv.png";
import githubIcon from "@/assets/images/icons/github.svg";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
    AgentsAI,
    AngularLogo,
    BootstrapLogo,
    DockerLogo,
    FlaskLogo,
    FlutterLogo,
    GitLogo,
    GithubActionsLogo,
    GithubLogo,
    GitlabCILogo,
    GrafanaLogo,
    IonicLogo,
    JavaLogo,
    JavaScriptLogo,
    LaravelLogo,
    LLM,
    LinkedInLogo,
    LinuxLogo,
    MongodbLogo,
    MSSQLLogo,
    MysqlLogo,
    NextJSLogo,
    NomadLogo,
    Php,
    PLSQLLogo,
    PostmanLogo,
    PrometheusLogo,
    PsqlLogo,
    PythonLogo,
    ReactLogo,
    ReactNativeLogo,
    RustLogo,
    SonarQubeLogo,
    SpringBootLogo,
    SQLiteLogo,
    SwiftLogo,
    TailwindLogo,
    TerraformLogo,
    TypeScriptLogo,
    UMLLogo,
} from "@/app/logos";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
    AppWindow,
    Heart,
    Mail,
    MapPin,
    GraduationCap,
    Briefcase,
    BriefcaseBusiness,
    ChevronDown,
    Database,
    ExternalLink,
    FolderGit2,
    FolderOpen,
    Globe,
    House,
    SquarePen,
    Smartphone,
    Workflow,
    Wrench,
    X,
    Type,
    Server,
} from "lucide-react";
import { PassionsSection } from "@/components/passions-section";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

function ParcoursDescription({ description }: { description: string }) {
    const trimmedDescription = description.trim();

    if (!trimmedDescription.startsWith("-")) {
        return <p className="mt-5 text-sm leading-7 text-muted-foreground">{description}</p>;
    }

    const items = trimmedDescription
        .split(/\s*-\s+/)
        .map((item) => item.trim())
        .filter(Boolean);

    return (
        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
            {items.map((item) => (
                <li key={item} className="relative pl-5">
                    <span className="absolute left-0 top-[0.8rem] h-1.5 w-1.5 rounded-full bg-[#6366F1] dark:bg-violet-300" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

const navItems = [
    { href: "#hero", label: "Accueil", icon: House, id: "hero" },
    { href: "#parcours", label: "Parcours", icon: BriefcaseBusiness, id: "parcours" },
    { href: "#competences", label: "Compétences", icon: Wrench, id: "competences" },
    { href: "#projets", label: "Projets", icon: FolderOpen, id: "projets" },
    { href: "#passions", label: "Passions", icon: Heart, id: "passions" },
    { href: "#contact", label: "Contact", icon: SquarePen, id: "contact" },
] as const;

const competencesCategories = [
    {
        title: "Développement web",
        description: "",
        icon: Globe,
        className: "md:col-span-2",
        logos: [
            <AngularLogo key="angular" />,
            <BootstrapLogo key="bootstrap" />,
            <FlaskLogo key="flask" />,
            <JavaScriptLogo key="js" />,
            <LaravelLogo key="laravel" />,
            <NextJSLogo key="next" />,
            <Php key="php" />,
            <ReactLogo key="react" />,
            <SpringBootLogo key="springboot" />,
            <TailwindLogo key="tailwind" />,
            <TypeScriptLogo key="ts" />,
        ],
    },
    {
        title: "Développement mobile",
        description: "",
        icon: Smartphone,
        className: "md:col-span-1",
        logos: [
            <IonicLogo key="ionic" />,
            <ReactNativeLogo key="rn" />,
            <SwiftLogo key="swift" />,
            <FlutterLogo key="flutter" />,
        ],
    },
    {
        title: "Développement d'application",
        description: "",
        icon: AppWindow,
        className: "md:col-span-1",
        logos: [
            <JavaLogo key="java" />,
            <PythonLogo key="python" />,
            <RustLogo key="rust" />,
            <TypeScriptLogo key="ts_app" />,
        ],
    },
    {
        title: "Base de données",
        description: "",
        icon: Database,
        className: "md:col-span-2",
        logos: [
            <MongodbLogo key="mongo" />,
            <MSSQLLogo key="mssql" />,
            <MysqlLogo key="mysql" />,
            <PLSQLLogo key="plsql" />,
            <PsqlLogo key="psql" />,
            <SQLiteLogo key="sqlite" />,
        ],
    },
    {
        title: "DevOps et infrastructure",
        description: "",
        icon: Server,
        className: "md:col-span-2",
        logos: [
            <DockerLogo key="docker" />,
            <GithubActionsLogo key="github-actions" />,
            <GitlabCILogo key="gitlab-ci" />,
            <GrafanaLogo key="grafana" />,
            <NomadLogo key="nomad" />,
            <PostmanLogo key="postman" />,
            <PrometheusLogo key="prometheus" />,
            <SonarQubeLogo key="sonarqube" />,
            <TerraformLogo key="terraform" />,
        ],
    },
    {
        title: "Autres compétences techniques",
        description: "",
        icon: Workflow,
        className: "md:col-span-2",
        logos: [
            <GitLogo key="git" />,
            <GithubLogo key="github" />,
            <LinuxLogo key="linux" />,
            <UMLLogo key="uml" />,
            <AgentsAI key="agents" />,
            <LLM key="llm" />,
        ],
    },
    {
        title: "Soft skills",
        description: "",
        icon: GraduationCap,
        className: "md:col-span-2",
        logos: [
            <Card>
                <CardContent className='min-h-[120px] p-4 flex items-center justify-center'>
                    <CardTitle className='text-center'>Adaptabilité</CardTitle>
                </CardContent>
            </Card>,
            <Card>
                <CardContent className='min-h-[120px] p-4 flex items-center justify-center'>
                    <CardTitle className='text-center'>Apprentissage continu</CardTitle>
                </CardContent>
            </Card>,
            <Card>
                <CardContent className='min-h-[120px] p-4 flex items-center justify-center'>
                    <CardTitle className='text-center'>Communication</CardTitle>
                </CardContent>
            </Card>,
            <Card>
                <CardContent className='min-h-[120px] p-4 flex items-center justify-center'>
                    <CardTitle className='text-center'>Résolution de problèmes</CardTitle>
                </CardContent>
            </Card>,
            <Card>
                <CardContent className='min-h-[120px] p-4 flex items-center justify-center'>
                    <CardTitle className='text-center'>Travail d'équipe</CardTitle>
                </CardContent>
            </Card>,
            <Card>
                <CardContent className='min-h-[120px] p-4 flex items-center justify-center'>
                    <CardTitle className='text-center'>Leadership</CardTitle>
                </CardContent>
            </Card>
            
        ],
    }
] as const;

function SectionTitle({
    children,
    align = "center",
    className = "",
}: {
    children: React.ReactNode;
    align?: "center" | "left";
    className?: string;
}) {
    return (
        <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={`text-3xl font-bold sm:text-4xl ${
                align === "left" ? "text-left" : "text-center"
            } ${className}`}
        >
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                {children}
            </span>
        </motion.h2>
    );
}

function SplitSection({
    id,
    title,
    children,
    containerClassName = "max-w-6xl",
}: {
    id: string;
    title: React.ReactNode;
    children: React.ReactNode;
    containerClassName?: string;
}) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const shouldReduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const titleY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 72]);

    return (
        <section ref={sectionRef} id={id} className="px-4 py-20 sm:px-6 sm:py-28">
            <div className={`mx-auto grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:justify-center lg:gap-14 ${containerClassName}`}>
                <motion.div className="h-fit lg:sticky lg:top-28 lg:self-start" style={{ y: titleY }}>
                    <SectionTitle className="mb-0 text-center">
                        {title}
                    </SectionTitle>
                </motion.div>
                <div className="min-w-0">{children}</div>
            </div>
        </section>
    );
}

const parcours = [
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
    }
];

type ProjectStat = {
    label: string;
    value: string;
};

type Project = {
    title: string;
    eyebrow: string;
    description: string;
    longDescription: string;
    mobileHook: string;
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

const projets: Project[] = [
    {
        title: "Portfolio",
        eyebrow: "Vitrine editoriale personnelle",
        description: "Mon portfolio personnel présentant mon parcours, mes compétences et mes projets.",
        longDescription:
            "Ce site a été pensé comme une expérience de lecture plutôt qu'une simple page CV. L'objectif est de faire cohabiter une direction artistique marquée, une navigation ancrée lisible et des animations suffisamment subtiles pour valoriser le contenu sans nuire à la lecture.",
        mobileHook: "Une fiche immersive qui transforme le CV en mini-produit éditorial sur smartphone.",
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
        mobileHook: "Une fiche pensée comme un carnet de laboratoire, centrée sur l'optimisation du rendu.",
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
            { label: "Levier", value: "Parallelisme" },
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
        mobileHook: "Une fiche dense mais lisible, pensée comme un cockpit produit sur petit écran.",
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
            "L'objectif était de réduire une tâche manuelle répétitive en transformant des documents de facturation en informations directement exploitables. Le coeur du travail repose sur la fiabilité du traitement, la lisibilité des résultats et la capacité à faire gagner du temps sur des données métier.",
        mobileHook: "Une fiche utilitaire et précise, conçue comme une vue de contrôle métier sur mobile.",
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
            { label: "Usage", value: "Productivite" },
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
        mobileHook: "Une fiche courte et nerveuse, comme un panneau de commandes centré sur l'efficacité.",
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
            { label: "Benefice", value: "Rapidité" },
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
        mobileHook: "Une fiche mobile pensée comme un mini lancement produit pour un jeu F1 rapide à comprendre.",
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
            { label: "Theme", value: "Formule 1" },
            { label: "Experience", value: "Rapide" },
        ],
        github: "https://github.com/MaelDemory/F1dle",
        link: "",
    },
];

function GithubMarkIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z" />
        </svg>
    );
}

function ProjectModal({
    project,
    onClose,
}: {
    project: Project | null;
    onClose: () => void;
}) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <AnimatePresence>
            {project ? (
                <motion.div
                    key={project.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/55 px-0 backdrop-blur-md sm:items-center sm:px-6"
                    onClick={onClose}
                >
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 48, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        aria-describedby="project-modal-description"
                        onClick={(event) => event.stopPropagation()}
                        className="relative flex max-h-[88vh] w-full max-w-5xl flex-col overflow-hidden border border-white/20 bg-white/92 text-left shadow-[0_30px_90px_rgba(15,23,42,0.32)] dark:border-white/10 dark:bg-slate-950/92 sm:my-8 sm:rounded-[2rem] max-sm:rounded-t-[2rem]"
                    >
                        <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3 sm:hidden">
                            <span className="h-1.5 w-14 rounded-full bg-foreground/15" />
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/75 text-foreground transition-colors hover:text-[#4F46E5] dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:hover:text-violet-200"
                            aria-label="Fermer la fiche projet"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="overflow-y-auto">
                            <div className="relative overflow-hidden border-b border-border/70 px-5 pb-6 pt-16 sm:px-8 sm:pb-8 sm:pt-8">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.18),transparent_38%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.18),transparent_24%),linear-gradient(145deg,rgba(255,255,255,0.9),rgba(238,242,255,0.92))] dark:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.3),transparent_38%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.2),transparent_24%),linear-gradient(145deg,rgba(15,23,42,0.92),rgba(15,23,42,0.84))]" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/70" />

                                <div className="relative space-y-6">
                                    <div className="flex flex-wrap items-center gap-3 pr-14 sm:pr-16">
                                        <span className="rounded-full border border-[#6366F1]/20 bg-[#6366F1]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4338CA] dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200">
                                            {project.eyebrow}
                                        </span>
                                        <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                            {project.year}
                                        </span>
                                        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                                            {project.status}
                                        </span>
                                    </div>

                                    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
                                        <div className="space-y-4">
                                            <div className="space-y-3">
                                                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#4F46E5] dark:text-violet-200">
                                                    {project.mobileHook}
                                                </p>
                                                <h3 id="project-modal-title" className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                                    {project.title}
                                                </h3>
                                                <p id="project-modal-description" className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#6366F1]/20 bg-[#6366F1]/10 px-4 py-3 text-sm font-semibold text-[#4338CA] transition-colors hover:bg-[#6366F1]/15 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-100"
                                                    >
                                                        <GithubMarkIcon className="h-4 w-4" />
                                                        Voir le code
                                                    </a>
                                                )}
                                                {project.link && project.link !== "#" && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-[#6366F1]/20 hover:text-[#4338CA] dark:hover:text-violet-200"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Ouvrir le projet
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <div className="rounded-[1.6rem] border border-white/40 bg-white/70 p-4 shadow-[0_18px_45px_rgba(99,102,241,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_18px_55px_rgba(15,23,42,0.4)]">
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                                Positionnement
                                            </p>
                                            <p className="mt-3 text-lg font-semibold text-foreground">{project.role}</p>
                                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                                Projet pensé avec une lecture mobile prioritaire et une présentation détaillée disponible au clic.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
                                        {project.stats.map((stat) => (
                                            <div
                                                key={stat.label}
                                                className="min-w-[180px] snap-start rounded-[1.4rem] border border-white/45 bg-white/72 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/65 dark:shadow-[0_18px_50px_rgba(2,6,23,0.35)]"
                                            >
                                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                                    {stat.label}
                                                </p>
                                                <p className="mt-2 text-base font-semibold text-foreground">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                                <div className="space-y-6">
                                    <div className="rounded-[1.6rem] border border-border/60 bg-background/80 p-5 shadow-[0_16px_35px_rgba(15,23,42,0.05)] dark:bg-slate-950/55">
                                        <p className="editorial-kicker">Vue d'ensemble</p>
                                        <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                                            {project.longDescription}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="editorial-kicker">Points forts</p>
                                        <div className="grid gap-3">
                                            {project.highlights.map((highlight) => (
                                                <div
                                                    key={highlight}
                                                    className="rounded-[1.45rem] border border-border/60 bg-background/80 p-4 shadow-[0_14px_30px_rgba(15,23,42,0.04)] dark:bg-slate-950/55"
                                                >
                                                    <p className="text-sm leading-6 text-foreground/90 dark:text-white/90">{highlight}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div className="rounded-[1.6rem] border border-border/60 bg-background/80 p-5 dark:bg-slate-950/55">
                                        <p className="editorial-kicker">Technologies et outils</p>
                                        <div className="mt-4 flex flex-wrap gap-2.5">
                                            {project.stack.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-[#6366F1]/20 bg-[#6366F1]/10 px-3 py-1.5 text-xs font-medium text-[#4338CA] dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-[1.6rem] border border-border/60 bg-background/80 p-5 dark:bg-slate-950/55">
                                        <p className="editorial-kicker">Mots-clés</p>
                                        <div className="mt-4 flex flex-wrap gap-2.5">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}

export default function Home() {
    const currentYear = new Date().getFullYear();
    const [activeSection, setActiveSection] = useState("hero");
    const [hoveredAltNavItem, setHoveredAltNavItem] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const darkNavAccentClass = "dark:border-white/10 dark:bg-transparent dark:[background-image:radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.18),rgba(255,255,255,0.08)_42%,rgba(15,23,42,0.52)_100%)] dark:shadow-[0_18px_38px_rgba(0,0,0,0.3)] dark:ring-1 dark:ring-white/10";
    const darkNavHoverAccentClass = "dark:border-white/10 dark:bg-transparent dark:[background-image:radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.14),rgba(255,255,255,0.06)_42%,rgba(15,23,42,0.46)_100%)] dark:shadow-[0_14px_30px_rgba(0,0,0,0.24)] dark:ring-1 dark:ring-white/8";

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme");
        document.documentElement.classList.toggle("dark", savedTheme !== "light");

        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter((section): section is HTMLElement => section !== null);

        let ticking = false;

        const updateActiveSection = () => {
            const scrollMarker = window.scrollY + window.innerHeight * 0.38;
            const currentSection = sections.reduce((closestSection, section) => {
                return section.offsetTop <= scrollMarker ? section.id : closestSection;
            }, sections[0]?.id ?? "hero");

            setActiveSection((previousSection) =>
                previousSection === currentSection ? previousSection : currentSection
            );

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveSection);
                ticking = true;
            }
        };

        updateActiveSection();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!selectedProject) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProject]);

    return (
        <div className="flex min-h-screen flex-col pb-24 font-[family-name:var(--font-geist-sans)] sm:pb-0 relative">
            {/* Global Background Elements */}
            <div className="fixed inset-0 z-[-1]">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/8 via-background to-[#7C3AED]/8 dark:from-[#312E81]/22 dark:via-[#0B1023] dark:to-[#6D28D9]/18" />

                {/* Blurry Orbs */}
                <div className="absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[#4F46E5]/16 blur-[120px] dark:bg-indigo-500/24" />
                <div className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/4 -translate-x-1/4 rounded-full bg-[#7C3AED]/12 blur-[120px] dark:bg-violet-500/18" />

                {/* Grid Motif */}
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:4rem_4rem] dark:opacity-20 dark:[background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_60%,transparent_100%)]" />
            </div>

            {/* Navigation */}
            <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 sm:bottom-auto sm:top-5">
                <motion.nav
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="pointer-events-auto"
                >
                    <div
                        className="liquid-glass-nav flex items-center gap-2 rounded-[2.2rem] p-2 sm:gap-3 sm:px-3"
                        onMouseLeave={() => setHoveredAltNavItem(null)}
                    >
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;
                            const isHovered = hoveredAltNavItem === item.id;
                            const isHighlighted = isActive;
                            const prevHovered = hoveredAltNavItem ? navItems[index - 1]?.id === hoveredAltNavItem : false;
                            const nextHovered = hoveredAltNavItem ? navItems[index + 1]?.id === hoveredAltNavItem : false;

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    aria-label={item.label}
                                    title={item.label}
                                    onMouseEnter={() => setHoveredAltNavItem(item.id)}
                                    onFocus={() => setHoveredAltNavItem(item.id)}
                                    onBlur={() => setHoveredAltNavItem(null)}
                                    className={`group relative flex h-12 w-12 items-center justify-center rounded-[2.2rem] transition-all duration-300 sm:h-14 sm:w-14 ${
                                        isActive || isHovered
                                            ? "text-[#312E81] dark:text-white"
                                            : "text-foreground/55 hover:text-[#4338CA] dark:text-white/65 dark:hover:text-white"
                                    }`}
                                >
                                    {isHighlighted && (
                                        <motion.span
                                            layoutId="ios-nav-pill-b"
                                            transition={{
                                                type: "spring",
                                                stiffness: 250,
                                                damping: 22,
                                                mass: 0.95,
                                            }}
                                            className={`absolute inset-0 rounded-[2.2rem] border border-[#6366F1]/35 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,1),rgba(99,102,241,0.26)_68%)] shadow-[0_14px_30px_rgba(99,102,241,0.22)] ring-1 ring-[#6366F1]/20 ${darkNavAccentClass}`}
                                        />
                                    )}
                                    {isHovered && !isActive && (
                                        <span className={`absolute inset-0 rounded-[2.2rem] border border-[#6366F1]/35 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,1),rgba(99,102,241,0.26)_68%)] shadow-[0_14px_30px_rgba(99,102,241,0.22)] ring-1 ring-[#6366F1]/20 ${darkNavHoverAccentClass}`} />
                                    )}
                                    <motion.span
                                        animate={{
                                            scale: isHovered ? 1.22 : isActive ? 1.12 : prevHovered || nextHovered ? 1.05 : 1,
                                            y: isHovered ? -3 : isActive ? -1.5 : 0,
                                        }}
                                        transition={{ type: "spring", stiffness: 340, damping: 20, mass: 0.7 }}
                                        className="relative z-10"
                                    >
                                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.2} />
                                    </motion.span>
                                    <span className="sr-only">{item.label}</span>
                                </a>
                            );
                        })}
                    </div>
                </motion.nav>
            </div>

            <div className="fixed right-4 top-5 z-50 flex items-center gap-2 sm:right-6 sm:gap-3">
                <AnimatedThemeToggler
                    aria-label="Basculer le thème"
                    className="liquid-glass-btn inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary dark:text-white"
                />
                <a
                    href="https://github.com/MaelDemory"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="liquid-glass-btn flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-all duration-300 hover:scale-[1.04] hover:border-primary/50 hover:text-primary dark:text-white"
                >
                    <svg aria-hidden="true" focusable="false" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z" />
                    </svg>
                </a>
            </div>

            {/* Hero Section */}
            <section
                id="hero"
                className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20"
            >
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center text-center gap-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Image
                                src={photoCV}
                                alt="Photo de Maël DEMORY"
                                width={180}
                                height={180}
                                className="w-40 h-40 rounded-full object-cover ring-4 ring-[#6366F1]/20 shadow-all-around sm:h-44 sm:w-44 dark:ring-violet-400/25"
                            />
                        </motion.div>

                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-4xl sm:text-6xl font-bold tracking-tight"
                            >
                                Maël{" "}
                                <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                                    DEMORY
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.45 }}
                                className="mt-3 text-lg sm:text-xl text-muted-foreground"
                            >
                                Ingénieur logiciel en alternance & étudiant ingénieur en informatique
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col items-center gap-3 text-sm text-muted-foreground"
                        >
                            <span className="flex items-center gap-1.5">
                                <GraduationCap className="w-4 h-4 text-[#6366F1]" />
                                Étudiant ingénieur à
                                <a
                                    className="font-semibold text-[#4F46E5] hover:underline dark:text-violet-300"
                                    href="https://imt-nord-europe.fr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    IMT Nord Europe
                                </a>
                            </span>

                            <span className="flex items-center gap-1.5">
                                <Briefcase className="w-4 h-4 text-[#6366F1]" />
                                Alternant ingénieur logiciel chez 
                                <a
                                    className="font-semibold text-[#4F46E5] hover:underline dark:text-violet-300"
                                    href="https://www.arjo.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Arjo France
                                </a>
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.75 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                            <MapPin className="w-4 h-4 text-[#6366F1]" />
                            Hauts-de-France, France
                        </motion.div>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="flex justify-center mt-16"
                    >
                        <motion.a
                            href="#parcours"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <ChevronDown className="w-6 h-6 text-[#6366F1]/60" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Parcours Section */}
            <SplitSection id="parcours" title="Mon parcours" containerClassName="max-w-6xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="relative w-full space-y-7 before:absolute before:bottom-2 before:left-5 before:top-4 before:w-px before:bg-gradient-to-b before:from-[#6366F1] before:via-[#7C3AED]/45 before:to-transparent dark:before:from-violet-300 dark:before:via-violet-400/40 lg:before:left-[-1.4rem]"
                >
                    {parcours.map((item, index) => (
                        <motion.article key={index} variants={fadeInUp} className="relative pl-14 lg:pl-0">
                            <div className="absolute left-5 top-6 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-[#6366F1]/30 bg-background shadow-[0_0_0_5px_hsl(var(--background))] dark:border-violet-400/35 lg:left-[-1.4rem]">
                                {item.type === "formation" ? (
                                    <GraduationCap className="h-4 w-4 text-[#6366F1] dark:text-violet-300" />
                                ) : (
                                    <Briefcase className="h-4 w-4 text-[#6366F1] dark:text-violet-300" />
                                )}
                            </div>

                            <div
                                className={`group editorial-card editorial-card-interactive p-6 hover:border-[#6366F1]/30 dark:hover:border-violet-400/30 ${
                                    index % 2 === 0 ? "lg:-rotate-[0.35deg]" : "lg:rotate-[0.35deg]"
                                }`}
                            >
                                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-[#6366F1]/20 bg-[#6366F1]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F46E5] dark:border-violet-400/30 dark:bg-violet-500/10 dark:text-violet-200">
                                        {item.type === "formation" ? "Formation" : "Experience"}
                                    </span>
                                    <span className="rounded-full border border-border/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                                        {item.period}
                                    </span>
                                </div>
                                <p className="editorial-kicker">{item.subtitle}</p>
                                <h3 className="mt-2 text-lg font-bold sm:text-xl">{item.title}</h3>
                                <div className="editorial-divider mt-5" />
                                <ParcoursDescription description={item.description} />
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </SplitSection>

            {/* Compétences Section */}
            <SplitSection id="competences" title="Mes compétences" containerClassName="max-w-6xl">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="mb-10 max-w-3xl"
                >
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {competencesCategories.map((category) => {
                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={category.title}
                                variants={fadeInUp}
                                className={`group editorial-card editorial-card-interactive p-6 hover:border-[#6366F1]/20 dark:hover:border-violet-400/25 ${category.className}`}
                            >
                                <div className="mb-6 flex items-start justify-between gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6366F1]/10 text-[#4F46E5] ring-1 ring-[#6366F1]/15 dark:bg-violet-500/10 dark:text-violet-200 dark:ring-violet-400/20">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="editorial-kicker mb-2 text-[#4F46E5] dark:text-violet-300">
                                                    {category.logos.length} Compétences
                                                </p>
                                                <h3 className="text-lg font-semibold text-foreground sm:text-xl">{category.title}</h3>
                                            </div>
                                        </div>
                                        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{category.description}</p>
                                    </div>
                                </div>

                                <div className="editorial-divider mb-6" />

                                <div className="grid grid-cols-[repeat(auto-fit,minmax(136px,136px))] justify-center gap-3">
                                    {category.logos.map((logo, idx) => (
                                        <div
                                            key={idx}
                                            className="min-w-0 transition-transform duration-300 hover:scale-[1.03] [&>div]:flex [&>div]:min-h-[168px] [&>div]:h-full [&>div]:flex-col [&>div]:rounded-[1.35rem] [&>div]:border-border/60 [&>div]:bg-background/70 [&>div]:shadow-none [&>div>div:first-child]:flex [&>div>div:first-child]:min-h-[68px] [&>div>div:first-child]:items-center [&>div>div:first-child]:justify-center [&>div>div:first-child]:px-3 [&>div>div:first-child]:pb-2 [&>div>div:first-child>h3]:text-center [&>div>div:first-child>h3]:text-sm [&>div>div:first-child>h3]:leading-tight [&>div>div:first-child>h3]:tracking-tight [&>div>div:first-child>h3]:break-words [&>div>div:first-child>h3]:text-balance [&>div>div:last-child]:flex-1 [&>div>div:last-child]:px-4 [&>div>div:last-child]:pb-5 [&>div>div:last-child]:pt-1 dark:[&>div]:bg-[linear-gradient(145deg,rgba(30,41,59,0.84),rgba(76,29,149,0.22))]"
                                        >
                                            {logo}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </SplitSection>

            {/* Projets Section */}
            <SplitSection id="projets" title="Projets personnels" containerClassName="max-w-6xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2"
                >
                    {projets.map((projet, index) => (
                        <motion.button
                            key={projet.title}
                            type="button"
                            onClick={() => setSelectedProject(projet)}
                            variants={fadeInUp}
                            className="group editorial-card editorial-card-interactive relative flex flex-col justify-between overflow-hidden p-6 text-left hover:border-[#6366F1]/20 dark:hover:border-violet-400/30 md:p-8"
                        >
                            <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.16),transparent_55%),radial-gradient(circle_at_85%_0%,rgba(14,165,233,0.12),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div>
                                <div className="mb-4 flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6366F1]/10 text-[#4F46E5] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4F46E5] group-hover:text-white dark:bg-violet-500/10 dark:text-violet-300 dark:group-hover:bg-gradient-to-br dark:group-hover:from-indigo-500 dark:group-hover:to-violet-500">
                                            <FolderGit2 className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="editorial-kicker">Projet personnel</p>
                                            <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-[#4F46E5] dark:group-hover:text-violet-300">{projet.title}</h3>
                                            <p className="mt-2 text-sm leading-6 text-muted-foreground">{projet.eyebrow}</p>
                                        </div>
                                    </div>
                                    <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                        {projet.year}
                                    </span>
                                </div>
                                <div className="editorial-divider mb-5" />
                                <p className="mb-6 text-sm leading-7 text-muted-foreground">{projet.description}</p>
                            </div>

                            <div className="mt-auto space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {projet.tags.slice(0, 4).map((tag) => (
                                        <span key={tag} className="rounded-full border border-[#6366F1]/20 bg-[#6366F1]/10 px-3 py-1 text-xs font-medium text-[#4F46E5] dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                                        {projet.status}
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#4338CA] transition-transform duration-300 group-hover:translate-x-1 dark:text-violet-200">
                                        Ouvrir la fiche
                                        <ExternalLink className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </motion.div>
            </SplitSection>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

            {/* Passions Section */}
            <PassionsSection />

            {/* Contact Section */}
            <SplitSection id="contact" title="Me contacter" containerClassName="max-w-6xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="space-y-8"
                >
                    <div className="grid gap-5 sm:grid-cols-3">
                        {/* Email */}
                        <motion.div
                            variants={scaleIn}
                            className="group editorial-card relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#ff6b35]/30 hover:shadow-[0_20px_50px_rgba(255,107,53,0.10)] dark:hover:border-[#ff6b35]/25 dark:hover:shadow-[0_20px_50px_rgba(255,107,53,0.12)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff6b35]/15 to-[#f97316]/10 text-[#ff6b35] ring-1 ring-[#ff6b35]/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(255,107,53,0.2)]">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="editorial-kicker">Canal direct</p>
                                    <h3 className="font-semibold text-foreground">Email</h3>
                                </div>
                                <div className="editorial-divider w-full" />
                                <InteractiveHoverButton
                                    asChild
                                    hoverLabel="Écrire maintenant"
                                    leadingVisual={<Mail className="h-4 w-4" />}
                                    trailingVisual={<Mail className="h-4 w-4" />}
                                    className="w-full px-4"
                                >
                                    <a href="mailto:mael.demory@gmail.com" className="cursor-pointer">M&apos;envoyer un email</a>
                                </InteractiveHoverButton>
                            </div>
                        </motion.div>

                        {/* GitHub */}
                        <motion.div
                            variants={scaleIn}
                            className="group editorial-card relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#6366F1]/30 hover:shadow-[0_20px_50px_rgba(99,102,241,0.14)] dark:hover:border-violet-400/30 dark:hover:shadow-[0_20px_50px_rgba(76,29,149,0.15)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-violet-500/5" />
                            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366F1]/15 to-[#7C3AED]/10 text-[#4F46E5] ring-1 ring-[#6366F1]/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(99,102,241,0.22)] dark:from-violet-500/15 dark:to-violet-600/10 dark:text-violet-300 dark:ring-violet-400/20 dark:group-hover:shadow-[0_8px_30px_rgba(76,29,149,0.25)]">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="editorial-kicker">Code & projets</p>
                                    <h3 className="font-semibold text-foreground">GitHub</h3>
                                </div>
                                <div className="editorial-divider w-full" />
                                <InteractiveHoverButton
                                    asChild
                                    hoverLabel="Ouvrir GitHub"
                                    leadingVisual={(
                                        <svg aria-hidden="true" focusable="false" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z" />
                                        </svg>
                                    )}
                                    trailingVisual={<ExternalLink className="h-4 w-4" />}
                                    className="w-full px-4"
                                >
                                    <a href="https://github.com/MaelDemory" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                        Voir mon GitHub
                                    </a>
                                </InteractiveHoverButton>
                            </div>
                        </motion.div>

                        {/* LinkedIn */}
                        <motion.div
                            variants={scaleIn}
                            className="group editorial-card relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#0a66c2]/30 hover:shadow-[0_20px_50px_rgba(10,102,194,0.10)] dark:hover:border-[#0a66c2]/25 dark:hover:shadow-[0_20px_50px_rgba(10,102,194,0.12)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0a66c2]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a66c2]/15 to-[#0077b5]/10 text-[#0a66c2] ring-1 ring-[#0a66c2]/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(10,102,194,0.2)]">
                                    <LinkedInLogo />
                                </div>
                                <div>
                                    <p className="editorial-kicker">Profil professionnel</p>
                                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                                </div>
                                <div className="editorial-divider w-full" />
                                <InteractiveHoverButton
                                    asChild
                                    hoverLabel="Ouvrir LinkedIn"
                                    leadingVisual={<LinkedInLogo />}
                                    trailingVisual={<ExternalLink className="h-4 w-4" />}
                                    className="w-full px-4"
                                >
                                    <a href="https://www.linkedin.com/in/mael-demory/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                        Voir mon LinkedIn
                                    </a>
                                </InteractiveHoverButton>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </SplitSection>

            {/* Footer */}
            <footer className="border-t border-border py-8 px-4 text-center">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>&copy; {currentYear} Maël DEMORY — Tous droits réservés</p>
                    <InteractiveHoverButton
                        asChild
                        hoverLabel="Voir le dépôt"
                        leadingVisual={<Image src={githubIcon} alt="GitHub" width={14} height={14} />}
                        trailingVisual={<ExternalLink className="h-4 w-4" />}
                        className="px-5 py-0 text-sm"
                    >
                        <a
                            href="https://github.com/MaelDemory/CV-NextJS-Demory-Mael.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Code source du portfolio
                        </a>
                    </InteractiveHoverButton>
                </div>
            </footer>
        </div>
    );
}