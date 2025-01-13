import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

export default function Card({food, handleAddToCook}){
    // console.log(food);
    const {recipe_name, image, short_description, ingredients, preparing_time, calories} = food;
    return (
        <div className="">
            <div className="space-y-4 text-left border-2 rounded-2xl p-4 mb-5">
                <img src={image} className="rounded-2xl w-full" alt="" />
                <h2 className="text-2xl font-semibold">{recipe_name}</h2>
                <p className="text-[#878787] ">{short_description} </p>
                <hr />
                <h5 className="text-lg font-semibold">Ingredients: {ingredients.length} </h5>
                <div className="">
                    {
                        ingredients.map((ingred, idx) => <li className="text-[#878787] text-lg" key={idx}> {ingred} </li> )
                    }
                </div>
                <hr />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row space-x-1 items-center">
                        <IoMdTime className="text-lg" />
                        <p className="text-base text-[#282828CC] ">{preparing_time}</p>
                    </div>
                    <div className="flex flex-row space-x-1 items-center">
                        <MdOutlineLocalFireDepartment className="text-lg" />
                        <p className="text-base text-[#282828CC]">{calories}</p>
                    </div>
                </div>
                <button onClick={()=>{handleAddToCook(food)}} className=" text-black font-semibold text-lg bg-[#0BE58A] px-4 py-4 rounded-full hover:bg-[#fff] border-2 hover:border-green-700 ">Want to Cook</button>
            </div>
        </div>

    )
}

Card.propTypes = {
    food: PropTypes.object, 
    handleAddToCook: PropTypes.func
}