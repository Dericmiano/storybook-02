import {Link} from "react-router-dom";
import React from "react";

function Header() {
    return(
        <div className="w-full h-20 bg-blue-900 flex items-center px-3 py-3">
            <h2>Todo List App</h2>
            <ul className="flex self-end px-3 py-3 container text-black">

                <li className='py-3 px-3'><Link to='/'>Home</Link></li>
                <li className='py-3 px-3'><Link to='/todo/create/'>Create new</Link></li>
                <li className='py-3 px-3'>About</li>
            </ul>

        </div>
    )

}
export default Header