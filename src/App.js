import React, {Component} from 'react'
import AddIdea from './Components/AddIdea'
import Idea from './Components/Idea'
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'
class App extends Component {

    render () {
        return (
            <div className="App container">
                <AddIdea/>
                <hr />
                <Idea/>
            </div>
        )
    }
}

export default App