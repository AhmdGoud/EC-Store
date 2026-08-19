import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const userName = useSelector((state) => state.auth.currentUserName);
  const userFirstName = userName?.split(" ")[0];
  const nameCapitalized =
    userFirstName?.charAt(0).toUpperCase() + userFirstName?.slice(1);

  const itemCount = useSelector((state) => state.cart.items.length);

  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-xl font-semibold text-white">
              {userFirstName[0].toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                My Profile
              </h1>
              <p className="text-sm text-slate-500">
                Welcome back! {nameCapitalized}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Account info</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Status</span>
              <span className="font-medium text-green-600">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Items in cart</span>
              <span className="font-medium text-slate-900">{itemCount}</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Quick actions
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/products"
              className="rounded-xl bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Continue shopping
            </Link>
            <Link
              to="/cart"
              className="rounded-xl border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
