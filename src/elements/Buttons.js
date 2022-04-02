import React from "react";
import styled from "styled-components";

const Buttons = (props) =>{
    const {width, height, backgroundcolor, color, padding, size, children} = props;
    
    const styles={
        width: width,
        height: height,
        backgroundcolor: backgroundcolor,
        color: color,
        padding: padding,
        size: size
    }

    return(
        <ButtonBox {...styles}>
            {children}
        </ButtonBox>
    )
}

Buttons.defaultProps={
    children: null,
    width: false,
    height: '50px',
    backgroundcolor: false,
    color: false,
    padding: '16px',
    size: '14px'
}

const ButtonBox = styled.div`
    width: ${(props)=>props.width};
    background-color: ${(props)=>props.backgroundcolor};
    color: ${(props)=>props.color};
    text-align: center;
`;

export default Buttons;