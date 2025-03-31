import React from "react";
import "../Navbar/index.css";

const Home = () => {
  let styles = {
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
    margin: "1rem",

  };
  let style1 = {
    padding: "1rem",
  };
  let style2 = {
    display: "flex",
    "align-items": "center",
    "padding-left": "4.8rem",
  };
  let Homeele = {
    "margin-left": "2rem",
  };
  let input = {
    "border-radius": "1rem",
    border: "1px solid black",
    width: "15rem",
    padding: "0.5rem",
  };
  let profile = {
    "margin-left": "1rem",
  };
  let greenBar = {
    width: "100%",
    height: "6rem",
    "background-color": "#1E3932",
    display: "flex",
    "align-items": "center",
    "justify-content": "space-between",
  };
  let startext = {
    color: "white",
    padding: "6rem",
    "font-size": "1.5rem",
    "font-family": "Courier New, Courier, monospace",
  };
  let knowbutton = {
    color: "white",
    "border-radius": "1rem",
    border: "1px solid white",
    "margin-right": "5rem",
    padding: "1rem",
    "background-color": "#1E3932",
  };
  let inppart = {
    display: "flex",
    "justify-content": "space-between",
    "align-items": "center",
    margin: "1rem",
    "padding-right": "3.2rem",
  };
  

  return (
    <div>
      <div style={styles}>
        <div style={style2}>
          <div>
            <img src="https://www.starbucks.in/assets/icon/logo.png" alt="" />
          </div>
          <div style={Homeele}>
            <span style={style1}>Home</span>
            <span style={style1}>Gift</span>
            <span style={style1}>Order</span>
            <span style={style1}>Pay</span>
            <span style={style1}>Store</span>
          </div>
        </div>
        <div style={inppart}>
          <div>
            <input type="text" style={input}></input>
          </div>
          <div style={profile}>
            <img src="https://www.starbucks.in/assets/icon/account_thin.svg"></img>
          </div>
        </div>
      </div>

      <div style={greenBar}>
        <span style={startext}>StarBucks</span>
        <button style={knowbutton}>Know More</button>
      </div>

    </div>
  );
};

export default Home;
