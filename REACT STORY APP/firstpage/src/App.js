import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import First_Page from './components/First_Page';

function App() {
  return (
    <Router>
    <div className="App">
      <Main />
      <div className='content'>
        <Switch>
          <Route path="/">
            <First_Page />            
          </Route>
        </Switch>
      </div>
    </div>
  </Router>  
  )
}

export default App;
