export const isTechProduct = (product) => {
  const techKeywords = [
    "phone",
    "laptop",
    "headphone",
    "earbud",
    "headset",
    "smartphones",
    "tablet,"
  ];

  const title = product.title?.toLowerCase() ?? "";
  const category = product.category?.toLowerCase() ?? "";

  return techKeywords.some(
    (word) => title.includes(word) || category.includes(word)
  );
};