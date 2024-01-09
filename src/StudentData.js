import React from "react";


class StudentRemoved extends React.Component{

    componentWillUnmount() {
        console.log("component will unmount");
    }


    render() {
        return(

            <div>

                <h1> Student Data : </h1>
            </div>
        )
    }
}


export default StudentRemoved;