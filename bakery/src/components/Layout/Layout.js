
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Sidebar from "../NavBar/NavBar"
import Footer from "../Footer/Footer";

import NavBar from "../NavBar/NavBar";


const Layout = () => {

    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <Outlet/>
                
            </main>
          
            <Footer/>
            
        </>
    );
}

export default Layout;