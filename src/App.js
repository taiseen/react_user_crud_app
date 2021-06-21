// 21-Jun-2021
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import PageNotFound from "./components/PageNotFound";
import NavBar from './components/NavBar';

const App = () => {

    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    );
};

export default App;