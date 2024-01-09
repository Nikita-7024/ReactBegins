import React from "react";

class CDM extends React.Component{

    constructor() {
        super();

        this.state={
            name:'nikkiiiii'
        }
        console.log("constructor method ;");
    }

    //first constructor then render then componentDidMount will call - after DOM ready-..
    
    componentDidMount() {
        console.log("component did mount ; ");
    }


    render() {
        console.log("render method ; ");

        return(

            <div className="App">
                <h1> Component Did Mount : {this.state.name}</h1>
            
            <button onClick={() => this.setState({name:'neha'})}> Update name</button>
            </div>
        )
    }
}

export default CDM; 



