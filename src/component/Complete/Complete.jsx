import PropTypes from "prop-types";
export default function Complete({prepar}) {
    const {recipe_name, preparing_time, calories} = prepar;
    return ( 
        <tr className="text-sm space-y-5">
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
        </tr>
    )
}

Complete.propTypes = {
    prepar: PropTypes.object
}