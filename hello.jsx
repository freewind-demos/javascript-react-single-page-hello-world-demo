import React, {Component} from 'react';

class Hello extends Component {
    render() {
        return <div ref='root'>
            <h1>Hello Freewind</h1>
        </div>;
    }

    componentDidMount() {
        console.log(this.refs.root);
    }
}

export default Hello;
