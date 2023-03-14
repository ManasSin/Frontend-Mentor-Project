import Register from "./components/Register";
import Info from "./components/Info";
import { useSelector, useDispatch } from "react-redux";
import {
  increment_Form_Step,
  decremenet_Form_Step,
} from "./feature/counter/formStepSlice";

const App = () => {
  const StepCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Info />
    </>
  );
};

{
  /* 
    <button onClick={() => dispatch(increment_Form_Step())}>+</button>
    <p>{StepCount}</p>
    <button onClick={() => dispatch(decremenet_Form_Step())}>+</button>
*/
}
export default App;
