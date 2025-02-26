import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mbldverl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Success! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

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

      <div className="bg-[#304b64] p-4 rounded-xl sm:rounded-2xl sm:p-6">
        {status && (
          <p className="text-center text-green-400 text-xl sm:text-2xl">
            {status}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="items-left mx-auto flex flex-col gap-4 text-2xl sm:text-3xl"
        >
          <label htmlFor="name" className="text-xl sm:text-2xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full rounded-lg bg-[#08233b] text-gray-200 placeholder-gray-500 placeholder:text-xl sm:rounded-xl sm:mb-2  sm:placeholder:text-2xl p-3 sm:text-2xl"
          />

          <label htmlFor="email" className="text-xl sm:text-2xl">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full rounded-lg bg-[#08233b] text-gray-200 placeholder-gray-500 placeholder:text-xl sm:rounded-xl sm:mb-2 sm:placeholder:text-2xl p-3 sm:text-2xl"
          />

          <label htmlFor="message" className="text-xl sm:text-2xl">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            cols={30}
            rows={5}
            required
            placeholder="Enter your message"
            className="w-full rounded-lg bg-[#08233b] text-gray-200 placeholder-gray-500 placeholder:text-xl sm:mb-2 sm:rounded-xl  sm:placeholder:text-2xl p-3 sm:text-2xl"
          />

          <button
            type="submit"
            className="text-xl rounded-lg cursor-pointer bg-[#08233b] p-3 hover:opacity-80 active:opacity-70 sm:rounded-xl sm:mb-2 sm:p-4 sm:text-2xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
