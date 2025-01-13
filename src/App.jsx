import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import Cooks from './component/Cooks/Cooks'
import Hero from './component/Hero/Hero'
import Navber from './component/Navber/Navber'
import Text from './component/Text/Text'

function App() {

  const [cooks, setCooks] = useState([]);

  const handleAddToCook = (food) => {
    console.log(food);
    const newCooks = [...cooks, food];
    setCooks(newCooks)
    
  }

  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <Text></Text>
      <div className="flex flex-row">
        <Cards handleAddToCook={handleAddToCook} ></Cards>
        <Cooks cooks={cooks} handleAddToCook={handleAddToCook} ></Cooks>
      </div>
    </>
  )
}

export default App
