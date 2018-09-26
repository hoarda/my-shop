import React, { Component } from "react";

function ShopItem(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My Shop</h1>
      <ShopItem name="Books" />
      <img src="https://images-eu.ssl-images-amazon.com/images/I/61AcOQyLg9L._AC_SY230_.jpg" />
      <h4>Meine schönsten Kinderlieder</h4>
      <span style={{ color: "#ff9900" }}>{"★️".repeat(5)}</span>
      <br />
      <span style={{ color: "#cc0000" }}>{"EUR 19,99"}</span>
      <br />
      <img src="https://images-eu.ssl-images-amazon.com/images/I/A19RGBZJ8nL._AC_SY230_.jpg" />
      <h4>Leckerschmecker - Die 100 Größten Hits</h4>
      <span style={{ color: "#ff9900" }}>{"★️".repeat(3)}</span>
      <br />
      <span style={{ color: "#cc0000" }}>{"EUR 19,99"}</span>
    </div>
  );
}

export default App;
