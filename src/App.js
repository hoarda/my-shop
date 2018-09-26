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
    </div>
  );
}

export default App;
