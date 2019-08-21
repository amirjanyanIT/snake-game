import React, { Component } from 'react';
import { connect } from 'react-redux';

import setBaseDataAction from '../../Actions/setBaseData';
import changeSnakePositionAction from '../../Actions/changeSnakePositionAction';
import setFruitAction from '../../Actions/setFruit';

class Game extends Component {


    componentWillMount(){
        this.props.setBaseData();
    }

    setColBackground(col){
        switch(col){
            case 'head':
                return '#61dafb';
            case 'tail':
                return 'yellow';
            case 'fruit':
                return 'green';
            default:
                return 'none';
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
                },1)
                break;
            case 38:
                // Key Up
                window.move = setInterval(() => {
                    this.props.changeSnakePosition('up')
                },1)
                break;
            case 39:
                // Key Right
                window.move = setInterval(() => {
                    this.props.changeSnakePosition('right')
                },1)
                break;
            case 40:
                // Key down.
                window.move = setInterval(() => {
                    this.props.changeSnakePosition('down')
                },1)
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
                >
                    { this.props.area.map((row,rKey) => (
                        <div 
                            className="Row"
                            key={rKey}
                            style={{ 
                                height: ((this.props.settings.resolution.height * 9 / 9.99) / this.props.area[0].length) 
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
                                            background:this.setColBackground(col),
                                            width:'65%',
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