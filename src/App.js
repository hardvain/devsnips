import React from 'react';
import logo from './logo.svg';
import AppMenu from './components/AppMenu';
import Home from './pages/Home';
import Topic from './pages/Topic';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <AppMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/topics/:topicId" component={(props) => <Topic topicId={props.match.params.topicId} />} />
      </Switch>
    </div>
  );
}

export default App;
