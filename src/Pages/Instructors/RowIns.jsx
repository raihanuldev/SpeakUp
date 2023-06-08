
const RowIns = ({row,index}) => {
    console.log(row);
    const {instructorName,instructorEmail,instructorImage,teacherId} = row;
    return (
        <tr>
            <th>
                {index+1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={instructorImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    
                </div>
            </td>
            <td>
                {instructorName}
            </td>
            <td>{instructorEmail}</td>
            <th>
                <button className="btn btn-primary btn-xs">See More</button>
            </th>
        </tr>
    );
};

export default RowIns;