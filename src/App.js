// 21-Jun-2021
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import PageNotFound from "./components/PageNotFound";

const App = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
};

export default App;