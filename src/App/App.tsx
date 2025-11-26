import "./App.css";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import Footer from "./components/ui/Footer/Footer";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Thumbnail from "./pages/Thumbnail";
import Editor from "./pages/Editor";

function App() {
  return <div className="App">
    <FlexV3rdGrow>
      <Header/>
      <Navbar/>
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Thumbnail} path="/thumbnail" />
          <Route Component={Editor} path="/edit" />
        </Routes>
      <Footer/>
    </FlexV3rdGrow>
  </div>
}
export default App;
