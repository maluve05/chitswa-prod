import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import lisbonUrl from "@/assets/lisbon-street.webp";
import presentationUrl from "@/assets/deans-challenge.jpg";
import hackathon1Url from "@/assets/hackathon-1.webp";
import hackathon2Url from "@/assets/hackathon-2.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preload", as: "image", href: presentationUrl, fetchPriority: "high" },
    ],
  }),
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

      <section className="relative min-h-[75vh] md:min-h-screen flex items-center overflow-hidden">
        <img
          src={presentationUrl}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-24 md:pt-32 pb-16 md:pb-24 w-full fade-in">
          <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6 md:mb-8">
            Portfolio · Lisbon
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-light tracking-tight leading-[1.02] text-stone-deep break-words">
            Malvin
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg lg:text-xl text-muted-foreground font-light max-w-xl">
            21 Year Old. I occassionally do something useful.
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

      <section className="relative min-h-[50vh] md:min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          {[lisbonUrl, hackathon1Url, hackathon2Url].map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] saturate-[0.7] transition-opacity duration-[1800ms] ease-in-out"
              style={{ opacity: active === i ? 0.5 : 0 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-32">
          <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-6">
            Currently
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl font-light leading-snug max-w-3xl text-stone-deep">
            Honestly just trying to make my life easier, one script at a time.
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
