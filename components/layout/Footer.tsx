import Container from "@/components/ui/Container";
import Image from "next/image";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-(--border) py-8">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 md:justify-between">
          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold ">Mubarak</h1>
            <p className="text-(--accent) text-sm mt-2">
              Build digital experiences around problems worth solving.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h1 className="text-xl font-medium">Connect with me</h1>
            <div className="flex gap-6 mt-2">
              <Image
                src="/images/social/twitter.svg"
                alt="My profile"
                width={20}
                height={20}
              />
              <Image
                src="/images/social/linkedin.svg"
                alt="My profile"
                width={20}
                height={20}
              />
              <Image
                src="/images/social/github.svg"
                alt="My profile"
                width={20}
                height={20}
              />
              <Image
                src="/images/social/instagram.svg"
                alt="My profile"
                width={30}
                height={30}
              />
            </div>
          </div>
          {/* Schedule  */}
          <div>
            <h1 className="text-xl font-medium">Let's talk</h1>
            <p className="text-(--accent) text-sm mt-2">
              Schedule a call with me to discuss your project.
            </p>
            <Button
              type="submit"
              className="mt-4 bg-(--accent) text-(--foreground) hover:bg-(--foreground) hover:text-white">
              Schedule a call
            </Button>
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
