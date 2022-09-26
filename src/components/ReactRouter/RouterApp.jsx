import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"
import NotFount from "./NotFound"
import Services from "./Services"
//brouserRouter route browse korar jonno kaj kore
export default function RouterApp(){
    return(
        <div>
            
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<Services/>}/>
                    <Route path="/services" element={<Navbar/>}/>
                    
                    <Route path="*" element={<NotFount/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}