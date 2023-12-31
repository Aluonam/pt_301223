import React, { useEffect, useState } from 'react'
import style from './Task1.module.css'

const Task1 = () => {

    const [dataList, setDataList] = useState([])
    const [taskUser, setTaskUser] = useState([])

  return (
    <div className={style.container}>
        Introduce tus tareas de hoy:
        <input placeholder='Tarea' type='text' onChange={(e)=>{setTaskUser(e.target.value)}}></input>
        <button onClick={()=>{}}>Añadir tarea</button>
        
    </div>
  )
}

export default Task1