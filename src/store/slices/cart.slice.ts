import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, PriceDetailsProps } from "../../types";

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const discountRate = 0.1;
const shipping = 129;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<Product, 'quantity'> & { quantity?: number }>) => {
      const { id, name, imageSrc, price } = action.payload;
      const existingItem = state.cart.find(item => item.id === id);
      
      if (existingItem) {
        if (existingItem.quantity! >= 10) return;
        existingItem.quantity! += 1;
      } else {
        state.cart.push({ id, name, imageSrc, price, quantity: 1 });
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; newQuantity: number }>) => {
      const { id, newQuantity } = action.payload;
      const item = state.cart.find(item => item.id === id);
      if (item) item.quantity = newQuantity;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    proceedToCheckout: (state) => {
      state.cart = [];
    },
  },
  selectors: {
    getTotalPrice: (state): PriceDetailsProps => {
      const totalPriceBeforeDiscount = state.cart.reduce((total, item) => {
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
export const selectCart = (state: { cart: CartState }) => state.cart.cart;
export const selectTotalPrice = cartSlice.selectors.getTotalPrice;
export default cartSlice.reducer;