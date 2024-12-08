export interface CartItem {
  id: number;
  itemId: string;
  category: string;
  price: number;
  imageurl: string;
  title: string;
  desc: string;
  quantity: number;
  message: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  message?: string;
}
export interface Order {
  createdAt: string;
  message: string;
  id: string;
  updatedAt: string;
  orderItems: OrderItem[];
  status: "Locked" | "Pending" | "Cancelled";
}
export interface ApiResponse {
  message: string;
  orders: Order[];
}
export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  addItem: (menuItem: CartItem) => void;
  subtractItem: (itemId: string) => void;
  updateMessage: (itemId: string, message: string) => void;
}

// Förtfattare Katerina
//Ändringar av Fredrick Har typat om en del
//Ändringar av Fredrick Har lagt till interfaces för API svar och Ordrar
