import "./css/Food.css";

function Food() {
  return (
    <div>
      <br />
      <br />
      <div className="food-row">
        <p className="food-text" id="food-intro">
          <br />
          <h2>Top 5 Must-Try Foods</h2>
          <br />
          Mushroom Kingdom's main delicacy is — you guessed it — mushrooms!
          <br />
          Check out the list below to see my highlights for must-try mushrooms
          while you visit.
          <br />
          <br />
        </p>
        <br />
        <br />
        <br />
      </div>
      <div className="food-row">
        <img className="food-img" src={require("./images/food/bee.png")} alt="bee mushroom"/>
        <br />
        <p className="food-text">
          <br />
          <h2>Bee Mushroom</h2>
          <br />
          Found in Honeyhive Galaxy, the Bee Mushroom grants you the ability to
          fly for short periods of time, climb honey walls, and stick to the
          Queen Bee! Also take advantage of being able to stand on flowers and
          clouds.
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="food-row">
        <img className="food-img" src={require("./images/food/big.png")} alt="big mushroom"/>
        <br />
        <p className="food-text">
          <br />
          <h2>Mega Mushroom</h2>
          <br />
          If you can catch the Mega Mushroom, prepare to grow! This mushroom
          allows you to grow into a giant that no one can stop. Be careful
          though, as anything you step on WILL be destroyed!
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="food-row">
        <img
          className="food-img"
          src={require("./images/food/propeller.webp")}
          alt="propeller mushroom"
        />
        <br />
        <p className="food-text">
          <br />
          <h2>Propeller Mushroom</h2>
          <br />
          Keep your eyes peeled for this floating snack! If you manage to catch
          one, this mushroom gives you a propeller cap that grants you huge air
          time, and a gentle descent to your target.
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="food-row">
        <img className="food-img" src={require("./images/food/red.webp")} alt="super mushroom"/>
        <br />
        <p className="food-text">
          <br />
          <h2>Super Mushroom</h2>
          <br />A CLASSIC must-try! The Super Mushroom helps you transform into
          your Super form, allowing you to break blocks and have extra health!
          You can find these almost anywhere hiding in regular blocks.
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="food-row">
        <img className="food-img" src={require("./images/food/speed.png")} alt="golden mushroom"/>
        <br />
        <p className="food-text">
          <br />
          <h2>Golden Mushroom</h2>
          <br />
          Have a need for speed? If you're karting and happen to break open a
          block with this inside, get ready for the ride of your life! This
          mushroom grants you a temporary speed boost, allowing you to catch up
          to your competition, outrun blue shells, and cross the finish line
          first!
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

export default Food;
