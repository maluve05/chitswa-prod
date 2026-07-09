import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 h-14">
        <Link to="/" className="link-quiet text-[15px] tracking-tight font-medium">
          chitswa
        </Link>
        <div className="flex items-center gap-5 sm:gap-6 md:gap-8 text-[13px] text-muted-foreground">
          <Link to="/projects" className="link-quiet" activeProps={{ className: "text-foreground" }}>
            Projects
          </Link>
          <Link to="/bio" className="link-quiet" activeProps={{ className: "text-foreground" }}>
            Bio
          </Link>
          <Link to="/about" className="link-quiet" activeProps={{ className: "text-foreground" }}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
