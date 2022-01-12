import { useState } from "react";
import "./App.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
function App() {
const [color,setColor]=useState('red')
const [count,setCount]=useState(1)
  return (
    <div className="App">
      <Header count={count} color={color} />
      <Main count={count} color={color} setColor={setColor} setCount={setCount} />
      <Footer count={count} color={color} />
    </div>
  );
}

export default App;
