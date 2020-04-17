// import React from 'react';
import commonStyles from '../styles/commonStyles';

const translateProps = (props) => {
    let buttonStyle = commonStyles.default;
    if (props.alternateStyle){
        buttonStyle = {
            ...buttonStyle,
            ...commonStyles.alternateStyle
        }
    }
    return {
        ...props,
        styles: buttonStyle
    }
}

export default (WrappedComponent) => {
    return function wrappedRender(args){
        return WrappedComponent(translateProps(args))
    }
}