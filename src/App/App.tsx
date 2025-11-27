import "./App.css";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Navbar from "./components/ui/Navbar/Navbar";
import Header from "./components/ui/Header/Header";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import {
  emptyMeme,
  MemeSVGViewer,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";
import { useEffect, useState } from "react";
import { REST_ADR, REST_RESSOURCES } from "./constantes/config";

function App() {
  const [current, setCurrent] = useState<MemeInterface>(emptyMeme);
  const [images, setimages] = useState<Array<ImageInterface>>([]);
  useEffect(() => {
    const prImages = fetch(`${REST_ADR}${REST_RESSOURCES.images}`).then((r) =>
      r.json()
    );
    const prTimeOut = new Promise((res) => {
      setTimeout(() => res(null), 500);
    });
    const prRace = Promise.race([prImages, prTimeOut]);
    prRace.then((arr) => {
      if (arr === null) {
        return console.log("timeOut");
      }
      setimages(arr);
    });
  }, []);

  return (
    <div className="App">
      {JSON.stringify(images)}
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer
            image={images.find((img) => img.id === current.imageId)}
            meme={current}
            basePath=""
          />
          <MemeForm
            meme={current}
            onMemeChange={(newMeme: MemeInterface) => {
              setCurrent(newMeme);
            }}
          />
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}
export default App;
