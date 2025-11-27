import "./App.css";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import Footer from "./components/ui/Footer/Footer";
import { Route, Routes } from "react-router";
import Editor from "./pages/Editor";
import Thumbnail from "./pages/Thumbnail";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Editor" Component={Editor} />
          <Route path="/Editor/:id" Component={Editor} />
          <Route path="/Thumbnail" Component={Thumbnail} />
        </Routes>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}
export default App;
