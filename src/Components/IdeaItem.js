import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class Idea extends Component {

    render() {
        console.log('index passed', this.props.index)
        console.log('idea received', this.props.idea)
        return (
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body text-center">
                        <Link to={'/idea/' + this.props.index}><h5 className="card-title">{this.props.idea.title}</h5></Link>
                        <p className="card-text">{this.props.idea.shortDesc}</p>
                        {this.props.idea.desc}
                    </div>
                </div>
            </div>
        )
    }
}


let mapStateToProps = (state, props) => ({
    idea: state.ideas[props.index]
})

export default connect(mapStateToProps)(Idea)
