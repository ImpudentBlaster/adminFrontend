import { Route , createBrowserRouter ,createRoutesFromElements , RouterProvider  } from "react-router-dom";
import MainLayout from './Pages/MainLayout';
import Dashboard from './Pages/Admin Page/Dashboard/Dashboard.js';
import Customers from "./Pages/Admin Page/Customers/Customers.js";
import AddProducts from "./Pages/Admin Page/Products/Add Products/AddProducts.js";
import ShowProducts from "./Pages/Admin Page/Products/Show Products/ShowProducts.js";
import SignUp from "./Pages/SignUp Page/SignUp.js";
import Login from "./Pages/Login Page/Login.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/" element={<MainLayout/>}>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Customers" element={<Customers/>}/>
        <Route path="/AddProducts" element={<AddProducts/>}/>
        <Route path="/ShowProducts" element={<ShowProducts/>}/>
        </Route>
        </>
    )
)

const Router = ()=>{
    return (
        <>
         <RouterProvider router={router}/>
        </>
    )
}
export default Router