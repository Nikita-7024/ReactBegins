import React from "react";
import StudentData from './StudentData';


class CDM extends React.Component{

    constructor() {
        super();

        this.state={
            show:true
        }
        console.log("constructor method ;");
    }

    render() {
        console.log("render method ; ");

        return(

            <div className="App">
                {
                this.state.show ? <StudentData /> : 
                <h1> Component Will Un Mount: </h1>

                }
            
            <button onClick={() => this.setState({show: !this.state.show})}> Toggle Child Component</button>
            </div>
        )
    }
}

export default CDM; 



