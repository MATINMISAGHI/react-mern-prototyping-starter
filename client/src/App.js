import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Blog from './components/pages/Blog/Blog.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

class App extends Component {
  render() 
  {
    fetch("https://qvoca-bestquotes-v1.p.rapidapi.com/quote?api_key=acab279d26msh19b1fca35afd24fp1ef059jsn8dce78297764")
      .then(response => response.json())
      .then(data => {
        console.log("Random Quote: ", data);
      });


    return (
      <div className="App">
        <nav className="App-navigation">
          <h1 className="App-title">MERN Starter</h1>
          <Link to="/">Welcome</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/write/">Write Article</Link>
        </nav>

        <div className="App-mainContent">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/blog/" component={Blog} />
            <Route exact path="/write/" component={WriteArticle} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
