import {Link} from "react-router";
export function Navigation() {
    return (
        <>
            <header>
                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <Link to='/'>Dashboard</Link>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <Link to='/add-customer'>Add Customer</Link>*/}
                {/*        <br/>*/}
                {/*        <Link to='/delete-customer'>Delete Customer</Link>*/}
                {/*        <br/>*/}
                {/*        <Link to='/update-customer'>Update Customer</Link>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <Link to='/add-item'>Add Item</Link>*/}
                {/*        <br/>*/}
                {/*        <Link to='/delete-item'>Delete Item</Link>*/}
                {/*        <br/>*/}
                {/*        <Link to='/update-item'>Update Item</Link>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
                <ul style={{display: "flex", listStyleType: "none", padding: 0,margin:0}}>
                    <li style={{margin: "0 15px"}}>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li style={{margin: "0 15px"}}>
                        <Link to="/add-customer">Add Customer</Link>
                    </li>
                    <li style={{margin: "0 15px"}}>
                        <Link to="/delete-customer">Delete Customer</Link>
                    </li>
                    <li style={{margin: "0 15px"}}>
                        <Link to="/update-customer">Update Customer</Link>
                    </li>
                    <li style={{margin: "0 15px"}}>
                        <Link to="/add-item">Add Item</Link>
                    </li>
                    <li style={{margin: "0 15px"}}>
                        <Link to="/delete-item">Delete Item</Link>
                    </li>
                    <li style={{margin: "0 15px"}}>
                        <Link to="/update-item">Update Item</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}