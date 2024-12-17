import { useContext } from "react";
import { useNavigate } from "react-router";
import { CustomerContext } from "../component/CustomerProvider.tsx";

export function DeleteCustomer() {
    const context = useContext(CustomerContext);

    if (!context) {
        throw new Error("CustomerContext must be used within a CustomerProvider");
    }

    const { setCustomers, customers } = context;
    const navigate = useNavigate();

    function handleDeleteCustomer() {
        setCustomers((customers) => customers.slice(0, -1));
        navigate("/");
    }

    return (
        <div>
            <h2>Delete Customer</h2>
            <table border={1} cellPadding="8" style={{ marginTop: "20px" }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                    <tr key={customer.email}>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>
                            <button onClick={handleDeleteCustomer}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    );
}
