import { Login } from "./components/login/Login";
import { Main } from "./components/home/Home";
import { DetailsAgent } from "./components/detailsAgent/Agent";
import { Maps } from "./components/maps/Maps";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Weapons } from "./components/weapons/Weapons";
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
  {
    path: "/weapons",
    element: <Weapons />,
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
