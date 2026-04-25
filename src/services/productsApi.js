import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";
const LIMIT = 6;

// sir i think im not doing this right , it almost feels like im fighting the API ,
// bc i wanted to fetch only tech related products from the start using query param 
// then i had to update and add inifiniteScroll for which i had to change how i fetched data 
// but it didnt provide the desired products which i wanted so i took ai guidance for this ,
// tried to find another api but failed ,
// pls guide me if im doing anything wrong 
// or needs improvement , 
// here is my email: humirakhaliq2@gmail.com

const TECH_CATEGORIES = ["laptops","headphones","smartphones", "mobile-accessories","tablets"];

export const fetchProducts = async ({ pageParam = 0 }) => {
  
  const responses = await Promise.all(
    TECH_CATEGORIES.map((cat) =>
      axios.get(`${BASE_URL}/category/${cat}`, {
        params: {
          limit: LIMIT,
          skip: pageParam,
        },
      })
    )
  );

//combine them all in one array
  const products = responses.flatMap((res) => res.data.products);

  const hasMore = responses.some(
    (res) => pageParam + LIMIT < res.data.total
  );

  return {
    products,
    nextSkip: pageParam + LIMIT,
    hasMore,
  };
};

// This func sends the review to api
export const submitReview = async ({ productId, review }) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ review }),
  });

  if (!res.ok) throw new Error("Failed to submit review");
  return res.json();
};