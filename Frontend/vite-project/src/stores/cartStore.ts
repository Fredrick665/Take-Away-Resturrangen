import { create } from 'zustand';

// Typ för en enskild artikel i kundvagnen
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    notes: string;
}

// Typ för kundvagnens tillstån
// Typ för kundvagnens tillstån
interface CartState {
    items: CartItem[]; // Lista över artiklar i kundvagnen
    totalQuantity: number; // Det totala antalet artiklar i kundvagnen
    addItem: (id: number) => void; // Funktion för att lägga till en artikel i kundvagnen
    subtractItem: (id: number) => void; // Funktion för att ta bort en artikel från kundvagnen
    updateNotes: (id: number, notes: string) => void; // Funktion för att uppdatera anteckningar för en artikel
}

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

        subtractItem: (id) =>
            set((state) => {
                const updatedItems = state.items.map((item) =>
                    item.id === id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }   // Minska antal om det är större än 1
                        : item   // returnera oförändrad artikel
                );
                const totalQuantity = updatedItems.reduce(
                    (sum, item) => sum + item.quantity,
                    0           // Beräkna totalantalet artiklar
                );
                localStorage.setItem(
                    'cart',
                    JSON.stringify({ items: updatedItems, totalQuantity })
                ); // Spara tillstånd till localStorage
                return {
                    items: updatedItems,
                    totalQuantity,    // Uppdatera totalantalet
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


