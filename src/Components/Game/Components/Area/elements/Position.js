import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Position extends Component {

    setCurrentPositionColor(){

        let color = '#282c34';

        if(_.isEqual(this.props.cords,this.props.Snake.position)){
            // Snake Position
            color = 'green'; 
        }

        if(this.props.Snake.tailParts.length){
            for(var tailPart of this.props.Snake.tailParts){
                if(_.isEqual(this.props.cords,tailPart)){
                    color = 'yellow';
                }
            }
        }

        if(this.props.Snake.fruit){
            if(_.isEqual(this.props.Snake.fruit,this.props.cords)){
                color =  'purple';
            }
        }

        return color;
    }

    render(){
        return (
            <div 
                className="Position"
                style={{ 
                    backgroundColor:this.setCurrentPositionColor(),
                    width: (this.props.Settings.resolution.height / (this.props.Settings.areaSize)),
                }}
            >

            </div>
        )
    }
}

const mapStateToProps = ({ Snake,Settings }) => ({ Snake,Settings })

export default connect(mapStateToProps)(Position);