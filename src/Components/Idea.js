import React, {Component} from 'react'
import IdeaItem from './IdeaItem'
import { connect } from 'react-redux'
class Idea extends Component {

    render () {
        let ideaItems = []
        for(var i=0;i<this.props.length;i++) {
            ideaItems.push(<IdeaItem index={i} key={i}/>)
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
    length: state.ideas.length
})

export default connect(mapStateToProps)(Idea)
