import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialCartState = {
  items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addToCart:{
          reducer(state, action){
            const p = action.payload;

            const existing = state.items.find(
            (x) => x.productId === p.productId)

            if(existing){
              existing.qty += 1;
            }else{
                state.items.push(p);
            }
          },
           prepare(product){
                return {
                    payload: {
                        id: nanoid(),
                        productId: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        thumbnail: product.thumbnail || product.image,
                        qty: 1
                    }
                }
            }
        },
        removeFromCart(state, action){
            const id = action.payload;
            state.items = state.items.filter((x)=> x.id !== id);
        },
        incQty(state, action){
            const id = action.payload;
            const item = state.items.find((x)=> x.id == id);
            if(item)
                item.qty+=1;
        },
        decQty (state, action){
            const id = action.payload;
            const item = state.items.find((x)=> x.id == id);
            if(!item)
                return;

            item.qty -=1;

            if(item.qty<=0){
                state.items = state.items.filter((x)=> x.id !== id);
            }
        },
        clearCart(state){
            state.items = [];
        },
    }
});

export const {addToCart, removeFromCart, incQty, decQty, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
