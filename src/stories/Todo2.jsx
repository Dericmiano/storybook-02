
import {Link} from "react-router-dom"

import PropTypes from 'prop-types';


function Todo2({
    borderWidth = 'box-border',
    Padding = 'p-2',
    borderRadius = "0.5rem",
    Border = "border-4",
    Margin = "m-1",
    TextColor = 'text-black',
    height = 'h-30',
    width = 'w-50',
    rounded = 'rounded-lg',
    BorderColor = '#747381',
    // headerBorderColor = '#494866',
    BackgroundColor = 'bg-blue-400',
    headerBackgroundColor = 'bg-blue-400',
    completed = false
}) {


    return(
        <div className={`${borderWidth==="box-border" ? "box-border" : "box-content"} ${rounded} flex text-centre object-contain ${TextColor}
        ${height} ${width} ${Padding==="p-2" ? "p-2" : "p-4"} ${Margin} ${Border} container mx-auto px-4 ${BackgroundColor}  border-radius: ${borderRadius}`}>
            {/* <h1 className={`${headerBackgroundColor} ${BorderColor}`}>Number: 34</h1> */}

            <h1>Number: 34</h1>

               <div>
                    <h5>
                        Doing my React Assignment on The weekend 
                     </h5>
               </div>

               <div className='items-end'>
                   {completed ? <h5 className="text-0.5xl font-bold underline">
                        Task Completed
                    </h5> :
                        <h5 className="text-0.5xl font-bold ">
                        Task not completed
                    </h5>
                        }
               </div>






        </div>
    )

}
Todo2.propTypes = {
    TextColor: PropTypes.string,
    headerTextColor: PropTypes.string,
    BorderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    Border:PropTypes.oneOf(['border-2','border-4','border-8']),
    // headerBorderColor: PropTypes.string,
    Margin:PropTypes.oneOf(['m-1','m-3', 'm-6']),
    completed:PropTypes.oneOf([true,false]),
    borderRadius:PropTypes.oneOf(['0.5rem','2rem','3rem']),
    BackgroundColor: PropTypes.string,
    TextColor:PropTypes.string,
    rounded:PropTypes.oneOf(['rounded-lg','rounded-md','rounded-xl']),
    borderWidth: PropTypes.oneOf(['box-border', 'box-content']),
    Padding: PropTypes.oneOf(['p-1', 'p-2', 'p-4']),
  };
export default Todo2