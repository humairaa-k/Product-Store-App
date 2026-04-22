import { useDispatch } from "react-redux";
import { decQty, incQty, removeFromCart } from "../../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="group relative overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-4 shadow-[0_16px_36px_-28px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-soft)]/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,116,79,0.16),transparent_42%)] opacity-80" />

      <div className="relative flex gap-4">
        <div className="grid h-18 w-18 place-items-center rounded-[22px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="h-12 w-12 object-contain transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="line-clamp-2 pr-2 text-sm font-extrabold leading-6 text-[var(--text-primary)]">
              {item.title}
            </div>

            <button
              className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)] backdrop-blur-lg transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="rounded-full border border-[var(--accent-soft)] bg-[var(--accent-soft)]/20 px-3 py-1 text-sm font-extrabold text-[var(--accent)]">
              ${(item.price * item.qty).toFixed(2)}
            </div>

            <div className="flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-2 py-1.5 backdrop-blur-lg">
              <button
                className="grid h-8 w-8 place-items-center rounded-full text-base font-bold text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)]/20 hover:text-[var(--accent)]"
                onClick={() => dispatch(decQty(item.id))}
              >
                -
              </button>

              <span className="min-w-8 text-center text-sm font-extrabold text-[var(--text-primary)]">
                {item.qty}
              </span>

              <button
                className="grid h-8 w-8 place-items-center rounded-full text-base font-bold text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)]/20 hover:text-[var(--accent)]"
                onClick={() => dispatch(incQty(item.id))}
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-secondary)]">
            Unit: ${item.price.toFixed(2)}
          </div>
        </div>
      </div>
    </li>
  );
}
