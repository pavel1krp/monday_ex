import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer  = combineReducers({
    number: counterReducer,
})
export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store