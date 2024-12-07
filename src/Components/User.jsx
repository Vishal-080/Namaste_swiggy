import React from "react";

const User = ({props}) => {


  // const {userName} = props;

  return (
    <div className="user-card">
      <h2>Name: {props}</h2>
      <h3>Loaction: {props}</h3>
      <h4>Contact No:- {props}</h4>
    </div>
  );
};

export default User;
