import PropTypes from "prop-types";
import Complete from "../Complete/Complete";
export default function Completed({preparing}){
    return ( 
        <div className="">
            <h3 className="text-2xl text-center mt-10 mb-4">Want to cook: {preparing.length} </h3>
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
                        preparing.map((prepar, idx) => <Complete key={idx} prepar={prepar} ></Complete>)
                    }
                </tbody>
            </table>
        </div>
    )
}

Completed.propTypes = {
    preparing: PropTypes.array
}