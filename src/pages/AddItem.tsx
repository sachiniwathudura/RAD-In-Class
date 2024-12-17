import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { Item } from "../model/Item";
import { ItemContext } from "../component/ItemProvider";

export function AddItem() {
    const navigate = useNavigate();
    const context = useContext(ItemContext);

    if (!context) {
        throw new Error("ItemContext must be used within an ItemProvider");
    }

    const { items, setItems } = context;

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    function handleSubmit() {
        const newItem = new Item(name, description, price, Number(quantity));
        setItems([...items, newItem]);
        navigate("/");
    }

    return (
        <div>
            <header><h2>Add Item</h2></header>
            <br />
            <input name="Name" type="text" placeholder="Item Name" onChange={(e) => setName(e.target.value)} />
            <input name="Description" type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input name="Price" type="number" placeholder="Price" onChange={(e) => setPrice(Number(e.target.value))} />
            <input name="Quantity" type="number" placeholder="Quantity" onChange={(e) => setQuantity(Number(e.target.value))} />
            <br /> <br/>
            <button onClick={handleSubmit}>Add</button>
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
