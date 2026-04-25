// import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from "../services/productsApi";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,

    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextSkip : undefined;
    },

    staleTime: 1000 * 60 * 5,
  });
};
