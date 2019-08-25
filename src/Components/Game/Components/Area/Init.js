import React, { Component } from 'react';
import { connect } from 'react-redux';

import Position from './elements/Position';

class Area extends Component {

    render() {
        return (
            <div className="Area" style={{ width: (this.props.Settings.resolution.height) }}>
                {this.props.Area.map((Row, key) =>
                    <div
                        className="Row"
                        style={{ height: (this.props.Settings.resolution.height / (this.props.Settings.areaSize)), }}
                        key={key}
                    >
                        {Row.map((cords,key) =>
                            <Position key={key} cords={cords} />
                        )}
                    </div>
                )}
            </div>
        )
    }
}


const mapStateToProps = ({ Area, Settings }) => ({ Area, Settings });

export default connect(mapStateToProps)(Area);