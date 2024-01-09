import React from "react";

class RenderUser extends React.Component {

    constructor() {
        super();
        this.state={
            email: 'nikita@weaddo.com'
        }
    }

//LCM - Life Cycle Method-  Constructor LCM

render() {
    console.log('Render Method', this.state.email);
    return(

        <div>

        <h1> Render LCM return: {this.state.email}</h1>
        <button onClick={() => this.setState({email:'nikitasingh@90.com'})}> Update Email</button>
        
        </div>

    )
}
}

export default RenderUser;