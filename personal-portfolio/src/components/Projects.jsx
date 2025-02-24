import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl my-12 min-h-[clac(100vh-68px)] scroll-mt-20 p-6 [&@media(max-aspect-ratio:1/1)]:aspect-[13/20]"
    >
      <h2 className="mb-6 text-center text-4xl font-bold sm:text-5xl">
        Projects
      </h2>

      <ul className="mx-auto my-12 flex list-none flex-col gap-8">
        <li className="flex flex-row bg-[#1e3346] border-none rounded-3xl mx-auto max-w-7xl sm:flex-col">
          <img
            className="w-1/3 rounded-2xl m-6"
            src="./src/assets/images/to-do-app.jpg"
            alt=""
          />
          <div className="flex flex-col w-2/3 p-6">
            <div className="flex flex-row justify-between">
              <h3>Taskflow</h3>
              <button>github</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
