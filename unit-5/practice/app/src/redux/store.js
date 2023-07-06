import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {reducer as authreducer} from "../redux/authreducer/reducer"
import {reducer as productReducer} from "../redux/productReducer/reducer"
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    authreducer,
    productReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))