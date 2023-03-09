import './css/Home.css'

function Home() {
    return (
      <>        
        <main>
        <div style={{display: "flex", flexDirection: "row", height: '7vw', justifyContent: 'space-between'}}>
        <img id="left-lakitu" src={require("./images/home/lakitu.png")} alt="lakitu"></img>
        <img id="right-lakitu" src={require("./images/home/lakitu.png")} alt="lakitu"></img>
        </div>
        <div>
          <h1 id="message-box">Welcome to Mushroom Kingdom!<br></br>Use the tabs above to plan out your<br/> perfect trip today!</h1>
        </div>
        </main>
      </>
    );
  }
  
  export default Home;