// 21-Jun-2021
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import PageNotFound from "./components/PageNotFound";
import NavBar from './components/NavBar';
import UserContextProvider from "./components/Context/UserContext";
import UserAdd from "./components/UserAdd";
import UserEdit from "./components/UserEdit";
import UserView from "./components/UserView";

const App = () => {

    return (
        <UserContextProvider>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/user/add" component={UserAdd} />
                    <Route path="/user/edit/:id" component={UserEdit} />
                    <Route path="/user/view/:id" component={UserView} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </UserContextProvider>
    );
};

export default App;