import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl my-12 min-h-[clac(100vh-68px)] scroll-mt-20 p-6 [&@media(max-aspect-ratio:1/1)]:aspect-[13/20]"
    >
      <h2 className="mb-15 text-center text-4xl font-bold sm:text-5xl">
        PROJECTS
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:gap-10">
        <div className="bg-[#1e3346] p-6 rounded-2xl shadow-lg flex flex-col items-center gap-8 sm:flex-row">
          {/* Image */}
          <div className="relative">
            <img
              src="./src/assets/images/to-do-app.jpg"
              alt="Project Screenshot"
              className="w-full rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="text-white">
            <div className="flex justify-between mb-5 items-center">
              <h2 className="text-3xl font-bold sm:text-5xl">Offset Africa</h2>
              <p>asdasd</p>
            </div>
            <p className="mb-5 text-gray-300 text-1xl sm:text-2xl">
              Offset Communications Africa’s website really allows them to stand
              out in the PR sector. It shows their works and case studies —
              highlighting their expertise and educating users about the company
              philosophy.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-gray-200 px-3 py-2 text-md sm:text-lg rounded-lg"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
