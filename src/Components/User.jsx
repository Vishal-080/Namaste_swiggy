import React, { useState } from "react";

const User = ({ props }) => {
  const [count, setCount] = useState(0);
  // const {userName} = props;

  return (
    <div className="user-card">
      <h1>Count :- {count}</h1>
      <button onClick={()=> setCount(count+1)}>Increase Count</button>
      <h2>Name: {props}</h2>
      <h3>Location: {props}</h3>
      <h4>Contact No:-{props}</h4>
    </div>
  );
};

export default User;
