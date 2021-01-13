import React, { Component } from 'react';
import "./home.css";
import Web from "./web";
import Data from "./data";
import Dl from "./dl";
import About from "./About";


export default class Home extends Component {
    render() {
        return (
            <div className ="container">
                <div id = "home" className="card_home">
                    {/* <div className="topright">We are Technotraints.</div> */}
                    <img className="card_img" src="images/home.jpg" />
                    <div class="caption">
                        <span class="border">we are technoTraits</span><br/>
                    </div>
                </div>
                <div id = "about" className="card_rest">
                    <About/>
                </div>
                <div id = "web" className="card_rest">
                    <Web/>
                </div>
                <div id = "data" className="card_rest">
                    <Data/>
                </div>
                <div id = "dl" className="card_rest">
                    <Dl/>
                </div>
            </div>
        )
    }
}
