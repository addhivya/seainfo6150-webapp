import React, { Component } from 'react';
import Article from "./Article";
import ArticleContent from "./ArticleContent";
//import ArticleLink from "./ArticleLink";

const App = () => (
    <div className="App">
        <Article title={"The Statue of Liberty\'s torch heads to new museum"} date={"November 22, 2018"}
                 author={"Kate Farley"} children={<ArticleContent/>}/>
    </div>
);

export default App;
