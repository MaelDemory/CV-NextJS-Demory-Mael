"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

type Passion = {
  category: string;
  title: string;
  description: string;
  tags: string[];
};

type SubPassion = {
  title: string;
  description: string;
};

const passions: Passion[] = [
  {
    category: "Competition",
    title: "Formule 1 🏎️",
    description:
      "Je suis un pur passionné de Formule 1, que ce soit pour son aspect technique, humain ou sportif. Il s'agit d'un univers fascinant où le dépassement de soi, les innovations constantes et la quête de la performance se mêlent pour créer l'un des sports les plus exigeants et extrêmes au monde.",
    tags: ["Sport", "Stratégie", "Ingénierie", "Technologie", "Technique"],
  },
  {
    category: "Innovation",
    title: "Technologie 🚀",
    description:
      "Étant dans le monde de l'IT depuis ma plus tendre enfance, j'ai développé une passion profonde pour la technologie. J'aime suivre les dernières actualités technologiques, notamment en ce qui concerne le hardware, le software, l'intelligence artificielle, etc. Nous vivons dans un monde en perpétuelle évolution technologique. Il est important de rester à jour et de comprendre le fonctionnement des nouvelles technologies pour pouvoir les utiliser de manière efficace et responsable.",
    tags: ["Innovation", "Programmation", "Intelligence Artificielle", "Veille technologique", "Hardware", "Software"],
  },
  {
    category: "Automobile",
    title: "Automobile 🚗",
    description:
      "En plus de la Formule 1, j'ai une passion pour la course et l'automobile en général. En particulier pour les voitures sportives de route : j'aime le design, la sonorité, l'histoire et les technologies qu'il peut y avoir derrière un modèle. ",
    tags: ["Course", "Design", "Performance", "Technologie"],
  },
];

const subPassions: SubPassion[] = [
  {
    title: "Mode 👟",
    description:
      "J'aime suivre les dernières tendances sneakers et découvrir l'histoire derrière chaque modèle. La mode me permet d'explorer ma créativité.",
  },
  {
    title: "Lego 🧱",
    description:
      "Construire des Lego est une passion qui stimule ma créativité et ma patience.",
  },
  {
    title: "Star Wars 🌌",
    description:
      "L'univers de Star Wars m'a toujours fasciné par sa richesse narrative, ses personnages emblématiques et son impact culturel.",
  },
  {
    title: "Jeux vidéo 🎮",
    description:
      "Les jeux vidéo constituent une passion qui me permet de m'évader et de m'immerger dans des univers fascinants.",
  },
  {
    title: "Voyages ✈️",
    description:
      "J'aime découvrir de nouvelles cultures, contempler des paysages variés et vivre des expériences uniques à travers mes voyages.",
  },
  {
    title: "Photo 📸",
    description:
      "J'aime capturer des moments uniques et explorer la composition, la lumière et les couleurs à travers la photographie.",
  },
];

export function PassionsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 72]);

  return (
    <section ref={sectionRef} id="passions" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:justify-center lg:gap-14">
        <motion.div className="h-fit lg:sticky lg:top-28 lg:self-start" style={{ y: titleY }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center text-3xl font-bold sm:text-4xl"
          >
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Passions
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="min-w-0 space-y-6"
        >
          {passions.map((passion) => (
            <motion.div key={passion.title} variants={fadeUp}>
              <Card className="group editorial-card editorial-card-interactive overflow-hidden p-8 hover:border-[#6366F1]/20 dark:hover:border-violet-400/30">
                <div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#6366F1]/20 bg-[#6366F1]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F46E5] dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-200">
                    {passion.category}
                  </span>
                  <CardTitle className="mt-5 text-2xl font-bold transition-colors group-hover:text-[#4F46E5] dark:group-hover:text-violet-300 sm:text-3xl">{passion.title}</CardTitle>
                  <div className="editorial-divider mt-5" />
                  <CardDescription className="mt-5 max-w-2xl text-sm leading-7 sm:text-base">
                    {passion.description}
                  </CardDescription>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {passion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          <motion.div variants={fadeUp} className="space-y-5 pt-2">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold sm:text-2xl">Centres d'intérêt complémentaires</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {subPassions.map((subPassion) => (
                <motion.div key={subPassion.title} variants={fadeUp}>
                  <Card className="group editorial-card editorial-card-interactive h-full p-5 hover:border-[#6366F1]/20 dark:hover:border-violet-400/30">
                    <div>
                      <p className="editorial-kicker">Centre d'interet</p>
                      <CardTitle className="mt-3 text-lg font-semibold transition-colors group-hover:text-[#4F46E5] dark:group-hover:text-violet-300">{subPassion.title}</CardTitle>
                      <div className="editorial-divider mt-4" />
                      <CardDescription className="mt-4 text-sm leading-6">
                        {subPassion.description}
                      </CardDescription>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}