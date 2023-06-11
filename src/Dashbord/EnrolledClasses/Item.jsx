
const Item = ({ item,index }) => {
    console.log(item);
    return (
        <tr className="bg-base-200">
            <th>{index+1}</th>
            <td>{item.name}</td>
            <td>{item.instructorName}</td>
            <td> <button className="btn btn-outline ">Continue Class</button> </td>
        </tr>
    );

};

export default Item;