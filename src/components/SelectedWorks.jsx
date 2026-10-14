import { useState } from "react";
import WorkCard from "./WorkCard";
import { filters, works } from "../data/works";

export default function SelectedWorks() {
  const [active, setActive] = useState("All Series");
  const showAll = active === "All Series";
  const visible = showAll ? works : works.filter((w) => w.category === active);

  return (
    <section
      id="work"
      className="scroll-mt-20 w-full bg-surface-container-lowest px-margin lg:px-margin-desktop py-space-xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg gap-space-md">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-2">
              Curated Folio
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
              Selected Works
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filters.map((name) => (
              <button
                key={name}
                onClick={() => setActive(name)}
                className={`px-4 py-1.5 font-label-caps text-label-caps uppercase tracking-widest transition-colors ${
                  active === name
                    ? "text-surface-container-lowest bg-primary"
                    : "text-on-surface-variant bg-surface-container hover:text-primary"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-cols-12 gap-gutter-desktop mt-space-lg">
          {visible.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              span={showAll ? work.span : "lg:col-span-6"}
              aspect={showAll ? work.aspect : "aspect-[4/3]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}