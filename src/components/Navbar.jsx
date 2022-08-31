import React from "react";
import "./navbar.css" ;
import { Link } from "react-router-dom";

const Navbar = ({navActive, setNavActive}) => {
    const navLinks = [
        {
            title : "first",
            url : "#someurl"
        },
        {
            title : "tit",
            url : "url",
        },
        {
            title : "tit",
            url : "url",
        },
        {
            title : "tit",
            url : "url",
        },
        {
            title : "tit",
            url : "url",
        },
        {
            title : "tit",
            url : "url",
        },
        {
            title : "t",
            url : "url",
        }
    ] ;

    const toggleNav = ()=>{
        if(navActive){
            setNavActive(false) ;
        }
        else{
            setNavActive(true) ;
        }
    }
    return(
        <>
            <nav>
                <div className="left">
                    <h1>
                        logo
                    </h1>
                </div>
                <div className="mid">
                    <div>
                <i className={navActive ? "fa fa-times fa-2x hamburger" : "fa fa-bars fa-2x hamburger"} onClick={toggleNav}></i>
                </div>
                </div>
                <div className="right">

                <ul className={navActive ? "nav-panel active" : "nav-panel"}>

                    {navLinks.map((item, index)=>{
                        return(
                            <li key = {index}>
                                <Link to={item.url} onClick={toggleNav}>{item.title}</Link>
                            </li>
                        )
                    })}

                </ul>
                </div>
                
                
            </nav>
        </>
    )
}



// fa fa-times -- cross
// fa fa-bars fa-2x   -- hamburger - double size




export default Navbar ;






