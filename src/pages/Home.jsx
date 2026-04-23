import { useState } from "react";

import { useProducts } from "../hooks/useProducts";
import ProductList from "../components/product/productList";
import { SearchFilter } from "../components/home/SearchFilter";

const categories = ["All", "smartphones", "laptops", "audio"];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data, isLoading, isError } = useProducts();

  const products = data?.products ?? [];
  
  const filteredProducts = products.filter((product) => {
    const title = product.title.toLowerCase();

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    if (selectedCategory === "audio") {
      matchesCategory =
        title.includes("headset") ||
        title.includes("airpods");
    }

    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <section className="mx-auto w-full max-w-7xl px-4 py-10 text-[var(--text-secondary)] sm:px-6 lg:px-8">
        Loading products...
      </section>
    );
  }

  if (isError) {
    return (
      <section className="mx-auto w-full max-w-7xl px-4 py-10 text-[var(--text-secondary)] sm:px-6 lg:px-8">
        Error loading products.
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(169,116,79,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom,rgba(169,116,79,0.1),transparent_30%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
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
      </div>
    </section>
  );
};

export default Home;
