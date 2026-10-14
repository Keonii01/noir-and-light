const stats = [
  { value: "14", label: "International Solos", note: "Paris, Zurich, Tokyo, NYC" },
  { value: "03", label: "Monographs In Print", note: "Hatje Cantz & Steidl" },
  { value: "∞", label: "Leica Hall of Fame", note: "Inducted Wetzlar 2023" },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 relative overflow-hidden w-full bg-surface-container-low px-margin lg:px-margin-desktop py-space-xl"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
        {/* Left: portrait */}
        <div className="lg:col-span-5 flex flex-col w-full max-w-lg mx-auto lg:max-w-none">
          <div className="relative w-full bg-surface-container-lowest p-3 shadow-2xl">
            <div className="relative overflow-hidden aspect-square">
              <img
                src="/images/julian-vance.jpg"
                alt="Julian Vance, Principal Artist of Noir & Light Studio"
                className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/70 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="h-0.5 w-full bg-primary-container/40 mt-3" />
            <div className="pt-3 pb-1 flex justify-between items-center">
              <span className="font-label-caps text-label-caps uppercase text-on-surface">
                Julian Vance, b. 1986
              </span>
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
                Principal Artist
              </span>
            </div>
          </div>
        </div>

        {/* Right: bio */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pl-space-md">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-2">
            The Philosophy &amp; Practice
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight mb-space-md">
            Chiaroscuro as an <br />
            <span className="italic font-light text-secondary">Architectural Language</span>
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-md leading-relaxed">
            Operating between Zürich and Paris, Vance’s photographic oeuvre centers on{" "}
            <span className="text-primary font-medium">sculpting darkness to discover illumination</span>.
            Influenced by Caravaggio’s intense theatrical light and the stark structural geometries of
            Tadao Ando, his practice challenges the standard digital saturation of modern photography.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
            Each monograph plate is the result of methodical environmental observation—often waiting days
            for a single solar alignment. Through rigorous darkroom alchemy and an absolute{" "}
            <span className="text-primary font-medium">mastery of natural illumination</span>, Vance treats
            architectural concrete and the human silhouette as complementary physical mediums.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm p-space-md bg-surface-container-lowest shadow-sm mb-space-md">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display-hero text-headline-md text-primary">{stat.value}</span>
                <span className="font-label-caps text-label-caps uppercase text-secondary">{stat.label}</span>
                <span className="font-body-md text-[13px] text-outline">{stat.note}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-label-caps text-label-caps uppercase text-outline">
              Permanent Gallery Representation
            </span>
            <p className="font-body-md text-body-md text-on-surface">
              Galerie Obscura (Rue de Seine, Paris) • Vane Fine Art (Chelsea, New York)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}