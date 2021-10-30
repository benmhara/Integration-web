import "./styles.css";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="css-liste">
        <div className="css-objet">
          <img src="http://placekitten.com/300/200" alt="" />
          <h3>Mr. Whiskerson</h3>
          <p>Phone: (212) 555-1234</p>
          <p>Email: mr.whiskaz@catnap.meow</p>
        </div>

        <div className="css-objet">
          <img src="http://placekitten.com/400/200" alt="" />
          <h3>Fluffykins</h3>
          <p>Phone: (212) 555-2345</p>
          <p>Email: fluff@me.com</p>
        </div>

        <div className="css-objet">
          <img src="http://placekitten.com/400/300" alt="" />
          <h3>Destroyer</h3>
          <p>Phone: (212) 555-3456</p>
          <p>Email: ofworlds@yahoo.com</p>
        </div>

        <div className="css-objet">
          <img src="http://placekitten.com/200/100" alt="" />
          <h3>Felix</h3>
          <p>Phone: (212) 555-4567</p>
          <p>Email: thecat@hotmail.com</p>
        </div>
      </div>
    );
  }
}
