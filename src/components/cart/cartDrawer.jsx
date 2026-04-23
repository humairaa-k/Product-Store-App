import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./cartItem";
import { clearCart } from "../../features/cart/cartSlice";

import {
  CartTotalPrice,
  ItemsInCart,
  NumberOfProdInCart,
  TotalItemsInCart,
} from "../../features/cart/cartSelectors";

export default function CartDrawer({ open, onClose }) {
  const dispatch = useDispatch();

  const items = useSelector(ItemsInCart);
  const totalItems = useSelector(TotalItemsInCart);

  const totalPrice = useSelector(CartTotalPrice);
  const itemTypes = useSelector(NumberOfProdInCart);

  //shuru k 3 items
  const previewItems = items.slice(0, 3);

  return (
    <div
      className={["fixed inset-0 z-50", open ? "" : "pointer-events-none"].join(" ")}
    >
      <div
        onClick={onClose}
        className={[
          "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(169,116,79,0.18),transparent_35%),rgba(0,0,0,0.58)] backdrop-blur-[2px] transition",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <aside
        className={[
          "absolute right-0 top-0 h-full w-full max-w-md overflow-hidden border-l border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!open}
        aria-label="Shopping cart"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(169,116,79,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />

        <div className="relative flex h-full flex-col">
          <div className="border-b border-[var(--border-color)] px-5 py-5">
            <div className="flex items-center justify-between gap-3 rounded-[28px] border border-[var(--border-color)] bg-[var(--card-bg)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl">
              <div>

                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  Quick cart
                </div>
                <div className="mt-2 text-base font-extrabold text-[var(--text-primary)]">
                  Techy Cart
                </div>
                <div className="mt-1 text-xs font-semibold text-[var(--text-secondary)]">
                  {itemTypes} item types • {totalItems} total items
                </div>

              </div>

              <button
                className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] backdrop-blur-lg transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
                onClick={onClose}>
                Close
              </button>
            </div>
          </div>

          <div className="cart-scroll flex-1 overflow-y-auto overscroll-contain scroll-smooth px-5 py-5">
            {items.length === 0 ? (
              <div className="grid min-h-full place-items-center text-center">
                <div className="w-full rounded-[30px] border border-[var(--border-color)] bg-[var(--card-bg)] px-6 py-10 shadow-[0_25px_65px_-32px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    Nothing here yet
                  </div>
                  <div className="mt-3 text-lg font-extrabold text-[var(--text-primary)]">
                    Your cart is empty
                  </div>
                  <div className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    Add products here, open the full cart page for a larger order view.
                  </div>
                </div>
              </div>

            ) : (

              <div className="space-y-4">

                <ul className="space-y-4">
                  {previewItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ul>

                {/* more items in carts msg */}
                {items.length > previewItems.length ? (
                  <div className="rounded-[22px] border border-dashed border-[var(--accent-soft)]/70 bg-[var(--accent-soft)]/10 px-4 py-3 text-center text-sm font-semibold text-[var(--accent)]">
                    {items.length - previewItems.length} more item types waiting in the full cart page.
                  </div>
                ) : null}
              </div>
            )}
          </div>

          <div className="border-t border-[var(--border-color)] px-5 py-5">
            <div className="rounded-[30px] border border-[var(--border-color)] bg-[var(--card-bg)] p-5 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.85)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                    Order total
                  </div>
                </div>
                <div className="rounded-full border border-[var(--accent-soft)] bg-[var(--accent-soft)]/20 px-4 py-2 text-lg font-black text-[var(--accent)]">
                  ${totalPrice.toFixed(2)}
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="flex-1 rounded-full bg-[var(--accent)] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--accent-soft)]"
                >
                  Open cart page
                </Link>

                <button
                  className="flex-1 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-3 text-sm font-semibold text-[var(--text-secondary)] backdrop-blur-lg transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={() => dispatch(clearCart())}
                  disabled={items.length === 0}
                >
                  Clear basket
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
