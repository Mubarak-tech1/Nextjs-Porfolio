import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ArrowRight, Dot } from "lucide-react";
import TechMarquee from "@/components/ui/TechMarquee";

export default function Hero() {
  return (
    <Section id="home" className="flex min-h-screen items-center pt-30 lg:pt-30">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 mb-20">
          {/* Profile */}
          <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:ml-auto">
            <div className="relative">
              <div className="overflow-hidden rounded-b-full border border-black/5 bg-white/50 shadow-xl">
                <Image
                  src="/images/mubarak.png"
                  alt="Mubarak"
                  width={1000}
                  height={1000}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-center">
                <h2 className="text-xl font-medium tracking-tight rounded-full border border-(--border) bg-white/70 px-8 py-2.5 transition-all hover:-translate-y-0.5 hover:bg-white">
                  Hi, I'm Mubarak
                </h2>
              </div>
            </div>
          </div>

          {/* Hero Copy */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-[50px] lg:text-[65px]">
              I build thoughtful digital experiences around problems <br />
              <span className="text-(--accent)">worth solving.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-(--muted) md:text-xl">
              From landing pages to web applications, I combine frontend
              engineering, UX thinking, and conversion-focused strategy to turn
              ideas into experiences that are clear, useful, and built with
              purpose.
            </p>

            <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              <Link
                href="#project"
                className="flex items-center justify-center rounded-full bg-(--foreground) px-6 py-3.5 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg">
                View My Work
              </Link>

              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-full border border-(--border) bg-white/70 px-6 py-3.5 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:bg-white">
                Let's Talk <ArrowRight className="text-(--accent)" />
              </Link>
            </div>
          </div>
        </div>
        
        <TechMarquee />
      </Container>
    </Section>
  );
}
