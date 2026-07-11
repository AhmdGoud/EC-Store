import { Link } from "react-router-dom";
import cart from "../../assets/icons/cart-outline.svg";
import { useSelector } from "react-redux";

function MobilePanel({ onOpenSignIn, onOpenSignUp }) {
  const itemsNumber = useSelector((state) => state.cart.items.length);

  return (
    <>
      <div className="absolute left-0 right-0 top-full z-40 mt-2 rounded-b-lg bg-white shadow-md md:hidden">
        <div className="px-4 py-4">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <Link to="/">
              <p className="block rounded-md px-2 py-2 hover:bg-slate-50">
                Home
              </p>
            </Link>
            <Link to="/products">
              <p className="block rounded-md px-2 py-2 hover:bg-slate-50">
                Products
              </p>
            </Link>
            <Link to="/contact">
              <p className="block rounded-md px-2 py-2 hover:bg-slate-50">
                Contact
              </p>
            </Link>
          </nav>

          <div className="mt-4 flex flex-col gap-2">
            <Link
              to="/cart"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <img src={cart} alt="Cart" className="h-5 w-5" />
              {itemsNumber ? (
                <span className="-ml-4 -mt-4 inline-flex h-3 items-center justify-center rounded-full bg-rose-500 px-2 text-xs font-bold text-white">
                  {itemsNumber}
                </span>
              ) : (
                ""
              )}
              Cart
            </Link>
          </div>

          <div className="mt-3">
            <form role="search" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="mobile-search" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <input
                  id="mobile-search"
                  type="search"
                  placeholder="Search products..."
                  className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                />
              </div>
            </form>
          </div>

          <div className="mt-3 flex gap-2">
            <button
              onClick={onOpenSignIn}
              className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Sign in
            </button>
            <button
              onClick={onOpenSignUp}
              className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobilePanel;
