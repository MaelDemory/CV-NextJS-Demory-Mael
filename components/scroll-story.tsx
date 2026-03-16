"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type ScrollStoryStackProps = {
  className?: string;
  children: React.ReactNode;
};

type ScrollStoryIntroProps = {
  className?: string;
  children: React.ReactNode;
};

type ScrollStoryItemProps = {
  className?: string;
  children: React.ReactNode;
  index?: number;
};

type MotionRevealProps = {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  once?: boolean;
};

const stackVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const introVariants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.98,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 56,
    scale: 0.985,
    filter: "blur(18px)",
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      delay: index * 0.04,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function ScrollStoryStack({ className, children }: ScrollStoryStackProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className, "will-change-transform")}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.08 }}
      variants={shouldReduceMotion ? undefined : stackVariants}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStoryIntro({ className, children }: ScrollStoryIntroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className, "will-change-transform")}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.25 }}
      variants={shouldReduceMotion ? undefined : introVariants}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStoryItem({ className, children, index = 0 }: ScrollStoryItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className, "will-change-transform")}
      variants={shouldReduceMotion ? undefined : itemVariants}
      custom={index}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.16 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MotionReveal({
  className,
  children,
  delay = 0,
  amount = 0.2,
  once = true,
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className, "will-change-transform")}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 36,
              scale: 0.99,
              filter: "blur(12px)",
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
      }
      viewport={{ once, amount }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.85,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function MotionFloat({
  className,
  children,
  delay = 0,
}: Omit<MotionRevealProps, "amount" | "once">) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -10, 0],
              scale: [1, 1.01, 1],
            }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 7,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }
      }
    >
      {children}
    </motion.div>
  );
}