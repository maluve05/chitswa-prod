import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import lisbonAsset from "@/assets/lisbon-street.jpg.asset.json";
import presentationAsset from "@/assets/presentation.jpg.asset.json";
import hackathon1Asset from "@/assets/hackathon-1.jpg.asset.json";
import hackathon2Asset from "@/assets/hackathon-2.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={presentationAsset.url}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-multiply"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.985 0.008 80 / 0.75) 0%, oklch(0.985 0.008 80 / 0.6) 50%, oklch(0.985 0.008 80) 100%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-24 w-full fade-in">
          <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-8">
            Portfolio · Lisbon
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.02] text-stone-deep">
            Malvin
            <br />
            Chitswamatombo.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground font-light max-w-xl">
            Building tools to solve daily problems.
          </p>
          <div className="mt-14 flex items-center gap-6 text-[13px]">
            <Link to="/projects" className="link-quiet border-b border-foreground/40 pb-1">
              See the work
            </Link>
            <Link to="/about" className="link-quiet text-muted-foreground">
              About →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {[lisbonAsset.url, hackathon1Asset.url, hackathon2Asset.url].map((src, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden bg-sand">
              <img
                src={src}
                alt=""
                aria-hidden
                className="w-full h-full object-cover opacity-70 grayscale-[15%] transition duration-700 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground max-w-md font-light">
          Notes from the road — hackathons, presentations, and the small streets of Lisbon that keep the ideas warm.
        </p>
      </section>

      <section className="mt-16 bg-stone-deep text-background">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-32">
          <p className="text-[11px] tracking-[0.25em] uppercase opacity-60 mb-6">
            Currently
          </p>
          <p className="text-2xl md:text-4xl font-light leading-snug max-w-3xl">
            Making small things that fix small problems. Sometimes they grow up.
          </p>
          <Link
            to="/projects"
            className="link-quiet inline-block mt-12 text-sm border-b border-background/40 pb-1"
          >
            Browse projects
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
