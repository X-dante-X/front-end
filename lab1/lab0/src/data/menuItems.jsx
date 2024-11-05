import Home from "../pages/Home";
import Lab1 from "../pages/Lab1";
import Lab2 from "../pages/Lab2";
import Lab3 from "../pages/Lab3";
import Lab4 from "../pages/Lab4";
import Lab4Add from "../pages/Lab4Add";
import Lab4Edit from "../pages/Lab4Edit";

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
  },
  {
    id: 5,
    label: "Laboratorium 4",
    path: "/lab4",
    element: <Lab4 />,
  },
  {
    id: 6,
    label: "Laboratorium 4 Add",
    path: "/lab4/add",
    element: <Lab4Add />,
  },
  {
    id: 7,
    label: "Laboratorium 4 Edit",
    path: "/lab4/edit/:id",
    element: <Lab4Edit />,
  }
];
