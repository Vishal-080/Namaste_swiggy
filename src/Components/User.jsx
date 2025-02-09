import React, { useEffect, useState } from "react";

const User = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "vishal",
    location: "mumbai",
    company: "777888999",
  });

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    const userData = await fetch("https://api.github.com/users/Vishal-080");
    const jsonUserData = await userData.json();
    setUserInfo(jsonUserData);
  };

  const { name, location, company } = userInfo;

  return (
    <div className="user-card py-5 text-center flex flex-col justify-center items-center">
      <img
        src={userInfo.avatar_url}
        alt="image"
        className="w-52 h-52 rounded-full m-5 border-[12px] border-solid border-[#87ceeb]"
      />
      <h2>Name :- {name}</h2>
      <h3>Location :- {location}</h3>
      <h4>Company :- {company}</h4>
    </div>
  );
};

export default User;
