import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import CreateProject from "../components/Pages/CreateProject/CreateProject";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import Signup from "../components/Pages/Signup/Signup";

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
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "createProject",
                element: <CreateProject></CreateProject>
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default router;