import React from 'react'

const Inputfield = ({ipName, ipType, ipPlaceholder}) => {
  return (

        <input name={ipName} type={ipType} placeholder={ipPlaceholder} className='w-1/2 p-2 rounded shadow-md text-txt text-md m-2 outline-none self-auto appearance-none'/>
    
  )
}

export default Inputfield