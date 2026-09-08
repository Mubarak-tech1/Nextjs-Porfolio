import Image from "next/image";


const technologies = [
  {
    name: "React",
    image: "/images/technologies/react.svg",
  },
  {
    name: "Next.js",
    image: "/images/technologies/nextjs.svg",
  },
  {
    name: "TypeScript",
    image: "/images/technologies/typescript.svg",
  },
  {
    name: "JavaScript",
    image: "/images/technologies/js.svg",
  },
  {
    name: "Tailwind CSS",
    image: "/images/technologies/tailwindcss.svg"     ,
  },
  {
    name: "HTML",
    image: "/images/technologies/html5.svg",
  },
  {
    name: "CSS",
    image: "/images/technologies/css3.svg",
  },
  {
    name: "Git",
    image: "/images/technologies/git.svg",
  },
];

export default function TechMarquee() {
  const items = [...technologies, ...technologies];

  return (
    <div
      className="w-full overflow-hidden border-y border-(--border) bg-white/30 py-4 backdrop-blur-sm"
      aria-label="Technologies I work with">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((technology, index) => (
          <div
            key={`${technology.name}-${index}`}
            className="flex items-center gap-3 px-6 whitespace-nowrap">
            <Image
              src={technology.image}
              alt={technology.name} 
              width={20}
              height={20} 
              className="h-5 w-5 object-contain"
              aria-hidden="true"
            />

            <span className="text-sm font-medium tracking-wide text-(--muted)">
              {technology.name}
            </span>

            <span className="ml-3 text-xs text-(--accent)" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
