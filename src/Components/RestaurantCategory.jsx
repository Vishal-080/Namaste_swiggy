import React from 'react'

const RestaurantCategory = ({data}) => {

  // console.log(data[0]);
  return (
    <div>
      {data.map((item)=>{
        return <>
        <div className='border-b-2 m-4 p-2 '>{item.card.card.title} <span>🔽</span></div>
        </>
      })}
    </div>
  )
}

export default RestaurantCategory;