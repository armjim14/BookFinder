import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import IndexPage from "./IndexPage";
import PageTwo from './PageTwo';

class App extends React.Component {

  state = {
    list: []
  }

  sendList = list => {
    this.setState({ list })
  }

  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route exact path="/">
              <IndexPage list={this.state.list} sendList={this.sendList} />
            </Route>
            <Route exact path="/books" Component={PageTwo}>
              <PageTwo />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
