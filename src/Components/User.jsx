import React, { useState } from "react";

const User = ({props}) => {


  const [user, setUser] = useState("Vishal");
  // const {userName} = props;

  return (
    <div className="user-card">
      <h1>User :- {user}</h1>
      <h2>Name: {props}</h2>
      <h3>Location: {props}</h3>
      <h4>Contact No:-{props}</h4>
    </div>
  );
};

export default User;
