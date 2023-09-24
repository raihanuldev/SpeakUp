import { Outlet } from "react-router-dom";
import Nabvar from "../Components/Nabvar/Nabvar";

const Main = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;