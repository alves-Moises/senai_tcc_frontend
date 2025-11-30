import { createBrowserRouter } from "react-router-dom"

import { Home } from "./pages/Home";
import { Quizz}  from "./pages/Quizz"
import { Records } from "./pages/Records";
import { FormRules } from "./pages/FormRules";
import { Error } from "./pages/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/quizz/",
        element: <Quizz />,
        
        
    },
    {
        path: "/records",
        element: <Records />            
    },
    {
        path: "/form",
        element: <FormRules />
    },
    {
        path: "*",
        element: <Error />
    }
])