import React from "react";
let cuisine = {
  'display':'flex'
}
let cuisimg = {
  'width':'10rem',
  'border-radius':'10rem'
}
let cuisdiv = {
  'margin-left':'4rem'
}
let cuisp = {
  'text-align':'center'
}
  
let handy = {
  "margin-top": "3rem",
  "margin-left": "4rem",
};

const arr = [
  "Bestseller",
  "Drinks",
  "Food",
  "Merchandise",
  "Coffee At Home",
  "Ready to Eat",
];

const img = [
  "https://www.starbucks.in/assets/icon/Bestseller.webp",
  "https://www.starbucks.in/assets/icon/Drinks.webp",
  "https://www.starbucks.in/assets/icon/Food.webp",
  "https://www.starbucks.in/assets/icon/Merchandise.webp",
  "https://www.starbucks.in/assets/icon/CoffeeAtHome.webp",
  "https://www.starbucks.in/assets/icon/ReadyToEat.webp",
];

const Cuisine = () => {
  return ( 
    <div>
    <h2 style={handy}>Handcrafted Curations</h2>
    <div style={cuisine}>
      {arr.map((item, i) => (
        <div key={i} style={cuisdiv}>
          <img src={img[i]} alt={item} style={cuisimg} />
          <p style={cuisp}>{item}</p>
        </div>
      ))}
    </div>
  </div>
   );
}
 
export default Cuisine;