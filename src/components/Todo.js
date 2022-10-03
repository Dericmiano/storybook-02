
import {Link} from "react-router-dom"


function Todo({todo}) {

    return(
        <div className="box-border rounded-lg flex text-centre object-contain
        h-30 w-50 p-4 m-1 border-4 container mx-auto px-4 bg-blue-400  border-radius: 0.5rem">
            <h1>Number: {todo.id}</h1>
                <Link to={`/todo/${todo.id}`}>

               <div>
                    <h5 className="container mx-auto px-4">
                       {todo.title}
                     </h5>
               </div>
                </Link>
            <Link to={`/todo/${todo.id}`}>

               <div className='items-end'>
                   {todo.completed ? <h5 className="text-0.5xl font-bold underline">
                        Task Completed
                    </h5> :
                        <h5 className="text-0.5xl font-bold ">
                        Task not completed
                    </h5>
                        }
               </div>
            </Link>






        </div>
    )

}
export default Todo