import './css/Home.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Home() {
    return (
      <>        
        <main><div id="home"><h1>Welcome!</h1></div></main>
        <footer><img id="pipe" src={require("./images/pipe.gif")} /></footer>
      </>
    );
  }
  
  export default Home;