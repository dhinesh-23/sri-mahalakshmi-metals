import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import Logo from '/logo22.png'
import { useState, useEffect } from "react";
export default function Navmenu() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.style.backgroundColor = "#FFF7ED";
            document.body.style.color = "#6B7280";
            
        } else {
            document.body.style.backgroundColor = "#1F1F1F";
            document.body.style.color = "#F5F5F5";
        }
    }, [darkMode]);


    return (
        <>
            <div className="nav-section">
                <nav className='nav'>
                    <div className="logo-box">
                        <img src={Logo} alt="logo" />
                    </div>

                    <ul className='nav-list' id='normal-link'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Aboutus">About Us</Link></li>
                        <li><Link to="/#contact-us">Contact Us</Link></li>
                        <li className="dropdown"><Link to="/" className="dropbtn">God Idols <i className="fa fa-angle-down"></i></Link>
                            <ul className="dropdown-menu " id='dropmenu-menu'>
                                <li><Link to="/">mahalaksmi-metal</Link></li>
                                <li><Link to="/">Development</Link></li>
                                <li><Link to="/">SEO</Link></li>
                                <li><Link to="/">SEO</Link></li>
                                <li><Link to="/">SEO</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/collection">Pooja Items</Link></li>
                    </ul>


                    <div className="nav-last" id="normal-last-box">

                        <div className="nav-toggle-switch">
                            <label className="nav-switch-label">
                                <input type="checkbox" className="nav-checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
                                <span className="nav-slider"></span>
                            </label>
                        </div>



                        <button className="button1">
                            <span>  Contact <i className="fa fa-envelope"></i>
                            </span>
                        </button>








                    </div>


                    <div class="nav-burger">

                        {/* <!-- Hidden Checkbox --> */}
                        <input type="checkbox" id="menu-toggle" />

                            {/* <!-- Hamburger Button --> */}
                            <label for="menu-toggle" class="menu-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>

                            {/* <!-- Links --> */}
                            <div class="link2">

                                {/* <!-- CLOSE BUTTON INSIDE MENU --> */}
                                <li class="close-btn"><label for="menu-toggle"><i class="fa fa-remove"></i></label></li>



                                                   <ul className='nav-list'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Aboutus">About Us</Link></li>
                        <li><Link to="/#contact-us">Contact Us</Link></li>
                        <li className="dropdown"><Link to="/" className="dropbtn">God Idols <i className="fa fa-angle-down"></i></Link>
                            <ul className="dropdown-menu " id='dropmenu-menu'>
                                <li><Link to="/">mahalaksmi-metal</Link></li>
                                <li><Link to="/">Development</Link></li>
                                <li><Link to="/">SEO</Link></li>
                                <li><Link to="/">SEO</Link></li>
                                <li><Link to="/">SEO</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/collection">Pooja Items</Link></li>
                    </ul>


                    <div className="nav-last">

                        <div className="nav-toggle-switch">
                            <label className="nav-switch-label">
                                <input type="checkbox" className="nav-checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
                                <span className="nav-slider"></span>
                            </label>
                        </div>



                        <button className="button1">
                            <span>  Contact <i className="fa fa-envelope"></i>
                            </span>
                        </button>








                    </div>








                                
                            </div>

                    </div>



                </nav>
            </div>
        </>
    )
}
