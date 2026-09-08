"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/70">
        <span className="text-lg">{isOpen ? <X /> : <Menu />}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-3 rounded-3xl border border-black/5 bg-white/95 p-6 shadow-lg backdrop-blur-md">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium">
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-(--foreground) px-5 py-3 text-center text-sm font-medium text-white">
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
