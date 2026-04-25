import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartPageItem from "../components/cart/CartPageItem";
import { clearCart } from "../features/cart/cartSlice";

import {
  CartTotalPrice,
  ItemsInCart,
  NumberOfProdInCart,
  TotalItemsInCart,
} from "../features/cart/cartSelectors";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(ItemsInCart);
  const totalItems = useSelector(TotalItemsInCart);

  const totalPrice = useSelector(CartTotalPrice);
  const itemTypes = useSelector(NumberOfProdInCart);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(169,116,79,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(169,116,79,0.12),transparent_28%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="rounded-[36px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6 shadow-[0_32px_80px_-42px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                Cart page
              </div>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Review your Cart in one place.
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                Manage quantities, review your items, and ensure everything is
                perfect for your next setup.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                  Item types
                </div>
                <div className="mt-2 text-2xl font-black text-[var(--text-primary)]">
                  {itemTypes}
                </div>
              </div>

              <div className="rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                  Total items
                </div>
                <div className="mt-2 text-2xl font-black text-[var(--text-primary)]">
                  {totalItems}
                </div>
              </div>

              <div className="rounded-[24px] border border-[var(--accent-soft)]/70 bg-[var(--accent-soft)]/12 px-5 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                  Current total
                </div>
                <div className="mt-2 text-2xl font-black text-[var(--accent)]">
                  ${totalPrice.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.55fr)_360px]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))] p-5 shadow-[0_28px_70px_-45px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                    Cart items
                  </div>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Adjust quantities, remove products, or continue browsing
                    before checkout.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    to="/"
                    className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-3 text-sm font-semibold text-[var(--text-secondary)] backdrop-blur-lg transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
                  >
                    Continue shopping
                  </Link>

                  <button
                    className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => dispatch(clearCart())}
                    disabled={items.length === 0}
                  >
                    Clear cart
                  </button>
                </div>
              </div>
            </div>

            {items.length === 0 ? (
              <div className="rounded-[34px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] px-6 py-14 text-center shadow-[0_32px_80px_-48px_rgba(0,0,0,0.78)] backdrop-blur-2xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  Nothing selected yet
                </div>
                <h2 className="mt-4 text-2xl font-black text-[var(--text-primary)]">
                  Ready to fill your cart?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                  Browse our store to find the perfect headphones, laptops, and
                  more.
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--accent-soft)]"
                >
                  Explore products
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <CartPageItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[32px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
                Order summary
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>Item types</span>
                  <span className="font-bold text-[var(--text-primary)]">
                    {itemTypes}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>Total items</span>
                  <span className="font-bold text-[var(--text-primary)]">
                    {totalItems}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span>Products total</span>
                  <span className="font-bold text-[var(--text-primary)]">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="h-px bg-[var(--border-color)]" />

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    Cart total
                  </span>
                  <span className="text-2xl font-black text-[var(--accent)]">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                className="mt-6 w-full rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-50"
                disabled={items.length === 0}
              >
                Proceed to checkout
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
