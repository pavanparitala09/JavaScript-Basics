import React from 'react'
import { useForm } from 'react-hook-form'
export default function AddTask( {addNewTask}) {
const { register, handleSubmit} = useForm()
const onFormSubmit= (taskObj) =>{
    addNewTask(taskObj)
}

  return (
    <div>
       <h3 className='text-black text-4xl'>Task Counter</h3>
       <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
            <input type="text" {...register("taskName")} placeholder='enter task' className='border-2 mt-3 p-1 caret-amber-50' />
        </div>
        <div>
            <button className='bg-blue-400 mt-2 border-2'>ADD</button>
        </div>
       </form>
    </div>
  )
} 
