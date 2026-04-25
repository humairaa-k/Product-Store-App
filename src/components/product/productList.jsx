import ProductCard from "./productCard";
import { useSettings } from "../../features/context/settings/useSettings";

const ProductList = ({ products }) => {
  const { state } = useSettings();
  return (
    <div
      className={
        state.view === "grid"
          ? "grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
          : "flex flex-col gap-6"
      }
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} view={state.view} />
      ))}
    </div>
  );
};

export default ProductList;
