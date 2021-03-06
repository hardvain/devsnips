import React from 'react';
import logo from './logo.svg';
import AppMenu from './components/AppMenu';
import Home from './pages/Home';
import Topic from './pages/Topic';
import data from './data';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <AppMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/topics/:topicId" component={(props) => {
          const topicId = props.match.params.topicId
          return <Topic topicId={topicId} data={data[topicId]} />
        }} />
      </Switch>
    </div>
  );
}

export default App;
