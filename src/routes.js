import react from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import Home from './Components/Home/Home';
import Menu from './Components/Menu';

export default (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/menu" component={Menu}/>
        </Switch>
    </Router>
)