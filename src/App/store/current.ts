import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { emptyMeme, type MemeInterface } from "orsys-tjs-meme";
import { REST_ADR, REST_RESSOURCES } from "../constantes/config";

const initialState = {
  meme: emptyMeme,
};

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    update: (state, action) => {
      state.meme = action.payload;
    },
    clear: (state) => {
      state.meme = emptyMeme;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(save.fulfilled, (state, action) => {
      state.meme = action.payload;
    });
  },
});

export const save = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const pr = await fetch(
      `${REST_ADR}${REST_RESSOURCES.memes}${
        meme.id !== undefined ? "/" + meme.id : ""
      }`,
      {
        method: meme.id !== undefined ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(meme)
      }
    );
    return await pr.json();
  }
);

export const { update, clear } = current.actions;

const currentReducer = current.reducer;
export default currentReducer;
