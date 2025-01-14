import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import Cooks from './component/Cooks/Cooks'
import Hero from './component/Hero/Hero'
import Navber from './component/Navber/Navber'
import Text from './component/Text/Text'
import Completed from './component/Completed/Completed'

function App() {

  const [cooks, setCooks] = useState([]);

  const handleAddToCook = (food) => {
    // console.log(food);
    const newCooks = [...cooks, food];
    setCooks(newCooks);
  }

  const [preparing, setPreparing] = useState([]);

  const handleAddToPreparing = (cook) => {
    // console.log(cook);
    const newPreparing = [...preparing, cook];
    setPreparing(newPreparing);

  }

  const [remove, setRemove] = useState([]);

  const handleRemove = (cook) => {
    console.log(cook.recipe_id);
    const updatedRemove = remove.filter((item) => item.recipe_id !== cook.recipe_id);
    setRemove(updatedRemove);
  }

  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <Text></Text>
      <div className="flex flex-row">
        <Cards handleAddToCook={handleAddToCook} ></Cards>
        <div className="lg:w-1/3 w-full ml-3 border-2 rounded-3xl p-5">
          <Cooks cooks={cooks} handleRemove={handleRemove} handleAddToCook={handleAddToCook} handleAddToPreparing={handleAddToPreparing} ></Cooks>
          <Completed preparing={preparing} handleAddToPreparing={handleAddToPreparing} ></Completed>
        </div>
      </div>
    </>
  )
}

export default App
