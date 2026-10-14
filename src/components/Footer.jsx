import { useState } from "react";

const ignore = (e) => e.preventDefault(); // placeholder links do nothing for now

const portals = ["Instagram", "Artsy Archive", "Behance Gallery", "Foundation Web3"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleJoin(e) {
    e.preventDefault();
    setJoined(true);
    setTimeout(() => {
      setJoined(false);
      setEmail("");
    }, 3000);
  }

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/[0.06] pt-space-xl pb-space-lg">
      <div className="w-full px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop mb-space-xl">
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <img
                src="/images/logo.png"
                alt="Noir & Light Studio logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-headline-sm text-headline-sm text-on-surface">Noir &amp; Light</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-md">
              Fine art photography studio crafting bespoke limited-edition prints and museum-grade
              archival monographs.
            </p>
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-label-caps uppercase text-outline">Studio Locations</span>
              <span className="font-body-md text-body-md text-on-surface">Zürich • Paris</span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <span className="font-label-caps text-label-caps uppercase text-outline mb-space-sm">
              Archival Portals
            </span>
            <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
              {portals.map((name) => (
                <li key={name}>
                  <a href="#" onClick={ignore} className="hover:text-primary transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="font-label-caps text-label-caps uppercase text-outline mb-space-xs">
              The Gazette
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
              Receive curated seasonal monographs, private exhibition invitations, and catalogue previews.
            </p>
            <form
              onSubmit={handleJoin}
              className="flex items-stretch border border-white/[0.12] focus-within:border-primary transition-colors bg-white/[0.02]"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="collector@domain.com"
                className="w-full bg-transparent px-space-sm py-space-xs text-on-surface placeholder:text-outline font-body-md text-body-md outline-none"
              />
              <button
                type="submit"
                disabled={joined}
                className={`px-space-md py-space-xs font-label-caps text-label-caps uppercase transition-colors ${
                  joined
                    ? "bg-tertiary-container text-on-tertiary"
                    : "bg-primary text-on-primary hover:bg-tertiary-container hover:text-on-tertiary"
                }`}
              >
                {joined ? "Joined" : "Join"}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm">
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <p className="font-label-caps text-label-caps uppercase text-outline">
              © {new Date().getFullYear()} Noir &amp; Light Studio. All archival rights reserved.
            </p>
            <p className="font-body-md text-[13px] text-outline">
              Demo project designed &amp; built by{" "}
              <a
                href="https://github.com/Keonii01"
                target="_blank"
                rel="noreferrer"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Dami
              </a>
              . All artists, works and testimonials are fictional.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-space-md">
            <a
              href="#"
              onClick={ignore}
              className="font-label-caps text-label-caps uppercase text-outline hover:text-on-surface transition-colors"
            >
              Provenance &amp; Authenticity
            </a>
            <a
              href="#"
              onClick={ignore}
              className="font-label-caps text-label-caps uppercase text-outline hover:text-on-surface transition-colors"
            >
              Privacy Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}