import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../../store/authSlice";
import { handelCurrentUserName } from "../../store/authSlice";

function SignUp({ onSignUp }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const { name, email, password } = values;
  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  const users = useSelector((state) => state.auth.users);

  function isUserExist() {
    if (users) {
      for (let user of users) {
        if (user.email === values.email) {
          setError("sorry, this email already registered");
          return true;
        }
      }
    }

    onSignUp();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = values;
    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    if (isUserExist()) return;

    dispatch(addNewUser(newUser));
    dispatch(handelCurrentUserName(name));

    setValues({ name: "", email: "", password: "", confirm: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md rounded-2xl bg-white p-8 shadow ring-1 ring-slate-200"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
        Create account
      </p>
      <h2 className="mt-4 text-2xl font-bold text-slate-900">Sign up</h2>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Your full name"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="you@example.com"
          />
        </label>

        {error === "sorry, this email already registered" && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Password</span>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Choose a password"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Confirm password
          </span>
          <input
            type="password"
            name="confirm"
            value={values.confirm}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Repeat your password"
          />
        </label>

        {error === "Passwords do not match." && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
        >
          Create account
        </button>
      </div>
    </form>
  );
}

export default SignUp;
