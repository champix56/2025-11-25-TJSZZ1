import "./App.css";
import Button from "./components/ui/Button/Button";
function App() {
  return (
    <div>
      <Button type="button">
        <img src="https://cdn-icons-png.flaticon.com/512/954/954591.png" />
        <div>Clickez ici</div>
      </Button>
      <Button>Text</Button>
      <Button>
        <div>Button</div>
      </Button>
      <Button>
        <div>Button</div>
        text
      </Button>
    </div>
  );
}

export default App;
