import React from "react";
import Post from "../components/Post.js";
import Header from "../components/Header.js";

const PostList = (props) => {
  
    return (

    <React.Fragment>
        <Header/>
          <Post/>
    </React.Fragment>
    
    )
};

export default PostList;
//1. 페이지 단위로 만들었을 때 가장 상단에 있는 화면이기 때문에 가장 첫번째로 만든 컴포넌트
//2. App.js에서 리액트 라우터 돔 설치하고, 라우팅(페이지이동)하는 것 잡아줌
//3. 그리고나서 요 페이지를 또 다시 쪼갰다. 헤더와 게시글(post) 컴포넌트로 쪼개줬다.
//4. 포스트에서는 포스트 리스트에서 정보를 넘겨줘야하기 때문에 defaultProps 방식을 사용해
//   데이터를 받았을 때 오류가 나거나 페이지가 깨지는 것을 방지하기 위해 다른것 보다도 우선 받야할 props 정보를 미리 받아놓도록 설정 했다.
