import { useDispatch, useSelector } from "react-redux";
import MemeFormUnconnected from "./MemeForm";
import type { AppDispatch, RootState } from "../../store/store";
import { update } from "../../store/current";

const MemeForm = () => {
  const current = useSelector((s: RootState) => s.current.meme);
  const images = useSelector((s: RootState) => s.ressources.images);
  const dispatch: AppDispatch = useDispatch();
  return (
    <MemeFormUnconnected
      images={images}
      meme={current}
      onMemeChange={(meme) => {
        dispatch(update(meme));
      }}
    />
  );
};

export default MemeForm;
