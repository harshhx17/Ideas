import React, {Component} from 'react'
import AddIdea from './Components/AddIdea'
import Idea from './Components/Idea'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
    constructor () {
        super()
        this.state = {
            ideas: []
        }
    }

    handleAddIdea (idea) {
        let ideas = this.state.ideas
        ideas.push(idea)
        this.setState({
            ideas: ideas
        })
    }
    // getIdeas () {
    
    // }
    // componentWillMount () {
    //     this.getIdeas()      
    // }
    render () {
        return (
            <div className="App container">
                <AddIdea addIdea={this.handleAddIdea.bind(this)}/>
                <hr />
                <Idea ideas={this.state.ideas}/>
            </div>
        )
    }
}
export default App