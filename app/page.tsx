"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import photoCV from "@/assets/images/photo_cv.png";
import shotF1dle from "@/assets/images/projects/f1dle.png";
import shotBoringNotch from "@/assets/images/projects/boring-notch.gif";
import shotKablam from "@/assets/images/projects/kablam.png";
import shotRayTracer from "@/assets/images/projects/raytracer.jpg";
import shotRetroGames from "@/assets/images/projects/retro-games.png";
import shotF1TicketSystem from "@/assets/images/projects/f1-ticket-system.png";
import shotGatcha from "@/assets/images/projects/gatcha.jpg";
import {
    AnimatePresence,
    MotionConfig,
    motion,
    useMotionTemplate,
    useReducedMotion,
    useSpring,
    type MotionValue,
} from "framer-motion";
import { translations, type Locale, type Project } from "@/app/translations";
import { CV_PDF, CV_PDF_AVAILABLE } from "@/app/site";
import {
    BootstrapLogo,
    AngularLogo,
    DockerLogo,
    FlaskLogo,
    FlutterLogo,
    GitLogo,
    GithubActionsLogo,
    GitlabCILogo,
    GrafanaLogo,
    JavaLogo,
    IonicLogo,
    JavaScriptLogo,
    LaravelLogo,
    LinkedInLogo,
    LinuxLogo,
    MongodbLogo,
    MSSQLLogo,
    MysqlLogo,
    NextJSLogo,
    Php,
    NomadLogo,
    PostmanLogo,
    PLSQLLogo,
    PrometheusLogo,
    PythonLogo,
    PsqlLogo,
    ReactLogo,
    ReactNativeLogo,
    SonarQubeLogo,
    RustLogo,
    SpringBootLogo,
    SQLiteLogo,
    SwiftLogo,
    TailwindLogo,
    TypeScriptLogo,
    TerraformLogo,
    UMLLogo,
} from "@/app/logos";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
    Briefcase,
    BriefcaseBusiness,
    Building2,
    CalendarClock,
    ChevronDown,
    ChevronRight,
    ChevronUp,
    FileDown,
    FlaskConical,
    FolderOpen,
    GraduationCap,
    Heart,
    House,
    Mail,
    MapPin,
    Puzzle,
    Route,
    ShieldCheck,
    Sparkles,
    UserRound,
    Wrench,
} from "lucide-react";

const spring = { type: "spring", duration: 0.7, bounce: 0 };

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: spring },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

function ParcoursModules({ modules, label }: { modules: string[]; label: string }) {
    return (
        <div className="mt-6 border-t border-border/60 pt-5">
            <p className="eyebrow">{label}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {modules.map((module) => (
                    <span key={module} className="chip">
                        {module}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ParcoursDescription({ description }: { description: string[] }) {
    return (
        <ul className="mt-4 max-w-[70ch] space-y-2.5 text-sm leading-7 text-muted-foreground">
            {description.map((item) => (
                <li key={item} className="relative pl-5">
                    <span className="absolute left-0 top-[0.8rem] h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

/* Explorateur de projets, sur le modèle du module « De plus près » des pages
   produit Apple : sélecteurs à gauche (rangée défilante en mobile), panneau de
   détail à droite. Les slugs sont alignés sur l'ordre du tableau `projets`,
   identique dans les deux locales ; ils servent d'ancre ?project= et de clé
   pour les captures des démos en ligne. */
const projectSlugs = [
    "f1dle",
    "boring-notch",
    "kablam",
    "raytracer",
    "retro-games",
    "f1-ticket-system",
    "claude-config",
    "gatcha",
    "portfolio",
] as const;

const projectShots: Partial<Record<(typeof projectSlugs)[number], StaticImageData>> = {
    f1dle: shotF1dle,
    "boring-notch": shotBoringNotch,
    kablam: shotKablam,
    raytracer: shotRayTracer,
    "retro-games": shotRetroGames,
    "f1-ticket-system": shotF1TicketSystem,
    gatcha: shotGatcha,
};

/* Les six premiers projets forment la sélection mise en avant ; un séparateur
   les distingue des suivants dans la liste. */
const PROJECT_FEATURED_COUNT = 6;

/* Mots-clés mis en avant dans l'intro « À propos », façon paragraphe
   d'introduction des pages produit Apple : le paragraphe entier en gris,
   les segments porteurs en encre. Les chaînes ci-dessous sont des extraits
   EXACTS de about.paragraphs — à tenir à jour avec translations.ts. */
const aboutEmphasis: Record<Locale, string[][]> = {
    en: [
        ["PHP and JavaScript developer", "Arjo France", "internal applications"],
        ["business need", "workable technical solution", "old, shared codebases", "useful quickly in a new team"],
    ],
    fr: [
        ["développeur PHP et JavaScript", "Arjo France", "applications de gestion internes"],
        ["besoin exprimé par un métier", "solution technique réalisable", "bases de code legacy", "rapidement opérationnel"],
    ],
};

/* Parameters
     text — le paragraphe d'origine, jamais modifié.
     marks — extraits exacts de ce paragraphe à mettre en avant.
   What it does
     Découpe le texte sur chaque extrait et enveloppe ces derniers dans un
     <strong> en encre, le reste du paragraphe restant en gris.
   Output
     La suite de nœuds React du paragraphe. */
function EmphasizedText({ text, marks }: { text: string; marks: string[] }) {
    if (marks.length === 0) {
        return <>{text}</>;
    }
    const escaped = marks.map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
    return (
        <>
            {parts.map((part, index) =>
                marks.includes(part) ? (
                    <strong key={index} className="font-semibold text-foreground">
                        {part}
                    </strong>
                ) : (
                    part
                )
            )}
        </>
    );
}

/* Parameters
     className, children, rest — transmis tels quels au conteneur défilant.
   What it does
     Enveloppe une rangée défilante horizontale et superpose un fondu sur le
     bord gauche ou droit tant qu'il reste du contenu de ce côté : l'affordance
     disparaît d'elle-même en fin de course et sur les rangées qui tiennent.
   Output
     Le conteneur défilant décoré de ses deux fondus. */
function ScrollRow({ className, children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const [edges, setEdges] = useState({ left: false, right: false });

    const updateEdges = () => {
        const el = scrollerRef.current;
        if (!el) {
            return;
        }
        setEdges({
            left: el.scrollLeft > 8,
            right: el.scrollLeft + el.clientWidth < el.scrollWidth - 8,
        });
    };

    useEffect(() => {
        updateEdges();
        window.addEventListener("resize", updateEdges);
        return () => window.removeEventListener("resize", updateEdges);
    }, []);

    return (
        <div className="relative">
            <div ref={scrollerRef} onScroll={updateEdges} className={className} {...rest}>
                {children}
            </div>
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-card to-transparent transition-opacity duration-300 ${
                    edges.left ? "opacity-100" : "opacity-0"
                }`}
            />
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card to-transparent transition-opacity duration-300 ${
                    edges.right ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );
}

/* Parameters
     count — nombre de cartes du carrousel.
     active — indice de la carte courante.
     labels — intitulés servant de noms accessibles aux points.
     onSelect — rappel de sélection d'un point.
   What it does
     Affiche les points de pagination du carrousel mobile, le point actif
     étant étiré en pilule comme sur les pages produit Apple.
   Output
     La rangée de points, masquée à partir du point de rupture sm. */
function CarouselDots({
    count,
    active,
    labels,
    onSelect,
}: {
    count: number;
    active: number;
    labels: string[];
    onSelect: (index: number) => void;
}) {
    return (
        <div className="mt-4 flex justify-center gap-2 sm:hidden">
            {Array.from({ length: count }, (_, index) => (
                <button
                    key={index}
                    type="button"
                    aria-label={labels[index]}
                    aria-current={index === active}
                    onClick={() => onSelect(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === active ? "w-5 bg-foreground/70" : "w-1.5 bg-muted-foreground/30"
                    }`}
                />
            ))}
        </div>
    );
}

/* Une icône par pilier « À propos », dans l'ordre du tableau `pillars`
   (identique dans les deux locales) : entreprise, bout en bout, cadre régulé,
   workflow IA, tests et mesure, intervention sans réécriture. */
const pillarIcons = [Building2, Route, ShieldCheck, Sparkles, FlaskConical, Puzzle] as const;

const navItems = [
    { href: "#hero", icon: House, id: "hero" },
    { href: "#about", icon: UserRound, id: "about" },
    { href: "#parcours", icon: BriefcaseBusiness, id: "parcours" },
    { href: "#competences", icon: Wrench, id: "competences" },
    { href: "#projets", icon: FolderOpen, id: "projets" },
    { href: "#contact", icon: Mail, id: "contact" },
] as const;

/* Compétences : un seul bloc, trois niveaux de maîtrise décroissante.
   Le niveau « cœur » garde de grandes tuiles, « maîtrise pratique » des tuiles
   compactes sous-groupées par domaine, « exploré » de simples pastilles. */
const coreLogos = [
    <Php key="php" />,
    <JavaScriptLogo key="js" />,
    <LaravelLogo key="laravel" />,
    <BootstrapLogo key="bootstrap" />,
    <MSSQLLogo key="mssql" />,
    <MysqlLogo key="mysql" />,
    <GitLogo key="git" />,
];

const workingGroups = [
    { id: "front", logos: [<TypeScriptLogo key="ts" />, <ReactLogo key="react" />, <NextJSLogo key="next" />, <TailwindLogo key="tailwind" />] },
    { id: "back", logos: [<JavaLogo key="java" />, <SpringBootLogo key="springboot" />, <PythonLogo key="python" />, <FlaskLogo key="flask" />] },
    { id: "mobile", logos: [<ReactNativeLogo key="rn" />, <SwiftLogo key="swift" />, <FlutterLogo key="flutter" />] },
    { id: "data", logos: [<MongodbLogo key="mongo" />, <SQLiteLogo key="sqlite" />] },
    { id: "devops", logos: [<DockerLogo key="docker" />, <GitlabCILogo key="gitlab-ci" />, <PrometheusLogo key="prometheus" />, <GrafanaLogo key="grafana" />, <LinuxLogo key="linux" />] },
    { id: "quality", logos: [<SonarQubeLogo key="sonarqube" />, <PostmanLogo key="postman" />, <UMLLogo key="uml" />] },
] as const;

const exploredLogos = [
    <AngularLogo key="angular" />,
    <IonicLogo key="ionic" />,
    <RustLogo key="rust" />,
    <PsqlLogo key="psql" />,
    <PLSQLLogo key="plsql" />,
    <TerraformLogo key="terraform" />,
    <NomadLogo key="nomad" />,
    <GithubActionsLogo key="github-actions" />,
];

/* Élément signature : le nom du hero en display géant, dont la graisse
   (Geist variable, 100–900) réagit à la proximité du curseur, lettre par lettre. */
const NAME_LINES = ["Maël", "Demory"];
const HERO_WEIGHT_BASE = 500;
const HERO_WEIGHT_PEAK = 900;
const HERO_WEIGHT_RADIUS = 170;

type HeroLetterHandle = {
    element: HTMLSpanElement;
    weight: MotionValue<number>;
};

function HeroLetter({
    char,
    index,
    register,
}: {
    char: string;
    index: number;
    register: (handle: HeroLetterHandle | null, index: number) => void;
}) {
    const weight = useSpring(HERO_WEIGHT_BASE, { stiffness: 400, damping: 28 });
    const fontVariationSettings = useMotionTemplate`'wght' ${weight}`;

    return (
        <motion.span
            ref={(element) => register(element ? { element, weight } : null, index)}
            style={{ fontVariationSettings }}
            className="inline-block"
        >
            {char}
        </motion.span>
    );
}

function HeroName() {
    const shouldReduceMotion = useReducedMotion();
    const letters = useRef<(HeroLetterHandle | null)[]>([]);

    const register = (handle: HeroLetterHandle | null, index: number) => {
        letters.current[index] = handle;
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLHeadingElement>) => {
        if (shouldReduceMotion || event.pointerType !== "mouse") {
            return;
        }

        for (const handle of letters.current) {
            if (!handle) {
                continue;
            }
            const rect = handle.element.getBoundingClientRect();
            const distance = Math.hypot(
                event.clientX - (rect.left + rect.width / 2),
                event.clientY - (rect.top + rect.height / 2)
            );
            const proximity = Math.max(0, 1 - distance / HERO_WEIGHT_RADIUS);
            handle.weight.set(HERO_WEIGHT_BASE + (HERO_WEIGHT_PEAK - HERO_WEIGHT_BASE) * proximity);
        }
    };

    const resetWeights = () => {
        for (const handle of letters.current) {
            handle?.weight.set(HERO_WEIGHT_BASE);
        }
    };

    return (
        <h1
            aria-label="Maël Demory"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetWeights}
            style={{ fontWeight: HERO_WEIGHT_BASE }}
            className="text-[clamp(3.25rem,11vw,6.5rem)] uppercase leading-[0.95] tracking-[-0.02em]"
        >
            <span aria-hidden="true">
                {NAME_LINES.map((line, lineIndex) => {
                    const offset = lineIndex === 0 ? 0 : NAME_LINES[0].length;

                    return (
                        <span key={line} className="block">
                            {Array.from(line).map((char, charIndex) => (
                                <HeroLetter
                                    key={charIndex}
                                    char={char}
                                    index={offset + charIndex}
                                    register={register}
                                />
                            ))}
                            {lineIndex === NAME_LINES.length - 1 && (
                                /* Point dessiné plutôt que le glyphe « . » : carré dans
                                   Geist à cette graisse, alors que le CV a un point rond. */
                                <span className="ml-[0.06em] inline-block h-[0.13em] w-[0.13em] rounded-full bg-primary" />
                            )}
                        </span>
                    );
                })}
            </span>
        </h1>
    );
}

function SkillLevelHeading({ title, lede }: { title: string; lede: string }) {
    return (
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{lede}</p>
        </div>
    );
}

function Section({
    id,
    title,
    lede,
    children,
}: {
    id: string;
    title: string;
    lede: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-24">
            <div className="mx-auto w-full max-w-5xl">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <p className="eyebrow">{title}</p>
                    <h2 className="mt-3 max-w-3xl text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[3.25rem]">
                        {lede}
                    </h2>
                </motion.div>
                <div className="mt-10 sm:mt-12">{children}</div>
            </div>
        </section>
    );
}

function GithubMarkIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.303 16.652c-2.837-.344-4.835-2.385-4.835-5.028 0-1.074.387-2.235 1.031-3.008-.279-.709-.236-2.214.086-2.837.86-.107 2.02.344 2.708.967.816-.258 1.676-.386 2.728-.386 1.053 0 1.913.128 2.686.365.666-.602 1.848-1.053 2.708-.946.3.581.344 2.085.064 2.815.688.817 1.053 1.913 1.053 3.03 0 2.643-1.998 4.641-4.877 5.006.73.473 1.224 1.504 1.224 2.686v2.235c0 .644.537 1.01 1.182.752 3.889-1.483 6.94-5.372 6.94-10.185 0-6.081-4.942-11.044-11.022-11.044-6.081 0-10.98 4.963-10.98 11.044a10.84 10.84 0 0 0 7.112 10.206c.58.215 1.139-.172 1.139-.752v-1.719a2.768 2.768 0 0 1-1.032.215c-1.418 0-2.256-.773-2.857-2.213-.237-.58-.495-.924-.989-.988-.258-.022-.344-.129-.344-.258 0-.258.43-.451.86-.451.623 0 1.16.386 1.719 1.181.43.623.881.903 1.418.903.537 0 .881-.194 1.375-.688.365-.365.645-.687.903-.902Z" />
        </svg>
    );
}

function ProjectExplorer({
    projects,
    labels,
    prevLabel,
    nextLabel,
    floatingSelector,
}: {
    projects: Project[];
    labels: (typeof translations)[Locale]["modal"];
    prevLabel: string;
    nextLabel: string;
    /* Vrai quand la section Projets est celle à l'écran : en mobile, le dock
       principal s'efface et la pilule de sélection prend son emplacement. */
    floatingSelector: boolean;
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const floatingScrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Centre la pastille active dans la pilule flottante à l'apparition
        // comme à chaque changement de projet.
        const scroller = floatingScrollRef.current;
        const chip = scroller?.querySelector<HTMLButtonElement>('[aria-selected="true"]');
        if (!scroller || !chip) {
            return;
        }
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        scroller.scrollTo({
            left: chip.offsetLeft - (scroller.clientWidth - chip.clientWidth) / 2,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    }, [floatingSelector, activeIndex]);

    const select = (index: number, moveFocus = false) => {
        const clamped = Math.max(0, Math.min(projects.length - 1, index));
        setActiveIndex(clamped);
        // Lien profond ?project=<slug>, même logique que ?lang=.
        const url = new URL(window.location.href);
        url.searchParams.set("project", projectSlugs[clamped]);
        window.history.replaceState(null, "", url);
        if (moveFocus) {
            // Le sélecteur est sticky : le focus n'a pas besoin de déplacer la
            // page, c'est le panneau qui pilote le défilement.
            tabRefs.current[clamped]?.focus({ preventScroll: true });
        }
        // Si la lecture avait fait défiler le panneau, le nouveau projet
        // repart de son début plutôt que d'hériter de la position courante.
        const panel = document.getElementById("project-panel");
        if (panel && panel.getBoundingClientRect().top < 0) {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            panel.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const slug = new URLSearchParams(window.location.search).get("project");
        const index = projectSlugs.indexOf(slug as (typeof projectSlugs)[number]);
        if (index > 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActiveIndex(index);
        }
    }, []);

    const handleTablistKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const targets: Record<string, number> = {
            ArrowDown: activeIndex + 1,
            ArrowRight: activeIndex + 1,
            ArrowUp: activeIndex - 1,
            ArrowLeft: activeIndex - 1,
            Home: 0,
            End: projects.length - 1,
        };
        if (event.key in targets) {
            event.preventDefault();
            select(targets[event.key], true);
        }
    };

    const project = projects[activeIndex];
    const slug = projectSlugs[activeIndex];
    const shot = projectShots[slug];

    return (
        <>
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="surface-card overflow-clip p-0"
        >
            <div className="flex flex-col md:grid md:grid-cols-[264px_1fr]">
                {/* Sélecteur : colonne en desktop, rangée défilante sous le panneau en mobile. */}
                <div className="order-2 border-t border-border/60 bg-card/95 p-4 backdrop-blur-md max-sm:hidden sm:max-md:sticky sm:max-md:bottom-4 sm:max-md:z-10 md:order-1 md:border-r md:border-t-0 md:bg-transparent md:p-6 md:backdrop-blur-none">
                    <div className="md:sticky md:top-24 md:flex md:flex-col">
                    <ScrollRow
                        role="tablist"
                        aria-orientation="vertical"
                        onKeyDown={handleTablistKeyDown}
                        className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-col md:items-stretch md:gap-1.5 md:overflow-visible md:pb-0"
                    >
                        {projects.map((item, index) => (
                            <Fragment key={projectSlugs[index]}>
                                {index === PROJECT_FEATURED_COUNT && (
                                    <div
                                        role="none"
                                        className="mx-1 w-px shrink-0 self-stretch bg-border/70 md:mx-1 md:my-2.5 md:h-px md:w-auto md:self-auto"
                                    />
                                )}
                                <button
                                    ref={(element) => {
                                        tabRefs.current[index] = element;
                                    }}
                                    type="button"
                                    role="tab"
                                    id={`project-tab-${projectSlugs[index]}`}
                                    aria-selected={index === activeIndex}
                                    aria-controls="project-panel"
                                    tabIndex={index === activeIndex ? 0 : -1}
                                    onClick={() => select(index)}
                                    className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-left text-sm font-medium transition-colors duration-200 active:scale-[0.98] ${
                                        index === activeIndex
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-foreground/80 hover:text-foreground"
                                    }`}
                                >
                                    {item.title}
                                </button>
                            </Fragment>
                        ))}
                    </ScrollRow>

                    <div className="mt-5 hidden gap-2 md:flex">
                        <button
                            type="button"
                            onClick={() => select(activeIndex - 1, true)}
                            disabled={activeIndex === 0}
                            aria-label={prevLabel}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground disabled:opacity-35 disabled:hover:text-muted-foreground"
                        >
                            <ChevronUp className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => select(activeIndex + 1, true)}
                            disabled={activeIndex === projects.length - 1}
                            aria-label={nextLabel}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground disabled:opacity-35 disabled:hover:text-muted-foreground"
                        >
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                    </div>
                </div>

                {/* Panneau de détail : le contenu intégral de l'ancienne modale. */}
                <div
                    id="project-panel"
                    role="tabpanel"
                    aria-labelledby={`project-tab-${slug}`}
                    className="order-1 scroll-mt-24 p-5 sm:p-8 md:order-2 lg:p-10"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={slug}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                        >
                            {shot && (
                                <div className="mb-7 overflow-hidden rounded-2xl border border-border/60">
                                    <Image
                                        src={shot}
                                        alt={project.title}
                                        sizes="(min-width: 768px) 720px, 100vw"
                                        className="w-full"
                                        placeholder={shot.blurDataURL ? "blur" : "empty"}
                                    />
                                </div>
                            )}

                            <div className="flex items-start justify-between gap-4">
                                <p className="eyebrow">{project.eyebrow}</p>
                                <span className="shrink-0 text-sm tabular-nums text-muted-foreground">{project.year}</span>
                            </div>
                            <h3 className="mt-2 max-w-2xl text-2xl font-semibold leading-[1.1] tracking-[-0.022em] sm:text-3xl">
                                {project.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {project.status} · {project.role}
                            </p>
                            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground">{project.description}</p>

                            {(project.github || (project.link && project.link !== "#")) && (
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-filled">
                                            <GithubMarkIcon className="h-4 w-4" />
                                            {labels.viewCode}
                                        </a>
                                    )}
                                    {project.link && project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-tinted">
                                            {labels.openProject}
                                            <ChevronRight className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                            )}

                            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                {project.stats.map((stat) => (
                                    <div key={stat.label} className="rounded-2xl bg-muted p-4">
                                        <p className="text-[13px] text-muted-foreground">{stat.label}</p>
                                        <p className="mt-1 text-[15px] font-semibold">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 space-y-8">
                                <div>
                                    <h4 className="text-lg font-semibold tracking-tight">{labels.overview}</h4>
                                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                                        {project.longDescription}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold tracking-tight">{labels.highlights}</h4>
                                    <ul className="mt-3 max-w-2xl space-y-2.5 text-sm leading-7 text-muted-foreground">
                                        {project.highlights.map((highlight) => (
                                            <li key={highlight} className="relative pl-5">
                                                <span className="absolute left-0 top-[0.8rem] h-1 w-1 rounded-full bg-muted-foreground/50" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold tracking-tight">{labels.stack}</h4>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.stack.map((item) => (
                                            <span key={item} className="chip">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold tracking-tight">{labels.keywords}</h4>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="chip">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>

        {/* Mobile : la pilule de sélection occupe l'emplacement du dock tant que
            la section est à l'écran. Rendue hors de la carte animée, car un
            ancêtre transformé neutraliserait son position:fixed. */}
        <AnimatePresence>
            {floatingSelector && (
                <motion.div
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 14, scale: 0.96 }}
                    transition={spring}
                    className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 sm:hidden"
                >
                    <div
                        ref={floatingScrollRef}
                        role="tablist"
                        aria-orientation="horizontal"
                        onKeyDown={handleTablistKeyDown}
                        className="nav-material flex max-w-full snap-x items-center gap-1 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {projects.map((item, index) => (
                            <button
                                key={projectSlugs[index]}
                                type="button"
                                role="tab"
                                aria-selected={index === activeIndex}
                                aria-controls="project-panel"
                                tabIndex={index === activeIndex ? 0 : -1}
                                onClick={() => select(index)}
                                className={`shrink-0 snap-center whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 active:scale-[0.98] ${
                                    index === activeIndex
                                        ? "bg-primary text-primary-foreground"
                                        : "text-foreground/75"
                                }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}

export default function Home() {
    const currentYear = new Date().getFullYear();
    const [locale, setLocale] = useState<Locale>("en");
    const [activeSection, setActiveSection] = useState("hero");
    const pillarScrollRef = useRef<HTMLDivElement | null>(null);
    const [activePillar, setActivePillar] = useState(0);

    const handlePillarScroll = () => {
        const el = pillarScrollRef.current;
        if (!el) {
            return;
        }
        const max = el.scrollWidth - el.clientWidth;
        if (max <= 0) {
            return;
        }
        setActivePillar(Math.round((el.scrollLeft / max) * (translations[locale].about.pillars.length - 1)));
    };

    const scrollToPillar = (index: number) => {
        const el = pillarScrollRef.current;
        if (!el) {
            return;
        }
        const max = el.scrollWidth - el.clientWidth;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollTo({
            left: (max * index) / (translations[locale].about.pillars.length - 1),
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    const t = translations[locale];

    const switchLocale = (nextLocale: Locale) => {
        setLocale(nextLocale);
        window.localStorage.setItem("locale", nextLocale);
        // L'URL reste partageable dans la langue affichée.
        const url = new URL(window.location.href);
        url.searchParams.set("lang", nextLocale);
        window.history.replaceState(null, "", url);
    };

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    useEffect(() => {
        // Synchronisation post-hydratation : le HTML est prérendu en anglais,
        // la langue vient d'abord de l'URL (lien partageable), sinon de la
        // préférence enregistrée.
        const urlLang = new URLSearchParams(window.location.search).get("lang");
        const initialLocale =
            urlLang === "fr" || urlLang === "en"
                ? urlLang
                : window.localStorage.getItem("locale") === "fr"
                  ? "fr"
                  : null;
        if (initialLocale) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLocale(initialLocale);
        }

        // La FAQ n'a pas d'entrée dans le dock mais doit être suivie, sans quoi
        // la pilule de projets s'attarderait sur elle en mobile.
        const sections = [...navItems.map((item) => item.id), "faq"]
            .map((id) => document.getElementById(id))
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
        <MotionConfig reducedMotion="user">
        <div className="flex min-h-screen flex-col pb-24 font-[family-name:var(--font-geist-sans)] sm:pb-0">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
            >
                {t.a11y.skipToContent}
            </a>
            {/* Navigation */}
            <div
                className={`pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 transition-[opacity,transform] duration-300 sm:bottom-auto sm:top-5 ${
                    activeSection === "projets" ? "max-sm:translate-y-3 max-sm:opacity-0" : ""
                }`}
            >
                <motion.nav
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={spring}
                    className={`pointer-events-auto ${
                        activeSection === "projets" ? "max-sm:pointer-events-none" : ""
                    }`}
                >
                    <div className="nav-material flex items-center gap-1 rounded-full p-1.5">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;
                            const label = t.nav[item.id];

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    aria-label={label}
                                    title={label}
                                    className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 active:scale-95 sm:h-12 sm:w-12 ${
                                        isActive
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active-pill"
                                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                            className="absolute inset-0 rounded-full bg-foreground/[0.06] dark:bg-white/10"
                                        />
                                    )}
                                    <Icon className="relative z-10 h-5 w-5" strokeWidth={2} />
                                    <span className="sr-only">{label}</span>
                                </a>
                            );
                        })}
                    </div>
                </motion.nav>
            </div>

            <div className="fixed right-4 top-5 z-50 flex items-center gap-2 sm:right-6">
                <div className="nav-material flex h-11 items-center rounded-full p-1" role="group" aria-label={t.a11y.switchLang}>
                    {(["en", "fr"] as const).map((lang) => (
                        <button
                            key={lang}
                            type="button"
                            onClick={() => switchLocale(lang)}
                            aria-pressed={locale === lang}
                            className={`relative h-9 rounded-full px-3 text-[13px] font-semibold uppercase transition-colors duration-200 active:scale-95 ${
                                locale === lang
                                    ? "bg-foreground/[0.08] text-foreground dark:bg-white/10"
                                    : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
                <AnimatedThemeToggler
                    aria-label={t.a11y.toggleTheme}
                    className="nav-material inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-transform duration-200 active:scale-95"
                />
                <a
                    href="https://github.com/MaelDemory"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.a11y.github}
                    title={t.a11y.github}
                    className="nav-material flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-transform duration-200 active:scale-95"
                >
                    <GithubMarkIcon className="h-5 w-5" />
                </a>
            </div>

            {/* Hero */}
            <main id="main">
            <section id="hero" className="flex min-h-screen items-center justify-center px-4 pt-24 sm:px-6 sm:pt-20">
                <div className="mx-auto w-full max-w-3xl">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center gap-8 text-center"
                    >
                        <motion.div variants={fadeUp}>
                            <Image
                                src={photoCV}
                                alt={t.hero.photoAlt}
                                width={320}
                                height={320}
                                priority
                                className="h-36 w-36 rounded-full object-cover [filter:saturate(.72)_contrast(1.02)] shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-black/10 dark:ring-white/10 sm:h-40 sm:w-40"
                            />
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <HeroName />
                            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                                {t.hero.tagline}
                            </p>
                            <p className="mx-auto mt-6 inline-flex items-center gap-2.5 rounded-full bg-primary/10 px-4 py-2 text-[13px] font-medium leading-snug text-primary sm:text-sm">
                                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                {t.hero.availability}
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex flex-col items-center gap-2.5 text-[15px] text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <GraduationCap className="h-4 w-4" />
                                {t.hero.studentAt}{" "}
                                <a
                                    className="font-medium text-primary hover:underline"
                                    href="https://imt-nord-europe.fr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    IMT Nord Europe
                                </a>
                            </span>
                            <span className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4" />
                                {t.hero.apprenticeAt}{" "}
                                <a
                                    className="font-medium text-primary hover:underline"
                                    href="https://www.arjo.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Arjo France
                                </a>
                            </span>
                            <span className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {t.hero.location}
                            </span>
                        </motion.div>

                        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
                            <a href="#contact" className="btn-filled">
                                {t.hero.ctaContact}
                            </a>
                            {CV_PDF_AVAILABLE && (
                                <a
                                    href={CV_PDF[locale].href}
                                    download={CV_PDF[locale].fileName}
                                    className="btn-tinted"
                                >
                                    <FileDown className="h-4 w-4" />
                                    {t.hero.ctaCv}
                                </a>
                            )}
                            <a
                                href="#projets"
                                className="inline-flex items-center gap-1 text-[15px] font-medium text-primary transition-opacity hover:opacity-75"
                            >
                                {t.hero.ctaProjects}
                                <ChevronRight className="h-4 w-4" />
                            </a>
                        </motion.div>

                        <motion.a
                            variants={fadeUp}
                            href="#about"
                            aria-label={t.hero.scrollLabel}
                            className="mt-6 text-muted-foreground/60 transition-colors hover:text-muted-foreground max-sm:hidden"
                        >
                            <motion.span
                                animate={{ y: [0, 6, 0] }}
                                transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                                className="block"
                            >
                                <ChevronDown className="h-5 w-5" />
                            </motion.span>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* À propos — ce que j'apporte, langues et disponibilité */}
            <Section id="about" title={t.nav.about} lede={t.sections.about.title}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="space-y-4"
                >
                    <motion.div variants={fadeUp} className="max-w-3xl space-y-5">
                        {t.about.paragraphs.map((paragraph, index) => (
                            <p key={paragraph} className="text-[17px] font-medium leading-8 text-muted-foreground">
                                <EmphasizedText text={paragraph} marks={aboutEmphasis[locale][index] ?? []} />
                            </p>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 pb-2 pt-7 sm:gap-6 sm:pt-8">
                        {t.about.stats.map((stat) => (
                            <div key={stat.label} className="border-t border-border pt-3 sm:pt-5">
                                <p className="text-[11px] leading-4 text-muted-foreground sm:text-[13px] sm:leading-5">{stat.label}</p>
                                <p className="mt-1.5 text-[1.55rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[3.4rem] sm:leading-none">{stat.value}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} className="pt-6">
                        <div
                            ref={pillarScrollRef}
                            onScroll={handlePillarScroll}
                            className="flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-sm:-mx-4 max-sm:px-4 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0"
                        >
                        {t.about.pillars.map((pillar, index) => {
                            const PillarIcon = pillarIcons[index % pillarIcons.length];
                            return (
                                <div key={pillar.title} className="surface-card w-[80vw] shrink-0 snap-center p-5 sm:w-auto sm:shrink sm:snap-align-none sm:p-7">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                                        <PillarIcon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-4 text-[15px] font-semibold tracking-tight">{pillar.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.body}</p>
                                </div>
                            );
                        })}
                        </div>
                        <CarouselDots
                            count={t.about.pillars.length}
                            active={activePillar}
                            labels={t.about.pillars.map((pillar) => pillar.title)}
                            onSelect={scrollToPillar}
                        />
                    </motion.div>

                    <motion.div variants={fadeUp} className="surface-card p-5 sm:p-8">
                        <div className="flex items-center gap-3.5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                                <CalendarClock className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">{t.about.availabilityTitle}</h3>
                        </div>

                        <p className="mt-5 max-w-2xl text-xl font-semibold leading-snug tracking-[-0.015em] sm:text-2xl">
                            {t.about.availabilityLead}
                        </p>

                        <dl className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                            {t.about.availabilityHighlights.map((item) => (
                                <div key={item.label} className="rounded-2xl bg-muted p-4">
                                    <dt className="text-[13px] text-muted-foreground">{item.label}</dt>
                                    <dd className="mt-1 text-base font-semibold leading-snug">{item.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <dl className="mt-6 space-y-2.5">
                            {t.about.availability.map((item) => (
                                <div key={item.label} className="sm:flex sm:gap-5">
                                    <dt className="shrink-0 text-[13px] leading-6 text-muted-foreground sm:w-32">{item.label}</dt>
                                    <dd className="text-[13px] leading-6 text-foreground">{item.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <div className="mt-6 flex flex-col gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
                            <p className="max-w-xl text-[13px] leading-6 text-foreground">{t.about.availabilityNote}</p>
                            <a href="#contact" className="btn-filled shrink-0">
                                {t.about.availabilityCta}
                                <ChevronRight className="h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="surface-card p-5 sm:p-8">
                        <div className="flex items-center gap-3.5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                                <Heart className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                {t.passions.title} <span className="font-normal text-muted-foreground">{t.passions.lede}</span>
                            </h3>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2.5">
                            {[...t.passions.main, ...t.passions.subs].map((passion) => (
                                <span
                                    key={passion}
                                    className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground/80"
                                >
                                    {passion}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </Section>

            {/* Parcours */}
            <Section id="parcours" title={t.nav.parcours} lede={t.sections.parcours.title}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="space-y-4"
                >
                    {t.parcours.map((item, index) => (
                        <motion.article key={index} variants={fadeUp} className="surface-card p-5 sm:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                                        {item.type === "formation" ? (
                                            <GraduationCap className="h-5 w-5" />
                                        ) : (
                                            <Briefcase className="h-5 w-5" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="eyebrow">{t.parcoursLabels[item.type]}</p>
                                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                                    </div>
                                </div>
                                <span className="shrink-0 pt-1 text-sm tabular-nums text-muted-foreground">
                                    {item.period}
                                </span>
                            </div>
                            <h3 className="mt-5 text-lg font-semibold tracking-tight sm:text-xl">{item.title}</h3>
                            <p className="mt-2 max-w-[70ch] text-sm leading-6 text-muted-foreground/80">{item.context}</p>

                            {/* Desktop : tout est visible. */}
                            <div className="max-sm:hidden">
                                <ParcoursDescription description={item.description} />
                                {item.modules && <ParcoursModules modules={item.modules} label={t.parcoursLabels.modules} />}
                            </div>

                            {/* Mobile : première puce, le reste derrière un dépliant. */}
                            <div className="sm:hidden">
                                <ParcoursDescription description={item.description.slice(0, 1)} />
                                <details className="group mt-3">
                                    <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-primary [&::-webkit-details-marker]:hidden">
                                        {t.parcoursLabels.showDetails}
                                        <ChevronDown aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
                                    </summary>
                                    <ParcoursDescription description={item.description.slice(1)} />
                                    {item.modules && <ParcoursModules modules={item.modules} label={t.parcoursLabels.modules} />}
                                </details>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </Section>

            {/* Compétences */}
            <Section id="competences" title={t.nav.competences} lede={t.sections.competences.title}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.div variants={fadeUp} className="surface-card divide-y divide-border/60 p-5 sm:p-8">
                        <div className="pb-7">
                            <SkillLevelHeading title={t.competences.core} lede={t.competences.coreLede} />
                            <ScrollRow className="mt-5 flex snap-x gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] sm:overflow-visible sm:pb-0 [&_p]:text-sm [&_img]:!h-11 [&_img]:!w-11 [&_svg]:!h-11 [&_svg]:!w-11 [&>div>div]:py-5">
                                {coreLogos.map((logo, index) => (
                                    <div key={index} className="w-24 shrink-0 snap-start sm:w-auto sm:min-w-0 sm:shrink">
                                        {logo}
                                    </div>
                                ))}
                            </ScrollRow>
                        </div>

                        <div className="py-7">
                            <SkillLevelHeading title={t.competences.working} lede={t.competences.workingLede} />
                            <div className="mt-5 space-y-4">
                                {workingGroups.map((group) => (
                                    <div key={group.id} className="sm:flex sm:items-start sm:gap-5">
                                        <p className="shrink-0 pt-2 text-[13px] text-muted-foreground sm:w-44">
                                            {t.competences.groups[group.id]}
                                        </p>
                                        <ScrollRow className="mt-2 flex flex-1 flex-nowrap gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-0 sm:flex-wrap sm:overflow-visible sm:pb-0 [&_p]:text-[11px] [&_img]:!h-7 [&_img]:!w-7 [&_svg]:!h-7 [&_svg]:!w-7 [&>div>div]:gap-2 [&>div>div]:px-2 [&>div>div]:py-2.5">
                                            {group.logos.map((logo, index) => (
                                                <div key={index} className="w-[4.75rem] shrink-0 sm:shrink">
                                                    {logo}
                                                </div>
                                            ))}
                                        </ScrollRow>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="py-7">
                            <SkillLevelHeading title={t.competences.explored} lede={t.competences.exploredLede} />
                            <ScrollRow className="mt-5 flex flex-nowrap gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0 [&_p]:text-[11px] [&_img]:!h-7 [&_img]:!w-7 [&_svg]:!h-7 [&_svg]:!w-7 [&>div>div]:gap-2 [&>div>div]:px-2 [&>div>div]:py-2.5">
                                {exploredLogos.map((logo, index) => (
                                    <div key={index} className="w-[4.75rem] shrink-0 sm:shrink">
                                        {logo}
                                    </div>
                                ))}
                            </ScrollRow>
                        </div>

                        <div className="pt-7">
                            <SkillLevelHeading title={t.competences.ai} lede={t.competences.aiLede} />
                            <div className="mt-4 flex flex-wrap gap-2">
                                {t.competences.aiSkills.map((skill) => (
                                    <span key={skill} className="chip">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Section>

            {/* Projets */}
            <Section id="projets" title={t.nav.projets} lede={t.sections.projets.title}>
                <ProjectExplorer
                    projects={t.projets}
                    labels={t.modal}
                    prevLabel={t.a11y.prevProject}
                    nextLabel={t.a11y.nextProject}
                    floatingSelector={activeSection === "projets"}
                />
            </Section>

            {/* FAQ */}
            <Section id="faq" title={t.sections.faq.title} lede={t.sections.faq.lede}>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="border-t border-border/70"
                >
                    {t.faq.map((item) => (
                        <details key={item.question} className="group border-b border-border/70">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold tracking-tight transition-colors hover:text-muted-foreground sm:py-7 sm:text-xl [&::-webkit-details-marker]:hidden">
                                {item.question}
                                <ChevronDown
                                    aria-hidden="true"
                                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180"
                                />
                            </summary>
                            <p className="max-w-2xl pb-7 text-[15px] leading-7 text-muted-foreground">{item.answer}</p>
                        </details>
                    ))}
                </motion.div>
            </Section>

            {/* Contact */}
            <Section id="contact" title={t.nav.contact} lede={t.sections.contact.title}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid gap-4 sm:grid-cols-3"
                >
                    <motion.div variants={fadeUp} className="surface-card flex items-center gap-4 p-5 text-left sm:flex-col sm:p-8 sm:text-center">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted text-muted-foreground sm:h-12 sm:w-12">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-tight">{t.contact.email.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{t.contact.email.subtitle}</p>
                        </div>
                        <a
                            href="mailto:mael.demory@gmail.com"
                            className="inline-flex items-center gap-1 text-[15px] font-medium text-primary transition-opacity hover:opacity-75 max-sm:ml-auto max-sm:shrink-0 max-sm:whitespace-nowrap"
                        >
                            {t.contact.email.cta}
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.div variants={fadeUp} className="surface-card flex items-center gap-4 p-5 text-left sm:flex-col sm:p-8 sm:text-center">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted text-muted-foreground sm:h-12 sm:w-12">
                            <GithubMarkIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-tight">{t.contact.github.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{t.contact.github.subtitle}</p>
                        </div>
                        <a
                            href="https://github.com/MaelDemory"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[15px] font-medium text-primary transition-opacity hover:opacity-75 max-sm:ml-auto max-sm:shrink-0 max-sm:whitespace-nowrap"
                        >
                            {t.contact.github.cta}
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.div variants={fadeUp} className="surface-card flex items-center gap-4 p-5 text-left sm:flex-col sm:p-8 sm:text-center">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-muted text-muted-foreground sm:h-12 sm:w-12 [&_img]:h-5 [&_img]:w-5">
                            <LinkedInLogo />
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-tight">{t.contact.linkedin.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{t.contact.linkedin.subtitle}</p>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/mael-demory/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[15px] font-medium text-primary transition-opacity hover:opacity-75 max-sm:ml-auto max-sm:shrink-0 max-sm:whitespace-nowrap"
                        >
                            {t.contact.linkedin.cta}
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                </motion.div>
                <p className="mt-6 text-center text-sm text-muted-foreground">{t.contact.note}</p>
            </Section>

            {/* Footer */}
            </main>

            <footer className="border-t border-border/60 px-4 py-8">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
                    <p>&copy; {currentYear} Maël Demory. {t.footer.rights}</p>
                    <a
                        href="https://github.com/MaelDemory/CV-NextJS-Demory-Mael"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
                    >
                        {t.footer.source}
                    </a>
                </div>
            </footer>
        </div>
        </MotionConfig>
    );
}
