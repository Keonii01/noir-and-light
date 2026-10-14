export default function Hero() {
  return (
    <section className="relative w-full -mt-20 min-h-screen flex flex-col justify-between overflow-hidden bg-surface-container-lowest">
      {/* Background image + dark scrim */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/65 to-surface-container-lowest/80" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-container/10 blur-[130px] pointer-events-none" />
      </div>

      <div className="pt-28 lg:pt-36 w-full" />

      {/* Main content */}
      <div className="relative z-10 w-full px-margin lg:px-margin-desktop py-space-xl flex flex-col items-start max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] backdrop-blur-md mb-space-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="font-label-caps font-semibold uppercase text-on-surface-variant whitespace-nowrap leading-4 text-[clamp(7.5px,2.4vw,11px)] tracking-[0.06em] sm:tracking-[0.14em]">
            Julian Vance • Monograph Series 2024–2025
          </span>
        </div>

        <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero md:text-[84px] md:leading-[92px] text-on-surface max-w-4xl tracking-tight mb-space-md font-normal">
          Capturing Light <br />
          <span className="italic font-light text-secondary">in the Dark</span>
        </h1>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg">
          Fine-art architectural and chiaroscuro portraiture examining the poetic tension between
          form, void, and natural light. Printed strictly on museum-grade Hahnemühle baryta papers.
        </p>

        <div className="flex flex-wrap items-center gap-space-md pt-2">
          <a
            href="#work"
            className="px-space-lg py-3 bg-on-surface text-surface-container-lowest font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center gap-2 shadow-xl"
          >
            <span>Explore Works</span>
            <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
          </a>
          <a
            href="#contact"
            className="px-space-lg py-3 bg-white/[0.03] backdrop-blur-xl text-on-surface font-label-caps text-label-caps uppercase tracking-widest hover:bg-white/[0.08] hover:text-primary transition-all duration-300"
          >
            Acquire Prints
          </a>
        </div>
      </div>

      {/* Lower ribbon */}
      <div className="relative z-10 w-full pb-space-lg pt-space-sm bg-gradient-to-t from-surface-container-lowest to-transparent">
        <div className="max-w-7xl mx-auto px-margin lg:px-margin-desktop flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-md">
            <span className="font-label-caps text-label-caps uppercase text-secondary">Edition 2025</span>
            <span className="w-1 h-1 rounded-full bg-primary/60" />
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              Limited Silver Gelatin &amp; Archival Pigment Prints
            </span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant font-label-caps text-label-caps uppercase">
            <span>Solo Archive Zurich</span>
            <span>•</span>
            <span>Galerie Obscura Paris</span>
          </div>
        </div>
      </div>
    </section>
  );
}