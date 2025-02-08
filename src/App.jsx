import { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser: "Vishal" }}>
        <UserContext.Provider value={{ loggedInUser: "Vishal Rathod" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

export default AppLayout;
