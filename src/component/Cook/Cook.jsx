import PropTypes from "prop-types";
export default function Cook({cook}){
    const {recipe_name} = cook;
    return (
        <div className="">
            <h2>{recipe_name}</h2>
        </div>
    )
}

Cook.propTypes = {
    cook: PropTypes.object
}