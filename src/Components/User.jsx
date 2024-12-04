import React from 'react'

const User = ({props}) => {
  return (
    <div className='user-card'>
        <h2>Name: {props.name}</h2>
        <h3>Loaction: India</h3>
        <h4>Contact No:- 9998887776</h4>
    </div>
  )
}

export default User;