import Home from './pages/Home';
import Room from './pages/Room';
import { BrowserRouter as Router, 
         Switch, 
         Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/room/:id" component={Room} />
            </Switch>
        </Router>
    );
}

export default App;