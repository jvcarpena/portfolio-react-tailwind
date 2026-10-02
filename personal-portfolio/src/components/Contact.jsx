import { useState } from "react";
import { FORMSPREE_URL, socials } from "../data/content";
import useReveal from "../hooks/useReveal";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70 transition focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

function Contact() {
  const ref = useReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setFormData((d) => ({ ...d, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section"
      aria-labelledby="contact-title"
    >
      <div className="reveal rounded-3xl border border-line bg-gradient-to-br from-surface to-surface-2 p-6 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-muted">
              Have a project in mind or just want to say hi? Send a message and
              I&apos;ll get back to you as soon as I can.
            </p>

            <ul className="mt-8 flex gap-3" aria-label="Social links">
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

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project…"
                className={`${fieldClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              disabled={state === "sending"}
            >
              {state === "sending" ? "Sending…" : "Send message"}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`min-h-6 font-medium ${
                state === "success" ? "text-ok" : "text-err"
              }`}
            >
              {state === "success" && "Thanks! Your message has been sent."}
              {state === "error" &&
                "Something went wrong. Please try again in a moment."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
