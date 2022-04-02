import "../shared/App.css";
import React from "react";
import Grid from "../elements/Grid";
import {BrowserRouter,Route} from "react-router-dom";
import PostList from "../pages/PostList.js";
import LogInpage from "../pages/LogInpage";
import Signup from "../pages/Signup";
import Header from "./Header";

function App() {
  return (
    <React.Fragment>

      <Grid>
        <Header/>
        <BrowserRouter>
        <Route path="/" exact component={PostList}/>   
        <Route path="/loginpage" exact component={LogInpage}/>
        <Route path="/signup" exact component={Signup}/>
      </BrowserRouter>
      </Grid>
    </React.Fragment>
  )
}

export default App;
