import React, {Component} from 'react'
import IdeaItem from '../Components/IdeaItem'

class Idea extends Component {
    handleSubmit (e) {
        e.preventDefault()
    }
    render () {
        let ideas
        if (this.props.ideas){
            ideas = this.props.ideas.map(idea => {
                return (
                    <IdeaItem idea={idea} key={idea.title}/>
                )
            })
        }
        return (
            <div className="container">
                Ideas<br />
                {ideas}
            </div>
        )
    }
}

export default Idea
