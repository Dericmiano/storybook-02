//A reducer is simply a function that takes the function of the
// current state and manipulates the state and updates the state
import {TODO_LIST_SUCCESS,TODO_LIST_FAIL,TODO_LIST_REQUEST,TODO_DETAIL_SUCCESS,
    TODO_DETAIL_REQUEST,TODO_DETAIL_FAIL,TODO_DELETE_REQUEST,
    TODO_DELETE_SUCCESS,TODO_DELETE_FAIL,
    TODO_UPDATE_REQUEST,TODO_UPDATE_FAIL,TODO_UPDATE_SUCCESS,
    TODO_CREATE_FAIL,TODO_CREATE_SUCCESS,TODO_CREATE_REQUEST,
} from "../constants/TodosConstants";

export const TodosListReducers = (state={todos:[]}, action)=>{
    switch (action.type) {
        case TODO_LIST_REQUEST:
            return {loading:true, todos:[]}
        case TODO_LIST_SUCCESS:
            return {loading: false, todos: action.payload}
        case TODO_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state

    }
}

export const TodoDetailReducers = (state={todo:{}}, action)=>{
    switch (action.type) {
        case TODO_DETAIL_REQUEST:
            return {loading:true, ...state}
        case TODO_DETAIL_SUCCESS:
            return {loading: false, todo:action.payload}
        case TODO_DETAIL_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state

    }

}

export const TodoDeleteReducer = (state={}, action) =>{
    switch (action.type) {
        case TODO_DELETE_REQUEST:
            return{loading:true}
        case TODO_DELETE_SUCCESS:
            return {loading: false, success:true}
        case TODO_DELETE_FAIL:
            return {loading: false, error:action.payload}
        default:
            return state

    }
}
export const TodoUpdateReducer = (state={todo:{}}, action)=>{
    switch (action.type) {
        case TODO_UPDATE_REQUEST:
            return{loading:true}
        case TODO_UPDATE_SUCCESS:
            return {loading: false,todo:action.payload, success:true}
        case TODO_UPDATE_FAIL:
            return {loading: false, error:action.payload}
        default:
            return state
    }
}
export const TodoCreateReducer = (state={todo:{}}, action)=>{
    switch (action.type) {
        case TODO_CREATE_REQUEST:
            return{loading:true}
        case TODO_CREATE_SUCCESS:
            return {loading: false, todo:action.payload, success:true}
        case TODO_CREATE_FAIL:
            return {loading: false, error:action.payload}
        default:
            return state
    }
}
