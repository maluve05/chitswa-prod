import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — chitswa" },
      { name: "description", content: "About chitswa — a small studio of one." },
      { property: "og:title", content: "About — chitswa" },
      { property: "og:description", content: "About chitswa — a small studio of one." },
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
          A quiet corner of the internet.
        </h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-base font-light leading-relaxed text-foreground/85">
          <div className="space-y-6">
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">What this is</h2>
            <p>chitswa.com is a project hub — a place to keep the things I make, the talks I give, and the occasional stray thought. No newsletter. No analytics theatre.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">How to reach me</h2>
            <p>Email is best. LinkedIn if we haven't met yet. Instagram if you want to see what the sunlight looks like from here.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">What I care about</h2>
            <p>Software that respects your time. Cities you can walk. Coffee that tastes like something. Problems small enough to actually finish.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">What I'm avoiding</h2>
            <p>Buzzwords, dashboards nobody opens, and the pressure to have an opinion on every model release.</p>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
