import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/saboTheme';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home/Home';
import Cocineros from './components/Cocineros/Cocineros';

function App() {
  return (
<ThemeProvider theme={theme}>
<Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/cocineros" component={Cocineros} />
  </Switch>
</Router>
</ThemeProvider>
  );
}

export default App;
