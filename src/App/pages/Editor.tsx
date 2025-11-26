import FlexH1stGrow from "../components/layout/FlexH1stGrow/FlexH1stGrow";
import MemeForm from "../components/MemeForm/MemeForm.store";
import MemeSvgViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.store";


const Editor = () => {
  return (
    <FlexH1stGrow>
      <MemeSvgViewer basePath="" />
      <MemeForm />
    </FlexH1stGrow>
  );
};

export default Editor;
