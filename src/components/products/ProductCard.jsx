import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "./ProductModal";
import { addToCart } from "../../store/cartSlice";
import { useToast } from "../shared/Toast";

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const showToast = useToast();

  const cartItems = useSelector((state) => state.cart.items || []);
  const isAdded = cartItems.some((item) => item.id === product.id);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md group">
      <img
        src={`${process.env.PUBLIC_URL}/${product.image}`}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="absolute inset-0 flex items-start justify-end p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
        <button
          onClick={() => setIsModalOpen(true)}
          className="pointer-events-auto rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-white"
        >
          More details
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{product.tags?.[0]}</span>
          <span className="font-semibold text-slate-900">${product.price}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.description}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => {
              if (isAdded) return;
              dispatch(addToCart(product));
              showToast(`${product.name} added to cart`, "add");
            }}
            className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white transition ${
              isAdded
                ? "bg-green-600 hover:bg-green-700"
                : "bg-slate-900 hover:bg-slate-800"
            }`}
          >
            {isAdded ? "Item is added" : "Add to cart"}
          </button>
          <button
            onClick={() => {
              setIsWishlisted(!isWishlisted);
              showToast(
                `${product.name} ${!isWishlisted ? "marked as wishlisted" : "removed from whislist"}`,
              );
            }}
            className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold transition ${isWishlisted ? "bg-red-600 text-white" : "border bg-white text-slate-700 hover:bg-slate-100"}`}
          >
            ♥
          </button>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        product={product}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default ProductCard;
