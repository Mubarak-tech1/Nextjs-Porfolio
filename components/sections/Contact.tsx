import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-(--accent)">
            Let's Talk
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] md:text-5xl lg:text-6xl">
            Have a problem worth solving? Let's talk.
          </h2>

          <p className="mt-4 text-base leading-7 text-(--muted) md:text-lg md:leading-8">
            Whether you have a project in mind, an idea you're exploring, or
            simply want to start a conversation, I'd love to hear what you're
            working on.
          </p>
        </div>

        {/* Right */}
        <form className="space-y-6 items-center mt-10 max-w-xl mx-auto shadow-xl px-6 py-8 rounded-2xl border border-(--border) bg-white/50">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-bold">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="py-2 px-2 border border-(--accent) rounded-lg focus:outline-none "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold">
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="py-2 px-2 border border-(--accent) rounded-lg focus:outline-none "
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-bold">
              Tell me about your project
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What are you trying to build?"
              required
              className="py-2 px-2 border border-(--accent) rounded-lg focus:outline-none "
            />
          </div>

          <Button
            type="submit"
            className="bg-(--accent) text-(--foreground) hover:bg-(--foreground) hover:text-white">
            Send message
          </Button>
        </form>
      </Container>
    </Section>
  );
}
