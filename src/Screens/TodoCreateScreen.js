import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {CreateTodoAction} from "../actions/TodosActions";
import Loading from "../components/Loading";
import MyMessage from "../components/MyMessage";
import {useNavigate} from "react-router-dom";

function TodoCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [completed, setCompleted] =useState(false);
    const id = Math.random() * 100

    const  TodoCreate = useSelector(state => state.TodoCreate)
    const {loading, error, todo} = TodoCreate



    function handleSubmit(e) {
        e.preventDefault()
        dispatch(CreateTodoAction({id,title,completed}))
        console.log("submitted successfully")
        navigate('/')
    }


    return(
        <div className="w-70px px-3 py-2 relative">
            {loading&&<Loading/>}
            {error&&<MyMessage>{error}</MyMessage>}
            <div className="bg-neutral-200 py-8 py-6 shadow rounded-lg sm:px-10 ">
                <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
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
export default TodoCreateScreen