import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import "./header.css";

export default class Header extends Component {
    render() {
        return (
            <nav className="nav">
            <div className="header">
                <div className="header_logo">
                    <Link to="/home">
                        <img src="/images/amazon.png"
                        className="header_logo"
                        alt="logo" />
                    </Link>
                </div>
                    <div className="header_tab">
                    <Link to="/home">
                        <span className="header_span">Home</span>
                    </Link>
                </div>
                <div className="header_tab">
                    <Link to="/about">
                        <span className="header_span">about</span>
                    </Link>
                </div>
                <div className="header_tab">
                    <Link to="/web">
                        <span className="header_span">web</span>
                    </Link>
                </div>
                <div className="header_tab">
                    <Link to="/data">
                        <span  className="header_span">data</span>
                    </Link>
                </div>
                <div className="header_tab">
                    <Link to="/dl">
                        <span className="header_span">DL</span>
                    </Link>
                </div>
                
            </div>
            </nav>
        )
    }
}
