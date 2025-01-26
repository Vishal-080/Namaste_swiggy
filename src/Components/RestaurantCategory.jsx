import React from 'react'

const RestaurantCategory = ({data}) => {

  // console.log(data[0]);
  return (
    <div>
       <div className='border-b-2 m-4 p-2 flex justify-between items-center cursor-pointer'>{data.title} <span>🔽</span></div>
    </div>
  )
}

export default RestaurantCategory;