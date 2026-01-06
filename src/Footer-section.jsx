import React from 'react'
import { Link } from "react-router-dom";
export default function footer() {
    return (
        <>
            <section className='footer-section'>


                <div className="footer-container">



                    <div className="footer-box">
                        <div className="footer-item  footer-big">

                            <h3>sri mahalakshmi Metals</h3>

                            <p>Your trusted destination for exquisite brass idols and authentic pooja essentials. Crafting spiritual excellence since generations.</p>
                            <h5><a href="tel:+918637446196"><i className="fa fa-phone"></i>+918637446196</a></h5>
                            <h5><a href="mailto:Prabhakaran12257@gmail.com"><i className="fa fa-envelope-o"></i>Prabhakaran12257@gmail.com </a></h5>


                        </div>

                        <div className="footer-item">

                            <li id='footer-title'>Quick links</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Aboutus">about us</Link></li>
                            <li><Link to="/collection">collections</Link></li>
                            <li><Link to="/">contact</Link></li>


                        </div>
                        <div className="footer-item footer-last" >
                            <li id='footer-title'>our collection</li>
                            <li>gold idols</li>
                            <li>pooja items</li>
                            <li>brass latest collection</li>
                            <li>divine latest collection</li>
                            <li>brass new arrivals</li>

                        </div>

                    </div>
                


                <div className="footer-box2">

                    <div className="social-media">
                     
                       <span><a href="#"><i className="fa fa-facebook-f"></i></a></span>
                       <span><a href="#"><i className="fa fa-instagram"></i></a></span>
                       <span><a href="#"><i className="fa fa-linkedin"></i></a></span>

                    </div>

                     <div className="copy-right">
                        <p>© 2025 <span>Sri Mahalakshmi Metals</span>. All rights reserved</p>
                     </div>
                </div>


                </div>










            </section>


        </>
    )
}
