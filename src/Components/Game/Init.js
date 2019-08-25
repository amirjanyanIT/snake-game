import React, { Component } from 'react';
import { connect } from 'react-redux';

import Area from '../../Components/Game/Components/Area/Init';
import States from '../../Components/Game/Components/States';


import setStartConfigurationsAction from '../../Actions/setStartConfigurations';
import moveSnakeAction from '../../Actions/SnakeMovements/moveSnake';
import createFruitAction from '../../Actions/createFruit';

class Game extends Component {


    componentWillMount(){
        this.props.dispatch(setStartConfigurationsAction());
    }
    
    componentDidUpdate(){
        if(!this.props.Snake.fruit){
            this.props.dispatch(createFruitAction());
        }
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
            <div 
                className="Game"
                onKeyDown={this.onGameKeyDown.bind(this)}
                tabIndex="1" 
            >
                <Area />
                <States />
            </div>
        );
    }
}

const mapStateToProps = ({ Settings,Snake }) => ({ Settings,Snake });

export default connect(mapStateToProps)(Game);