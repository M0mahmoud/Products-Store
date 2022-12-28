import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Cart, Home, Login, OneCategory, ProductDetails, Root } from "./pages";
import UserProvider from "./store/user-context";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category/:categoryName",
        element: <OneCategory />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={routers} />
    </UserProvider>
  );
}

export default App;
