import React from "react";
let cards = {
  height: "15rem",
  width: "90%",
  "background-color": "skyblue",
  "margin-left": "4rem",
  "margin-top": "4rem",
  display: "flex",
  "border-radius": "6px",
};
let cardimg = {
  width: "7rem",
};
let orderbutton = {
  width: "30rem",
  display: "flex",
  "justify-content": "flex-end",
};
let buton = {
  'padding-left': "2rem",
  'padding-right': "2rem",
  'padding-top':'1rem',
  'padding-bottom':'2rem',
  height: "2rem",
  "margin-top": "10rem",
  "margin-right": "2rem",
  'border-radius':'1rem',
  'background-color':'#01754A',
  'border':'1px solid #01754A',
  'color':'white'
};
let textcon = {
  padding: "0.3rem",
};
let divtext = {
  "margin-top": "2rem",
  "margin-left": "2rem",
};

let divimg = {
  'padding-left':'1rem'
}
let secondtext = {
  padding: "0.3rem",
  'font-weight':'bold'
}
const Hero = () => {
  return ( 
    <div style={cards}>
        <div style={divimg}>
          <img
            src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Refreshers_dashboard_03_1_10aa41bbca.png"
            style={cardimg}
          ></img>
        </div>

        <div style={divtext}>
          <p style={textcon}>All New</p>
          <p style={secondtext}>Starbucks Refresher</p>
          <p style={textcon}>
            Beat the heat with your bestie, Refreshers now available in Lychee
            Raspberry and Kiwi Calamansi flavours.
          </p>
        </div>
        <div style={orderbutton}>
          <button style={buton}>Order Now</button>
        </div>
      </div>
   );
}
 
export default Hero;