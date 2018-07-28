import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../Actions/index'
class ViewIdea extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.props.user[this.props.match.params.id])
        if(e.target.id === 'upvote'){
            if(this.props.user[this.props.match.params.id] === 'upvote')
                this.props.action.upvote(this.props.match.params.id, 'decrease', 'unvote')
            else if(this.props.user[this.props.match.params.id] === 'downvote') {
                this.props.action.downvote(this.props.match.params.id,'decrease')
                this.props.action.upvote(this.props.match.params.id,'increase')
            }
            else
                this.props.action.upvote(this.props.match.params.id,'increase')
        }
        else if(e.target.id === 'downvote'){
            if(this.props.user[this.props.match.params.id] === 'downvote')
                this.props.action.downvote(this.props.match.params.id,'decrease', 'unvote')
            else if(this.props.user[this.props.match.params.id] === 'upvote') {
                this.props.action.upvote(this.props.match.params.id,'decrease')
                this.props.action.downvote(this.props.match.params.id,'increase')
            }
            else
                this.props.action.downvote(this.props.match.params.id,'increase')
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
                    <button className="btn btn-danger" id="downvote" onClick={this.handleSubmit}>{this.props.idea.downvote +' downvote'}</button>
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
    idea: state.ideas[props.match.params.id],
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(actions,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewIdea)
