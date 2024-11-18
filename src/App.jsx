import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      < Outlet />
    </>
  );
};



export default AppLayout;
