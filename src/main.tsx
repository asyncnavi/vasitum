import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'


import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },

]);

export default router;


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
