import { Login } from "./components/login/Login";
import { Main } from "./components/home/Home";
import { DetailsAgent } from "./components/detailsAgent/DetailsAgent";
import { Maps } from "./components/maps/Maps";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
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
  {
    path: "/maps",
    element: <Maps />,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
