import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {TodosListReducers,TodoDetailReducers,TodoDeleteReducer,TodoUpdateReducer,TodoCreateReducer} from "./reducers/TodosReducers";

const reducer = combineReducers({
    TodosList:TodosListReducers,
    TodoDetail:TodoDetailReducers,
    TodoDelete:TodoDeleteReducer,
    TodoUpdate:TodoUpdateReducer,
    TodoCreate:TodoCreateReducer,
})

const initialState={}

const middleware = [thunk]

const Store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default Store