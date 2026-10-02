import { useEffect, useState } from "react";
import { navLinks } from "../data/content";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape, and lock page scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-lg font-medium text-fg transition hover:text-accent"
          aria-label="JV Carpena, back to top"
        >
          <span className="text-accent">&lt;</span>JV Carpena
          <span className="text-accent"> /&gt;</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex min-h-11 items-center rounded-full px-4 font-medium text-muted transition hover:bg-surface-2 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary ml-2 !min-h-11">
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="icon-btn md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

    </header>
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-bg md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-2 p-5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center rounded-xl px-4 font-heading text-2xl font-semibold text-fg hover:bg-surface-2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;
