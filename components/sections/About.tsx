import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const principles = [
  {
    number: "01",
    title: "Understand",
    description: "Start with the problem, not the interface.",
  },
  {
    number: "02",
    title: "Think",
    description: "Consider the user, the business, and the journey.",
  },
  {
    number: "03",
    title: "Build",
    description: "Turn the thinking into clean, useful technology.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="max-w-4xl justify-center text-center lg:mx-auto lg:text-center">
          <p className="text-[16px] font-medium uppercase tracking-[0.2em] text-(--accent)">
            About Approach
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl lg:text-5xl">
            Good digital experiences start with good questions.
          </h2>

          <p className="mt-8 text-lg leading-8 text-(--muted)">
            I don't believe in building interfaces just because they look good.
            Before I write a component, I want to understand the person using
            it, the problem we're solving, and what the experience needs to
            accomplish.
          </p>
        </div>

        <div className="mt-15 grid gap-10 border-t border-(--border) pt-10 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className=" md:text-center ">
              <span className="text-sm font-medium text-(--accent)">
                {principle.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold capitalize">
                {principle.title}
              </h3>

              <p className="mx-auto mt-3 max-w-xs leading-7 text-(--muted)">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
