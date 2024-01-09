import React from "react";
import PureComponentData from "./PureComponent";

class UsePropsInPureComponent extends React.Component {

    constructor() {
        super();
        this.state = { count: 1 }
    }

    render() {
        return (

            <div>
                <h1> Use Props in Pure Component-  </h1>
                <PureComponentData count={this.state.count} />

                <button onClick={() => this.setState({ count: this.state.count+1})}> Update and Check</button>

            </div>
        )
    }
}

export default UsePropsInPureComponent;