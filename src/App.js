// 21-Jun-2021
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import PageNotFound from "./components/PageNotFound";
import NavBar from './components/NavBar';
import UserContextProvider from "./components/Context/UserContext";

const App = () => {

    return (
        <UserContextProvider>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </UserContextProvider>
    );
};

export default App;