import { projects } from "../data/content";
import useReveal from "../hooks/useReveal";

function Projects() {
  const ref = useReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="section"
      aria-labelledby="projects-title"
    >
      <div className="reveal max-w-2xl">
        <p className="eyebrow">Selected work</p>
        <h2 id="projects-title" className="section-title">
          Projects I&apos;ve built
        </h2>
        <p className="mt-4 text-muted">
          A few of the web applications I&apos;ve designed and developed, from
          database-backed CRUD apps to content sites.
        </p>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <li
            key={p.title}
            className="reveal group"
            style={{ "--d": `${(i % 2) * 100}ms` }}
          >
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent-strong/10">
              <div className="aspect-[16/9] overflow-hidden border-b border-line bg-surface-2">
                <img
                  src={p.img}
                  alt={`Screenshot of the ${p.title} project`}
                  loading="lazy"
                  width="1920"
                  height="1080"
                  className="size-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-muted">{p.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                  {p.stack.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost mt-6 self-start !min-h-11 !px-5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.05 1.54 1.05.91 1.56 2.38 1.1 2.96.84.09-.66.36-1.1.65-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.02-2.67-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.02A9.56 9.56 0 0112 6.8c.84.004 1.68.113 2.47.332 1.9-1.29 2.73-1.02 2.73-1.02.54 1.37.2 2.39.1 2.64.63.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.69-4.57 4.93.37.32.7.94.7 1.89v2.81c0 .28.16.59.67.49C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                  View source
                  <span className="sr-only"> for {p.title} (opens in a new tab)</span>
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
