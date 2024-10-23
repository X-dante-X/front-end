import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { menuItems } from "./data/menuItems.jsx";
import RootLayout from "./layouts/RootLayout.jsx";

const router = createBrowserRouter(menuItems);

function App() {
  return (
    <>
      <RootLayout items={menuItems}>
        <RouterProvider router={router}></RouterProvider>
      </RootLayout>
    </>
  );
}

export default App;
