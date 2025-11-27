import { createBrowserRouter } from "react-router-dom"

import { Home } from "./pages/Home";
import { Quizz}  from "./pages/Quizz"
import { Records } from "./pages/Records";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/quizz",
        element: <Quizz />
    },
    {
        path: "/records",
        element: <Records />
    }
])