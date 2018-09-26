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
      <h3>Meine schönsten Kinderlieder </h3>
    </div>
  );
}

export default App;
