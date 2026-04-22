import axios from "axios";

const BASE_URL = "https://dummyjson.com/products/search";

export const fetchProducts = async () => {
  const queries = [
    "headphone",
     "earbuds",
      "laptop",
      "headset",
       "phone",
      ]; //lets see which one to remove then

  const responses = await Promise.all(
    queries.map((q) =>
    axios.get(BASE_URL, {
      params: { q }
    })
   )
  );

  // Merge and de-duplicate because the same product can match multiple queries.
  const products = Array.from(
    new Map(
      responses
        .flatMap((res) => res.data.products)
        .map((product) => [product.id, product])
    ).values()
  );

  return { products };
};
