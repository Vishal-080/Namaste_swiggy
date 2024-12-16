import React, { useState } from "react";

const User = (props) => {

  const {userName, loc, num} = props;

  return (
    <div className="user-card">
      <h2>Name:- {userName}</h2>
      <h3>Location:- {loc}</h3>
      <h4>Contact No:- {num}</h4>
    </div>
  );
};

export default User;
