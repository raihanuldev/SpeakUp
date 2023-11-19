import { Link } from "react-router-dom";

const Item = ({ item,index }) => {
    // console.log(item);
    return (
        <tr className="bg-base-200">
            <th>{index+1}</th>
            <td>{item.name}</td>
            <td>{item.instructorName}</td>
            <td> <Link to='/dashbord/coures-content' state={{item}} className="btn btn-outline ">Continue Class</Link> </td>
        </tr>
    );

};

export default Item;