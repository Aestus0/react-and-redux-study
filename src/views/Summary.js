import React, {Component} from 'react';
import ProtoType from 'prop-types';

import store from '../Store';


function Summary({sum}) {
    return (
        <div>Total Count : {sum}</div>
    )
}

Summary.prototypes = {
    sum: ProtoType.number.isRequired
};

class SummaryContainer extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState();
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.sum !== nextState.sum;
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    getOwnState() {
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }
        return {sum};
    }

    render() {
        return (
            <Summary sum={this.state.sum} />
        );
    }
}

export default SummaryContainer;