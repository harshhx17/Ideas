import React, {Component} from 'react'
import IdeaItem from './IdeaItem'
import { connect } from 'react-redux'
class Idea extends Component {

    render () {
        let ideaItems = []
        console.log('Ideas', this.props.ideas)
        for(var key in this.props.keys) {
            console.log('key', key)
            ideaItems.push(<IdeaItem index={key} key={key}/>)
        }
        return (
            <div>
                <h4>Ideas </h4>
                <div className="row">
                    {ideaItems}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    keys: Object.keys(state.ideas),
    ideas: state.ideas
})

export default connect(mapStateToProps)(Idea)
