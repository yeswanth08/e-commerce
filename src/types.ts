export interface Product {
  id: number;
  name: string;
  imageSrc: string;
  price: string;
  quantity?: number;
  rating?: number;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (id: number, name: string, imageSrc: string, price: string) => void;
  getTotalPrice: () => { total: number, discount: number, savings: number, totalPriceBeforeDiscount: number };
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
  proceedToCheckout: () => void;
}
