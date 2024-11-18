import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppLayout from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
