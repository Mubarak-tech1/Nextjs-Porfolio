import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) py-8">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <a
            href="#"
            className="text-lg font-semibold tracking-tight transition-colors hover:text-(--accent)">
            {"</>"}SpecialSpace
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm text-(--muted)">
            <a
              href="#work"
              className="transition-colors hover:text-(--foreground)">
              Work
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-(--foreground)">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-(--muted)">
            © {new Date().getFullYear()} SpecialSpace
          </p>
        </div>
      </Container>
    </footer>
  );
}
