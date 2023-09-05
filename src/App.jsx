import { Login } from "./components/login/Login";
import { Main } from "./components/home/Home";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { DetailsAgent } from "./components/detailsAgent/DetailsAgent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Main />,
  },
  {
    path: "/details",
    element: <DetailsAgent />,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
