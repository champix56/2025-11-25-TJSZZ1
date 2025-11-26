import "./App.css";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import { emptyMeme, MemeSVGViewer, type MemeInterface } from "orsys-tjs-meme";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState<MemeInterface>(emptyMeme)
  return <div className="App">
    <FlexV3rdGrow>

      <Header/>
      <Navbar/>
      <FlexH1stGrow>
        <MemeSVGViewer image={undefined} meme={current} basePath=""/>
        <MemeForm meme={current} onMemeChange={(newMeme:MemeInterface)=>{
          setCurrent(newMeme)
        }}/>
      </FlexH1stGrow>
      <Footer/>
    </FlexV3rdGrow>
  </div>
}
export default App;
