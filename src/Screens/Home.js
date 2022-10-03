import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {ListTodosActions} from "../actions/TodosActions";
import Loading from "../components/Loading";
import MyMessage from "../components/MyMessage";
import Todo from "../components/Todo";
function Home() {
    const dispatch = useDispatch();
    const TodosList = useSelector(state => state.TodosList)
    const {loading, error, todos} = TodosList

    useEffect(()=>{
        dispatch(ListTodosActions())
    },[dispatch])
    return(
        <div className='py-3 px-3'>

            {loading ? <Loading/> : error ? <MyMessage>{error}</MyMessage> : (
            <div>
                {todos.map(todo=>(
                    <div key={todo.id}>
                        <Todo todo={todo}/>
                    </div>
                ))}
            </div>
        ) }

        </div>
    )



}
export default Home