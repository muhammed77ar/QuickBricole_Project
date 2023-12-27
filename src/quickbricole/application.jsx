import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar";
import GlobalStyle from "./styledComponent/Globalstyle";
import Footer from "./component/footer/footer";

export default function App2(){
    return <div className="app">
        <GlobalStyle />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
}
