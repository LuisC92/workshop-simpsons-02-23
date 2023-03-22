import React from 'react'

const Avatar = (props) => {
    const {image, firstName, lastName} = props
  return (
    <div className='card'>
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
        <img src={image} alt="firstName" />
    </div>
  )
}

export default Avatar