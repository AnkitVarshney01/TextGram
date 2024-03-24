import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import User from "./Pages/User";
import Home from "./Pages/Home";
import UserDetails from "./Pages/UserDetails";
import { loader as dataLoader } from "./Pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: dataLoader,
    id: "root",
    children: [
      { path: "", element: <Home /> },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/users/:userId",
        element: <UserDetails />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
