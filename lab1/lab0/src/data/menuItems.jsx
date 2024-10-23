import Home from "../pages/Home";
import Lab1 from "../pages/Lab1";
import Lab2 from "../pages/Lab2";
import Lab3 from "../pages/Lab3";

export const menuItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
    element: <Home></Home>,
  },
  {
    id: 2,
    label: "Laboratorium 1",
    path: "/lab1",
    element: <Lab1 />,
  },
  {
    id: 3,
    label: "Laboratorium 2",
    path: "/lab2/:id",
    element: <Lab2 />,
  },
  {
    id: 4,
    label: "Laboratorium 3",
    path: "/lab3",
    element: <Lab3 />,
  }
];
