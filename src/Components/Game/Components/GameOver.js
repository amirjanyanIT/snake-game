import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GameOver extends Component {


    componentDidMount(){
        clearInterval(window.move);
    }


    render(){
        return(
            <>
            <div className="GameOver">
                <div className="info">
                <p className="typography secondary">Game Over</p> 
                <p className="typography secondary">score {this.props.Game.score}</p> 
                </div>
                <div className="actions">
                    <Link className="typography primary" to="/Game">Try Again</Link>
                    <br />
                    <Link className="typography primary" to="/">Menu</Link>
                </div>
            </div>
            {this.props.Game.status === 'passive' &&
                <Redirect to="/Game" />
            }
            </>
        )
    }
}


const mapStateToProps = ({ Game }) => ({ Game });

export default connect(mapStateToProps)(GameOver);