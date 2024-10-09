import React from 'react'

const Button = ({btnType, btnTitle}, btnClick) => {
  return (
    <button type={btnType} className="bg-primary hover:bg-primary/95 text-secondary py-2 px-4 rounded" onClick={btnClick}>{btnTitle}</button>
  )
}

export default Button