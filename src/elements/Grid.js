import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const {is_flex, width, padding, margin, bg, children} = props;
    //children은 자식객체로 스타일을 담당하는 애가 아니니까 밑에 스타일즈 객체 만들어서 한번더 선언해준당.
    
    const styles = {
        is_flex: is_flex,
        width: width,
        padding: padding,
        margin: margin,
        bg: bg,
    }

    return(
        <React.Fragment>
            <GridBox {...styles}>
                {children} 
            </GridBox>

        </React.Fragment>

    )
}

Grid.defaultProps = {
    children: null,
    is_flex: false,
    width: "100%",
    padding: false,
    margin: false, //패딩에 값이 있으면 패딩값을 넣어주고, 마진에 값이 있으면 마진 값을 넣어주는 방식
    bg: false, //백그라운드도 같은 방식 

}

const GridBox = styled.div`
    width: ${(props)=>props.width};
    height: 100%;
    box-sizing: border-box; // 패딩값이랑 선굵기 값도 넓이에 포함할랭? border-box: 선굵기까지 포함할랭!
    ${(props) => (props.padding? `padding: ${props.padding};`: "")} //패딩 있으면 받고 없으면 안받음 삼항연산자.
    ${(props) => (props.margin? `margin: ${props.margin};`: "")}
    ${(props) => (props.bg? `background-color: ${props.bg};`: "")}
    ${(props) => (props.is_flex
    ? `display:flex; align-items: center; jsutify-content: space-between;`
    : "")}
`;

export default Grid;