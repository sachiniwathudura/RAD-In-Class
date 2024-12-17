//
// import './App.css'
// // import {Dashboard} from "./component/Dashboard.tsx";
// // import {Login} from "./component/Login.tsx";
// // import SmallButtonComponent from "./component/ButtonComponent.tsx";
// // import SmallButtonComponent from "./component/ButtonComponent.tsx";
// // import {Item} from "./component/Item.tsx";
// import Subject from "./component/Subject.tsx";
//
// // import {itemList} from "./item.ts";
// function App() {
//
//     // // set item to the list
//     // const  itemArray =[];
//     // for (const item of itemList) {
//     //     itemArray.push(<Item title={item.title} description={item.description}></Item>);
//     // }
//
//     // const  isLoggedIn = false;
//     // let content;
//     // if (isLoggedIn) {
//     //     content =<Dashboard/>
//     // }else {
//     //     content = <Login/>
//     }
//   // @ts-ignore
// return (
//       <>
//
//           <Subject name='RAD'>
//               Lorem Ipsum is simply dummy text of the
//           </Subject>
//           <Subject name='MAD'>
//               Lorem Ipsum is simply dummy text of the
//           </Subject>
//           <Subject name='OOP'>
//               Lorem Ipsum is simply dummy text of the
//           </Subject>
//           {/*<SmallButtonComponent children='Add'></SmallButtonComponent>*/}
//           {/*<SmallButtonComponent children='Update'></SmallButtonComponent>*/}
//           {/*<SmallButtonComponent children='Delete'></SmallButtonComponent>*/}
//
//           {/*/!*map item list*!/*/}
//           {/*/!*{itemList.map((item, index) => (*!/*/}
//           {/*/!*    <Item key={index} title={item.title} description={item.description} />*!/*/}
//           {/*/!*))}*!/*/}
//
//           {/*/!*<Item title ={itemList[0].title} description ={itemList[0].description}></Item>*!/*/}
//           {/*/!*<Item title ={itemList[1].title} description ={itemList[1].description}></Item>*!/*/}
//           {/*/!*<Item title ={itemList[2].title} description ={itemList[2].description}></Item>*!/*/}
//
//           {/*{itemArray}*/}
//           {/*{content}*/}
//       </>
//   )
// }
//
// export default App


// import './App.css';
// import SmallButtonComponent from "./component/ButtonComponent.tsx";
// // import Subject from './component/Subject';
// function App() {
//     // return (
//         // <div style={{ padding: '20px' }}>
//         //     <Subject name="RAD">
//         //         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         //     </Subject>
//         //     <Subject name="MAD">
//         //         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         //     </Subject>
//         //     <Subject name="OOP">
//         //         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         //     </Subject>
//         // </div>
//
//      const handleClick =(name:string)=>{
//                 alert(name+'Click');
//             }
//
//     return (
//         <>
//             <SmallButtonComponent onSelect={handleClick}>Dashboard</SmallButtonComponent>
//             <SmallButtonComponent onSelect={handleClick}>Add Customer</SmallButtonComponent>
//             <SmallButtonComponent onSelect={handleClick}>Delete Customer</SmallButtonComponent>
//         </>
//
//
//     );
// }
//
// export default App;

// // task 02
// import './App.css'
// import { useState } from 'react';
// import SmallButtonComponent from './component/ButtonComponent';
// const App = () => {
//     const subjectDes = [
//         {
//             sName: 'JavaScript',
//             sDic: 'Lorem Ipsum JavaScript.'
//         },
//         {
//             sName: 'TypeScript',
//             sDic: 'It is a TypeScript.'
//         },
//         {
//             sName: 'RAD',
//             sDic: 'It is a RAD.'
//         }
//     ];
// const [content,setContent] = useState('default');
//     const handleClick = (name: string) => {
//         let desc;
//         subjectDes.map((subject) =>{
//             if (subject.sName === name) {
//                 desc = subject.sDic;
//             }
//         })
//         setContent(name);
//         alert(desc);
//     }
//     return (
//         // <div>
//         //     {/*{subjectDes.map((subject) => {*/}
//         //     {/*    return <SmallButtonComponent onSelect={handleClick}>{subject.sName}</SmallButtonComponent>*/}
//         //     {/*} )}*/}
//         // </div>
//         <>
//         <SmallButtonComponent onSelect={handleClick}>{subjectDes[0].sName}</SmallButtonComponent>
//         <SmallButtonComponent onSelect={handleClick}>{subjectDes[1].sName}</SmallButtonComponent>
//         <SmallButtonComponent onSelect={handleClick}>{subjectDes[2].sName}</SmallButtonComponent>
//           <br/>
//             {content}
//         </>
//     );
// };
//
// export default App;


// // task 04
//  import './App.css'
// import {useState} from "react";
//
// const App = () => {
//     const [count, setCount] = useState(0);
//     return (
//         <>
//             {count} <br/>
//             <button onClick={() => setCount(count + 1)}>Add</button>
//             <button onClick={() => setCount(count - 1)}>Delete</button>
//         </>
//     );
// };
//
// export default App;


// task 05
// import { useState } from 'react';
// import './App.css'
// import ButtonComponent from "./component/ButtonComponent.tsx";
//
// const App = () => {
//     const [count, setCount] = useState(0);
//
//     return (
//         <>
//             {count} <br/>
//             <ButtonComponent count={count} onClick={setCount}>Add</ButtonComponent>
//             <ButtonComponent count={count} onClick={setCount}>Delete</ButtonComponent>
//         </>
//     );
// };
//
// export default App;

// task -06 - 2024/06/12
// import { ChangeEvent, useState } from 'react';
// import './App.css';
//
// const App = () => {
//     const [userData, setUserData] = useState({
//         firstName: '',
//         lastName: '',
//     });
//
//     function handleEvent(event: ChangeEvent<HTMLInputElement>) {
//         const { name, value } = event.target;
//
//         setUserData({
//             ...userData,
//             [name]: value,
//         });
//     }
//
//     return (
//         <>
//             <input type="text" name="firstName" placeholder="First Name" onChange={handleEvent}
//             />
//             <input type="text" name="lastName" placeholder="Last Name" onChange={handleEvent}
//             />
//             <p>
//                 Hello: {userData.firstName} {userData.lastName}
//             </p>
//         </>
//     );
// };
//
// export default App;

// import { ChangeEvent, useState } from 'react';
// import './App.css';
//
// const App = () => {
//     const [userData, setUserData] = useState({
//         firstName: '',
//         lastName: '',
//     });
//     const [firstName,setFirstName] = useState({
//     firstName: '',
//     });
//     const [lastName,setLastName] = useState({
//     lastName: '',
//     });
//
//     function handleEvent() {
//         setUserData({
//             ...userData,
//             firstName: firstName,
//             lastName: lastName,
//         });
//     }
//
//     return (
//         <>
//             <input type="text" name="firstName" placeholder="First Name" onChange={e => setFirstName({ e.target.value })} />
//             <input type="text" name="lastName" placeholder="Last Name" onChange={e => setLastName({  e.target.value })} />
//             <button onClick={handleEvent}>Set Name</button>
//             <p>
//                 Hello: {userData.firstName} {userData.lastName}
//             </p>
//         </>
//     );
// };
//
// export default App;


// import { ChangeEvent, useState } from 'react';
// import './App.css';
// import {Customer} from "./model/Customer.ts";
//
// function App() {
//     const []
//     const [customers,setCustomers] = useState<Customer[]>([]);
//     const[name,setName] = useState("");
//     const[address,setAddress] = useState("");
//     const[phone,setPhone] = useState("");
//     const[email,setEmail] = useState("");
//
//     function addCustomers() {
//         const newCustomers = new Customer(name, address, email, phone);
//         setCustomers((customers) => [...customers,newCustomers]);
//     }
//
//     return (
//         <>
//             <input name='Name' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
//             <input name='Address' type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
//             <input name='Email' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
//             <input name='Phone' type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>
//
//             <button onClick={addCustomers}>Add Customer</button>
//
//             {customers.map((customer) => (
//
//                 <div>
//                     {customer.name+" "+customer.address+" "+customer.email+""+customer.phone}
//                 </div>
//             ))}
//
//
//         </>
//     )
// }
//
// export default App

// // All crud
// import {ChangeEvent, useState } from 'react';
// import './App.css';
// import {Customer} from "./model/Customer.ts";
//
// function App() {
//     const [customers,setCustomers] = useState<Customer[]>([]);
//     const[name,setName] = useState("");
//     const[address,setAddress] = useState("");
//     const[phone,setPhone] = useState("");
//     const[email,setEmail] = useState("");
//
//     function addCustomers() {
//         const newCustomers = new Customer(name, address, email, phone);
//         setCustomers((customers) => [...customers,newCustomers]);
//     }
//
//     // object array ekk hdl ek set krnw - object array eke antima array ek natuw ithuru tik return krnw
//     function deleteCustomers() {
//         setCustomers((customers) => customers.slice(0,-1));
//     }
//
//     function deleteByEmail() {
//         setCustomers((customers) => customers.filter((customer) => customer.email !== email));
//     }
//
//     function updateCustomers() {
//         setCustomers((customers) => customers.map((customer) => customer.email === email?{...customers,name:name,address:address,phone:phone,email:email}:customer));
//     }
//
//     return (
//         <>
//             <p>Customer Management</p>
//             <input name='Name' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
//             <input name='Address' type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>
//             <input name='Email' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
//             <input name='Phone' type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>
//                 <br/>
//             <button onClick={addCustomers}>Add</button>
//             <button onClick={deleteCustomers}>Delete</button>
//             <button onClick={deleteByEmail}>Delete by Email</button>
//             <button onClick={updateCustomers}>Update Customer</button>
//
//             {customers.map((customer) => (
//                 <div key={customer.email}>
//                     {customer.name} {customer.address} {customer.email} {customer.phone}
//                 </div>
//             ))}
//
//
//         </>
//     )
// }
//
// export default App
//
// // import { useState } from 'react';
// import './App.css';
// import { Item } from "./model/Item.ts";
//
// function App() {
//     const [items, setItems] = useState<Item[]>([]);
//     const [name, setName] = useState("");
//     const [price, setPrice] = useState("");
//     const [qty, setQty] = useState("");
//     const [editIndex, setEditIndex] = useState<number | null>(null);
//
//     // Add a new item
//     function addItem() {
//         if (!name || !price || !qty) {
//             alert("Please fill in all fields!");
//             return;
//         }
//
//         const newItem = new Item(name, price, qty);
//
//         if (editIndex !== null) {
//             // Update existing item
//             const updatedItems = [...items];
//             updatedItems[editIndex] = newItem;
//             setItems(updatedItems);
//             setEditIndex(null); // Reset edit mode
//         } else {
//             // Add new item
//             setItems((items) => [...items, newItem]);
//         }
//
//         // Clear the input fields
//         setName("");
//         setPrice("");
//         setQty("");
//     }
//
//     // Delete an item
//     function deleteItem(index: number) {
//         setItems((items) => items.filter((_, i) => i !== index));
//     }
//
//     // Edit an item
//     function editItem(index: number) {
//         const item = items[index];
//         setName(item.name);
//         setPrice(item.price);
//         setQty(item.qty);
//         setEditIndex(index);
//     }
//
//     return (
//         <div className="App">
//             <h1>Item Management</h1>
//             <div>
//                 <input
//                     name="Name"
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                     name="Price"
//                     type="text"
//                     placeholder="Price"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                 />
//                 <input
//                     name="Qty"
//                     type="text"
//                     placeholder="Quantity"
//                     value={qty}
//                     onChange={(e) => setQty(e.target.value)}
//                 />
//                 <br />
//                 <button onClick={addItem}>
//                     {editIndex !== null ? "Update Item" : "Add Item"}
//                 </button>
//             </div>
//             <br />
//             <table border="1">
//                 <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Actions</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {items.map((item, index) => (
//                     <tr key={index}>
//                         <td>{item.name}</td>
//                         <td>{item.price}</td>
//                         <td>{item.qty}</td>
//                         <td>
//                             <button onClick={() => editItem(index)}>Edit</button>
//                             <button onClick={() => deleteItem(index)}>Delete</button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
//
// export default App;

// import "./App.css";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import { Dashboard } from "./pages/Dashboard";
// import { Error } from "./pages/Error";
// import { AddCustomer } from "./pages/AddCustomer";
// import { UpdateCustomer } from "./pages/UpdateCustomer";
// import { DeleteCustomer } from "./pages/DeleteCustomer";
// import { RootLayout } from "./component/RootLayout";
// import { CustomerProvider } from "./component/CustomerProvider";
// import {ItemProvider} from "./component/ItemProvider.tsx";
//
// function App() {
//     const routes = createBrowserRouter([
//         {
//             path: "/",
//             element: <RootLayout />,
//             children: [
//                 { path: "/", element: <Dashboard /> },
//                 { path: "/add", element: <AddCustomer /> },
//                 { path: "/update", element: <UpdateCustomer /> },
//                 { path: "/delete", element: <DeleteCustomer /> },
//             ],
//             errorElement: <Error />,
//         },
//         {
//             path: "*",
//             element: <Error />,
//         },
//     ]);
//
//     return (
//
//             <CustomerProvider>
//                 <RouterProvider router={routes} />
//             </CustomerProvider>
//
//     );
// }
//
// export default App;

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router"; // Use 'react-router-dom'
import { Dashboard } from "./pages/Dashboard";
import { Error } from "./pages/Error";
import { AddCustomer } from "./pages/AddCustomer";
import { UpdateCustomer } from "./pages/UpdateCustomer";
import { DeleteCustomer } from "./pages/DeleteCustomer";
import { AddItem } from "./pages/AddItem"; // Import your AddItem component
import { UpdateItem } from "./pages/UpdateItem"; // Import your UpdateItem component
import { DeleteItem } from "./pages/DeleteItem"; // Import your DeleteItem component
import { RootLayout } from "./component/RootLayout";
import { CustomerProvider } from "./component/CustomerProvider";
import { ItemProvider } from "./component/ItemProvider"; // Adjust the import if necessary

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { path: "/", element: <Dashboard /> },
                { path: "/add-customer", element: <AddCustomer /> },
                { path: "/update-customer", element: <UpdateCustomer /> },
                { path: "/delete-customer", element: <DeleteCustomer /> },
                { path: "/add-item", element: <AddItem /> }, // Added route for adding an item
                { path: "/update-item", element: <UpdateItem /> }, // Added route for updating an item
                { path: "/delete-item", element: <DeleteItem /> }, // Added route for deleting an item
            ],
            errorElement: <Error />,
        },
        {
            path: "*",
            element: <Error />,
        },
    ]);

    return (
        <ItemProvider>
            <CustomerProvider>
                <RouterProvider router={routes} />
            </CustomerProvider>
        </ItemProvider>
    );
}

export default App;


