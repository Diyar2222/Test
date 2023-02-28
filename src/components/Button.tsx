import React, { FC } from 'react'
type ButtonProp = {
    text:string,
    onClick?:()=>void
  }
export const Button:FC<ButtonProp> = ({text,onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
