import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
export default function Cooks({cooks}){
    return (
        <div className="lg:w-1/3 w-full ml-3 border">
            <h3>Hello {cooks.length} </h3>
            {
                cooks.map((cook, idx) => <Cook key={idx} cook={cook} ></Cook>)
            }
        </div>
    )
}

Cooks.propTypes = {
    cooks: PropTypes.array
}