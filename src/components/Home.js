import './css/Home.css'

import Venice from "./images/venice_gondola.jpeg"
import MoreVenice from "./images/more-venice.jpeg"

function Home() {
    return (
        <div>
            <div id="image-container">
                <img src={Venice} alt="Venice Canal Picture" id="Home-image"/>
                <div id="Home-Intro">
                    <p id="title">
                        Plan Your Trip To Venice!
                    </p>
                    <p>
                        Use this website to find hotels, attractions, and suitable gifts for loved ones.
                    </p>
                </div>
            </div>
            <br></br><br></br><br></br>
            <div id="image-container">
                <img src={MoreVenice} alt="Venice Canal Picture" id="Home-image"/>
                <div id="Home-Intro">
                    <p id="title">
                        Why Venice?
                    </p>
                    <p>
                        Venice blah blah blah
                    </p>
                </div>
            </div>
            <br></br><br></br><br></br>
        </div>
    );
  }
  
  export default Home;