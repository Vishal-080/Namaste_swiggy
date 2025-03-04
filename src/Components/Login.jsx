import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <fieldset className="fieldset w-6/12 m-auto my-4 border text-center p-4 rounded-box">
        <legend className="fieldset-legend text-center font-semibold text-xl">Login</legend>
<br />
        <label className="fieldset-label">Email :- </label>
        <input type="email" className="input bg-transparent ml-2" placeholder="Email" />
<br />
<br />
        <label className="fieldset-label">Password :- </label>
        <input type="password" className="input bg-transparent ml-2" placeholder="Password" />
<br />
        <button className="btn btn-neutral mt-4 text-white">
            <Link to='/'>Login</Link></button>
      </fieldset>
    </div>
  );
};

export default Login;
