import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Home, Login, OneCategory, ProductDetails, Root } from "./pages";

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
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
