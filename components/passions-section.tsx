"use client";

import { motion } from "framer-motion";

import { translations, type Locale } from "@/app/translations";

const spring = { type: "spring", duration: 0.7, bounce: 0 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: spring },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function PassionsSection({ locale }: { locale: Locale }) {
  const t = translations[locale].passions;

  return (
    <section id="passions" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-[-0.022em] sm:text-[2.6rem]"
        >
          {t.title} <span className="text-muted-foreground">{t.lede}</span>
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 sm:mt-12"
        >
          <motion.div variants={fadeUp} className="surface-card space-y-4 p-6 sm:p-8">
            <div className="flex flex-wrap gap-2.5">
              {t.main.map((passion) => (
                <span
                  key={passion}
                  className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  {passion}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {t.subs.map((subPassion) => (
                <span
                  key={subPassion}
                  className="inline-flex items-center rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  {subPassion}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
