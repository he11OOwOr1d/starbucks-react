let Art ={
  width: "100%",
  height: "30rem",
  "background-color": "#EDEBE9",
  "margin-top": "3rem",
}

let learn = {
  'padding-top':'1rem',
  'padding-left':'4rem'
}

let coffimg = {
  'width':'90%',
  'height':'80%',
  'padding-left':'4rem',
  'object-fit':'cover'
}

let imgtex ={
  'display':'flex',
  'align-items':'center',
  'justify-content':'space-between'
}

let discover = {
  'padding-right':'1.5rem',
  'color':'green'
}

const Coffee = () => {
  return ( 
      <div style={Art}>
        <div style={imgtex}>
          <h2 style={learn}>Learn more about the world of coffee!</h2>
          <p style={discover}>Discover More</p>
        </div>
        
        <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg" style={coffimg}></img>
      </div>
   );
}
 
export default Coffee;