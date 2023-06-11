
const PaymentInfo = ({item,index}) => {
    console.log(item);
    return (
        <tr className="bg-base-200">
            <th>{index+1}</th>
            <td>{item.transaction}</td>
            <td>{item.couresId}</td>
            <td>{item.date} </td>
        </tr>
    );
};

export default PaymentInfo;