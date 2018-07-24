import React, {Component} from 'react'
import { connect } from 'react-redux'
class ViewIdea extends Component {

    render () {
        if(this.props.idea){
            return(
                <div>
                    Title: {this.props.idea.title}
                    <br/>
                    Short Des: {this.props.idea.shortDesc}
                    <br/>
                    Description: {this.props.idea.desc}
                </div>
            )
        }
        else {
            return(
                <div>
                    No idea for this id.
                </div>
            )
        }   
    }
}

const mapStateToProps = (state,props) => ({
    idea: state.ideas[props.match.params.id]
})

export default connect(mapStateToProps)(ViewIdea)
