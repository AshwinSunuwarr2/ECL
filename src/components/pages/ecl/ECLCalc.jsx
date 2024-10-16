import React from 'react'
import { ECLForm } from '../../organisms/forms'
import { LineGraph } from '../../../graphs'

const ECLCalc = () => {
  return (
    <section className='w-full inline-flex flex-col justify-center p-4'>
        <ECLForm/>
        <LineGraph/>
    </section>
  )
}

export default ECLCalc