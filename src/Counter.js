import React, {Component} from 'react';
import PropTypes from 'prop-types';


const buttonStyle = {margin: '10px'};

class Counter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue
        };
        console.log('enter constructor %s', this.props.caption);
    }

    componentWillMount() {
        console.log('enter componentWillMount ' + this.props.caption);
    }

    componentDidMount() {
        console.log('enter componentDidMount %s', this.props.caption);
    }

    componentWillReceiveProps() {
        console.log('enter componentWillReceiveProps %s', this.props.caption);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    componentWillUpdate() {
        console.log('enter componentWillUpdate %s', this.props.caption);
    }

    componentDidUpdate() {
        console.log('enter componentDidUpdate %s', this.props.caption);
    }

    componentWillUnmount() {
        console.log('enter componentWillUnmount %s', this.props.caption);
    }

    onClickIncrementButton() {
        this.updateCount(true);
    }


    onClickDecrementButton() {
        this.updateCount(false);
    }

    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? this.state.count + 1: this.state.count - 1;
        this.setState({count: newValue});
        this.props.onUpdate(newValue, previousValue);
    }


    render() {
        const {caption} = this.props;
        console.log('enter render %s', caption);
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )
    }


}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,//isRequired表示该属性必须要有
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f
};

export default Counter;