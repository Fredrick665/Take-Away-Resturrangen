import { create } from "zustand";
import { CartState, CartItem } from "../types/interface";

export const useCartStore = create<CartState>((set) => ({
  items: [] as CartItem[],
  totalQuantity: 0,

  addItem: (menuItem: CartItem) =>
    set((state) => {
      const itemExists = state.items.find(
        (item) => item.itemId === menuItem.itemId
      );
      let updatedItems;

      if (itemExists) {
        updatedItems = state.items.map((item) =>
          item.itemId === menuItem.itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...menuItem, quantity: 1 }];
      }

      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      localStorage.setItem(
        "cart",
        JSON.stringify({ items: updatedItems, totalQuantity })
      );

      return {
        items: updatedItems,
        totalQuantity,
      };
    }),

  subtractItem: (id: string) =>
    set((state) => {
      const updatedItems = state.items
        .map((item) =>
          item.itemId === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);

      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      localStorage.setItem(
        "cart",
        JSON.stringify({ items: updatedItems, totalQuantity })
      );

      return {
        items: updatedItems,
        totalQuantity,
      };
    }),

  updateMessage: (id: string, message: string) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.itemId === id ? { ...item, message } : item
      );

      const totalQuantity = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      localStorage.setItem(
        "cart",
        JSON.stringify({ items: updatedItems, totalQuantity })
      );

      return {
        items: updatedItems,
        totalQuantity,
      };
    }),
}));

// Förtfattare Katerina
// Ändrat av Miklós för att man ska kunna lägga maträtt på varukorg)
// Stora Ändringar av Fredrick för att kunna läsa in den dynamiska datan från APIet istället för hårdkodad data. Har typat om jättemycket också.
