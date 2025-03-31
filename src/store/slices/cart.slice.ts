import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const discountRate = 0.1;
const shipping = 129;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<Product, 'quantity'> & { quantity?: number }>) => {
      const { id, name, imageSrc, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        if (existingItem.quantity! >= 10) return;
        existingItem.quantity! += 1;
      } else {
        state.items.push({ id, name, imageSrc, price, quantity: 1 });
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; newQuantity: number }>) => {
      const { id, newQuantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity = newQuantity;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    proceedToCheckout: (state) => {
      state.items = [];
    },
  },
  selectors: {
    getTotalPrice: (state) => {
      const totalPriceBeforeDiscount = state.items.reduce((total, item) => {
        const itemPrice = parseFloat(item.price.replace(/₹|,/g, ""));
        return total + itemPrice * item.quantity!;
      }, 0);
      
      const discount = Math.round(totalPriceBeforeDiscount * discountRate);
      const total = Math.round(totalPriceBeforeDiscount - discount + shipping);
      const savings = Math.round(totalPriceBeforeDiscount - total);
      
      return { total, discount, savings, totalPriceBeforeDiscount };
    },
  }
});

export const { addToCart, updateQuantity, removeFromCart, proceedToCheckout } = cartSlice.actions;
export const selectCart = (state: { cart: CartState }) => state.cart.items;
export const selectTotalPrice = cartSlice.selectors.getTotalPrice;
export default cartSlice.reducer;