import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-7xl mb-12 flex min-h-[calc(100vh-68px)] scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row [&@media(max-aspect-ratio:1/1)]:aspect-[13/20]"
    >
      <artcle className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold sm:text-left sm:text-5xl">
          We Boldy Go Where No Rocket has Gone Before...
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl sm:text-left">
          We're building Rockets for the next century today. From the Moon to
          Mars, Juputer and beyond...
        </p>
        <p className="mt-4 max-w-md text-center text-2xl sm:text-left">
          Think Acme Rockets.
        </p>
      </artcle>

      <img
        className="w-1/2"
        src="./src/assets/images/Programmer-rafiki.png"
        alt="Programmer"
      />
    </section>
  );
}

export default Hero;
