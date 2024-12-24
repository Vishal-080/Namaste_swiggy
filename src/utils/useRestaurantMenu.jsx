import React, { useEffect, useState } from 'react';

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState("");
  
  useEffect(()=>{
    fetchData();
  },[]);
  
  const fetchData = async () => {
    const data = await fetch("")
  };


  return (

  )
}

export default useRestaurantMenu;