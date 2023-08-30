import { Login } from "./components/login/Login";
import { Main } from "./components/Home/Main";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Main />,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
