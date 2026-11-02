"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import TechMarquee from "../ui/TechMarquee";

const principles = [
  {
    number: "01",
    title: "Understand",
    description: "Start with the problem, not the interface.",
  },
  {
    number: "02",
    title: "Think",
    description: "Consider the user, the business, and the journey.",
  },
  {
    number: "03",
    title: "Build",
    description: "Turn the thinking into clean, useful technology.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

// Parent: staggers its children as it scrolls into view
const stagger = (delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: delay } },
});

// Each element fades up
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// The divider line draws itself from left to right
const line: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease } },
};

// Play once, when about 30% of the block is visible
const viewport = { once: true, amount: 0.3 } as const;

export default function About() {
  return (
    // reducedMotion="user" turns off movement for people who prefer less motion
    <MotionConfig reducedMotion="user">
      <Section id="about" className="min-h-screen bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-10">
            <TechMarquee />
          </motion.div>

          {/* Intro */}
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="max-w-4xl justify-center text-center lg:mx-auto lg:text-center">
            <motion.p
              variants={fadeUp}
              className="text-[16px] font-medium uppercase tracking-[0.2em] text-(--accent)">
              About Approach
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl lg:text-5xl">
              Good digital experiences start with good questions.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg leading-8 text-(--muted)">
              I don&apos;t believe in building interfaces just because they look
              good. Before I write a component, I want to understand the person
              using it, the problem we&apos;re solving, and what the experience
              needs to accomplish.
            </motion.p>
          </motion.div>

          {/* Principles */}
          <motion.div
            variants={line}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-20 h-px origin-left bg-(--border)"
          />

          <motion.div
            variants={stagger(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-10 pt-10 md:grid-cols-3">
            {principles.map((principle) => (
              <motion.div
                key={principle.number}
                variants={fadeUp}
                className="md:text-center">
                <span className="text-sm font-medium text-(--accent)">
                  {principle.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold capitalize">
                  {principle.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs leading-7 text-(--muted)">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </MotionConfig>
  );
}
