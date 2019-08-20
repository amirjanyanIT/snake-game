import React, { Component } from 'react';
import { connect } from 'react-redux';

import setBaseDataAction from '../../Actions/setBaseData';

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
            default:
                return 'none';
        }
    }

    onGameKeyDown(e){ 
        let key = e.which;
        // eslint-disable-next-line default-case
        switch(key) {
            case 37:
                // Key left.
                
                break;
            case 38:
                // Key up.
                break;
            case 39:
                // Key right.
                break;
            case 40:
                // Key down.
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
                        <span className="typography primary">SCORE&nbsp;&nbsp;&nbsp; 0</span>
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
                                            borderRadius:'90%',
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
    area:state.Area
});

const mapDispatchToProps = dispatch => ({
    setBaseData(){
        dispatch(setBaseDataAction());
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Game);