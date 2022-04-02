import "../shared/App.css";
import React from "react";
import Grid from "../elements/Grid";
import {BrowserRouter,Route} from "react-router-dom";
import PostList from "../pages/PostList.js";


function App() {
  return (
    <React.Fragment>
      <Grid isRoot>
      <BrowserRouter>
        <Route path="/" exact component={PostList}/>
      </BrowserRouter>
      </Grid>
    </React.Fragment>
  )
}

export default App;
