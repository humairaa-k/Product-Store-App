import { decQty, incQty, removeFromCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function CartPageItem({ item }) {
  const dispatch = useDispatch();
  const totalForItem = item.price * item.qty;

  return (
    <li className="group relative overflow-hidden rounded-[32px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-5 shadow-[0_28px_60px_-35px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,116,79,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center">
        <div className="flex items-center gap-4">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-16 w-16 object-contain transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              In your cart
            </div>
            <h3 className="max-w-xl text-lg font-extrabold leading-7 text-[var(--text-primary)]">
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-[var(--text-secondary)]">
              <span className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-3 py-1">
                Unit price: ${item.price.toFixed(2)}
              </span>
              <span className="rounded-full border border-[var(--accent-soft)]/60 bg-[var(--accent-soft)]/10 px-3 py-1 text-[var(--accent)]">
                Line total: ${totalForItem.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex items-center justify-between rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl sm:min-w-40">
            <button
              className="grid h-10 w-10 place-items-center rounded-full text-lg font-bold text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)]/20 hover:text-[var(--accent)]"
              onClick={() => dispatch(decQty(item.id))}
              aria-label={`Decrease quantity of ${item.title}`}
            >
              -
            </button>

            <div className="text-center">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                Quantity
              </div>
              <div className="text-lg font-black text-[var(--text-primary)]">
                {item.qty}
              </div>
            </div>

            <button
              className="grid h-10 w-10 place-items-center rounded-full text-lg font-bold text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)]/20 hover:text-[var(--accent)]"
              onClick={() => dispatch(incQty(item.id))}
              aria-label={`Increase quantity of ${item.title}`}
            >
              +
            </button>
          </div>

          <button
            className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-3 text-sm font-semibold text-[var(--text-secondary)] backdrop-blur-lg transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove item
          </button>
        </div>
      </div>
    </li>
  );
}
