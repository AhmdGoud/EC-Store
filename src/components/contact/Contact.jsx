import { useState } from "react";

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will be in touch soon.");
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            Contact us
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Have a question or need help?
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Send us a message and our team will respond as soon as possible.
            We’re here to help with orders, returns, and styling advice.
          </p>
          <div className="mt-10 space-y-6">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Customer support
              </p>
              <p className="mt-1 text-sm text-slate-600">
                support@ec-store.com
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Phone</p>
              <p className="mt-1 text-sm text-slate-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Location</p>
              <p className="mt-1 text-sm text-slate-600">
                123 Fashion Street, New York
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl ring-1 ring-slate-900/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Send a message
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Let's get in touch
          </h2>

          <div className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Name</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-300">Email</span>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-300">
                Message
              </span>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                required
                rows="5"
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                placeholder="Tell us how we can help..."
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
