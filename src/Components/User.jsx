import React, { useState } from "react";

const User = (props) => {
  const [userInfo, setUserInfo] = useState({
    userName: "vishal",
    loc: "mumbai",
    num: "777888999",
  });

  const { userName, loc, num } = props;

  return (
    <div className="user-card">
      <h2>Name:- {userInfo.userName}</h2>
      <h3>Location:- {userInfo.loc}</h3>
      <h4>Contact No:- {userInfo.num}</h4>
    </div>
  );
};

export default User;
