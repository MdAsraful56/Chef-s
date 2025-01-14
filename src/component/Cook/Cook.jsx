import PropTypes from "prop-types";
export default function Cook({cook, handleAddToPreparing, handleRemove}){
    const {recipe_name, preparing_time, calories} = cook;
    return (
        <tr className="text-sm space-y-5">
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
            <button onClick={()=>{handleAddToPreparing(cook), handleRemove(cook) }} className=" bg-[#0BE58A] rounded-full px-3 py-3   hover:bg-green-200">Preparing</button>
        </tr>
    )
}

Cook.propTypes = {
    cook: PropTypes.object,
    handleAddToPreparing: PropTypes.func,
    handleRemove: PropTypes.func
}