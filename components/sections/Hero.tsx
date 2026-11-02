"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const ease = [0.22, 1, 0.36, 1] as const;

// Parent: staggers its children one after another
const content: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// Each line of text fades up
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// Portrait fades in while sliding from the right
const portrait: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease, delay: 0.2 },
  },
};

export default function Hero() {
  return (
    // reducedMotion="user" turns off movement for people who prefer less motion
    <MotionConfig reducedMotion="user">
      <Section id="home" className="flex min-h-screen  items-center bg-gray-50">
        <Container className="">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Hero Content */}
            <motion.div
              variants={content}
              initial="hidden"
              animate="show"
              className="order-2 text-left lg:order-1">
              <motion.p
                variants={item}
                className="mb-4 text-[20px] font-medium text-(--muted) lg:text-[26px]">
                Hello, I&apos;m
              </motion.p>

              <motion.h1
                variants={item}
                className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-6xl">
                Adio Mubarak
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 max-w-2xl text-[18px] font-normal leading-snug tracking-tight lg:text-xl">
                <span className="text-(--accent)">Frontend Developer</span>{" "}
                building fast, responsive websites and web apps with React and
                Next.js for startups and business owners.
              </motion.p>

              {/* Call-to-Action Links */}
              <motion.div
                variants={item}
                className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#project"
                  className="inline-flex items-center justify-center rounded-md bg-(--foreground) px-7 py-4 text-[15px] font-medium text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)">
                  View My Work
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-(--border) bg-white px-7 py-4 text-[15px] font-medium transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)">
                  Let&apos;s Talk
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="text-(--accent)"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <div className="relative order-1 mx-auto w-full max-w-sm sm:max-w-md lg:order-2 lg:ml-auto">
              <motion.div
                variants={portrait}
                initial="hidden"
                animate="show"
                className="mt-5 lg:absolute lg:top-[-280px]">
                <Image
                  src="/images/mubarak1.png"
                  alt="Portrait of Adio Mubarak, frontend developer"
                  width={1086}
                  height={1448}
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 448px, 40vw"
                  className="h-auto w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </MotionConfig>
  );
}
