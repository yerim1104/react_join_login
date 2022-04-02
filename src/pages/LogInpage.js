import React from "react";
import Header from "../components/Header";
import { Text,Input,Buttons } from "../elements";

const LogInpage = (props) =>{
    
    return(
        <React.Fragment>
            <Header margin-bottom="75px"/>

            <Text bold size="30px">로그인</Text>
            <Text margin-top="20px">아이디</Text>
            <Input placeholder="아이디를 입력하세요"/>
            <Text margin-top="20px">비밀번호</Text>
            <Input placeholder="비밀번호를 입력하세요"/>

            <Buttons background-color="black" color="white" width="90%"> 로그인하기</Buttons>



        </React.Fragment>
    )
};

export default LogInpage;