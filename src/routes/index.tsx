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

      <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
        <img
          src={presentationAsset.url}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-20 md:pb-24 w-full fade-in">
          <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6 md:mb-8">
            Portfolio · Lisbon
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.02] text-stone-deep">
            Malvin
            <br />
            Chitswamatombo.
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-muted-foreground font-light max-w-xl">
            Building tools to solve daily problems.
          </p>
          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-4 md:gap-6 text-[13px]">
            <Link to="/projects" className="link-quiet border-b border-foreground/40 pb-1">
              See the work
            </Link>
            <Link to="/about" className="link-quiet text-muted-foreground">
              About →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative min-h-[55vh] md:min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          {[lisbonAsset.url, hackathon1Asset.url, hackathon2Asset.url].map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] saturate-[0.7] transition-opacity duration-[1800ms] ease-in-out"
              style={{ opacity: active === i ? 0.5 : 0 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-32">
          <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6">
            Currently
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl font-light leading-snug max-w-3xl text-stone-deep">
            Making small things that fix small problems. Sometimes they grow up.
          </p>
          <Link
            to="/projects"
            className="link-quiet inline-block mt-8 md:mt-12 text-sm border-b border-foreground/40 pb-1"
          >
            Browse projects
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
