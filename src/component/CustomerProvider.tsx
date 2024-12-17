import { createContext, useState, ReactNode } from "react";
import { Customer } from "../model/Customer";

interface CustomerContextType {
    customers: Customer[];
    setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}

export const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export function CustomerProvider({ children }: { children: ReactNode }) {
    const [customers, setCustomers] = useState<Customer[]>([]);

    return (
        <CustomerContext.Provider value={{ customers, setCustomers }}>
            {children}
        </CustomerContext.Provider>
    );
}
