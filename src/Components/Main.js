import Counter from "./Counter";
import Aside from "./Aside";
function Main({count,color,setColor,setCount}) {
  return (
    <div className="main">
      <Counter count={count} setCount={setCount}/>
      <Aside color={color} setColor={setColor} />
    </div>
  );
}

export default Main;
