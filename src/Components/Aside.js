
import { useSelector,useDispatch} from "react-redux";
import randomColor from 'randomcolor'
import {change_color} from '../Redux/ColorSlice/ColorSlice'

function Aside() {

  const color =useSelector(state=> state.color.value)
  const dispatch =useDispatch()
  const changecolor =()=>{
 dispatch(
  change_color({
    color:randomColor()
  }))
  }

  return (
    <div className="aside" >
      <h2 style={{color:color}} > Aside</h2>
      <button onClick={changecolor}>Change Color</button>
    </div>
  );
}

export default Aside;
