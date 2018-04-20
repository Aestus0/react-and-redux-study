import React, {Component} from 'react';
import * as Actions from '../Actions';
import PropTypes from 'prop-types';


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

class CounterContainer extends Component {
    constructor() {
        super(...arguments);

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.value !== this.state.value);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
    }

    getOwnState() {
        return {
            value: this.context.store.getState()[this.props.caption]
        };
    }

    onIncrement() {
        this.context.store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement() {
        this.context.store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }


    render() {
        const value = this.state.value;
        const {caption} = this.props;

        return (
            <Counter caption={caption}
                     onIncrement={this.onIncrement}
                     onDecrement={this.onDecrement}
                     value={value}
            />
        );
    }

}

CounterContainer.prototypes = {
    caption: PropTypes.string.isRequired
};
CounterContainer.contextTypes = {
    store: PropTypes.object
};

export default CounterContainer;