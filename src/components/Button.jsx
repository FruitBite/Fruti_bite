"use client"
import React from 'react'

const Button = ({text,style,link}) => {
  return (
    <a href={link} className={`${style=="primary"?"bg-PRIMARY":"bg-white"} font-medium p-3 rounded-lg w-fit`}>
      {text}
    </a>
  )
}

export default Button
