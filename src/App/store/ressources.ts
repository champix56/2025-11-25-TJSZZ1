import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import { REST_ADR, REST_RESSOURCES } from '../constantes/config';
interface IRessourcesState{
    memes:Array<MemeInterface>;
    images:Array<ImageInterface>
}
const initialState:IRessourcesState = {
    memes:[],
    images:[]
}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
     /* builder.addDefaultCase((state,action)=>{
        console.log('====================================');
        console.log(action);
        console.log('====================================');
      })*/
     builder.addCase(loadRessources.fulfilled,(state,action)=>{
        state.memes=action.payload.memes;
        state.images=action.payload.images;
     })
  },
});

//export const {} = ressources.actions

export const loadRessources=createAsyncThunk('ressources/load',async()=>{
    const prm= fetch(`${REST_ADR}${REST_RESSOURCES.memes}`);
    const pri= fetch(`${REST_ADR}${REST_RESSOURCES.images}`);
    const prAll=await Promise.all([prm,pri]);
    return {memes:await prAll[0].json(),images:await prAll[1].json()}
});
const ressourcesReducer= ressources.reducer
export default ressourcesReducer

 









