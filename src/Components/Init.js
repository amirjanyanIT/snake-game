import React, { Component } from 'react';
import { connect } from 'react-redux'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainComponent from './Main/Init'


class Init extends Component {
    render(){
        return(
            <div 
                className="Snake-game"
                style={{
                    width:this.props.Settings.resolution.width,
                    height:this.props.Settings.resolution.height
                }}
            >
                <Router>
                    <Route exact path="/" component={MainComponent} />
                    {/* <Route exact path="/Game" component={} />
                    <Route exact path="/Settings" component={} /> */}
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Settings:state.Settings
});

export default connect(mapStateToProps)(Init);