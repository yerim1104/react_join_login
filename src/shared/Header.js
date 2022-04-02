import React from "react";
import Buttons from "../elements/Buttons";
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <React.Fragment>
        <Buttons width="50px" color="black"/>

        <Link to="/join"><Buttons width="100px" color="black">
        회원가입</Buttons></Link>
        
        <Link to = "/loginpage"><Buttons width="100px" color="black">
        로그인</Buttons></Link>
        </React.Fragment>
    )
}



export default Header;