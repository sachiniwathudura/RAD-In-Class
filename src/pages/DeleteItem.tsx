import { useContext } from "react";
import { useNavigate } from "react-router";
import { ItemContext } from "../component/ItemProvider";

export function DeleteItem() {
    const context = useContext(ItemContext);

    if (!context) {
        throw new Error("ItemContext must be used within an ItemProvider");
    }

    const { setItems, items } = context;
    const navigate = useNavigate();

    function handleDeleteItem({itemName}: { itemName: any }) {
        setItems((prevItems) => prevItems.filter(item => item.name !== itemName)); // Delete the item by name
        navigate("/");
    }

    return (
        <div>
            <h2>Delete Item</h2>
            <table border={1} cellPadding="8" style={{ marginTop: "20px" }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button onClick={() => handleDeleteItem({itemName: {itemName: item.name}})}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
