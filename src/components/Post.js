import React from "react";
import {Grid, Image, Text} from "../elements";

const Post = (props) => {


    return(
        <React.Fragment>
            <Grid >
                <Grid is_flex>
                    <Image shape="circle" src = {props.src}/>
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                    
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid padding="16px">
                  <Image shape="rectangle" src = {props.src}/>
                </Grid>
                <Grid>
                    <Text bold>댓글 {props.comment_cnt}개</Text>    
                </Grid>
              
            {/*그리드 별로 순서대로 들어가야하는 것들
             <div>user profile / user name / insert_dt / is_me (btn)</div>
            <div>contents</div>
            <div>image</div>
            <div>comment cnt</div> */}

            </Grid>
        </React.Fragment>
    )
}

//부모에서 기본적으로 필요한 props들을 미리 받아놓는 방식
Post.defaultProps = {
    user_info: {
        user_name: "Yerim",
        user_profile: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9RxfC%2FbtryckeM1vK%2FKqUlMrGuglhJkU9HuspApk%2Fimg.jpg",
    },
    image_url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbtallh%2Fbtrye24Z6zn%2FdnyAfQKJghbypmn7qi9Kr0%2Fimg.png",
    contents: "보라카이에요!",
    comment_cnt: 10,
    insert_dt: "2022-04-02 10:00:00",

};


export default Post;