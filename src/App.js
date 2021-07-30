import React from 'react';
import Home from './components/Home/Home';
import ResultsPage from './components/ResultsPage/ResultsPage';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/saboTheme';

import { BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';

// Contexto Login y autorizaciones
import { AuthProvider } from './contexts/AuthContext';

// import Cocineros from './Components/Cocineros/Cocineros';

function App() {
  return ( 
<ThemeProvider theme={theme}>
<AuthProvider>
<Router>
  <Switch>
    <Route path="/search" component={ResultsPage}>
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</Router>
</AuthProvider>
</ThemeProvider>
  );
}

export default App;
