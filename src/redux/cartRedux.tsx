import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state:any, action:any) => {
            state.products.push(action?.payload?.product);
            state.quantity += 1;
            state.total += action?.payload?.price;
        },
        deleteProduct: (state:any, action:any) => {
            const index = state.products.findIndex((product:any) => product?.id === action.payload.id);
            state.products.splice(index, 1);
            state.quantity -= 1;
            state.total -= state?.products[index]?.price?? 0;
        }
    }
});

export const { addProduct ,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;