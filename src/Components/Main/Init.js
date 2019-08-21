import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div className="Main">
                <p className="game-title typography primary">SNAKE GAME</p>
                <div className="actions">
                    <Link to="/Game"><p className="typography primary">Start</p></Link>
                    <Link to="/Settings"><p className="typography primary">Settings</p></Link>
                </div>
                
            </div>
        )
    }
}


export default Main;