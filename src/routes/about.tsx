import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | chitswa" },
      { name: "description", content: "About chitswa and my work." },
      { property: "og:title", content: "About | chitswa" },
      { property: "og:description", content: "About chitswa and my work." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 fade-in">
        <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-8">
          About
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-stone-deep leading-tight">
          Projects and other experiments.
        </h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-base font-light leading-relaxed text-foreground/85">
          <div className="space-y-6">
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">What this is</h2>
            <p>This website is a central space to document the tools I build, write about web projects, and share my work. I keep it minimal and updated whenever I have something new to share.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">How to reach me</h2>
            <p>Feel free to reach out via email or connect with me on LinkedIn. I'm always open to talking about software development, design, and interesting tech ideas.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">What I care about</h2>
            <p>Clear, responsive interfaces, intuitive user experiences, and clean codebases. I focus on utility and solving actual user frustrations.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">What I avoid</h2>
            <p>Over-complicated tech stacks, bloated dependencies, and features built for metrics rather than actual user value.</p>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
