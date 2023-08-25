import { createSlice } from "@reduxjs/toolkit";
import { productProps } from "../Components/Product";

    export type cartItem = {
        product: productProps,
        totalPrice: number,
        quantity: number
    }
    interface CartState {
        itemsList: cartItem[],
        totalPrice: number,
        showCart: boolean

    }
  
    const initialState: CartState = {
        itemsList: [],
        totalPrice:0,
        showCart:false
    };
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            const newItem:productProps = action.payload;

            const existingItem:cartItem|undefined = state.itemsList.find((item)=> item.product.id === newItem.id);

            if(existingItem){existingItem.quantity++;existingItem.totalPrice+= newItem.price;}
            else{state.itemsList.push({product:newItem,totalPrice:newItem.price,quantity:1})}
            state.totalPrice+=newItem.price

        },
        removeFromCart(state,action){
            const id:number = action.payload;
            const existingItem:cartItem|undefined = state.itemsList.find((item)=> item.product.id === id);
            if(existingItem){
                if(existingItem.quantity ===1 ){const temp:cartItem[] = state.itemsList.filter((item)=> item.product.id != id); state.itemsList=temp}
                else{existingItem.quantity--; existingItem.totalPrice -= existingItem.product.price;}
                state.totalPrice -= existingItem.product.price
            }
            
            
        },
        setShowCart(state){
            state.showCart = !state.showCart 
        }

    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;