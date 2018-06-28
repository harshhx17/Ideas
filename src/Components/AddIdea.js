import React, {Component} from 'react'

class AddIdea extends Component {
    constructor () {
        super()
        this.state = {
            idea: {}
        }
    }
    handleSubmit (e) {
        e.preventDefault()
        if (this.refs.title.value === ''){
            alert('Title cannot be left blank.')
        }
        else {
            this.setState({
                idea: {
                    title: this.refs.title.value,
                    shortDesc: this.refs.shortDesc.value,
                    desc: this.refs.desc.value
                }
            }, function () {
                this.props.addIdea(this.state.idea)
            })
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

export default AddIdea
