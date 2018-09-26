import React, { Component } from "react";

function ShopItem(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <hr />
    </div>
  );
}
function Urunler(props) {
  return (
    <div>
      <img src={props.img} />
      <h4>{props.name}</h4>
      <span style={{ color: "#ff9900" }}>{"★️".repeat(props.stars)}</span>
      <br />
      <span style={{ color: "#cc0000" }}>
        EUR
        {props.price}
      </span>
      <br />
      <br />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My Shop</h1>
      <ShopItem name="Books" />
      <Urunler
        img="https://images-eu.ssl-images-amazon.com/images/I/61AcOQyLg9L._AC_SY230_.jpg"
        name="Meine schönsten Kinderlieder"
        stars="5"
        price="19,99"
      />
      <Urunler
        img="https://images-eu.ssl-images-amazon.com/images/I/A19RGBZJ8nL._AC_SY230_.jpg"
        name="Leckerschmecker - Die 100 Größten Hits"
        stars="3"
        price="18,90"
      />
      <ShopItem name="Cups" />
      <Urunler
        img="https://images-eu.ssl-images-amazon.com/images/I/31CjxQ5OzML._AC_US218_.jpg"
        name="Arcoroc 33027 Baril"
        stars="2"
        price="11,70"
      />
    </div>
  );
}

export default App;
