import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../RootLayout/Root";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[
            {
                index:true,
                Component:Home
            }
        ],
    },
    {
        path:"/login",
        Component:Login
    }
])