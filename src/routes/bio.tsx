import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";


export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Bio | chitswa" },
      { name: "description", content: "About Malvin Chitswamatombo." },
      { property: "og:title", content: "Bio | chitswa" },
      { property: "og:description", content: "About Malvin Chitswamatombo." },
    ],
    links: [{ rel: "canonical", href: "/bio" }],
  }),
  component: Bio,
});

function Bio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 fade-in">
        <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-8">
          Bio
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-stone-deep leading-tight">
          Malvin Chitswamatombo.
        </h1>

        <div className="mt-16 space-y-8 text-lg font-light leading-relaxed text-foreground/85">
          <p>
            I build software to solve everyday frustrations. Most of my projects start
            because a tool I need doesn't exist, a workflow is too slow, or some useful
            public data is buried and hard to access.
          </p>
          <p>
            Currently based in Lisbon, still learning so i do a little bit of everything right now.
          </p>
          <p>
            If you want to collaborate on a project or share an interesting problem, or just want to say hi,
            hit me up <a href="mailto:malvin@chitswa.com" className="link-quiet border-b border-foreground/40 pb-0.5 hover:text-foreground transition-colors">malvin@chitswa.com</a>.
          </p>
        </div>

      </div>
      <SiteFooter />
    </div>
  );
}
