import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import AppLayout from "./App";
// import About from "./Components/About";
// import Grocery from "./Components/Grocery";
import Contact from "./Components/Contact";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RestaurantMenu from "./Components/RestaurantMenu";
import Cart from "./Components/Cart";


const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));
const Cart = lazy(() => import("./Components/Cart" );


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About us Page Loading...!</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
      <AppLayout />
    </RouterProvider>
  </StrictMode>
);
