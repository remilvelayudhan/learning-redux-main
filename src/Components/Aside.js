//import React,{useState} from 'react'
import randomcolor from 'randomcolor';

function Aside({color,setColor}) {
//  const [colour,setColor]=useState('red')
  const newcolor=randomcolor()
  const colorchange=()=>{
    setColor(newcolor)
  }
  return (
    <div className="aside" >
      <h2 style={{color:color}}> Aside</h2>
      <button onClick={colorchange}>Change Color</button>
    </div>
  );
}

export default Aside;
