import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class States extends Component {
    
    render(){
        return (
            <div className="States" style={{ width: this.props.Settings.resolution.width - this.props.Settings.resolution.height  }}>
                <ul>
                    <li>Score&nbsp;&nbsp; {this.props.Game.score} </li>
                </ul>
                <div className="actions">
                    <Link to="/">Menu</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ Game,Settings }) => ({ Game,Settings })

export default connect(mapStateToProps)(States);