import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import logo from "../images/logo.svg";

function Navbar (){
    const [isOpen, setisOpen] = useState(false);

    const handleToggle=()=>{
        setisOpen(!isOpen);
    };
    return(
        <nav className="navbar">
          <div className="nav-center">
          <div className="nav-header">
          <Link to ="/">
          <img  src={logo} alt ="Beach logo "/>
          </Link>
          <button type="button" className ="nav-btn" onClick={handleToggle}>
          <FaAlignRight className="nav-icon"/>
          </button>
          
          </div >
          <ul className={isOpen ? "nav-links show-nav":"nav-links"}>
          <li>
          <Link to ="/">Home</Link>
          </li>
          <li>
          <Link to ="/rooms">Rooms</Link>
          </li>
          </ul>
          </div>
          
          
        </nav>



    )
}
export default Navbar;

