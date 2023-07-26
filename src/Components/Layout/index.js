import { Outlet } from "react-router-dom";
import '../../Css/style.css';

const Layout = () => {

    return (
        <>
            <div classname="main-container">
                <Outlet />
            </div>

        </>
    )
};

export default Layout;