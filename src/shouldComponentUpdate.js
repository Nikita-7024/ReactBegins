import React from "react";

class UpdateData extends React.Component{

    constructor() {
        super();
        // this.state={email:'nikita@weaddo.com'}

        this.state={count: 0}

        console.log('constructor');
    }


    shouldComponentUpdate() {
        console.log("Should component update..", this.state.count);
      
        if(this.state.count < 5) {
            // alert("sddfsdf")
            return true;

        }
        
    }


    render() {
        console.log('render');

        return(

            <div>

                {/* <h1> Component Did Update: {this.state.email} </h1> */}
                <h1>Should Component Update: {this.state.count} </h1>

                
                {/* <button onClick={() => this.setState({email:'nikita@343.com'})}> Update Email </button> */}
                <button onClick={() => this.setState({count:this.state.count+1})}> Update Count </button>
            
            
            </div>
        )
    }
}

export default UpdateData;