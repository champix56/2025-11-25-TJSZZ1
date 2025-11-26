import { configureStore } from "@reduxjs/toolkit";
import ressourcesReducer, { loadRessources } from "./ressources";
import currentReducer from "./current";

export const store=configureStore({
    reducer:{ressources:  ressourcesReducer,current:currentReducer }
})
store.dispatch(loadRessources());