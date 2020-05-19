import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavigationBar, Display, NewPoll } from './components';

const App = () => (
  <Router>
    <NavigationBar />
    <Switch>
      <Route path="/new-poll">
        <Display title="Create a New Poll">
          <NewPoll />
        </Display>
      </Route>
      <Route path="/leaderboard">
        <Display title="Leaderboard">
          Leaderboard
        </Display>
      </Route>
      <Route path="/change-user">
        <Display title="Change User">
          Change User
        </Display>
      </Route>
      <Route path="/">
        <Display title="Home">
          Home
        </Display>
      </Route>
    </Switch>
  </Router>
);

export default App;
