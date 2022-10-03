import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {DeleteTodoAction, DetailTodoAction} from "../actions/TodosActions";
import {useEffect} from "react";
import Loading from "../components/Loading";
import MyMessage from "../components/MyMessage";
import PropTypes from 'prop-types';

function TodoDetailScreen() {
   
    const {todoId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const TodoDetail = useSelector(state => state.TodoDetail)
    const {loading, error, todo} = TodoDetail

    const TodoDelete = useSelector(state => state.TodoDelete)
    const {loading:loadingDelete,error:errorDelete,success:successDelete} = TodoDelete

    if (successDelete){
        console.log("successfully")
    }



    useEffect(()=>{
         dispatch(DetailTodoAction(todoId))
    },[dispatch,todoId])
      function deleteHandler(id) {
        console.log("delete handler")
        if (window.confirm("Are you sure you want to delete this please, confirm")){
            dispatch(DeleteTodoAction(id))
            navigate('/')
        }
    }
    return(
        <div className="relative bg-white-100 py-3 px-3 border border-gray-300 w-full text-centre">
            <div className="bg-teal-100 py-8 shadow rounded-lg sm:px-10 ">

            {/*{successDelete ? <h1>{deleteMessage}</h1> : ''}*/}
                {loading && <Loading/>}
                {error && <MyMessage>{error}</MyMessage>}
            {loadingDelete && <Loading/>}
            {errorDelete && <MyMessage>{errorDelete}</MyMessage>}
            <Link to='/'>Home</Link>

            <br/>
            {
                todo.completed ? <p>
                    This Task is not yet complete
                </p>:<p>
                    This Task is completed
                </p>
            }
            <button className='p-3' onClick={()=>deleteHandler(todo.id)} >
                <i className='fas fa-trash'/>
            </button>
            <Link to={`/todo/update/${todoId}/`} className='bg-teal-300 w-10 h-32 '>
                <button className='p-3'>
                <i className='fas fa-edit'/>
            </button>
            </Link>
            </div>
        </div>

    )

}
export default TodoDetailScreen