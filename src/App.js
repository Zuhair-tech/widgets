import React from 'react';
import { Router , Route , Switch} from 'react-router-dom';
import Accordion from "./components/Accordion";
import Translate from "./components/Translate";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
    return(
        <div className="container-fluid">
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Accordion}/>
                        <Route path="/dropdown" exact component={Dropdown}/>
                        <Route path="/translate" exact component={Translate}/>
                        <Route path="/search" exact component={Search}/>
                    </Switch>
                </div>
            </Router>
            
        </div>
    )
};

export default App;