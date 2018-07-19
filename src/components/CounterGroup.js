import React, {Component} from 'react';
import CounterContainer from "../container/CounterContainer";
class CounterGroup extends Component {

    render() {
        const {amount} = this.props;
        let counters = []

        for(let i = 0; i< amount; i++) {
            counters.push(<CounterContainer
                            index={i}
                            key={i} />)
        }
        return (
            <div className="App">
                {counters}
            </div>);
    }
}

export default CounterGroup;
