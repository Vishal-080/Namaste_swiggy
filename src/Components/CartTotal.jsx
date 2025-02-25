import React from 'react'

const CartTotal = ({total}) => {
  return (
    <div className='border-t-2 border-gray-300 mt-2 p-2 font-semibold text-xl'>
        <h1>Total amount :-</h1>
        <p>{total}</p>
    </div>
  )
}

export default CartTotal;