import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar";
import GlobalStyle from "./styledComponent/Globalstyle";
import Footer from "./component/footer/footer";
import { createContext, useState } from "react";

export const Context = createContext()

export default function App2(){
    const [open, setOpen] = useState(false);
    

    return <Context.Provider value={open}>
     <div className="app">
        <GlobalStyle />
        <Navbar setOpenModal={setOpen} />
        <Outlet />
        <Footer />
    </div></Context.Provider>
}
