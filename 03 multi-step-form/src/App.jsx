import Register from "./components/Register";
import { useSelector, useDispatch } from "react-redux";
import {
  increment_Form_Step,
  decremenet_Form_Step,
} from "./feature/counter/formStepSlice";

const App = () => {
  const StepCount = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main className="App">
      <button
        onClick={() => dispatch(increment_Form_Step())}
        style={{ display: "inline" }}
      >
        +
      </button>
      <div>{StepCount}</div>
      <button onClick={() => dispatch(decremenet_Form_Step())}>-</button>
    </main>
  );
};

export default App;
