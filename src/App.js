import React, {Component} from 'react'
import AddIdea from './Components/AddIdea'
import Idea from './Components/Idea'
import ViewIdea from './Components/ViewIdea'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Header = () => (
    <div className="navbar navbar-expand-sm bg-light">
        <ul className="navbar">
            <li className="navbar nav"><Link to="/addIdea">AddIdea</Link></li>
            <li className="navbar nav"><Link to="/">Ideas</Link></li>
        </ul>
    </div>
)

const App = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={Idea}/>
            <Route path="/addIdea" component={AddIdea}/>
            <Route path="/idea/:id" component={ViewIdea} />
        </div>
    </Router>
)

export default App