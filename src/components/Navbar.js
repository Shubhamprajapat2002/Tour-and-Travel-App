import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navstyle.css";

export default class Navbar extends Component {
    state={clicked :false}
    handelclick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className="nav-item">
                <h1 className="nav-logo">Trippy</h1>
                <div className="menu" onClick={this.handelclick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? " nav-menu active" : "nav-menu" }>
                    <li>
                        <Link className="linkremove" to="/">
                            <i className="fa-solid fa-house-user    colourblack"></i> Home
                        </Link>
                    </li>
                    <li>
                        <Link className="linkremove" to="/about">
                            <i className="fa-solid fa-circle-info    colourblack"></i> About
                        </Link>
                    </li>
                    <li>
                        <Link className="linkremove" to="/service">
                            <i className="fa-solid fa-briefcase    colourblack"></i> Services
                        </Link>
                    </li>
                    <li>
                        <Link className="linkremove" to="/contact">
                            <i className="fa-solid fa-address-book    colourblack"></i> Contact
                        </Link>
                    </li>
                    <button>
                        <Link className="linkremove" to="/" >Sign up</Link>
                        {/* <a className="btn btn1    colourblack" href="/" to="/signup">
                           
                            Sign Up
                        </a> */}
                    </button>
                </ul>
            </nav>
        );
    }
}
