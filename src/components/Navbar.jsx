import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Exhibitions", href: "#exhibitions", inactive: true },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
        const line = window.innerHeight * 0.4; // a "reading line" 40% down the screen
        let current = "";
        for (const link of links) {
            const el = document.querySelector(link.href);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= line && rect.bottom > line) current = link.href;
            }
        }
        setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/75 backdrop-blur-2xl border-b border-white/[0.08]">
      <div className="h-20 w-full px-margin lg:px-margin-desktop flex items-center justify-between">
        <a href="#" className="flex items-center gap-space-sm">
            <img
              src="/images/logo.png"
              alt="Noir & Light Studio logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight hidden xl:inline-block">
                Noir &amp; Light
            </span>
        </a>

        <nav className="hidden lg:flex items-center gap-space-md xl:gap-space-lg">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.inactive ? (e) => e.preventDefault() : undefined}
              aria-disabled={link.inactive ? "true" : undefined}
              tabIndex={link.inactive ? -1 : undefined}
              className={`font-label-caps text-label-caps uppercase py-1 border-b transition-colors ${
                link.inactive
                  ? "text-on-surface-variant border-transparent cursor-default"
                  : active === link.href
                  ? "text-primary border-primary"
                  : "text-on-surface-variant border-transparent hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <a
            href="#contact"
            className="px-space-md py-space-xs rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md font-label-caps text-label-caps uppercase text-on-surface hover:border-primary hover:text-primary transition-all duration-300"
          >
            Inquire
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <button
            className="lg:hidden text-on-surface flex items-center"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/[0.08] px-margin py-space-md flex flex-col gap-space-md">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.inactive ? (e) => e.preventDefault() : () => setOpen(false)}
              aria-disabled={link.inactive ? "true" : undefined}
              className={`font-label-caps text-label-caps uppercase transition-colors ${
                link.inactive
                  ? "text-on-surface-variant cursor-default"
                  : active === link.href 
                  ? "text-primary" 
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}