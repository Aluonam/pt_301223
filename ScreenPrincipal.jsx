import React from 'react'
import Task1 from './components/task1/Task1'
import Header from './components/header/Header'
import Task2 from './components/task2/Task2'

const ScreenPrincipal = () => {
  return (
    <div>
        <Header></Header>
        <Task1></Task1>
        <Task2></Task2>
    </div>
  )
}

export default ScreenPrincipal