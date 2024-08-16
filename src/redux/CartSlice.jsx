import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
console.log(initialState)

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            state.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        incrementQuantity: (state, action) => {
            state=state.map(item => {
                if (item.id === action.payload) {
                    item.quantity ++;
                    
                }
                return item
            })
        },
        decrementQuantity: (state, action) => {
            state=state.map(item => {

                if(item.quantity!=1){
                    if (item.id === action.payload) {
                        item.quantity --;
                    }
                }
                
                return item
            })
        }
    }
})

export const { addtoCart, deleteFromCart, incrementQuantity, decrementQuantity } = CartSlice.actions
export default CartSlice.reducer