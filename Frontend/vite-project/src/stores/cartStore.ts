import { create } from 'zustand';
import { CartState } from '../types/interface';


export const useCartStore = create<CartState>((set) => ({
  items: [],
  totalQuantity: 0,
  addItem: (id) =>
    set((state) => {
      const itemExists = state.items.find((item) => item.id === id);
      let updatedItems;
      
      if (itemExists) {
        updatedItems = state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        
        updatedItems = [...state.items, { id, name: 'New Dish', price: 1000, quantity: 1, notes: '' }];
      }
  
      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      
      localStorage.setItem(
        'cart',
        JSON.stringify({ items: updatedItems, totalQuantity })
      ); // Save to localStorage
      return {
        items: updatedItems,
        totalQuantity,
      };
    }),
  
  
  subtractItem: (id) => set((state) => {
    const updatedItems = state.items
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Remove items with 0 quantity
    const totalQuantity = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem('cart', JSON.stringify({ items: updatedItems, totalQuantity }));
    return { items: updatedItems, totalQuantity };
  }),
  updateNotes: (id, notes) => set((state) => {
    const updatedItems = state.items.map((item) =>
      item.id === id ? { ...item, notes } : item
    );
    localStorage.setItem('cart', JSON.stringify({ items: updatedItems, totalQuantity: updatedItems.reduce((sum, item) => sum + item.quantity, 0) }));
    return { items: updatedItems, totalQuantity: updatedItems.reduce((sum, item) => sum + item.quantity, 0) };
  }),
}));

// Förtfattare Katerina
// Ändrat av Miklós för att man ska kunna lägga maträtt på varukorg