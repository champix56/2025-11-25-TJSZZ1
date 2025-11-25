import "./App.css";
import Button from "./components/ui/Button/Button";
function App() {
  return (
    <div>
      <Button type="button" color="skyblue" onButtonClick={()=>{
        console.log('-1 clické');
      }}>-1</Button>
      <Button color="aquamarine"  onButtonClick={()=>{
        console.log('+1 clické');
      }}>+1</Button>
    </div>
  );
}
export default App;
