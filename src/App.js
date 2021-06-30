import React from 'react';
import theme from './theme/saboTheme';
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
<ThemeProvider theme={theme}>
  <Router>
    <Switch>
    <Route path="/signup">
     <SignUp />
    </Route>
  </Switch>
</Router>
<Router>
    <Switch>
    <Route path="/signin">
     <SignIn />
    </Route>
  </Switch>
</Router>
</ThemeProvider>
  );
}

export default App;
