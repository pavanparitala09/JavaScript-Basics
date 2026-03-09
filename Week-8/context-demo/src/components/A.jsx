/* eslint-disable no-unused-vars */
import React from 'react'
import { useTest } from '../store/TestStore'

const A = () => {
  const {x,incrementX,decrementX,incrementByValue} = useTest()
    //const x = useTest(state => state.x)
    return (
      <div className="text-center shadow -2xl m-10 p-10 bg-amber-100 ">
        <p className="text-2xl">counter 1:{x}</p>
        <button onClick={incrementX} className="bg-amber-200 p-10"> increment x </button>
        <button onClick={()=>incrementByValue(10)} className='bg-red-500'>Increment by value</button>
      </div>
    );
}

export default A  