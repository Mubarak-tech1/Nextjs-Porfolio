"use client"
import { motion, type Variants } from "motion/react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Link } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const introVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const leftCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    rotate: -6,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const rightCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
    rotate: 6,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const projects = [
  {
    number: "01",
    title: "Espressio Coffee",
    description:
      "A coffee-focused web experience designed to make discovering and exploring products simple and engaging.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    image: "/images/Coffee.jpg",
    code: "https://github.com/ShazamDeCoder/Espressio-Coffee",
    live: "https://espressio-coffee.vercel.app",
  },
  {
    number: "02",
    title: "Coming Soon",
    description:
      "Another thoughtful digital experience is currently taking shape.",
    technologies: ["Next.js", "TypeScript"],
    image: null,
    code: null,
    live: null,
  },
];

export default function Projects() {
  return (
    <Section id="project" className="bg-white">
      <Container>
        {/* Section intro */}
        <motion.div
          variants={introVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-3xl justify-center text-center lg:mx-auto lg:text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-(--accent) ">
            Selected Project
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl lg:text-5xl">
            Problems worth solving.
          </h2>

          <p className="mt-4 text-base  leading-7 text-(--muted) md:text-lg md:leading-8">
            A selection of digital experiences I've designed and built with
            intention.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              variants={index === 0 ? leftCardVariants : rightCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="group overflow-hidden rounded-2xl border border-(--border) ">
              {/* Project visual */}
              <div className="relative aspect-16/7 overflow-hidden bg-[#ebe8e1]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm uppercase tracking-[0.2em] text-(--muted)">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Project information */}
              <div className="p-7 md:p-8">
                <h3 className=" text-2xl font-semibold tracking-tight md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-(--muted) md:text-base md:leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.technologies.map((technology, index) => (
                    <div key={technology} className="flex items-center gap-2">
                      <span className="text-xs font-medium tracking-[0.08em] text-(--muted)">
                        {technology}
                      </span>

                      {index < project.technologies.length - 1 && (
                        <span className="text-xs text-(--muted)">+</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Links */}
                {(project.code || project.live) && (
                  <div className="mt-4 flex items-center gap-8">
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-2 font-medium transition-colors text-(--accent) hover:text-(--foreground)">
                        Code <BsGithub />
                      </a>
                    )}

                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-2  font-medium transition-colors text-(--accent) hover:text-(--foreground)">
                        Live <Link size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
