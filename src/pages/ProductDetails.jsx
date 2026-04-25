import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useProducts } from "../hooks/useProducts";
import { addToCart } from "../features/cart/cartSlice";
import { ItemsInCart, QuantityOfProd } from "../features/cart/cartSelectors";
import ErrorState from "../components/ui/ErrorState";
import Loader from "../components/ui/Loader";
import ReviewForm from "../components/product/ReviewForm";

function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading, isError, refetch } = useProducts();

  //already have the data from homepage, no need to hit the api again,using cached pages from useInifinteQuery
   const product = data?.pages?.flatMap((page) => page.products)?.find((item) => String(item.id) === String(id));


  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

 
  const cartItems = useSelector(ItemsInCart);

  const quantityInCart = useSelector(QuantityOfProd(product?.id));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) { dispatch(addToCart(product)); } 
  };


  if( isLoading ) return <Loader/>

  if (isError && !product) {
    return <ErrorState message="Could not load product"onRetry={refetch}/>
  }

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(169,116,79,0.2),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(169,116,79,0.14),transparent_30%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="rounded-[36px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6 shadow-[0_32px_80px_-42px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--text-secondary)]">
            <Link
              to="/"
              className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              Back to products
            </Link>
            <span className="rounded-full border border-[var(--accent-soft)]/60 bg-[var(--accent-soft)]/10 px-4 py-2 text-[var(--accent)]">
              Product details
            </span>
            {product.category ? (
              <span className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2">
                {product.category}
              </span>
            ) : null}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
            <div className="flex flex-col gap-5">
            <div className="rounded-[34px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-6 shadow-[0_28px_70px_-44px_rgba(0,0,0,0.78)] backdrop-blur-2xl">
              <div className="grid min-h-[340px] place-items-center rounded-[28px] border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:min-h-[440px]">
               
                <img
                  src={product.thumbnail }
                  alt={product.title}
                  className="max-h-[320px] w-full max-w-md object-contain sm:max-h-[400px]"
                />
              </div>
                      
            </div>

                <ReviewForm productId={product.id} />
            </div>

            <div className="space-y-6">

              <div className="rounded-[34px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))] p-6 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                  Featured product
                </div>
                <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--text-primary)] sm:text-4xl">
                  {product.title}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-3">

                  <span className="rounded-full border border-[var(--accent-soft)]/70 bg-[var(--accent-soft)]/12 px-5 py-2 text-2xl font-black text-[var(--accent)]">
                    ${product.price.toFixed(2)}
                  </span>

                  {typeof product.rating === "number" ? (
                    <span className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)]">
                      Rating: {product.rating}
                    </span>
                  ) : null}
                  
                </div>

                <p className="mt-6 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  {product.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.brand ? (
                    <div className="rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] p-4 backdrop-blur-xl">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                        Brand  </div>
                      <div className="mt-2 text-base font-bold text-[var(--text-primary)]">
                        {product.brand}
                      </div>
                    </div>
                  ) : null}

                  {product.category ? (
                    <div className="rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] p-4 backdrop-blur-xl">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                        Category
                      </div>
                     
                      <div className="mt-2 text-base font-bold text-[var(--text-primary)]">
                        {product?.category}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="rounded-[34px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-6 shadow-[0_28px_70px_-44px_rgba(0,0,0,0.78)] backdrop-blur-2xl sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                      Add to cart
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      Choose how many of this product you want to add right now.
                    </p>
                  </div>

                  <div className="flex items-center justify-between rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl sm:min-w-44">
                    <button
                      className="grid h-10 w-10 place-items-center rounded-full text-lg font-bold text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)]/20 hover:text-[var(--accent)]"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>

                    <div className="text-center">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                        Quantity
                      </div>
                      <div className="text-xl font-black text-[var(--text-primary)]">{quantity}</div>
                    </div>

                    <button
                      className="grid h-10 w-10 place-items-center rounded-full text-lg font-bold text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)]/20 hover:text-[var(--accent)]"
                      onClick={() => setQuantity((current) => current + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[var(--accent-soft)] active:scale-95 "
                    onClick={handleAddToCart}
                  >
                    Add {quantity} to cart
                  </button>

                  <Link
                    to="/cart"
                    className="rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] px-6 py-3 text-center text-sm font-semibold text-[var(--text-secondary)] backdrop-blur-lg transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
                  >
                    Go to cart
                  </Link>
                  
                </div>
              </div>
            </div>
{/* not here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
