import React from 'react';
import * as Actions from '../Actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const buttonStyle = {
    margin: '10px'
};

function Counter(props) {
    const {caption, onIncrement, onDecrement, value} = props;
    return (
        <div>
            <button style={buttonStyle} onClick={onIncrement}>+</button>
            <button style={buttonStyle} onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    )
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        value: state[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(ownProps.caption));
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps.caption));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);