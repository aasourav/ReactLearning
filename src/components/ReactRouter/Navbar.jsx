import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </div>
        </div>
    )
}