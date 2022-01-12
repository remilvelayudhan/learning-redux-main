import { useSelector,useDispatch } from "react-redux";
import { decrement_count, increase_count } from "../Redux/CountSlice/CountSlice";


function Counter() {

 const count=useSelector(state=>state.count.value)
 const dispath=useDispatch()

 const inrementCount=()=>{
dispath(
  increase_count()
)
 }

 const decrementCount=()=>{
dispath(
  decrement_count()
)
 }
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is -{count}</h3>
      <button onClick={inrementCount}>Increase</button>
      <button onClick={decrementCount} >Decrease</button>
    </div>
  );
}

export default Counter;
