import React from 'react'
import {socialImgs} from "../constants/index.js";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center md:items-start items-center">
                    <a href="/">Visit my blog</a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="-blank" href={img.url} key={img.url}>
                            <img 
                                src={img.imgPath} 
                                style={img.name === "github" ? { filter: "brightness(0) invert(1)" } : {}}
                            />
                        </a>

                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        {new Date().getFullYear()} Bharadwaj | OBN.All rights reserved
                    </p>

                </div>
            </div>
        </footer>
    );
}
export default Footer
