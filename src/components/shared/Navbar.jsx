import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MobilePanel from "./MobilePanel";
import AuthModal from "../forms/AuthModal";
import SignIn from "../forms/SignIn";
import SignUp from "../forms/SignUp";
import { handelLog } from "../../store/authSlice";

import cart from "../../assets/icons/cart-outline.svg";
import search from "../../assets/icons/search-outline.svg";
import person from "../../assets/icons/person-outline.svg";

import items from "../../data/products.json";
import SearchDropdown from "./SearchDropdown";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const [authModal, setAuthModal] = useState(null);

  const searchedItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const itemsNumber = useSelector((state) => state.cart.items.length);
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const openAuthModal = (type) => setAuthModal(type);
  const closeAuthModal = () => setAuthModal(null);

  const handleSignIn = () => {
    dispatch(handelLog());
    closeAuthModal();
  };

  const handleSignUp = () => {
    dispatch(handelLog());
    closeAuthModal();
  };

  return (
    <header className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-slate-900 sm:px-6 lg:px-8">
      {/* logo and links */}
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-slate-900 px-4 py-1 text-lg font-bold text-white">
          EC-Store
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link to="/">
            <p className="transition hover:text-slate-900">Home</p>
          </Link>
          <Link to="/products">
            <p className="transition hover:text-slate-900">Products</p>
          </Link>
          <Link to="/contact">
            <p className="transition hover:text-slate-900">Contact</p>
          </Link>
        </nav>
      </div>

      {/* Desktop search */}
      <div className="hidden flex-1 px-4 md:block">
        <form
          className="mx-auto max-w-lg"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="nav-search" className="sr-only">
            Search products
          </label>
          <div className="relative">
            <input
              id="nav-search"
              type="text"
              value={searchInput}
              onChange={(e) => setsearchInput(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md px-3 py-1 text-sm font-semibold md:inline-flex"
            >
              <img src={search} alt="Search" className="h-5 w-5" />
            </button>
            <SearchDropdown items={searchedItems} searchQuery={searchInput} />
          </div>
        </form>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <MobilePanel
          onOpenSignIn={() => openAuthModal("signIn")}
          onOpenSignUp={() => openAuthModal("signUp")}
        />
      )}

      <div className="flex items-center gap-3">
        {/* Mobile hamburger*/}
        <button
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-sm text-slate-700 transition hover:bg-slate-100"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Cart and Auth buttons*/}
        <Link to="/cart">
          <button className="hidden md:inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            <img src={cart} alt="Cart" className="h-6 w-6" />
            {itemsNumber ? (
              <span className="-ml-2 -mt-4 inline-flex h-3 items-center justify-center rounded-full bg-rose-500 px-2 text-xs font-bold text-white">
                {itemsNumber}
              </span>
            ) : (
              ""
            )}
          </button>
        </Link>

        {authStatus ? (
          <>
            <Link to="/">
              <button
                onClick={() => dispatch(handelLog())}
                className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 md:inline-flex"
              >
                Sign out
              </button>
            </Link>
            <Link to="/profile">
              <button className="hidden md:inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                <img src={person} alt="Cart" className="h-6 w-6" />
              </button>
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={() => openAuthModal("signIn")}
              className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 md:inline-flex"
            >
              Sign in
            </button>
            <button
              onClick={() => openAuthModal("signUp")}
              className="hidden md:inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Sign up
            </button>
          </>
        )}
      </div>

      <AuthModal isOpen={Boolean(authModal)} onClose={closeAuthModal}>
        {authModal === "signIn" ? (
          <SignIn onSignIn={handleSignIn} />
        ) : (
          <SignUp onSignUp={handleSignUp} />
        )}
      </AuthModal>
    </header>
  );
}

export default Navbar;
