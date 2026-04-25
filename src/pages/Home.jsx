import { useState } from "react";

import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/product/productList";
import { SearchFilter } from "../components/home/SearchFilter";
import { Showcase } from "../components/home/Showcase";
import Loader from "../components/ui/Loader";
import ErrorState from "../components/ui/ErrorState";
import { isTechProduct } from "../../utils/techProducts";

const categories = ["All", "smartphones", "laptops", "audio"];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data, isLoading, isError, refetch, fetchNextPage, 
          hasNextPage, isFetchingNextPage,} = useProducts();


  const allProducts = data?.pages?.flatMap((page) => page.products) ?? [];

  // keep only tech related products
  const techProducts = allProducts.filter(isTechProduct);

  // search
  const searchedProducts = techProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //category filter
  const filteredProducts = searchedProducts.filter((product) => {
    if (selectedCategory === "All") return true;

    const title = product.title.toLowerCase();
//audio filter
    if (selectedCategory === "audio") {
      return title.includes("headset") || title.includes("headphone") 
                   || title.includes("earbud") || title.includes("mobile-accessories");
    }

    return product.category === selectedCategory;
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorState message="Failed to load products." onRetry={refetch} />;
  }

  return (
    <section className="relative overflow-hidden bg-[var(--bg-main)]">
      <Showcase />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <SearchFilter
          search={searchTerm}
          setSearch={setSearchTerm}
          selectedCategory={selectedCategory}
          setCategory={setSelectedCategory}
          categories={categories}
        />

        <div className="mx-auto w-full">
          <ProductList products={filteredProducts} />
        </div>

        {/* when filters return nothing */}
        {filteredProducts.length === 0 && !isLoading && (
          <p className="text-center text-sm text-[var(--text-secondary)]">
            No tech products found. Try a different search or category.
          </p>
        )}

        {/* Load more btn */}
        <div className="flex justify-center mt-10">
          {hasNextPage && (
            <button
              onClick={() => fetchNextPage()}
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-white font-semibold transition hover:bg-[var(--accent-soft)]"
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
