import React from 'react'
import PropTypes from 'prop-types';

const Todoupdate = ({
    borderWidth = 'medium',
    Padding = 'medium',
    TextColor = 'black',
    headerTextColor = 'white',
    BorderColor = '#747381',
    headerBorderColor = '#494866',
    BackgroundColor = '#a6a5b8',
    headerBackgroundColor = '#65647a',
}) => {

    const PaddingMap = {
        small: '3px',
        medium: '8px',
        large: '15px',
      };
      const WidthMap = {
        thin: '5px',
        medium: '10px',
        thick: '20px',
      };
  return (
    <div className="w-70px px-3 py-2">
            <div className="bg-neutral-200 py-8 shadow rounded-lg sm:px-10 ">
                <h1 style={{
                    color:headerTextColor,
                    border:BorderColor,
                    borderColor:headerBorderColor,
                    backgroundColor:headerBackgroundColor
                }}>Your Header</h1>
                <form className="mb-0 space-y-6" onSubmit={submitHandler}>
                    <div className='ui form' style={{
                        border:BorderColor,
                        padding:PaddingMap[Padding],
                        color:TextColor,
                        backgroundColor:BackgroundColor,
                        borderWidth:WidthMap[borderWidth]
                    }}>
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
                                // onChange={(e)=>setCompleted(e.target.checked)}
                            />
                        </div>
                        <button className="outline:1px dotted bg-lime-600 rounded-lg px-2 py-2 white">Submit</button>

                    </div>

                </form>

            </div>

        </div>

  )
}
Todoupdate.propTypes = {
    TextColor: PropTypes.string,
    headerTextColor: PropTypes.string,
    BorderColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    headerBorderColor: PropTypes.string,
    BackgroundColor: PropTypes.string,
    borderWidth: PropTypes.oneOf(['thin', 'medium', 'thick']),
    Padding: PropTypes.oneOf(['small', 'medium', 'large']),
  };

export default Todoupdate