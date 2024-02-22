import {
createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import AddProduct from "../Pages/Add Product/AddProduct";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/My Cart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";

export const router = createBrowserRouter([
{
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[{
        path:'/',
        element: <Home></Home>
    },
    {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
    {
        path:`/myCart`,
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element:<Register></Register>
    },
    {
        path: `/:id`,
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/${params.id}`)
    },
        
    ]
},
]);