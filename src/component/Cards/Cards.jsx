import { useEffect, useState } from "react"
import Card from "../Card/Card";
import PropTypes from "prop-types";

export default function Cards({handleAddToCook}){


    const [foods, setFoods] = useState([]);

    useEffect( () => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    } ,[])


    return (
        
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-2/3 w-full gap-5 mr-3">
                {
                    foods.map(food => <Card handleAddToCook={handleAddToCook} key={food.recipe_id} food={food} ></Card>)
                }
            </div>
        
    )
}

Cards.propTypes = {
    handleAddToCook: PropTypes.func
}