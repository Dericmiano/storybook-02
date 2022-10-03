import React from 'react'
import PropTypes from 'prop-types';


const Todo = ({
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
    <div>
      <div style={{
        color:headerTextColor,
        border:BorderColor,
        borderColor:headerBorderColor,
        backgroundColor:headerBackgroundColor
      }}><h1>Todo list application</h1></div>
        <div style={{
            border:BorderColor,
            padding:PaddingMap[Padding],
            color:TextColor,
            backgroundColor:BackgroundColor,
            borderWidth:WidthMap[borderWidth]
        }}>
          <h1>Number 1</h1>
          <h4>Doing my assignment and programming React</h4>
          {/* <Button primary size="small" onClick={onCreateAccount} label="Completed" /> */}


        </div>
    </div>
  )
}
Todo.propTypes = {
  TextColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  BorderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  headerBorderColor: PropTypes.string,
  BackgroundColor: PropTypes.string,
  borderWidth: PropTypes.oneOf(['thin', 'medium', 'thick']),
  Padding: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Todo