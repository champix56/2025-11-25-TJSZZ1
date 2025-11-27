import { useNavigate, useParams } from "react-router";
import FlexH1stGrow from "../components/layout/FlexH1stGrow/FlexH1stGrow";
import MemeForm from "../components/MemeForm/MemeForm.connected";
import MemeSVGViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer.connected";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { clear, update } from "../store/current";

const Editor = () => {
  const params = useParams();
  const memes = useSelector((s: RootState) => s.ressources.memes);
  const d: AppDispatch = useDispatch();
  const nav=useNavigate();
  useEffect(() => {
    if (params.id === undefined) return;
    const cur = memes.find((m) => m.id === Number(params.id));
    if (cur) {
      d(update(cur));
    }else
    {
        nav('/Editor');
    }
    return () => {
      d(clear());
    };
  }, [params.id, d, memes, nav]);

  return (
    <FlexH1stGrow>
      <MemeSVGViewer />
      <MemeForm />
    </FlexH1stGrow>
  );
};

export default Editor;
