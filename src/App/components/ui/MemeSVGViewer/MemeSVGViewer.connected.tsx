import { MemeSVGViewer as Msvg } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface IMemeSvgViewerProps {
  basePath?: string;
}

const MemeSVGViewer: React.FC<IMemeSvgViewerProps> = ({ basePath = "" }) => {
  const current = useSelector(
    (storeState: RootState) => storeState.current.meme
  );
  const images = useSelector((s: RootState) => s.ressources.images);
  return (
    <Msvg
      basePath={basePath}
      image={images.find((img) => img.id === current.imageId)}
      meme={current}
    />
  );
};

export default MemeSVGViewer;
