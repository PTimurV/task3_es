import { useState } from 'react'

import './App.css'
import { MainCard } from './components/MainCard/MainCard'
import {Competents} from "./components/Competents/Сompetents"
import MyButton from "./components/MyButton/MyButton"





 function App() {
  const [count, setCount] = useState(0)

  const [showCompetencies, setShowCompetencies] = useState(false);
 

  




  return (
    <>
    <div className='myinfo'>
      <MainCard />
      {showCompetencies ? (
        <MyButton onClick={() => setShowCompetencies(false)}>
          Скрыть компетенции
        </MyButton>
      ) : (
        <MyButton onClick={() => setShowCompetencies(true)}>
          Показать компетенции
        </MyButton>
      )}
      
      

      {showCompetencies && (
      <Competents topic = "Мои компетенции:" />
      )}
    </div>
      
    </>
  )
}

export default App
