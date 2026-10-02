import { skillGroups } from "../data/content";
import useReveal from "../hooks/useReveal";

function Skills() {
  const ref = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className="section pt-0 sm:pt-0"
      aria-labelledby="skills-title"
    >
      <div className="reveal max-w-2xl">
        <p className="eyebrow">Toolbox</p>
        <h2 id="skills-title" className="section-title">
          Skills &amp; technologies
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            className="reveal rounded-2xl border border-line bg-surface p-6"
            style={{ "--d": `${i * 100}ms` }}
          >
            <h3 className="font-mono text-sm tracking-widest text-muted uppercase">
              {group.title}
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
              {group.items.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface-2 p-2.5 pr-4 transition hover:border-accent/60"
                >
                  {/* light tile keeps dark brand icons (Flask, Django) legible */}
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-slate-100">
                    <img src={s.icon} alt="" className="size-6" loading="lazy" />
                  </span>
                  <span className="font-medium">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
