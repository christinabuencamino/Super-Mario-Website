import "./css/Locations.css";

function Locations() {
  return (
    <div>
      <br />
      <br />
      <div className="location-row">
        <p className="location-text" id="location-intro">
          <br />
          <h2>Top 3 Best Places To Visit</h2>
          <br />
          Want to know where only the locals go?
          <br />
          Here's the must-see locations only locals know about!
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="location-row">
        <img
          className="location-img"
          src={require("./images/locations/yoshi_house.webp")}
          alt="yoshi's house"
        />
        <p className="location-text">
          <br />
          <h2>Yoshi's Island</h2>
          <br />
          Yoshi's Island is home to Yoshi's House, and is the main home for all
          Yoshis. You can meet the four legendary colored Yoshis and the seven
          Baby Yoshis from each numbered castle. Be warned, you may not catch
          island-celebrity Green Yoshi, as he's usually out of town with a message block
          in front of his house that reads “Hello! Sorry I'm not home, but I
          have gone to rescue my friends, who were captured by Bowser.”
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="location-row">
        <img
          className="location-img"
          src={require("./images/locations/forest.webp")}
          alt="forest of illusion"
        />
        <p className="location-text">
          <br />
          <h2>Forest of Illusion</h2>
          <br />
          Looking for a challenge? The Forest of Illusion is riddled with secret
          paths, a ghost house, a fortress, and Blue Switch Palace. <br />
          If you're planning on taking any regular exits, be prepared to be led
          in circles as the true exit is hidden! Use the forest as an entrance
          to Star Road, which hides a direct path to Bowser's Castle if you can
          find it...
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="location-row">
        <img
          className="location-img"
          src={require("./images/locations/bowser_valley.webp")}
          alt="valley of bowser"
        />
        <p className="location-text">
          <br />
          <h2>Valley of Bowser</h2>
          <br />
          Only the brave should approach the Valley of Bowser. Home to Bowser's
          Castle, many dangerous enemies lay in wait for their next opponent. If
          you can make it to Bowser's Castle, be prepared for traps, spooks,
          challenges, and a very angry owner. Bring an umbrella, because despite
          being located in a cavern, there are frequent thunderstorms with an
          abundance of lightning strikes.
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Locations;
