import React, { useEffect, useState } from 'react'
import style from './Task1.module.css'

const Task1 = () => {

    const [dataList, setDataList] = useState([])
    const [taskUser, setTaskUser] = useState("")

    const addTask = ()=>{
      const taskList = structuredClone(dataList);
      taskList.push(taskUser)
      setTaskUser("")
      setDataList(taskList)
      console.log(taskList)
    }

    const deleteTask = (indexDelete) => {
      const taskList = structuredClone(dataList);
      const newTaskList = taskList.filter((actualTask, index)=>{
        return(
          index != indexDelete
        )
      })
    }


    const allDataList = dataList.map((task, index)=>{
      return(
        <>
          <li>{task}</li> 
          <button onClick={()=>{deleteTask(index)}}>Delete</button>
          </>
      )
    })

  return (
    <div className={style.container}>

      <h3>Introduce tus tareas de hoy:</h3>
      
      <div  className={style.inputAndButton}>
        <input placeholder='Tarea' type='text' onChange={(e)=>{setTaskUser(e.target.value)}} value={taskUser}></input>
        <button onClick={()=>{addTask()}} className={style.buttonBlack}>Añadir tarea</button>
      </div>
        
      <ul>
          {allDataList}
      </ul>
        
    </div>
  )
}

export default Task1