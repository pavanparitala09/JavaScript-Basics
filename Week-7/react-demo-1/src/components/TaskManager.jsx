import React, { useState } from 'react'
import AddTask from './AddTask'
import TaskCounter from './TaskCounter'
import TaskList from './TaskList'
export default function TaskManager() {

    let [tasks, setTask] = useState([])

    const addNewTask = (taskObj) => {
        setTask([...tasks,taskObj])
    }

  return (
    <div>
      <h1 className='text-6xl mb-17 text-blue-400 pt-0 mt-2'>Task manager</h1>
      <div className='flex justify-around'>
      <AddTask addNewTask = {addNewTask}/>
      <TaskList tasks = {tasks}/>
      <TaskCounter tasks = {tasks}/>
      </div>
    </div>
  )
}
