import React, { Component } from 'react';
import { connect } from 'react-redux';

import setBaseDataAction from '../../Actions/setBaseData';
import changeSnakePositionAction from '../../Actions/changeSnakePositionAction';
import setFruitAction from '../../Actions/setFruit';
import { isNull } from 'util';

class Game extends Component {


    componentWillMount(){
        this.props.setBaseData();
    }

    setColBackground(col,cords){
        switch(col){
            case 'head':
                return '#61dafb';
            case 'fruit':
                return 'green';
            default:
                let thereIsTail = false;

                if(this.props.snake.tailPartPositions.length){
                    this.props.snake.tailPartPositions.forEach(tailPart => {
                        if(cords.x === tailPart.x && cords.y === tailPart.y){
                            thereIsTail = true;
                        }
                    })
                }
                if(thereIsTail){

                    return 'yellow'
                }
                else{
                    return 'none'
                }
        }
    }

    componentWillReceiveProps(){
        if(!window.generateFruit && this.props.snake.gameStatus === 'In progress'){
            this.props.setFruit();
        }
        if(this.props.snake.gameStatus !== 'In progress' && window.generateFruit){
            clearInterval(window.generateFruit);
        }
    }

    onGameKeyDown(e){ 

        if(window.move){
            clearInterval(window.move);
        }
        else{
            this.props.changeGameStatusToInProgress()
        }

        let key = e.which;
        // eslint-disable-next-line default-case
        switch(key) {
            case 37:
                // Key left.
                window.move = setInterval(() => {
                    this.props.changeSnakePosition('left')
                },50)
                break;
            case 38:
                // Key Up
                window.move = setInterval(() => {
                    this.props.changeSnakePosition('up')
                },50)
                break;
            case 39:
                // Key Right
                window.move = setInterval(() => {
                    this.props.changeSnakePosition('right')
                },50)
                break;
            case 40:
                // Key down.
                window.move = setInterval(() => {
                    this.props.changeSnakePosition('down')
                },50)
                break;
        } 
    }

    onGameFocus(e){
        // window.scrollTo(0, 0);
        // document.body.scrollTop = 0;
    }
    render() {
        return (
            <div 
                className="Game"
                onKeyDown={this.onGameKeyDown.bind(this)}
                onFocus={this.onGameFocus.bind(this)}
                tabIndex="1" 
            >
                <div className="Info">
                    <div className="Left-side">
                        <span className="typography primary">SCORE&nbsp;&nbsp;&nbsp; {this.props.game.score}</span>
                    </div>
                    <div className="Right-side">
                        <span className="typography primary">Life&nbsp;&nbsp;&nbsp; 0</span>
                    </div>
                </div>
                <div 
                    className="Main"
                    style={{
                        width:this.props.settings.resolution.height,
                        borderRight:'1px solid #61dafb'
                    }}
                >
                    { this.props.area.map((row,rKey) => (
                        <div 
                            className="Row"
                            key={rKey}
                            style={{ 
                                height: ((this.props.settings.resolution.height * 9 / 9.99) / this.props.area[0].length),
                            }}
                        >
                            {
                                row.map((col,cKey) => (
                                    <div 
                                        className='Col'
                                        key={cKey}
                                        style={{
                                            textAlign:'center'
                                        }}
                                    >
                                        <div style={{
                                            background:this.setColBackground(col,{y:rKey,x:cKey}),
                                            width:'100%',
                                            height:'100%',
                                            display:'inline-block'
                                        }}>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    settings:state.Settings,
    area:state.Area,
    snake:state.Snake,
    game:state.Game
});

const mapDispatchToProps = dispatch => ({
    setBaseData(){
        dispatch(setBaseDataAction());
    },
    setFruit(){
        dispatch(setFruitAction());
    },
    changeSnakePosition(to){
        dispatch(changeSnakePositionAction(to));
    },
    changeGameStatusToInProgress(){
        dispatch({type:'SET_GAME_STATUS', payload:'In progress'});
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Game);