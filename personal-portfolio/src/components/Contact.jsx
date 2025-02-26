import React from "react";

function Contact() {
  return (
    <section
      id="contacts"
      className="mx-auto max-w-7xl min-h-[calc(100vh-68px)] mb-8 scroll-mt-20 p-6 [&@media(max-aspect-ratio:1/1)]:aspect-[13/20]"
    >
      <h2 className="mb-8 text-4xl font-bold bg-linear-to-r from-white to-slate-900 bg-clip-text text-transparent sm:text-5xl sm:mb-10">
        Contact Me
      </h2>
      <p className="text-center text-xl mb-8 sm:text-2xl">
        If you'd like to get in touch, feel free to reach out using the form
        below or via social media above.
      </p>
      <div className="bg-[#304b64] p-4 rounded-2xl sm:p-6">
        <form
          action=""
          className="items-left mx-auto flex flex-col gap-4 text-2xl sm:text-3xl"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full mb-2 rounded-xl bg-[#08233b] text-gray-200 placeholder-gray-500 p-3 sm:text-2xl"
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full mb-2 rounded-xl bg-[#08233b] text-gray-200 placeholder-gray-500 p-3 sm:text-2xl"
          />

          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            name="message"
            cols={30}
            rows={5}
            required
            placeholder="Enter your message"
            className="w-full mb-2 rounded-xl bg-[#08233b] text-gray-200 placeholder-gray-500 p-3 sm:text-2xl"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
