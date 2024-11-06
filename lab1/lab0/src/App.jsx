import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { menuItems } from "./data/menuItems.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import {useReducer} from 'react';
import AppReducer from "./data/AppReducer.js";
import AppContext from "./data/AppContext";
import { data } from "./data/module-data.js";


const router = createBrowserRouter(menuItems);

function App() {
  return (
          <RootLayout items={menuItems}>
              <RouterProvider router={router} />
          </RootLayout>
  );
}

export default App;
