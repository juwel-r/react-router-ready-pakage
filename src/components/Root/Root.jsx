import { Outlet } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <div className="min-h-[calc(100vh-290px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;