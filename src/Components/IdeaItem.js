import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Idea extends Component {

    render () {
        return (
            // <span className="col-sm-3">
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body text-center">
                        <h5 className="card-title">{this.props.idea.title}</h5>
                        <p className="card-text">{this.props.idea.shortDesc}</p>
                        {this.props.idea.desc}
                    </div>
                </div>
            </div>
            // </span>
        )
    }
}

export default Idea
