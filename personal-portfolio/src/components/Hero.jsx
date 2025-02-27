import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-7xl mb-12 flex min-h-[calc(100vh-68px)] scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row [&@media(max-aspect-ratio:1/1)]:aspect-[13/20]"
    >
      <artcle className="sm:w-1/2">
        <h2 className="max-w-md mb-6 text-center text-4xl font-bold sm:text-left sm:text-5xl sm:mb-8">
          Hi, I am JV Carpena
        </h2>
        <p className="text-4xl italic text-center font-bold mb-6 sm:mb-8 sm:text-left sm:text-5xl">
          {" "}
          <span className="text-blue-400">
            <Typewriter
              words={["Python Developer", "Backend Developer", "Web Developer"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={70}
              delaySpeed={800}
            />
          </span>
        </p>
        <p className="mb-8 max-w-md text-center text-2xl sm:text-left sm:text-3xl">
          I’m passionate about creating efficient solutions and leveraging
          technology to solve real-world challenges.
        </p>
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          <a
            href="https://github.com/jvcarpena"
            target="_blank"
            className="rounded-xl bg-gray-700 p-2"
          >
            <img
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
              src="/icons/github.svg"
              alt="github svg"
            />
          </a>

          <a
            href="https://www.facebook.com/jv.carpena.7"
            target="_blank"
            className="rounded-xl bg-gray-700 p-2"
          >
            <img
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
              src="/icons/fb.svg"
              alt="facebook svg"
            />
          </a>

          <a
            href="https://www.instagram.com/carpena.jv/?next=%2F&hl=en"
            target="_blank"
            className="rounded-xl bg-gray-700 p-2"
          >
            <img
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
              src="/icons/ig.svg"
              alt="instagram svg"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/jose-victor-carpena-02637a2a3/"
            target="_blank"
            className="rounded-xl bg-gray-700 p-2"
          >
            <img
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"
              src="/icons/linkedin.svg"
              alt="linkedin svg"
            />
          </a>
        </div>
      </artcle>

      <img
        className="w-full sm:w-1/2"
        src="/images/Programmer-rafiki.png"
        alt="Programmer"
      />
    </section>
  );
}

export default Hero;
