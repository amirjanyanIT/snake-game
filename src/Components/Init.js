import React, { Component } from 'react';
import { connect } from 'react-redux'

import { HashRouter as Router, Route } from 'react-router-dom'

import MainComponent from './Main/Init';
import GameComponent from './Game/Init';
import GameOverComponent from './Game/Components/GameOver.js'

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
                    <Route exact path="/Game" component={GameComponent} />
                    <Route exact path="/gameover" component={GameOverComponent} />
                    {/* <Route exact path="/Settings" component={} /> */}
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Settings:state.Settings
});

export default connect(mapStateToProps)(Init);