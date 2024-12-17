// import {CustomerContext} from "../component/CustomerProvider.tsx";
// import {useContext} from "react";
// import {Customer} from "../model/Customer.ts";
//
// export function Dashboard() {
//     const context = useContext(CustomerContext);
//
//     if (!context) {
//         throw new Error("CustomerContext must be used within a CustomerProvider");
//     }
//
//     const {customers} = context;
//     return (
//         <div>
//             <h1>Welcome to the Dashboard</h1>
//             <p>This is your personalized dashboard.</p>
//
//         </div>
//     );
// }

////////////////////////

import { useContext } from "react";
import { CustomerContext } from "../component/CustomerProvider";
import { ItemContext } from "../component/ItemProvider";
// import { Customer } from "../model/Customer";
// import { Item } from "../model/Item";

export function Dashboard() {
    const customerContext = useContext(CustomerContext);
    const itemContext = useContext(ItemContext);

    if (!customerContext) {
        throw new Error("CustomerContext must be used within a CustomerProvider");
    }

    if (!itemContext) {
        throw new Error("ItemContext must be used within an ItemProvider");
    }

    const { customers } = customerContext;
    const { items } = itemContext;

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>This is your personalized dashboard.</p>

            <h2>Customers</h2>
            <table border={1} cellPadding="8" style={{ marginTop: "20px" }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.email}>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Items</h2>
            <table border={1} cellPadding="8" style={{ marginTop: "20px" }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

