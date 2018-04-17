import React, {Component} from 'react';
import store from '../Store';
import * as Actions from '../Actions';
import PropTypes from 'prop-types';


const buttonStyle = {
    margin: '10px'
};

class Counter extends Component {
    constructor(props) {
        super(props);

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }


    componentDidMount() {
        store.subscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState !== this.state);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        };
    }

    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }


    render() {
        const value = this.state.value;
        const {caption} = this.props;

        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }

}

Counter.propTypes = {
    caption: PropTypes.string.isRequired
};

export default Counter;