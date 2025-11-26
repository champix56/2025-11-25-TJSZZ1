import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { loadRessources } from "./ressources";
import currentReducer from "./current";

export const store=configureStore({
    reducer:{ressources:  ressourcesReducer,current:currentReducer }
})
store.dispatch(loadRessources());

//typage du store et du dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;