function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[1rem] bg-gray-900 px-6 py-10 text-white shadow-2xl sm:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Stay in the loop
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Subscribe for exclusive offers
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              Get the latest product launches and style tips delivered straight
              to your inbox.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <input
              className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-slate-300"
              placeholder="Enter your email"
            />
            <button className="mt-4 w-full rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
