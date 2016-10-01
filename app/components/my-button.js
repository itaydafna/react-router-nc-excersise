import React from 'react';


export const MyButton = (props) => {
    return (
        <button onClick={ props.clickHandler }>
            {props.children}
        </button>
    );
    
}

MyButton.propTypes ={
    clickHandler: React.PropTypes.func.isRequired
}

MyButton.defaultProps = {
    children: 'Click Me'
}