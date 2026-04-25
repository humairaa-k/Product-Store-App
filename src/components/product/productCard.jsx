import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

function clamp(text, n = 90) {
  if (!text) return "";
  return text.length > n ? text.slice(0, n).trim() + "…" : text;
}

const ProductCard = ({ product, view }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article
      className={
        view === "grid"
          ? "group flex h-full w-full max-w-sm flex-col overflow-hidden rounded-[30px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_24px_70px_-28px_rgba(0,0,0,0.6)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-soft)]"
          : "group flex w-full max-w-6xl flex-row items-center gap-6 overflow-hidden rounded-[30px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_24px_70px_-28px_rgba(0,0,0,0.6)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-soft)] p-4"
      }
    >
      <div
        className={
          view === "grid"
            ? "flex items-center justify-center px-6 pt-6 pb-4"
            : "flex items-center justify-center"
        }
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 w-40 object-contain transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="mx-4 mb-4 flex flex-1 flex-col rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] p-5 backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="mt-2 text-sm font-extrabold leading-6 text-[var(--text-primary)]">
              {clamp(product.title, 48)}
            </h3>
          </div>

          <span className="rounded-full border border-[var(--accent-soft)] bg-[var(--accent-soft)]/20 px-3 py-1 text-xs font-bold text-[var(--accent)]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-secondary)]">
          {clamp(product.description, 110)}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <Link
            to={`/product/${product.id}`}
            className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
          >
            View details
          </Link>

          <button
            className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--accent-soft)] active:scale-95 "
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
