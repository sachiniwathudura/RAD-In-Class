import {Link} from "react-router";
export function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to='/'>Dashboard</Link>
                        <br/>
                        <Link to='/add-customer'>Add Customer</Link>
                        <br/>
                        <Link to='/delete-customer'>Delete Customer</Link>
                        <br/>
                        <Link to='/update-customer'>Update Customer</Link>
                        <br/>
                        <Link to='/add-item'>Add Item</Link>
                        <br/>
                        <Link to='/delete-item'>Delete Item</Link>
                        <br/>
                        <Link to='/update-item'>Update Item</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}