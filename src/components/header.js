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
                    <a href="/home">
                        <img src="/images/amazon.png"
                        className="header_logo"
                        alt="logo" />
                    </a>
                </div>
                    <div className="header_tab">
                    <a href="/home">
                        <span className="header_span">HOME</span>
                    </a>
                </div>
                <div className="header_tab">
                    <a href="/home#about">
                        <span className="header_span">ABOUT</span>
                    </a>
                </div>
                <div className="header_tab">
                    <a href="/home#web">
                        <span className="header_span">WEB</span>
                    </a>
                </div>
                <div className="header_tab">
                    <a href="/home#data">
                        <span  className="header_span">DATA</span>
                    </a>
                </div>
                <div className="header_tab">
                   <a href="/home#dl">
                        <span className="header_span">DL</span>
                    </a>
                </div>
                
            </div>
            </nav>
        )
    }
}
