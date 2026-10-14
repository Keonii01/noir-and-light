export default function WorkCard({ work, span, aspect }) {
  return (
    <article className={`${span} group relative bg-surface-container flex flex-col overflow-hidden`}>
      <div className={`relative w-full ${aspect} overflow-hidden bg-surface-container-low`}>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url('${work.image}')`, backgroundPosition: work.position }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
        <div className="absolute top-4 left-4 px-3 py-1 bg-surface-container-lowest/80 backdrop-blur-md">
          <span
            className={`font-label-caps text-label-caps uppercase tracking-widest ${
              work.tagTone === "primary" ? "text-primary" : "text-secondary"
            }`}
          >
            {work.tag}
          </span>
        </div>
      </div>

      <div className="p-space-md flex flex-col justify-between flex-grow bg-surface-container">
        <div>
          <div className="flex items-start justify-between gap-space-sm">
            <div>
              <p className="font-label-caps text-label-caps uppercase text-primary tracking-wider mb-1">
                {work.series}
              </p>
              <h3
                className={`text-on-surface ${
                  work.large ? "font-headline-md text-headline-md" : "font-headline-sm text-headline-sm"
                }`}
              >
                {work.title}
              </h3>
            </div>
            {work.badge && (
              <span
                className={`shrink-0 font-label-caps text-label-caps uppercase bg-surface-container-high px-2.5 py-1 ${
                  work.badgeGold ? "text-primary-fixed" : "text-on-surface-variant"
                }`}
              >
                {work.badge}
              </span>
            )}
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">{work.description}</p>
        </div>

        <div className="mt-4 pt-3 flex items-center justify-between gap-space-sm text-secondary">
          <span className="font-label-caps text-label-caps uppercase">{work.specs}</span>
          {work.action ? (
            <a
              href="#contact"
              className="shrink-0 font-label-caps text-label-caps uppercase text-primary hover:underline flex items-center gap-1"
            >
              {work.action}
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          ) : (
            <span className="shrink-0 font-label-caps text-label-caps uppercase text-outline">
              {work.status}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}