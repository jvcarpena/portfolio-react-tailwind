import React from "react";

const skills_object = [
  {
    title: "Python",
    svg_url: "/icons/python.svg",
  },
  {
    title: "JavaScript",
    svg_url: "/icons/js.svg",
  },
  {
    title: "HTML",
    svg_url: "/icons/html.svg",
  },
  {
    title: "CSS",
    svg_url: "/icons/css.svg",
  },
  {
    title: "Tailwind",
    svg_url: "/icons/tailwind.svg",
  },
  {
    title: "Bootstrap",
    svg_url: "/icons/bootstrap.svg",
  },
  {
    title: "React",
    svg_url: "/icons/react.svg",
  },
  {
    title: "Flask",
    svg_url: "/icons/flask.svg",
  },
  {
    title: "Django",
    svg_url: "/icons/django.svg",
  },
  {
    title: "PostgreSQL",
    svg_url: "/icons/postgre.svg",
  },
  {
    title: "Git",
    svg_url: "/icons/git.svg",
  },
  {
    title: "Postman",
    svg_url: "/icons/postman.svg",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl mb-12 min-h-[calc(100vh-68px)] scroll-mt-20 p-6 [&@media(max-aspect-ratio:1/1)]:aspect-[13/20]"
    >
      <h2 className="mb-6 text-4xl bg-linear-to-r from-white to-slate-900 bg-clip-text text-transparent font-bold sm:mb-10 sm:text-5xl">
        SKILLS
      </h2>
      <p className="text-xl sm:text-2xl mb-4 sm:mb-8">
        I'm a computer engineering graduate and a web developer with experience
        in building dynamic and scalable web applications. My expertise spans
        across{" "}
        <span className="text-blue-400 italic font-bold">
          Python (Flask, Django)
        </span>
        ,{" "}
        <span className="text-blue-400 italic font-bold">
          JavaScript (React.js)
        </span>
        , and databases like{" "}
        <span className="text-blue-400 italic font-bold">PostgreSQL</span>. I
        love turning ideas into functional, user-friendly applications while
        prioritizing clean, maintainable code. Currently, I'm focused on
        enhancing my backend development skills and exploring cloud
        technologies.
      </p>
      <p className="text-xl sm:text-2xl mb-8 sm:mb-12">
        By leveraging modern technologies and robust open-source tools, I
        develop efficient, user-friendly applications and websites designed for
        seamless experiences across all devices.
      </p>
      <div className="flex flex-wrap gap-6 sm:gap-10">
        {skills_object.map((skill) => {
          return (
            <div className="flex gap-3 bg-gray-100 p-3 rounded-lg items-center sm:p-5 sm:rounded-xl sm:gap-4">
              <img
                className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
                src={skill.svg_url}
                alt={skill.title}
              />
              <p className="text-xl text-slate-800 sm:font-medium sm:text-2xl">
                {skill.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
