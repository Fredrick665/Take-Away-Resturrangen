import { create } from 'zustand';
import { CartState } from '../types/interface';


// Funktion som laddar tillståndet från localStorage
const loadCartState = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        return parsedCart;
    }
    // Returnerar standardtillstånd om inget finns i localStorage
    return {
        items: [
            { id: 1, name: 'Sushi One', price: 1500, quantity: 1, notes: '' },
            { id: 2, name: 'Sushi Two', price: 800, quantity: 3, notes: '' },
            { id: 3, name: 'Sushi Three', price: 500, quantity: 3, notes: '' },
        ],
        totalQuantity: 0,
    };
};

// Skapar en butik (store) med hjälp av zustand
export const useCartStore = create<CartState>((set) => {
    const { items, totalQuantity } = loadCartState(); // Ladda tillstånd från localStorage

    return {
        items: items,
        totalQuantity: totalQuantity,

        addItem: (id) =>
            set((state) => {
                const updatedItems = state.items.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
                const totalQuantity = updatedItems.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                );
                localStorage.setItem(
                    'cart',
                    JSON.stringify({ items: updatedItems, totalQuantity })
                ); // Spara tillstånd till localStorage
                return {
                    items: updatedItems,
                    totalQuantity,
                };
            }),

        subtractItem: (id: number) =>
            set((state) => {
                // mappar produkterna och minskar mängden för det matchande ID
                const updatedItems = state.items
                    .map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                    )
                    .filter((item) => item.quantity > 0); // Tar bort produkter med mängd <= 0

                // Beräknar den totala mängden produkter i kundvagnen
                const totalQuantity = updatedItems.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                );

                // Uppdatera localStorage
                localStorage.setItem(
                    'cart',
                    JSON.stringify({ items: updatedItems, totalQuantity })
                );

                //  Returnerar de nya uppgifterna till tillståndet
                return {
                    items: updatedItems,
                    totalQuantity,
                };
            }),



        updateNotes: (id, notes) =>
            set((state) => {
                const updatedItems = state.items.map((item) =>
                    item.id === id ? { ...item, notes } : item   // Uppdatera anteckningar för den matchade artikeln
                );
                localStorage.setItem(
                    'cart',
                    JSON.stringify({
                        items: updatedItems,
                        totalQuantity: updatedItems.reduce(
                            (sum, item) => sum + item.quantity,
                            0    // Beräkna totalantalet artiklar igen
                        ),
                    })
                );
                return {
                    items: updatedItems,
                    totalQuantity: updatedItems.reduce(
                        (sum, item) => sum + item.quantity,
                        0    // Uppdatera totalantalet artiklar
                    ),
                };
            }),
    };
});


