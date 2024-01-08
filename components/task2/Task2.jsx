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

      <input placeholder='nombre de usuario' value={setDataUser.userName}></input>
      <input placeholder='contraseña' value={setDataUser.password}></input>
      <button onClick={handleSendClick()}>Send</button>


    </div>
  )
}

export default Task2