import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-black p-10 flex justify-between'>
      <div>
      <p className='text-white'>@blogApp-Application</p>
      <br />
      <NavLink className="text-white">Terms&Conditions</NavLink>
      </div>
      <div>
        <p className='text-white'>Contact : 9998887776</p>
      </div>
      
    </div>
  )
}

export default Footer