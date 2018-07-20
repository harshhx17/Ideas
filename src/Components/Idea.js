import React, {Component} from 'react'
import IdeaItem from '../Components/IdeaItem'

class Idea extends Component {

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
            <div>
                <h4>Ideas </h4>
                <div className="row">
                    {ideas}
                </div>
            </div>
        )
    }
}

export default Idea
