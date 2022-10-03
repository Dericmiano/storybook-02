import axios, {Axios} from "axios";
import {TODO_LIST_SUCCESS,TODO_LIST_FAIL,TODO_LIST_REQUEST,
    TODO_DETAIL_SUCCESS,TODO_DETAIL_FAIL,TODO_DETAIL_REQUEST,
    TODO_DELETE_REQUEST,TODO_DELETE_FAIL,TODO_DELETE_SUCCESS,
    TODO_UPDATE_SUCCESS,TODO_UPDATE_FAIL,TODO_UPDATE_REQUEST,
    TODO_CREATE_SUCCESS,TODO_CREATE_REQUEST,TODO_CREATE_FAIL,
} from "../constants/TodosConstants";

export const ListTodosActions = () =>async (dispatch)=>{
    try {
        dispatch({
            type:TODO_LIST_REQUEST
        })
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch({
            type:TODO_LIST_SUCCESS,
            payload:data
        })

    }catch (error) {
        dispatch({
            type:TODO_LIST_FAIL,
            payload:"There was an error fetching the list of your Todos list"
        })

    }

}

export const DetailTodoAction = (id) =>async (dispatch)=>{
    try {
        dispatch({type:TODO_DETAIL_REQUEST})
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        dispatch({
            type:TODO_DETAIL_SUCCESS,
            payload:data
        })

    }catch (error) {
        dispatch({
            type:TODO_DETAIL_FAIL,
            payload: "There was an error loading your Todo detail check the id"
        })


    }
}

export const DeleteTodoAction = (id) =>async (dispatch)=>{
    try {
        dispatch({type:TODO_DELETE_REQUEST})

        const {data} = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        dispatch({
            type:TODO_DELETE_SUCCESS
        })


    }catch (error) {
        dispatch({
            type:TODO_DELETE_FAIL,
            payload: "There was an issue deleting your task check in please or repeat the actions"
        })
    }
}

export const UpdateTodoAction = (todo) =>async (dispatch)=>{
    try {
        dispatch({type:TODO_UPDATE_REQUEST})
        const {data} = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${todo.id}/`,
            todo,
        )
        dispatch({
            type:TODO_UPDATE_SUCCESS,
            payload:data
        })

    }catch (error) {
        dispatch({
            type:TODO_UPDATE_FAIL,
            payload:"Delete not successfully"
        })
    }
}

export const CreateTodoAction = (todo) =>async (dispatch)=>{
    try {
        dispatch({
            type:TODO_CREATE_REQUEST
        })
        const {data} = await axios.post(
                 `https://jsonplaceholder.typicode.com/todos`,
            todo
        )
        dispatch({
            type:TODO_CREATE_SUCCESS,
            payload:data
        })
    }catch (error){
        dispatch({
            type:TODO_CREATE_FAIL,
            payload:"Error creating the item"
        })

    }
}

