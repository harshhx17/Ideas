import React, {Component} from 'react'

class Idea extends Component {

    render () {
        return (
            // <span className="col-sm-3">
            <ul className="col-sm-3">
                <li>{this.props.idea.title}</li>
                <li>{this.props.idea.shortDesc}</li>
                <li>{this.props.idea.desc}</li>
            </ul>
            // </span>
        )
    }
}

export default Idea
