//only for class component , for function component we have memo, 
// Pure component is used to block re-rendering - re-rendering means blocking the execution of code repeatedly.

import React, {PureComponent} from "react";

// class PureComponentData extends PureComponent {
//     constructor() {
//         super();
//         this.state = {count:1}
//     }


//    render() {
//     console.log("render");
//     return(
//         <div>
//             <h1> Pure Component - {this.state.count}</h1>

//             <button onClick={() => this.setState({count: this.state.count+1})}> Update and Check</button>
//         </div>
//     )
//    }
// }


// export default PureComponentData;





//Using Pure Component By Props-   ----  ----  ---------- ------

class PureComponentData extends PureComponent {
   render() {
    console.log("render");
    return(
        <div>
            <h1> User Pure Component - {this.props.count}</h1>

            {/* <button onClick={() => this.setState({count: this.state.count+1})}> Update and Check</button> */}
        </div>
    )
   }
}


export default PureComponentData;