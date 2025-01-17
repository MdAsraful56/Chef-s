import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
export default function Cooks({cooks, handleAddToPreparing, handleRemove}){
    return (
        <div className="">
            <h3 className="text-2xl text-center mb-4">Want to cook: {cooks.length} </h3>
            <hr className="mb-4" />
            <table className="p-10 " border="1" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr className="text-">
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        cooks.map((cook, idx) => <Cook handleRemove={handleRemove} handleAddToPreparing={handleAddToPreparing} key={idx} cook={cook} ></Cook>)
                    }
                </tbody>
            </table>

        </div>
    )
}

Cooks.propTypes = {
    cooks: PropTypes.array,
    handleAddToPreparing: PropTypes.func,
    handleRemove: PropTypes.func
}