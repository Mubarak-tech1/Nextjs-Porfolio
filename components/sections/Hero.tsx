import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section id="home" className=" flex min-h-screen items-center bg-gray-50">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Hero Content */}
          <div className="order-2 lg:order-1 text-left">
            <p className="mb-4 text-[20px] lg:text-[26px] font-medium text-(--muted)">
              Hello, I'm
            </p>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-6xl">
              Adio Mubarak
            </h1>

            <p className="mt-5 max-w-2xl text-[18px] lg:text-xl  font-normal leading-snug tracking-tight">
              <span className="text-(--accent)">Frontend Developer</span>{" "}
              building responsive websites and modern web applications for
              businesses and individuals.
            </p>

            {/* Call-to-Action Links */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="#project"
                className="inline-flex items-center justify-center rounded-md bg-(--foreground) px-7 py-4 text-[15px] font-medium text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)">
                View My Work
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-(--border) bg-white px-7 py-4 text-[15px] font-medium transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)">
                Let's Talk
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="text-(--accent)"
                />
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 mx-auto w-full max-w-sm sm:max-w-md lg:order-2 lg:ml-auto ">
            <div className="mt-5 lg:absolute lg:top-[-280]">
              <Image
                src="/images/mubarak1.png"
                alt="Portrait of Adio Mubarak, frontend developer"
                width={1086}
                height={1448}
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 448px, 40vw"
                className="h-auto w-full object-cover "
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
