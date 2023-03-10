import "./css/Activities.css";

function Activities() {
  return (
    <div>
      <br />
      <br />
      <div className="activities-row">
        <p className="activities-text" id="activities-intro">
          <br />
          <h2>Top 3 Things-To-Do</h2>
          <br />
          While there's no way to list every single exicting thing to do in
          Mushroom Kingdom (since there's simply too many!), here are my top 3
          activities you HAVE to try while visiting!
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="activities-row">
        <img
          className="activities-img"
          src={require("./images/activities/yoshi.gif")}
          alt="yoshi-gif"
        />
        <p className="activities-text">
          <br />
          <h2>Travel On Yoshi</h2>
          <br />
          Travel in style on the best tour guide in all of the kingdoms!
          <br />
          While out on the town, look out for Yoshi eggs (which could be hiding
          in blocks) and break one open to make a new friend, travel buddy, and
          free taxi service.
          <br />
          Don't forget to feed him some critters for his troubles!
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="activities-row">
        <img
          className="activities-img"
          src={require("./images/activities/boo.webp")}
          alt="ghost hoard"
        />
        <p className="activities-text">
          <br />
          <h2>Peek-a-Boo</h2>
          <br />
          If you find yourself in a haunted mansion, don't get spooked by the
          Boos inside! They love playing games like hide & seek and red-light
          green-light, and will always come up to you and play.
          <br />
          They're totally harmless, as long as you always check behind you...
          <br />
          <br />
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="activities-row">
        <img
          className="activities-img"
          src={require("./images/activities/dolphin.webp")}
          alt="dolphins"
        />
        <p className="activities-text">
          <br />
          <h2>Swimming With Dolphins</h2>
          <br />
          While admiring the beautiful coasts, don't be surprised if you see
          a group of dolphins swimming by! They love touring the kingdoms and
          can bring you to amazing new places. Just hop on and enjoy the ride!
          (Don't relax too much though, since these guys never listen when you
          ask them to stop...)
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

export default Activities;
