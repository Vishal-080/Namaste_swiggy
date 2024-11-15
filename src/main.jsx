import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppLayout from "./App";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/home",
    element: <AppLayout />,
  },
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
    <AppLayout />
    </RouterProvider>
  </StrictMode>,
)
