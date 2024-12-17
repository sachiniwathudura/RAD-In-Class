import { createContext, useState, ReactNode } from "react";
import { Item } from "../model/Item"; // Adjust the import path as necessary

interface ItemContextType {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const ItemContext = createContext<ItemContextType | undefined>(undefined);

export function ItemProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<Item[]>([]);

    return (
        <ItemContext.Provider value={{ items, setItems }}>
            {children}
        </ItemContext.Provider>
    );
}
