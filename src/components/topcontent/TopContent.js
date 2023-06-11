import React from 'react'
import { Link } from "react-scroll";
import "./TopContent.css"

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent__container'> 

                <h1>SUDARSAN</h1>
                 <p>Web developer in LTIMINDTREE</p>
                
                <a target="_blank" href="https://docs.google.com/document/d/1QCYEh-l9noOgeBQgNPhuk3natnDTs6XD/edit?usp=share_link&ouid=111552627912023296614&rtpof=true&sd=true" download>
                    <button className='topContent__downloadButton'> Download CV</button>
                </a>
                
                <Link to="projects" smooth={true} duration={500}>
                    <button className='topContent__workButton'>My Works</button>
                </Link>
                
            </div>
        </div>
    )
}

export default TopContent