//Life Cycle Method in React - 

//three phases-  1.Mounting  2. Updating   3. Remove

//LCM - Life Cycle Method-  Constructor LCM

import React from "react";

class ConstructorLCM extends React.Component {

    constructor() 
    {
        console.log("ssdsddssd");
        super();
        this.state={
            data:'niikita'
        }
    }


render() {
    return(
        <h1> Hello Constructor: {this.state.data}</h1>
    )
}
}

export default ConstructorLCM;






