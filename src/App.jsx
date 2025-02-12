import { useContext } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: "Vishal" }}>
        <UserContext.Provider value={{ loggedInUser: "Vishal Rathod" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </UserContext.Provider>
      </Provider>
    </>
  );
};

export default AppLayout;
