import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { HiBadgeCheck, HiDocumentAdd, HiOutlineBookOpen, HiOutlineCollection, HiOutlineCurrencyDollar, HiOutlineHome, HiOutlineViewList, HiQuestionMarkCircle, HiShoppingCart, HiUserGroup } from 'react-icons/hi'

// At Frist fault in the condition all Sidebar then fetch users.

const Dashbord = () => {
    const { user } = useContext(AuthContex)
    const IsAdmin = true;
    const IsStudent = false;
    const IsInstructor = user?.role === 'instructor';
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><HiOutlineViewList className="text-3xl"></HiOutlineViewList> </label>
                <div>
                    {/* TODO: Make 2 Charts. Poplar Classes and Popular Instructors. and Current User informations  */}

                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-pink-200 rouned-lg text-base-content">
                    {/* Sidebar content here */}
                    <p className="uppercase text-3xl font-semibold" >SpeakUp Dashboard !!</p>
                    {/* Student Role Pages */}
                    {IsStudent && <>
                        <li><Link className="text-2xl mt-2"> <HiShoppingCart></HiShoppingCart> MY Selected Classes</Link> </li>
                        <li><Link className="text-2xl mt-2"> <HiBadgeCheck></HiBadgeCheck> My Enrolled Classes</Link> </li>
                        <li><Link className="text-2xl mt-2"> <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>Payment History</Link> </li>
                    </>}
                    {/* Instructor Role Pages */}
                    {
                        IsInstructor && <>
                            <li><Link className="text-2xl mt-2"> <HiDocumentAdd></HiDocumentAdd> Add A Class</Link> </li>
                            <li><Link className="text-2xl mt-2"> <HiOutlineBookOpen></HiOutlineBookOpen>MY Classes </Link> </li>
                        </>
                    }

                    {/* Admin Role Pages */}
                    {
                        IsAdmin && <>
                            <li><Link className="text-2xl mt-2"> <HiOutlineCollection></HiOutlineCollection> Manage Classes</Link> </li>
                            <li><Link className="text-2xl mt-2"> <HiUserGroup></HiUserGroup> Manage Users</Link> </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><Link className="text-2xl mt-2"> <HiOutlineHome></HiOutlineHome> Home</Link></li>
                    <li><Link className="text-2xl mt-2"> <HiQuestionMarkCircle></HiQuestionMarkCircle>FQA</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashbord;