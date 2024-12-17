import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { ItemContext } from "../component/ItemProvider";
import { Item } from "../model/Item";

export function UpdateItem() {
    const navigate = useNavigate();
    const context = useContext(ItemContext);

    if (!context) {
        throw new Error("ItemContext must be used within an ItemProvider");
    }

    const { items, setItems } = context;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    function handleRowClick(item: Item) {
        setName(item.name);
        setDescription(item.description);
        setPrice(item.price.toString());
        setQuantity(item.quantity.toString());
    }

    // Function to update the item
    function handleUpdateItem() {
        const updatedItems = items.map((item) =>
            item.name === name ? { ...item, description, price: parseFloat(price), quantity: parseInt(quantity) } : item
        );
        setItems(updatedItems);
        navigate("/");
    }

    return (
        <div>
            <header>Update Item</header>
            <br />
            <input name="Name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input name="Description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input name="Price" type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input name="Quantity" type="text" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <br />
            <button onClick={handleUpdateItem}>Update</button>
            <br />
            <table border={1} cellPadding="8" style={{ marginTop: "20px" }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
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
                            <button onClick={() => handleRowClick(item)}>Edit</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
