import Navbar from './Navbar';
import Home from './Home';
import { Router, Route } from 'react-router';
import Create from './Create';


function App() {
  const title = 'Welcome to Create Your Tale!';
  

  return (
    <Router>
      <div className="App">
        <Navbar />
      <div ClassName="content">
            <Route path="/create">
              <Create />
            </Route>
        </div>      
      </div>
    </Router>  
  );
}

export default App;
