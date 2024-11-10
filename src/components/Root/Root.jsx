import { Outlet } from "react-router-dom";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="h-[calc(100vh-300px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;