import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/saboTheme';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';
import Cocineros from './Components/Cocineros/Cocineros';

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
