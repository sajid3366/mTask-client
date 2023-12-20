import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            }
        ]
    }
])

export default router;