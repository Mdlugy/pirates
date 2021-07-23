import React from "react"
import {Link} from "@reach/router"
const Navbar = props => {
    return(

    <nav className="navbar navbar-light" style={{backgroundColor: 'rgb(92, 63, 9)'}}>
        <div className="container-fluid navcontainer">
        <Link className="Navbutton" style={{flex: '1'}} to="/pirates" >Home</Link>
        <Link className="Navbutton" style={{flex: '1'}} to="/add" >Add</Link>
        </div>
    </nav>
    );
}
export default Navbar