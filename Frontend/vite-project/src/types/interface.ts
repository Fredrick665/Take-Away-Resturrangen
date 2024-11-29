export interface CartItem {
  id: number;
  itemId: string;
  category: string;
  price: number;
  imageurl: string;
  title: string;
  desc: string;
  quantity: number;
  notes: string;
}
export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  notes?: string;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  addItem: (menuItem: CartItem) => void;
  subtractItem: (itemId: string) => void;
  updateNotes: (itemId: string, notes: string) => void;
}

// Förtfattare Katerina
//Ändringar av Fredrick Har typat om en del
