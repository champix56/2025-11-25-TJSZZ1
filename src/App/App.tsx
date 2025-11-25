import "./App.css";
import Button from "./components/ui/Button/Button";
function App() {
  return (
    <div>
      <Button
        titre="Button1"
        boolean={true}
        number={245}
        str={`khgds${new Date().toISOString()}dcqssd`}
        function={() => {
          console.log("coucou");
        }}
        object={{ abc: 123, bcf: "toto" }}
        array={[1, 2, 3, 4]}
      />
    </div>
  );
}

export default App;
