import { Outlet } from "react-router-dom";
import GlobalStyle from "../styledComponent/Globalstyle";
import Navbarr from "../component/navbar/navbarr";
import Footer from "../component/footer/footer";

export default function GuestLayout(){
    
    return(<>
     <div className="app">
        <GlobalStyle />
        <Navbarr />
        <Outlet />
       <Footer />
    </div>
    </>)
}
