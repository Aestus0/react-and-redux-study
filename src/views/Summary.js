import React, {Component} from 'react';
import ProtoType from 'prop-types';


function Summary({sum}) {
    return (
        <div>Total Count : {sum}</div>
    )
}

Summary.prototypes = {
    sum: ProtoType.number.isRequired
};

class SummaryContainer extends Component {
    constructor() {
        super(...arguments);

        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState();
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.sum !== nextState.sum;
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    getOwnState() {
        const state = this.context.store.getState();
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

SummaryContainer.contextTypes = {
    store: ProtoType.object
};

export default SummaryContainer;