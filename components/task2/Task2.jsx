import React, { useState } from 'react'
import style from './Task2.module.css'

const Task2 = () => {

  const [dataUser, setDataUser] = useState({
    userName : "",
    password : ""
  })

  const handleSendClick = () => {
    console.log({ userName: dataUser.userName, password: dataUser.password });
  }

  return (
    <div className={style.containerTask2}>

      <h3>Username:</h3>
      <input placeholder='nombre de usuario' value={dataUser.userName} onChange={(e)=>{setDataUser({...dataUser,userName:e.target.value})}}></input>
      <h3>Password:</h3>
      <input placeholder='contraseña' value={dataUser.password} onChange={(e)=>{setDataUser({...dataUser,password:e.target.value})}}></input>
      <button onClick={handleSendClick()}>Send</button>

    </div>
  )
}

export default Task2