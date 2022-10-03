import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {DetailTodoAction, UpdateTodoAction} from "../actions/TodosActions";
import { useNavigate, useParams} from "react-router-dom";
import Loading from "../components/Loading";
import MyMessage from "../components/MyMessage";

function TodoUpdateScreen() {
    const {todoId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] =useState('');
    const [completed, setCompleted] = useState(false)

    const TodoDetail = useSelector(state => state.TodoDetail)
    const {loading, error, todo} = TodoDetail

    const TodoUpdate = useSelector(state => state.TodoUpdate)
    const {loading:loadingUpdate, error:errorUpdate, success:successUpdate,todo:UpdatedTodo}=TodoUpdate

    console.log(todo)
    if (successUpdate){
            console.log(UpdatedTodo)
    }

    useEffect(()=>{
           if (successUpdate){
                console.log(UpdatedTodo)
               navigate('/')
           }else{
                dispatch(DetailTodoAction(todoId))
                setTitle(todo.title)
                setCompleted(todo.completed)
           }
    },[dispatch,todoId])


    function submitHandler(e) {
        e.preventDefault()
        dispatch(UpdateTodoAction({id:todo.id,title,completed}))
        console.log("updated button pressed")
        // navigate('/')
    }


    return(
        <div className="w-70px px-3 py-2">
            {loading && <Loading/>}
                {error && <MyMessage>{error}</MyMessage>}
            {loadingUpdate && <Loading/>}
                {errorUpdate && <MyMessage>{errorUpdate}</MyMessage>}
            <div className="bg-neutral-200 py-8 py-6 shadow rounded-lg sm:px-10 ">
                <form className="mb-0 space-y-6" onSubmit={submitHandler}>
                    <div className='ui form'>
                        <div className="field">
                            <label>Title:</label>
                            <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm
                            focus:outline-none focus:border-indigo-500 focus:ring-1 focus: ring-indigo-500

                            "
                                type='text' name='title' value={title} placeholder='Title'
                                   onChange={(e)=>setTitle(e.target.value)}
                            />

                        </div>
                          <div className="field">
                            <label>Completed:</label>
                            <input className=" border border-gray-300 px-3 py-2 rounded-lg"
                                type='checkbox'
                                name='completed'
                                checked={completed}
                                onChange={(e)=>setCompleted(e.target.checked)}
                            />
                        </div>
                        <button className="outline:1px dotted bg-lime-600 rounded-lg px-2 py-2 white">Submit</button>

                    </div>

                </form>

            </div>

        </div>

    )

}
export default TodoUpdateScreen