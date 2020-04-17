import React from 'react';
import stylesWrapper from '../HOC/stylesWrapper';

const button = (props) => {
    return (
        <button style={props.styles} >
            This is button two
        </button>
    )
}

export default stylesWrapper(button);