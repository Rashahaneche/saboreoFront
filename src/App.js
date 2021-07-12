import React from 'react';
import Home from './Components/Home/Home';
import ResultsPage from './Components/ResultsPage/ResultsPage';
import { BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';


function App() {
  return ( 
<Router>
  <Switch>
    <Route path="/search" component={ResultsPage}>
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</Router>
  );
}

export default App;
