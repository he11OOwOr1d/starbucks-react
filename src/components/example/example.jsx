let body = {
  width: "400px",
  height: "300px",
  border: "1px solid black",
  "margin-top": "2rem",
  'margin-left':'1rem',
  'display':'flex'
  
};
let main = {
  'display':'flex',
  'align-items':'center',
  'justify-content':'center'
  
}
let prev = {
  'height':'2rem',
  'margin-left':'1rem'
}
let next = {
  'margin-left':'1rem',
  'height':'2rem'
}
let imgone = {
  'width':'400px',
  'height':'300px',
}
let imgtwo = {
  'width':'400px',
  'height':'300px',
}
let imgthree = {
  'width':'400px',
  'height':'300px',
}
const Carousel = () => {
  const handleNext = () =>{

  }
  return (
    <div style={main}>
      <button style={prev}>prev</button>
      <div style={body}>
      <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg" style={imgone}></img>
        <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg" style={imgtwo}></img>
        <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ICW_Live_Event_Day5_41f11ca3d2.jpg" style={imgthree}></img>
      </div>
      <button style={next} onClick={handleNext}>next</button>
    </div>
  
  );
};

export default Carousel;
