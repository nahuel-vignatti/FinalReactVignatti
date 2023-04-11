import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet as Page } from "react-router-dom";
import "./layout.css";
function Layout (){
    return (
        <section className="layout">
            <NavBar />
            <Page />
            <Footer />
        </section>
    )
}

export default Layout;