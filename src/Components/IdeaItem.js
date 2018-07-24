import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
class Idea extends Component {

    render () {
        return (
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">{this.props.idea.title}</h5>
                        <p className="card-text">{this.props.idea.shortDesc}</p>
                        {this.props.idea.desc}
                    </div>
                </div>
            </div>
        )
    }
}


let mapStateToProps = (state,props) => ({
    idea: state.ideas[props.index]
})

export default connect(mapStateToProps)(Idea)
