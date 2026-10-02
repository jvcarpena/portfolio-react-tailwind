import { Typewriter } from "react-simple-typewriter";
import { profile, socials } from "../data/content";

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 -z-10 size-[28rem] rounded-full bg-accent-strong/25 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -right-40 -z-10 size-[26rem] rounded-full bg-cyan-400/10 blur-[110px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:min-h-[calc(100svh-4rem)] md:grid-cols-[1.15fr_1fr] md:py-20">
        <div className="animate-fade-up text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-sm text-muted">
            <span className="size-2 rounded-full bg-ok" aria-hidden="true" />
            Open to opportunities
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              JV Carpena
            </span>
          </h1>

          <p
            className="mt-4 min-h-10 font-mono text-xl text-accent sm:text-2xl"
            aria-label={profile.roles.join(", ")}
          >
            <span aria-hidden="true">
              <Typewriter
                words={profile.roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1400}
              />
            </span>
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted md:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>

          <ul
            className="mt-9 flex justify-center gap-3 md:justify-start"
            aria-label="Social links"
          >
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={`${s.label} (opens in a new tab)`}
                >
                  <img src={s.icon} alt="" className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:150ms]">
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-full bg-gradient-to-br from-accent-strong/40 to-cyan-400/20 blur-3xl"
          />
          <img
            src="/images/Programmer-rafiki.png"
            alt="Illustration of a developer working at a desk"
            width="2000"
            height="2000"
            className="relative animate-float drop-shadow-2xl"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
