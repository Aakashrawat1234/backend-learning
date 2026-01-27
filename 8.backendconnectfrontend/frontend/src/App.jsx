import React from 'react';
import axios from 'axios';
function App(){
async function getRes(){

  //using fetch

  /*
 const res= await fetch("http://localhost:8000/");
let data= res.json();
console.log(data);
data.then((e)=>{
console.log(e);
})
.catch((e)=>{
  console.error(e);
})*/
let res= await axios.get("http://localhost:8000/")
console.log(res);


}

  return(
    <div> 
      <button onClick={()=>getRes()}>Send</button>
    </div>
  )
}
export default App;