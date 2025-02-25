import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl my-12 min-h-[clac(100vh-68px)] scroll-mt-20 p-6 [&@media(max-aspect-ratio:1/1)]:aspect-[13/20]"
    >
      <h2 className="mb-15 text-4xl bg-linear-to-r from-white to-slate-900 bg-clip-text text-transparent font-bold sm:text-5xl">
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
            <div className="flex justify-between mb-4 items-center">
              <h2 className="text-3xl font-bold sm:text-5xl">Offset Africa</h2>
              <a href="#" className="rounded-full bg-gray-700 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.05 1.54 1.05.91 1.56 2.38 1.1 2.96.84.09-.66.36-1.1.65-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.02-2.67-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.02A9.56 9.56 0 0112 6.8c.84.004 1.68.113 2.47.332 1.9-1.29 2.73-1.02 2.73-1.02.54 1.37.2 2.39.1 2.64.63.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.69-4.57 4.93.37.32.7.94.7 1.89v2.81c0 .28.16.59.67.49C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
            </div>
            <p className="mb-6 text-gray-300 text-1xl sm:text-2xl">
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
