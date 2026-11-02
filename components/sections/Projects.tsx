"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type MotionStyle,
} from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowUpRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { projects } from "@/data/data";

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const stepsAbove = total - 1 - index; // how many cards will cover this one

  // Cards underneath shrink a little and darken as newer cards cover them.
  const targetScale = 1 - stepsAbove * 0.05;
  const targetDim = Math.min(0.5, stepsAbove * 0.15);
  const range: [number, number] = [index / total, 1];

  const scale = useTransform(progress, range, [1, targetScale]);
  const dim = useTransform(progress, range, [0, targetDim]);

  return (
    <motion.article
      style={
        {
          // Where this card pins on mobile / desktop. Each card sits a bit
          // lower than the previous one so the cards underneath peek out.
          "--top-sm": `${80 + index * 12}px`,
          "--top-md": `${96 + index * 20}px`,
          scale,
          transformOrigin: "top center",
        } as  MotionStyle
      }
      className="sticky top-(--top-sm) grid overflow-hidden rounded-3xl md:top-(--top-md) md:grid-cols-[1.1fr_1fr]">
      {/* Image panel (left on desktop, top on mobile) */}
      <div className="flex items-center justify-center bg-[#f0f0f5] p-4 md:p-10">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          width={1200}
          height={525}
          sizes="(max-width: 767px) 100vw, 55vw"
          className="h-auto w-full rounded-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]"
        />
      </div>

      {/* Details panel */}
      <div className="flex flex-col justify-between gap-6 bg-[#0b0506] p-5 text-white md:gap-10 md:p-10">
        <div>
          <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/70 md:mt-4 md:text-base md:leading-7">
            {project.description}
          </p>

          {/* Hidden on mobile so the card fits on screen while it is pinned */}
          <ul className="mt-5 hidden space-y-2 text-base leading-7 text-white/70 md:block">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/70"
                />
                {feature}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm leading-6 text-white/70 md:mt-6 md:text-base md:leading-7">
            <span className="font-semibold text-white">The challenge: </span>
            {project.challenge}
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-white pb-0.5 font-medium transition-opacity hover:opacity-70">
            Visit site <ArrowUpRight size={16} />
          </a>

          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white">
            <BsGithub /> Code
          </a>
        </div>
      </div>

      {/* Dark overlay that fades in when another card covers this one */}
      <motion.div
        aria-hidden
        style={{ opacity: dim }}
        className="pointer-events-none absolute inset-0 bg-black"
      />
    </motion.article>
  );
}

export default function Projects() {
  const listRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start start", "end end"],
  });

  return (
    <Section id="project" className="bg-white">
      <Container>
        {/* Section intro */}
        <div className="max-w-3xl justify-center text-center lg:mx-auto lg:text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-(--accent)">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl lg:text-5xl">
            Problems worth solving.
          </h2>

          <p className="mt-4 text-base leading-7 text-(--muted) md:text-lg md:leading-8">
            A selection of digital experiences I&apos;ve designed and built with
            intention.
          </p>
        </div>

        {/* Projects */}
        <div ref={listRef} className="mt-10 flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}
