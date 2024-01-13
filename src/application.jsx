import { Outlet } from "react-router-dom";
import GlobalStyle from "./styledComponent/Globalstyle";
import Navbarr from "./component/navbar/navbarr";


export default function App2(){
    
    return(<>
     <div className="app">
        <GlobalStyle />
        <Navbarr />
        <Outlet />
    </div>
    </>)
}
