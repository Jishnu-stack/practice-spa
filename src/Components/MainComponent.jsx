import React from 'react';
import './css/style.css';
import bannerImg from './images/doc.jpg';

export default props => (
    <>
        <div className="header">
            <div className="container">
                <div className="header-main">
                    <div className="header-left">
                        <div className="logo">
                            <h1><a href="index.html">CANCER PREDICTOR</a></h1>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="top-navg">
                        <span className="menu"> <img src="images/icon.png" alt=""/></span>
                        <nav className="cl-effect-16">
                            <ul className="res">
                                <li><a className="scroll" data-hover="Home" href="index.html">Home</a></li>
                                <li><a className="scroll" data-hover="About" href="#about">About</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>

        <div className="image-sec">
            <img src={bannerImg} width="100%" alt="doc" style={{height: '83vh'}} />
            <div className="upload-content">
                {props.children}
            </div>
        </div>
        <div className="footer">
            <div className="container">
                <div className="copy-right">
                    <p>© 2019 CANCER PREDICTOR - All rights reserved.</p>
                </div>
            </div>
        </div>
    </>
);