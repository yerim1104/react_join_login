import styled from 'styled-components';
import React from 'react';

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle> 
        ) 
    }

    if(shape === "rectangle"){
        return(
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }


    return(
        <React.Fragment>

        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle", //기본적으로 모양은 사각형이다
    src: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9RxfC%2FbtryckeM1vK%2FKqUlMrGuglhJkU9HuspApk%2Fimg.jpg",
    size: 36,
};

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;
const AspectInner = styled.div`
    position: relative; // 싱대적으로 포지션을 줌
    padding-top: 75%;
    overflow: hidden; // 영역보다 흘러넘치는 애들 숨김.
    background-image: url("${(props) => props.src}");
    background-size: cover;

`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px; //--size 스타일드컴포넌츠도 선언할 수 있다. --가 선언한다는 것!
    width: var(--size);
    height: var(--size);
    border-radius: var(--size); //width, heigth 사이즈 모두 내려받은 프롭스 사이즈와 같다,? 인듯 보더래디우스는 동그랗게하는고

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;