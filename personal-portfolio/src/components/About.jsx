import { about } from "../data/content";
import useReveal from "../hooks/useReveal";

function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="section"
      aria-labelledby="about-title"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div className="reveal">
          <p className="eyebrow">About me</p>
          <h2 id="about-title" className="section-title">
            Clean code, built to last
          </h2>
        </div>

        <div className="reveal space-y-5 text-lg text-muted [--d:100ms]">
          {about.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
