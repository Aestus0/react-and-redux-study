import React from 'react';
import ProtoType from 'prop-types';
import {connect} from 'react-redux';


function Summary({sum}) {
    return (
        <div>Total Count : {sum}</div>
    )
}

Summary.prototypes = {
    sum: ProtoType.number.isRequired
};



function mapStateToProps(state, ownProps) {
    let sum = 0;
    for (const key in state) {
        if (state.hasOwnProperty(key)) {
            sum += state[key];
        }
    }
    return {sum};
}

export default connect(mapStateToProps)(Summary);