import React from 'react'
import './Footerstyle.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div>
                <h1>Trippy</h1>
                <p>Choose Your Favourite Destination.</p>
            </div>
            <div>
                <a href="/">
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
                <a href="/">
                    <i className='fa-brands fa-behance-square'></i>
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Projects</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Version</a>
            </div>

            <div>
                <h4>Community</h4>
                <a href="/">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">Projects</a>
                <a href="/">Blogs</a>
            </div>

          

            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshoting</a>
                <a href="/">Contact us</a>
                
            </div>

            <div>
                <h4>Other</h4>
                <a href="/">Terms of service</a>
                <a href="/">Privacy</a>
                <a href="/">Policy License</a>
                <a href="/">All Version</a>
            </div>
        </div>
    </div>
  )
}

export default Footer