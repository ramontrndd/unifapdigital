
import React , { useState }from 'react'

const ListaTarefas = () => {

  const  [task, setTask] = useState('')
  const  [tasks, setTasks] = useState([])

  const addTask = () => { 
    if(task.trim())  {
      setTasks([...tasks, {title: tasks, isCompleted: false}])
      setTask('')
    }
  }
  const toggleMask = (index) => {
    const updateTask = [...tasks]
    updateTask[index].isCompleted = !updateTask[index].isCompleted

  const removeTask = (index) => {
    const updateTask = [...tasks]
    updateTask.splice(index, 1)
    setTasks(updateTask)
  }
  }

  return (
    <div> <h1>ListaTarefas</h1>  </div>
  )
}

export default ListaTarefas