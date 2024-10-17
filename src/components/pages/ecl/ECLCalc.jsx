import React from 'react'
import { ECLForm } from '../../organisms/forms'
import { LineGraph } from '../../../graphs'

const ECLCalc = () => {
  return (
    <section className='w-full flex-grow bg-red-200 flex-col justify-center items-center'>
        <ECLForm/>
        <LineGraph/>
    </section>
  )
}

export default ECLCalc