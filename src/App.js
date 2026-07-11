import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

function App() {
  const users = useSelector((state) => state.auth.users);
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("items", JSON.stringify(items));
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
