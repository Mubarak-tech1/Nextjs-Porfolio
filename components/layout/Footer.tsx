import Container from "@/components/ui/Container";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="mt-20 bg-white border-t border-(--border) py-8">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 md:justify-between">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold ">Mubarak</h2>
            <p className="text-(--accent) text-sm mt-2">
              Building digital experiences around problems worth solving.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl text-center font-medium">Connect with me</h3>
            <div className="flex justify-center gap-6 mt-4 hover-cursor-pointer">
              <a
                href="https://twitter.com/codewithmubarak"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="/images/social/twitter.svg"
                  alt="X logo"
                  width={20}
                  height={20}
                  className="w-5 h-auto"
                />
              </a>
              <a
                href="https://linkedin.com/in/buildwithmubarak"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="/images/social/linkedin.svg"
                  alt="Linkedin logo"
                  width={20}
                  height={20}
                  className="w-5 h-auto"
                />
              </a>
              <a
                href="https://github.com/Mubarak-tech1"
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  src="/images/social/github.svg"
                  alt="Github logo"
                  width={20}
                  height={20}
                  className="w-5 h-auto"
                />
              </a>
            </div>
          </div>
          {/* Schedule  */}
          <div>
            <h3 className="text-xl font-medium">Let's talk</h3>
            <p className="text-(--accent) text-sm mt-2">
              Schedule a call with me to discuss your project.
            </p>

            <a
              href="https://calendly.com/adiomubarakadebukola2026/30min"
              target="_blank"
              rel="noopener noreferrer">
              <Button
                type="button"
                className="mt-4 bg-(--accent) text-(--foreground) hover:bg-(--foreground) hover:text-white">
                Schedule a call
              </Button>
            </a>
          </div>
        </div>
        {/* Copyright */}
        <p className="text-center mt-4 text-sm text-(--muted)">
          © {new Date().getFullYear()} Mubarak. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
