import React from "react";

class ComponentUpdate extends React.Component{

    constructor() {
        super();
        // this.state={email:'nikita@weaddo.com'}

        this.state={count: 0}

        console.log('constructor');
    }


    componentDidUpdate(preProps, preState, snapshots) {
        console.log("component did update..", preProps);
        console.log("component did update...", preState);
        // console.log("component did update........", snapshots);

        // if(preState.count === this.state.count) {
        //     alert("yeahh.. its working!")
        // }
        
    }


    render() {
        console.log('render');

        return(

            <div>

                {/* <h1> Component Did Update: {this.state.email} </h1> */}
                <h1> Component Did Update: {this.state.count} </h1>

                
                {/* <button onClick={() => this.setState({email:'nikita@343.com'})}> Update Email </button> */}
                <button onClick={() => this.setState({count:this.state.count+1})}> Update Count </button>
            
            
            </div>
        )
    }
}

export default ComponentUpdate;