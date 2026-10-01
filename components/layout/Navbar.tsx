import Link from "next/link";
import { navigation } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import { ArrowRight, Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-md">
        <Link
          href="/"
          className="ml-5 text-xl items-center gap-2 font-semibold tracking-tight">
          <span>Mubarak</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:mx-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[17px] text-(--muted) transition-colors hover:text-(--foreground)">
              {item.label}
            </Link>
          ))}

          {/* <Link
            href="#contact"
            className="rounded-full flex items-center gap-2 bg-(--foreground) px-5 py-2.5 text-[15px] font-medium text-white transition-transform hover:-translate-y-0.5">
            Let's Talk <ArrowRight className="text-(--accent)" />
          </Link> */}
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}
