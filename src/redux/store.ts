import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {messageReducer} from "./message-reducer";
import {errorReducer} from "./error-reducer";
import {titleReducer} from "./title-reducer";

const rootReducer  = combineReducers({
    number: counterReducer,
    title: titleReducer,
    message: messageReducer,
    error: errorReducer,
})
export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store