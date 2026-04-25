// this file contains all redux cart selectors so
// instead of using useSelector directly in components, we centralize
//  all reading logic here for better structure and reusability.

export const ItemsInCart = (state) => state.cart.items;

export const TotalItemsInCart = (state) =>
  ItemsInCart(state).reduce((sum, item) => sum + item.qty, 0);

export const CartTotalPrice = (state) =>
  ItemsInCart(state).reduce((sum, item) => sum + item.price * item.qty, 0);

export const NumberOfProdInCart = (state) => ItemsInCart(state).length;

export const QuantityOfProd = (productId) => (state) =>
  ItemsInCart(state)
    .filter((item) => item.productId === productId)
    .reduce((sum, item) => sum + item.qty, 0);
