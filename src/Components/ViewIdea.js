import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../Actions/index'
class ViewIdea extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e)
    {
        e.preventDefault()
        if(e.target.id === 'upvote'){
            this.props.action.upvote(this.props.match.params.id)
        }
        else if(e.target.id === 'downvote'){
            this.props.action.downvote(this.props.match.params.id)
        }
    }

    render () {
        if(this.props.idea){
            return(
                <div>
                    Title: {this.props.idea.title}
                    <br/>
                    Short Des: {this.props.idea.shortDesc}
                    <br/>
                    Description: {this.props.idea.desc}
                    <br/>
                    <button className="btn btn-success" id="upvote" onClick={this.handleSubmit}>{this.props.idea.upvote +' upvote'}</button>
                    <button className="btn btn-danger" id="downvote" onClick={this.handleSubmit}>{this.props.idea.downvote +' upvote'}</button>
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

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(actions,dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewIdea)
