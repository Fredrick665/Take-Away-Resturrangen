// Typ för en enskild artikel i kundvagnen
export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    notes: string;
}

// Typ för kundvagnens tillstån
export interface CartState {
    items: CartItem[]; // Lista över artiklar i kundvagnen
    totalQuantity: number; // Det totala antalet artiklar i kundvagnen
    addItem: (id: number) => void; // Funktion för att lägga till en artikel i kundvagnen
    subtractItem: (id: number) => void; // Funktion för att ta bort en artikel från kundvagnen
    updateNotes: (id: number, notes: string) => void; // Funktion för att uppdatera anteckningar för en artikel
}


// Förtfattare Katerina