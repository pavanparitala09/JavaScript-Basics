import React from 'react'

export default function TaskCounter({tasks}) {
  return (
    <div>
      <h1 className='text-black-300 text-4xl'>Task Counter</h1>
      <p className='text-3xl pt-3'>{tasks.length}</p>
    </div>
  )
}
