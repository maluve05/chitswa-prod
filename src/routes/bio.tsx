import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";


export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Bio — chitswa" },
      { name: "description", content: "A short bio of Malvin Chitswamatombo." },
      { property: "og:title", content: "Bio — chitswa" },
      { property: "og:description", content: "A short bio of Malvin Chitswamatombo." },
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
            I build small software that quietly makes days easier. Most of it starts as a
            frustration — a form I hate filling out, a workout I keep skipping, a public
            dataset nobody reads.
          </p>
          <p>
            I live between Lisbon and the internet. I like early mornings, long walks,
            hackathons that end at sunrise, and code that survives its first user.
          </p>
          <p>
            If any of this resonates — or if you have a problem worth solving — my inbox
            is open.
          </p>
        </div>

      </div>
      <SiteFooter />
    </div>
  );
}
