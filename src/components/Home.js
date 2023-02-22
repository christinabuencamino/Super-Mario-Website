import './css/Home.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Venice from "./images/Venice_Home.png"
import VeniceHotels from "./images/Venice-Hotels.png"
import VeniceGifts from "./images/Venice-Gifts.png"
import VeniceSites from "./images/Venice-Sites.png"

function Home() {
    return (
        <div>
            <div className="image-container">
                <img src={Venice} alt="Venice Canal Picture" id="Home-image"/>
                <div id="Home-Intro">
                    <p id="title">
                        VENICE
                    </p>
                </div>
            </div>
            <div style={{display: "inline-flex", width: "100%", marginTop: "40px", marginBottom: "40px"}}>
                <hr style={{width: "100%", backgroundColor: "black", height: "1px", alignSelf: 'center'}} />
                <span style={{width: "100%", fontSize: "3vh", fontFamily: "auto"}}>
                    Use my website to plan an amazing trip!<br/>See tabs for options.
                </span>
                <hr style={{width: "100%", backgroundColor: "black", height: "1px", alignSelf: 'center'}} />
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <div className="image-container">
                    <img src={VeniceHotels} alt="Venice Hotel Picture" className="Tab-image" />
                    <div className ="Tab-text" style={{left:"33%"}}>
                        <Link to="/hotels" style={{color: "white"}}>Hotels</Link>
                    </div>
                </div>
                <div className="image-container">
                    <img src={VeniceGifts} alt="Venice Gifts Picture" className="Tab-image" />
                    <div className = "Tab-text" style={{left:"36%"}}>
                        <Link to="/gifts" style={{color: "white"}}>Gifts</Link>
                    </div>
                </div>
                <div className="image-container">
                    <img src={VeniceSites} alt="Venice Sites Picture" className="Tab-image" />
                    <div className = "Tab-text" style={{left:"38%"}}>
                        <Link to="/sites" style={{color: "white"}}>Sites</Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Home;