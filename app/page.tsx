"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import photoCV from "@/assets/images/photo_cv.png";
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
import { CV_PDF_AVAILABLE } from "@/app/site";
import {
    BootstrapLogo,
    AngularLogo,
    DockerLogo,
    FlaskLogo,
    FlutterLogo,
    GitLogo,
    GithubLogo,
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
    CalendarClock,
    ChevronDown,
    ChevronRight,
    FileDown,
    FolderOpen,
    GraduationCap,
    Heart,
    House,
    Mail,
    MapPin,
    UserRound,
    Users,
    Wrench,
    X,
} from "lucide-react";
import { PassionsSection } from "@/components/passions-section";

const spring = { type: "spring", duration: 0.7, bounce: 0 };

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: spring },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

function ParcoursDescription({ description }: { description: string[] }) {
    return (
        <ul className="mt-4 space-y-2.5 text-sm leading-7 text-muted-foreground">
            {description.map((item) => (
                <li key={item} className="relative pl-5">
                    <span className="absolute left-0 top-[0.8rem] h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

const navItems = [
    { href: "#hero", icon: House, id: "hero" },
    { href: "#about", icon: UserRound, id: "about" },
    { href: "#parcours", icon: BriefcaseBusiness, id: "parcours" },
    { href: "#competences", icon: Wrench, id: "competences" },
    { href: "#projets", icon: FolderOpen, id: "projets" },
    { href: "#passions", icon: Heart, id: "passions" },
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
    <GithubLogo key="github" />,
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
                                <span className="font-bold text-primary">.</span>
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
        <section id={id} className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
            <div className="mx-auto w-full max-w-5xl">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.022em] sm:text-[2.6rem]"
                >
                    {title} <span className="text-muted-foreground">{lede}</span>
                </motion.h2>
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

function ProjectModal({
    project,
    labels,
    onClose,
}: {
    project: Project | null;
    labels: (typeof translations)[Locale]["modal"];
    onClose: () => void;
}) {
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const previouslyFocusedElement = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!project) {
            return;
        }

        previouslyFocusedElement.current = document.activeElement as HTMLElement | null;
        const frame = requestAnimationFrame(() => dialogRef.current?.focus());

        return () => {
            cancelAnimationFrame(frame);
            previouslyFocusedElement.current?.focus();
        };
    }, [project]);

    const trapTabKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== "Tab" || !dialogRef.current) {
            return;
        }

        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusables.length === 0) {
            return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;

        if (event.shiftKey && (active === first || active === dialogRef.current)) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
        }
    };

    return (
        <AnimatePresence>
            {project ? (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed inset-0 z-[70] flex items-end justify-center bg-black/40 px-0 backdrop-blur-sm sm:items-center sm:px-6"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 48, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 32, scale: 0.97 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        aria-describedby="project-modal-description"
                        ref={dialogRef}
                        tabIndex={-1}
                        onKeyDown={trapTabKey}
                        onClick={(event) => event.stopPropagation()}
                        className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden bg-card text-left shadow-[0_30px_90px_rgba(0,0,0,0.3)] focus:outline-none max-sm:rounded-t-[1.75rem] sm:my-8 sm:rounded-[1.75rem]"
                    >
                        <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-3 sm:hidden">
                            <span className="h-1.5 w-12 rounded-full bg-foreground/15" />
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute right-5 top-5 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-[background-color,color,transform] duration-200 hover:text-foreground active:scale-90"
                            aria-label={labels.close}
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="overflow-y-auto px-6 py-10 sm:px-10 sm:py-12">
                            <p className="eyebrow">{project.eyebrow}</p>
                            <h3
                                id="project-modal-title"
                                className="mt-2 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-[-0.022em] sm:text-4xl"
                            >
                                {project.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {project.year} · {project.status} · {project.role}
                            </p>
                            <p id="project-modal-description" className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground">
                                {project.description}
                            </p>

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
                                    <ul className="mt-3 space-y-2.5 text-sm leading-7 text-muted-foreground">
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
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}

export default function Home() {
    const currentYear = new Date().getFullYear();
    const [locale, setLocale] = useState<Locale>("en");
    const [activeSection, setActiveSection] = useState("hero");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const t = translations[locale];

    const switchLocale = (nextLocale: Locale) => {
        setLocale(nextLocale);
        window.localStorage.setItem("locale", nextLocale);
        setSelectedProject(null);
    };

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    useEffect(() => {
        if (window.localStorage.getItem("locale") === "fr") {
            // Synchronisation post-hydratation : le HTML est prérendu en anglais,
            // la préférence de langue n'est connue que côté client.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLocale("fr");
        }

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
        <MotionConfig reducedMotion="user">
        <div className="flex min-h-screen flex-col pb-24 font-[family-name:var(--font-geist-sans)] sm:pb-0">
            {/* Navigation */}
            <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 sm:bottom-auto sm:top-5">
                <motion.nav
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={spring}
                    className="pointer-events-auto"
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
                                width={180}
                                height={180}
                                priority
                                className="h-36 w-36 rounded-full object-cover shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-1 ring-black/5 dark:ring-white/10 sm:h-40 sm:w-40"
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
                                    href="/cv-mael-demory.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                            className="mt-6 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
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
            <Section id="about" title={t.sections.about.title} lede={t.sections.about.lede}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="space-y-4"
                >
                    <motion.div variants={fadeUp} className="max-w-3xl space-y-4">
                        {t.about.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-[15px] leading-7 text-muted-foreground">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} className="grid gap-4 pt-6 sm:grid-cols-2">
                        {t.about.pillars.map((pillar) => (
                            <div key={pillar.title} className="surface-card p-6 sm:p-7">
                                <h3 className="text-[15px] font-semibold tracking-tight">{pillar.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.body}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} className="surface-card p-6 sm:p-7">
                        <div className="mb-5 flex items-center gap-3.5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                                <Users className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-semibold tracking-tight">{t.about.workStyleTitle}</h3>
                        </div>
                        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                            {t.about.workStyle.map((item) => (
                                <div key={item.title}>
                                    <h4 className="text-sm font-semibold tracking-tight">{item.title}</h4>
                                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} className="surface-card p-6 sm:p-8">
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
                </motion.div>
            </Section>

            {/* Parcours */}
            <Section id="parcours" title={t.sections.parcours.title} lede={t.sections.parcours.lede}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="space-y-4"
                >
                    {t.parcours.map((item, index) => (
                        <motion.article key={index} variants={fadeUp} className="surface-card p-6 sm:p-8">
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
                            <p className="mt-2 text-sm leading-6 text-muted-foreground/80">{item.context}</p>
                            <ParcoursDescription description={item.description} />
                            {item.modules && (
                                <div className="mt-6 border-t border-border/60 pt-5">
                                    <p className="eyebrow">{t.parcoursLabels.modules}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {item.modules.map((module) => (
                                            <span key={module} className="chip">
                                                {module}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.article>
                    ))}
                </motion.div>
            </Section>

            {/* Compétences */}
            <Section id="competences" title={t.sections.competences.title} lede={t.sections.competences.lede}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <motion.div variants={fadeUp} className="surface-card divide-y divide-border/60 p-6 sm:p-8">
                        <div className="pb-7">
                            <SkillLevelHeading title={t.competences.core} lede={t.competences.coreLede} />
                            <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] gap-2.5 [&_h3]:text-sm [&_img]:!h-11 [&_img]:!w-11 [&_svg]:!h-11 [&_svg]:!w-11 [&>div>div]:py-5">
                                {coreLogos.map((logo, index) => (
                                    <div key={index} className="min-w-0">
                                        {logo}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="py-7">
                            <SkillLevelHeading title={t.competences.working} lede={t.competences.workingLede} />
                            <div className="mt-5 space-y-4">
                                {workingGroups.map((group) => (
                                    <div key={group.id} className="sm:flex sm:items-start sm:gap-5">
                                        <p className="shrink-0 pt-2 text-[13px] text-muted-foreground sm:w-44">
                                            {t.competences.groups[group.id]}
                                        </p>
                                        <div className="mt-2 flex flex-1 flex-wrap gap-2 sm:mt-0 [&_h3]:text-[11px] [&_img]:!h-7 [&_img]:!w-7 [&_svg]:!h-7 [&_svg]:!w-7 [&>div>div]:gap-2 [&>div>div]:px-2 [&>div>div]:py-2.5">
                                            {group.logos.map((logo, index) => (
                                                <div key={index} className="w-[4.75rem]">
                                                    {logo}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="py-7">
                            <SkillLevelHeading title={t.competences.explored} lede={t.competences.exploredLede} />
                            <div className="mt-5 flex flex-wrap gap-2 [&_h3]:text-[11px] [&_img]:!h-7 [&_img]:!w-7 [&_svg]:!h-7 [&_svg]:!w-7 [&>div>div]:gap-2 [&>div>div]:px-2 [&>div>div]:py-2.5">
                                {exploredLogos.map((logo, index) => (
                                    <div key={index} className="w-[4.75rem]">
                                        {logo}
                                    </div>
                                ))}
                            </div>
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
            <Section id="projets" title={t.sections.projets.title} lede={t.sections.projets.lede}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2"
                >
                    {t.projets.map((projet) => (
                        <motion.button
                            key={projet.title}
                            type="button"
                            onClick={() => setSelectedProject(projet)}
                            variants={fadeUp}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            className="surface-card surface-card-interactive flex flex-col justify-between p-6 text-left sm:p-8"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-4">
                                    <p className="eyebrow">{projet.eyebrow}</p>
                                    <span className="shrink-0 text-sm tabular-nums text-muted-foreground">{projet.year}</span>
                                </div>
                                <h3 className="mt-2 text-xl font-semibold tracking-tight">{projet.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">{projet.description}</p>
                            </div>

                            <div className="mt-6 space-y-5">
                                <div className="flex flex-wrap gap-2">
                                    {projet.tags.slice(0, 4).map((tag) => (
                                        <span key={tag} className="chip">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="inline-flex items-center gap-1 text-[15px] font-medium text-primary">
                                    {t.projectCardCta}
                                    <ChevronRight className="h-4 w-4" />
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </motion.div>
            </Section>

            <ProjectModal project={selectedProject} labels={t.modal} onClose={() => setSelectedProject(null)} />

            {/* Passions */}
            <PassionsSection locale={locale} />

            {/* Contact */}
            <Section id="contact" title={t.sections.contact.title} lede={t.sections.contact.lede}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid gap-4 sm:grid-cols-3"
                >
                    <motion.div variants={fadeUp} className="surface-card flex flex-col items-center gap-4 p-8 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                            <Mail className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-tight">{t.contact.email.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{t.contact.email.subtitle}</p>
                        </div>
                        <a
                            href="mailto:mael.demory@gmail.com"
                            className="inline-flex items-center gap-1 text-[15px] font-medium text-primary transition-opacity hover:opacity-75"
                        >
                            {t.contact.email.cta}
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.div variants={fadeUp} className="surface-card flex flex-col items-center gap-4 p-8 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
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
                            className="inline-flex items-center gap-1 text-[15px] font-medium text-primary transition-opacity hover:opacity-75"
                        >
                            {t.contact.github.cta}
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.div variants={fadeUp} className="surface-card flex flex-col items-center gap-4 p-8 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground [&_img]:h-5 [&_img]:w-5">
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
                            className="inline-flex items-center gap-1 text-[15px] font-medium text-primary transition-opacity hover:opacity-75"
                        >
                            {t.contact.linkedin.cta}
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </motion.div>
                </motion.div>
                <p className="mt-6 text-center text-sm text-muted-foreground">{t.contact.note}</p>
            </Section>

            {/* Footer */}
            <footer className="border-t border-border/60 px-4 py-8">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
                    <p>&copy; {currentYear} Maël Demory. {t.footer.rights}</p>
                    <a
                        href="https://github.com/MaelDemory/CV-NextJS-Demory-Mael.git"
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
