import { Link } from "react-router-dom";
import heroImage from "../../assets/logos/heroImage.png";

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-800">
            Fresh arrivals, premium style
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Step into style with EC-Store.
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            EC-Store brings curated essentials for everyday living, from stylish
            home goods to fresh seasonal must-haves. Enjoy easy browsing, fast
            delivery, and a shopping experience built for modern comfort.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Shop now
            </button>
            <Link to="/products">
              <button className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                Explore collection
              </button>
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-100 p-5 text-sm">
              <p className="font-semibold text-slate-900">New season</p>
              <p className="text-slate-500">Fresh fashion drops</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-5 text-sm">
              <p className="font-semibold text-slate-900">Fast shipping</p>
              <p className="text-slate-500">Delivered in 2-4 days</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-5 text-sm">
              <p className="font-semibold text-slate-900">Easy returns</p>
              <p className="text-slate-500">Hassle-free policy</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1rem] ">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
