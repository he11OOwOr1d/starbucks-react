import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

let divBarsi = {
  width: "100%",
  height: "19rem",
  "background-color": "#EDEBE9",
  "margin-top": "7rem",
};
let bhead = {
  "padding-left": "4rem",
  "padding-top": "2rem",
};
let card1 = {
  width: "27rem",
  height: "10rem",
  "background-color": "#FFFFFF",
  "margin-left": "4rem",
  "border-radius": "0.5rem",
  "padding-left": "1rem",
  "padding-top": "1rem",
  display: "flex",
};
let img = {
  width: "5rem",
  "border-radius": "1rem",
};
let infotext = {
  "padding-left": "1.5rem",
  width: "30rem",
};
let Add = {
  width: "15rem",
  height: "2rem",
  display: "flex",
  "justify-content": "flex-end",
  "padding-right": "1rem",
  "padding-top": "6rem",
};
let additem = {
  "background-color": "#01754A",
  border: "1px solid #01754A",
  color: "white",
  "border-radius": "1rem",
  "padding-right": "1rem",
  "padding-left": "1rem",
};
let javachip = {
  "font-weight": "bold",
};
let tall = {
  "font-size": "0.7rem",
};

const Barista = () => {
  return (
    <div style={divBarsi}>
      <h2 style={bhead}>Barista Recommends</h2>
      <div style={card1}>
        <div>
          <img
            src="https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp"
            style={img}
          ></img>
          <p>Rs 420.00</p>
        </div>

        <div style={infotext}>
          <FontAwesomeIcon icon={faLeaf} />
          <p style={javachip}>Java Chip Frappuccino</p>
          <p style={tall}>TALL(345 ml) .392 kcal</p>
        </div>

        <div style={Add}>
          <button style={additem}>Add Item</button>
        </div>
        
      </div>
    </div>
  );
};

export default Barista;
