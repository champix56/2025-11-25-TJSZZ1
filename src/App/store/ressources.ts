import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REST_ADR, REST_RESSOURCES } from "../constantes/config";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { save } from "./current";
interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const initialState: IRessourcesState = {
  images: [],
  memes: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadRessources.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.memes = action.payload.memes;
    });
    builder.addCase(save.fulfilled, (state, action) => {
      const position = state.memes.findIndex(
        (meme) => meme.id === action.payload.id
      );
      if (position >= 0) {
        //exist
        state.memes[position] = action.payload;
      } else {
        state.memes.push(action.payload);
      }
    });
  },
});
export const loadRessources = createAsyncThunk("ressourcesLoader", async () => {
  const pri = fetch(`${REST_ADR}${REST_RESSOURCES.images}`);
  const prm = fetch(`${REST_ADR}${REST_RESSOURCES.memes}`);
  const prAll = await Promise.all([pri, prm]);
  return { images: await prAll[0].json(), memes: await prAll[1].json() };
});
//export const {} = ressources.actions

const ressourcesReducer = ressources.reducer;
export default ressourcesReducer;
