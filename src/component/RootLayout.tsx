// import {Link} from "react-router";
//
//
// export function RootLayout() {
//     return (
//         <div>
//             Add Customer
//             <h1>Welcome to the Dashboard</h1>
//             <p>This is your personalized dashboard.</p>
//          <nav>
//              <ul>
//                 <Link to="/">Dashboard</Link>
//                  <Link to="/add">Add Customer</Link>
//                  <Link to="/update">Update Customer</Link>
//                  <Link to="/delete">Delete Customer</Link>
//              </ul>
//          </nav>
//         </div>
//
//
//     );
// }

import {Navigation} from "./Navigate.tsx";
import {Outlet} from "react-router";

export function RootLayout() {
    return(
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    );
}
// add - delete,update ghnn one