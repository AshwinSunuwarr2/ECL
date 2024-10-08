import React from 'react'

const Button = () => {
  const btnClick = () => {
    console.log('Button Clicked')
  }
  return (
    <button className="bg-primary hover:bg-primary/95 text-secondary py-2 px-4 rounded" onClick={btnClick}>Button</button>
  )
}

export default Button