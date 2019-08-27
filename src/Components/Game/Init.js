import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


import Area from '../../Components/Game/Components/Area/Init';
import States from '../../Components/Game/Components/States';


import setStartConfigurationsAction from '../../Actions/setStartConfigurations';
import moveSnakeAction from '../../Actions/SnakeMovements/moveSnake';

class Game extends Component {


    componentDidMount(){
        console.log(111);
        this.props.dispatch(setStartConfigurationsAction());
    }
    onGameKeyDown({ which }){
        if( (which >= 37 && which <= 40) || which === 96 ) {
            // eslint-disable-next-line
            switch(which){
                case 37 /* left */:
                    if(this.props.Snake.goingTo !== 'right'){
                        clearInterval(window.move);
                        window.move = setInterval(() => {
                            this.props.dispatch(moveSnakeAction('left'));
                        }, this.props.Settings.gameSpeed)
                    }
                break;
                case 38 /* up */:
                    if(this.props.Snake.goingTo !== 'down'){
                        clearInterval(window.move);
                        window.move = setInterval(() => {
                            this.props.dispatch(moveSnakeAction('up'));
                        }, this.props.Settings.gameSpeed)
                    }
                break;
                case 39 /* right */:
                    if(this.props.Snake.goingTo !== 'left'){
                        clearInterval(window.move);
                        window.move = setInterval(() => {
                            this.props.dispatch(moveSnakeAction('right'));
                        }, this.props.Settings.gameSpeed)
                    }
                break;
                case 40 /* down */:
                    if(this.props.Snake.goingTo !== 'up'){
                        clearInterval(window.move);
                        window.move = setInterval(() => {
                            this.props.dispatch(moveSnakeAction('down'));
                        }, this.props.Settings.gameSpeed)
                    }
                break;
                default:
                    clearInterval(window.move)
                break;
            }
        }
    }
    render() {
        return (
            <>
            <div 
                className="Game"
                onKeyDown={this.onGameKeyDown.bind(this)}
                tabIndex="1" 
            >
                <Area />
                <States />
            </div>

            { this.props.Game.status === 'gameover' &&
                <Redirect to="/gameover" />
            }
            </>
        );
    }
}

const mapStateToProps = ({ Settings,Snake,Game }) => ({ Settings,Snake,Game });

export default connect(mapStateToProps)(Game);