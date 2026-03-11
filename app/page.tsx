"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import photoCV from "@/assets/images/photo_cv.png";
import githubIcon from "@/assets/images/icons/github.svg";
import { motion } from "framer-motion";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {
    AgentsAI,
    AngularLogo,
    BootstrapLogo,
    DockerLogo,
    FlaskLogo,
    FlutterLogo,
    GitLogo,
    GithubLogo,
    GrafanaLogo,
    IonicLogo,
    JavaLogo,
    LaravelLogo,
    LLM,
    LinkedInLogo,
    MongodbLogo,
    MSSQLLogo,
    MysqlLogo,
    Php,
    PLSQLLogo,
    PrometheusLogo,
    PsqlLogo,
    PythonLogo,
    ReactLogo,
    ReactNativeLogo,
    RustLogo,
    SpringBootLogo,
    SQLiteLogo,
    SwiftLogo,
    TailwindLogo,
    TypeScriptLogo,
    UMLLogo,
} from "@/app/logos";
import NextJSLogo from "@/app/logos/nextjs";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
    AppWindow,
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
} from "lucide-react";
import JavaScriptLogo from "./logos/javascript";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Agent } from "http";

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

const navItems = [
    { href: "#hero", label: "Accueil", icon: House, id: "hero" },
    { href: "#parcours", label: "Parcours", icon: BriefcaseBusiness, id: "parcours" },
    { href: "#competences", label: "Compétences", icon: Wrench, id: "competences" },
    { href: "#projets", label: "Projets", icon: FolderOpen, id: "projets" },
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
        ],
    },
    {
        title: "Base de données",
        description: "",
        icon: Database,
        className: "md:col-span-1",
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
        title: "Autres compétences techniques",
        description: "",
        icon: Workflow,
        className: "md:col-span-1",
        logos: [
            <AgentsAI key="agents" />,
            <DockerLogo key="docker" />,
            <GitLogo key="git" />,
            <GithubLogo key="github" />,
            <GrafanaLogo key="grafana" />,
            <LLM key="llm" />,
            <PrometheusLogo key="prometheus" />,
            <UMLLogo key="uml" />,
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

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
            <span className="bg-gradient-to-r from-[#00BCD8] to-[#0097A7] bg-clip-text text-transparent">
                {children}
            </span>
        </motion.h2>
    );
}

const parcours = [
    {
        type: "formation",
        title: "BUT Informatique",
        subtitle: "IUT de Lens - Université d'Artois",
        period: "2022 - 2025",
        description: "Formation en développement, bases de données, réseaux et gestion de projet.",
    },
    {
        type: "experience",
        title: "Développeur web en alternance",
        subtitle: "IMT Nord Europe",
        period: "2024 - 2025",
        description: "Développement d'applications web pour les besoins internes de l'école.",
    },
    {
        type: "formation",
        title: "Cursus d'ingénieur Informatique, Télécommunications et Réseaux",
        subtitle: "IMT Nord Europe",
        period: "2025 - 2028",
        description: "Poursuite d'études en cursus d'ingénieur avec une spécialisation en informatique.",
    },
    {
        type: "experience",
        title: "Ingénieur logiciel en alternance",
        subtitle: "Arjo France",
        period: "2025 - 2028",
        description: "Développement de nouvelles fonctionnalités et maintenance des applications internes existantes de l'entreprise",
    }    
];

const projets = [
    {
        title: "Portfolio",
        description: "Mon portfolio personnel présentant mon parcours, mes compétences et mes projets.",
        tags: ["Next.js", "React", "Tailwind CSS", "Personnel"],
        github: "https://github.com/MaelDemory/CV-NextJS-Demory-Mael",
        link: "#",
    },
    {
        title: "RayTracer",
        description: "Générateur d'images via la méthode de ray tracing, développé en java avec des optimisations multi-threading ou GPU pour accélérer le rendu.",
        tags: ["Java", "Optimisation", "Multi-threading", "GPU", "Universitaire"],
        github: "https://github.com/MaelDemory/Raytracer",
        link: "#",
    },
    {
        title: "API Gatcha",
        description: "Application web fullstack reconstituant un simple jeu de type Gatcha, intégrant des fonctionnalités d'authentification, de création et de suivi des projets en temps réel.",
        tags: ["SpringBoot", "Next.js", "MongoDB", "API REST", "Docker" ,"Architecture microservices", "Monitoring", "Universitaire"],
        github: "https://github.com/RayzerDev/Gatcha",
        link: "", 
    },
    {
        title: "Extracteur d'informations comptables",
        description: "Application web pour analyser les fichiers PDF de facturation et extraire automatiquement les heures travaillées par client.",
        tags: ["Python", "Flask", "Personnel"],
        github: "",
        link: "",
    },
    {
        title: "Extension Chromium de raccourcis clavier",
        description: "Extension pour le moteur de rendu Chromium (Chrome, Edge, OperaGX, Brave...) permettant d'associer des raccourcis clavier personnalisés à des actions de clic sur n'importe quel élément d'une page web.",
        tags: ["JavaScript", "Chrome Extension", "Personnel"],
        github: "https://github.com/MaelDemory/extension_raccourci",
        link: "",
    },
    {
        title: "F1dle",
        description: "Jeu de type Wordle pour la Formule 1, l'objectif étant de deviner un pilote aléatoire en un nombre limité de tentatives, avec des indices basés sur les caractéristiques des pilotes et de leurs performances.",
        tags: ["Laravel", "API", "React", "Tailwind CSS", "ShadCN UI", "Personnel"],
        github: "https://github.com/MaelDemory/F1dle",
        link: "",
    }

];

export default function Home() {
    const currentYear = new Date().getFullYear();
    const [activeSection, setActiveSection] = useState("hero");
    const [hoveredAltNavItem, setHoveredAltNavItem] = useState<string | null>(null);

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

    return (
        <div className="flex min-h-screen flex-col pb-24 font-[family-name:var(--font-geist-sans)] sm:pb-0">
            {/* Navigation */}
            <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 sm:bottom-auto sm:top-5">
                <motion.nav
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="pointer-events-auto"
                >
                    <div
                        className="flex items-center gap-2 rounded-[2.2rem] border border-black/5 bg-white/80 p-2 shadow-[0_18px_55px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#111111]/80 dark:shadow-[0_24px_62px_rgba(0,0,0,0.42)] sm:gap-3 sm:px-3"
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
                                            ? "text-[#00545d] dark:text-white"
                                            : "text-foreground/55 hover:text-[#004d55] dark:text-white/65 dark:hover:text-white"
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
                                            className="absolute inset-0 rounded-[2.2rem] border border-[#00BCD8]/35 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,1),rgba(0,188,216,0.28)_68%)] shadow-[0_14px_30px_rgba(0,188,216,0.2)] ring-1 ring-[#00BCD8]/20 dark:border-white/10 dark:bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.18),rgba(255,255,255,0.08)_42%,rgba(99,102,241,0.18)_100%)] dark:shadow-[0_18px_38px_rgba(0,0,0,0.3)] dark:ring-white/10"
                                        />
                                    )}
                                    {isHovered && !isActive && (
                                        <span className="absolute inset-0 rounded-[2.2rem] border border-[#00BCD8]/35 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,1),rgba(0,188,216,0.28)_68%)] shadow-[0_14px_30px_rgba(0,188,216,0.2)] ring-1 ring-[#00BCD8]/20 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none dark:ring-0" />
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/80 text-foreground shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all duration-300 hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-[#111111]/80 dark:text-white dark:shadow-[0_18px_45px_rgba(0,0,0,0.4)]"
                />
                <a
                    href="https://github.com/MaelDemory"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/80 text-foreground shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.04] hover:border-primary/50 hover:text-primary dark:border-white/10 dark:bg-[#111111]/80 dark:text-white dark:shadow-[0_18px_45px_rgba(0,0,0,0.4)]"
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
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BCD8]/10 via-background to-[#00BCD8]/5 dark:from-[#1D4ED8]/18 dark:via-[#0B1023] dark:to-[#6D28D9]/20" />
                <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-[#00BCD8]/10 blur-3xl dark:bg-blue-500/20" />
                <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-[#00BCD8]/5 blur-3xl dark:bg-violet-500/16" />

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
                                className="w-40 h-40 rounded-full object-cover ring-4 ring-[#00BCD8]/20 shadow-all-around sm:h-44 sm:w-44 dark:ring-violet-400/25"
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
                                <span className="bg-gradient-to-r from-[#00BCD8] to-[#0097A7] bg-clip-text text-transparent">
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
                                <Briefcase className="w-4 h-4 text-[#00BCD8]" />
                                Étudiant ingénieur à
                                <a
                                    className="font-semibold text-[#00BCD8] hover:underline dark:text-sky-300"
                                    href="https://imt-nord-europe.fr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    IMT Nord Europe
                                </a>
                            </span>

                            <span className="flex items-center gap-1.5">
                                <Briefcase className="w-4 h-4 text-[#00BCD8]" />
                                Alternant ingénieur logiciel chez 
                                <a
                                    className="font-semibold text-[#00BCD8] hover:underline dark:text-violet-300"
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
                            <MapPin className="w-4 h-4 text-[#00BCD8]" />
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
                            <ChevronDown className="w-6 h-6 text-[#00BCD8]/60" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Parcours Section */}
            <section id="parcours" className="py-20 sm:py-28 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <SectionTitle>Mon parcours</SectionTitle>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="relative"
                    >
                        {/* Timeline line */}
                        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00BCD8] to-[#00BCD8]/20 -translate-x-1/2" />

                        {parcours.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={`relative flex items-start gap-6 mb-12 ${
                                    index % 2 === 0
                                        ? "sm:flex-row"
                                        : "sm:flex-row-reverse"
                                }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-[#00BCD8] rounded-full border-4 border-background shadow-md -translate-x-1/2 z-10" />

                                <div className={`ml-10 sm:ml-0 sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                                    <div className="group rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00BCD8]/10 dark:surface-glow dark:hover:border-violet-400/30 dark:hover:shadow-[0_24px_60px_rgba(59,130,246,0.14)]">
                                        <div className="mb-2 flex origin-left items-center gap-2 text-[#00BCD8] transition-transform group-hover:scale-105 dark:text-sky-300">
                                            {item.type === "formation" ? (
                                                <GraduationCap className="w-5 h-5" />
                                            ) : (
                                                <Briefcase className="w-5 h-5" />
                                            )}
                                            <span className="text-xs font-semibold uppercase tracking-wider">
                                                {item.type === "formation" ? "Formation" : "Expérience"}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                                        <p className="text-xs text-[#00BCD8] font-medium mt-1">{item.period}</p>
                                        <p className="text-sm text-muted-foreground mt-3">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Compétences Section */}
            <section id="competences" className="bg-gradient-to-b from-[#00BCD8]/5 to-transparent px-4 py-20 sm:px-6 sm:py-28 dark:from-blue-500/8 dark:to-transparent">
                <div className="max-w-5xl mx-auto">
                    <SectionTitle>Mes compétences</SectionTitle>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mx-auto mb-12 max-w-3xl text-center"
                    >
                        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                            Un socle polyvalent couvrant le web, le mobile, le développement logiciel, 
                        </p>
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
                                    className={`group rounded-[2rem] border border-border/60 bg-white/55 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00BCD8]/20 hover:shadow-[0_24px_60px_rgba(0,188,216,0.08)] dark:surface-glow dark:border-white/10 dark:bg-slate-950/45 dark:hover:border-violet-400/25 dark:hover:shadow-[0_22px_65px_rgba(76,29,149,0.2)] ${category.className}`}
                                >
                                    <div className="mb-6 flex items-start justify-between gap-4">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00BCD8]/10 text-[#00BCD8] ring-1 ring-[#00BCD8]/15 dark:bg-violet-500/10 dark:text-violet-200 dark:ring-violet-400/20">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">{category.title}</h3>
                                                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#00BCD8] dark:text-sky-300">
                                                        {category.logos.length} compétences
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                                        {category.logos.map((logo, idx) => (
                                            <div
                                                key={idx}
                                                className="min-w-0 transition-transform duration-300 hover:scale-[1.03] [&>div]:h-full [&>div]:rounded-[1.35rem] [&>div]:border-border/60 [&>div]:bg-background/70 [&>div]:shadow-none dark:[&>div]:bg-slate-950/50"
                                            >
                                                {logo}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Projets Section */}
            <section id="projets" className="py-20 sm:py-28 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <SectionTitle>Projets personnels</SectionTitle>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {projets.map((projet, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00BCD8]/10 dark:surface-glow dark:hover:border-violet-400/30 dark:hover:shadow-[0_28px_70px_rgba(76,29,149,0.24)] md:p-8"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00BCD8]/10 text-[#00BCD8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00BCD8] group-hover:text-white dark:bg-violet-500/10 dark:text-violet-300 dark:group-hover:bg-gradient-to-br dark:group-hover:from-sky-500 dark:group-hover:to-violet-500">
                                            <FolderGit2 className="w-6 h-6" />
                                        </div>
                                        <div className="flex gap-3">
                                            {projet.github && (
                                                <a href={projet.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#00BCD8] transition-colors" aria-label="Lien GitHub">
                                                    <svg aria-hidden="true" focusable="false" className="octicon octicon-mark-github" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" display="inline-block" overflow="visible">
                                                        <path d="M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            )}
                                            {projet.link && projet.link !== "#" && projet.link !== "" && (
                                                <a href={projet.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#00BCD8] transition-colors" aria-label="Lien du projet">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-[#00BCD8] dark:group-hover:text-violet-300">{projet.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{projet.description}</p>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {projet.tags.map((tag, idx) => (
                                        <span key={idx} className="rounded-full border border-[#00BCD8]/20 bg-[#00BCD8]/10 px-3 py-1 text-xs font-medium text-[#00BCD8] dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-gradient-to-t from-[#00BCD8]/5 to-transparent px-4 py-20 sm:px-6 sm:py-28 dark:from-violet-500/8 dark:to-transparent">
                <div className="max-w-2xl mx-auto text-center">
                    <SectionTitle>Me contacter</SectionTitle>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.div variants={scaleIn}>
                            <InteractiveHoverButton
                                asChild
                                hoverLabel="Écrire maintenant"
                                leadingVisual={<Mail className="h-4 w-4" />}
                                trailingVisual={<Mail className="h-4 w-4" />}
                                className="px-6"
                            >
                                <a href="mailto:mael.demory@gmail.com">
                                    M&apos;envoyer un email
                                </a>
                            </InteractiveHoverButton>
                        </motion.div>

                        <motion.div variants={scaleIn}>
                            <InteractiveHoverButton
                                asChild
                                hoverLabel="Ouvrir GitHub"
                                leadingVisual={(
                                    <svg aria-hidden="true" focusable="false" className="octicon octicon-mark-github h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z" />
                                    </svg>
                                )}
                                trailingVisual={<ExternalLink className="h-4 w-4" />}
                                className="px-6"
                            >
                                <a href="https://github.com/MaelDemory" target="_blank" rel="noopener noreferrer">
                                    Voir mon GitHub
                                </a>
                            </InteractiveHoverButton>
                        </motion.div>

                        <motion.div variants={scaleIn}>
                            <InteractiveHoverButton
                                asChild
                                hoverLabel="Ouvrir LinkedIn"
                                leadingVisual={<LinkedInLogo />}
                                trailingVisual={<ExternalLink className="h-4 w-4" />}
                                className="px-6"
                            >
                                <a href="https://www.linkedin.com/in/mael-demory/" target="_blank" rel="noopener noreferrer">
                                    Voir mon LinkedIn
                                </a>
                            </InteractiveHoverButton>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

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