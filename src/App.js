import React from 'react';
import Home from './components/Home/Home';
import ResultsPage from './components/ResultsPage/ResultsPage';
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
