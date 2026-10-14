const testimonials = [
  {
    quote:
      "Vance’s mastery of chiaroscuro transforms raw architectural concrete into cathedral-like spiritual experiences.",
    name: "Elena Rostova",
    role: "Chief Curator • Modern Art Review",
  },
  {
    quote:
      "The prints possess an astonishing depth. The interplay between rich blacks and radiant silver tones is unparalleled in contemporary fine-art photography.",
    name: "Marcus Sterling",
    role: "Private Collector & Principal Architect",
  },
  {
    quote:
      "A sublime study of absence and revelation. Truly an essential voice in monochrome photography today.",
    name: "Claire Delacroix",
    role: "Art Basel Focus • Paris Critique",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 relative overflow-hidden w-full bg-surface-container-lowest px-margin lg:px-margin-desktop py-space-xl"
    >
      {/* Dimmed photo + fade, so the glass cards have something to blur */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/work-4.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-surface-container-lowest/70 to-surface-container-lowest" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-2">
            Critical Reception
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight text-balance">
            Institutional Voices &amp; Collectors
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Reflections from museum curators, architectural patrons, and fine-art collectors worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-space-lg bg-surface-container/60 backdrop-blur-xl border border-white/[0.08] flex flex-col justify-between shadow-2xl transition-all duration-300 hover:bg-surface-container/90"
            >
              <div className="flex flex-col">
                <span
                  className="material-symbols-outlined text-primary text-headline-md mb-space-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed italic mb-space-md">
                  “{t.quote}”
                </p>
              </div>
              <div className="pt-space-md flex flex-col">
                <span className="font-title-lg text-title-lg text-on-surface">{t.name}</span>
                <span className="font-label-caps text-label-caps uppercase text-primary mt-0.5">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}