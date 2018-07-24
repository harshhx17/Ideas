import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../Actions/index'
import { connect } from 'react-redux'
class AddIdea extends Component {

    handleSubmit (e) {
        e.preventDefault()
        if (this.refs.title.value === ''){
            alert('Title cannot be left blank.')
        }
        else {
            let idea = {
                title: this.refs.title.value,
                shortDesc: this.refs.shortDesc.value,
                desc: this.refs.desc.value
            }
            this.props.action.addIdea(idea)
        }
    }

    render () {
        return (
            <div className="container-fluid">
                <form className="form-group, col-sm-8" onSubmit={this.handleSubmit.bind(this)}>
                    Title:<input type="text" className="form-control" ref="title"/>
                    Short Description:<input type="text" className="form-control" ref="shortDesc" />
                    Description:<textarea ref="desc" className="form-control" rows="10" cols="50" /> 
                    <button type="submit"  className="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToState = dispatch => ({
    action: bindActionCreators(actions, dispatch)
})

export default connect(null,mapDispatchToState)(AddIdea)
