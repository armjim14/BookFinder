import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from './components/Header';
import Search from './components/Search';
import Boxes from './components/Boxes';

import Header2 from './components/Header2';
import Boxes2 from './components/Boxes2';

class App extends React.Component {

  state = {
    list: []
  }

  sendList = list => {
    this.setState({list})
  }

  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Search renderImages={this.sendList} />
              <Boxes list={this.state.list} />
            </Route>
            <Route exact path="/books">
              <Header2 />
              <Boxes2 />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
