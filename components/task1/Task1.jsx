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

    const allDataList = dataList.map((task)=>{
      return(
          <li>{task}</li>
      )
    })

  return (
    <div className={style.container}>
        Introduce tus tareas de hoy:
        <input placeholder='Tarea' type='text' onChange={(e)=>{setTaskUser(e.target.value)}} value={taskUser}></input>
        <button onClick={()=>{addTask()}}>Añadir tarea</button>
        <ul>
          {allDataList}
        </ul>
        
        
    </div>
  )
}

export default Task1