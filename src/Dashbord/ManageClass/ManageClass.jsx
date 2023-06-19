import { Helmet } from "react-helmet-async";
import UseManageClass from "../../Hooks/UseManageClass";
import ManageClassRow from "./ManageClassRow";

const ManageClass = () => {

    const [classes] = UseManageClass();
    return (
        <div>
            <Helmet>
                <title>MANAGE CLASS || SpeakUp</title>
            </Helmet>
            <h3 className="text-center text-3xl font-semibold">Manage All Classes</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image & Name</th>
                            <th>About Instructor</th>
                            <th>Current Status</th>
                            <th>Approved</th>
                            <th>Deny</th>
                            <th>Send FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <ManageClassRow key={item._id} item={item} index={index}></ManageClassRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClass;