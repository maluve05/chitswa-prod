export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[12px] text-muted-foreground">
        <div className="tracking-wide uppercase">Connect</div>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <a
            href="https://www.linkedin.com/in/malvin-chitswamatombo-861b06207?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/maluve.05"
            target="_blank"
            rel="noreferrer"
            className="link-quiet"
          >
            Instagram
          </a>
          <a href="mailto:malvin@chitswa.com" className="link-quiet">
            malvin@chitswa.com
          </a>
        </div>
        <div className="tracking-wide">© {new Date().getFullYear()} Chitswa</div>
      </div>
    </footer>
  );
}
