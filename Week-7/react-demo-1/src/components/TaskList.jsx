import React from 'react'

export default function TaskList({tasks}) {
    if(tasks.length === 0)
        return <p className='text-3xl text-red-500'>empty</p>
  return (
    <div>
       <h1 className='text-black-300 text-4xl'>List OF Tasks</h1>
        {
            tasks.map(taskObj => <p className='text-1.5xl'>{taskObj.taskName}</p>)
        }
    </div>
  )
}
