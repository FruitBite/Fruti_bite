import React from 'react'
import { Menu } from "lucide-react";


const Mobile_navbar = () => {
  return (
    <button className='lg:hidden'>
      <Menu size={35} className=' mr-5'/>
    </button>
  )
}

export default Mobile_navbar
