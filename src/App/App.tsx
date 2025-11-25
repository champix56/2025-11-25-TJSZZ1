import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";
function App() {
  const [counter, setCounter] = useState(-1);

  useEffect(() => {
    console.log('dans le useEffect',counter)
    return () => {
      //fonction de demontage
    };
  }, [counter])
  useEffect(() => {
    //montage initial 
    setCounter(0);
  }, [])
  return (
    <div>
      <div style={{ textAlign: "center" }}>counter: {counter}</div>
      <Button
        type="button"
        color="skyblue"
        onButtonClick={() => {
          console.log("-1 clické");
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -1
      </Button>
      <Button
        color="aquamarine"
        onButtonClick={() => {
          console.log("+1 clické");
          setCounter(counter+1);
          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
}
export default App;
