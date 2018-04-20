import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        return this.props.children;
    }
}

Provider.propTypes = {
    store: PropTypes.object.isRequired
};

//指定Provider的childContextTypes属性，让Provider成为React认可的context的提供者。
Provider.childContextTypes = {
    store: PropTypes.object
};

export default Provider;