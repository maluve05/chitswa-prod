import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | chitswa" },
      {
        name: "description",
        content:
          "A collection of tools and experiments by Malvin Chitswamatombo.",
      },
      { property: "og:title", content: "Projects | chitswa" },
      {
        property: "og:description",
        content:
          "A collection of tools and experiments by Malvin Chitswamatombo.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

type Status = "live" | "building" | "archived";

interface Project {
  title: string;
  description: string;
  tags: string[];
  status: Status;
  href?: string;
  github?: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Move Mentor",
    description:
      "A step-by-step guide for the Erasmus+ application process. Designed to help students navigate university mobility programs without the usual administrative confusion.",
    tags: ["React", "Vite", "Student Tools"],
    status: "live",
    href: "https://move-mentor.app",
    year: "2024",
  },
  {
    title: "chitswa",
    description:
      "Personal website and project repository built with TanStack Start, React, and Tailwind.",
    tags: ["TanStack Start", "React", "Tailwind"],
    status: "live",
    href: "https://chitswa.com",
    github: "https://github.com/maluve05/chitswa-prod",
    year: "2025",
  },
  {
    title: "ChiClipboard",
    description:
      "A lightweight, ephemeral text-sharing tool. Paste text, get a shareable link — no account needed. Public pastes expire automatically.",
    tags: ["TanStack Start", "Cloudflare D1", "React"],
    status: "live",
    href: "https://tools.chitswa.com/chiclipboard",
    year: "2026",
  },
];

const statusLabel: Record<Status, string> = {
  live: "Live",
  building: "Building",
  archived: "Archived",
};

const statusDot: Record<Status, string> = {
  live: "bg-emerald-500",
  building: "bg-amber-400",
  archived: "bg-stone-400",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border-t border-border/50 pt-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Left: metadata column */}
        <div className="flex-shrink-0 space-y-3 md:w-40">
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            {project.year}
          </p>
          <span className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusDot[project.status]}`}
            />
            {statusLabel[project.status]}
          </span>
        </div>

        {/* Right: content */}
        <div className="flex-1 min-w-0 space-y-4">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-stone-deep leading-snug group-hover:opacity-75 transition-opacity duration-300">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h2>

          <p className="text-base font-light leading-relaxed text-foreground/75 max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground border border-border/60 px-2.5 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-5 text-[12px] text-muted-foreground ml-auto">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet border-b border-foreground/25 pb-0.5 hover:text-foreground transition-colors"
                >
                  Visit ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet border-b border-foreground/25 pb-0.5 hover:text-foreground transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const live = projects.filter((p) => p.status === "live");
  const wip = projects.filter((p) => p.status === "building");
  const archived = projects.filter((p) => p.status === "archived");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="max-w-4xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 fade-in">
        {/* Header */}
        <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-8">
          Projects
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-stone-deep leading-tight">
          Things I've built.
        </h1>
        <p className="mt-6 text-base md:text-lg font-light text-muted-foreground max-w-xl leading-relaxed">
          A collection of utilities, web applications, and ongoing experiments.
        </p>

        {/* Live */}
        {live.length > 0 && (
          <section className="mt-20">
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-0">
              Live
            </p>
            {live.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </section>
        )}

        {/* Building */}
        {wip.length > 0 && (
          <section className="mt-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-0">
              In progress
            </p>
            {wip.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </section>
        )}

        {/* Archived */}
        {archived.length > 0 && (
          <section className="mt-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground mb-0">
              Archived
            </p>
            {archived.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </section>
        )}

        {/* GitHub callout */}
        <div className="mt-24 border-t border-border/50 pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm font-light text-muted-foreground">
            More experiments and work-in-progress on GitHub.
          </p>
          <a
            href="https://github.com/maluve05"
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet text-[13px] border-b border-foreground/40 pb-0.5 self-start sm:self-auto"
          >
            github.com/maluve05 ↗
          </a>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
