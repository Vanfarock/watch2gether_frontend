import Home from './pages/Home/index';
import Room from './pages/Room/index';
import light from './styles/themes/light';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, 
         Switch, 
         Route } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={light} >
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/room/:id" component={Room} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;