import './App.css';
// import React, {useState} from "react";
import React,{ useState } from 'react';


// function student(props) {
//     // console.log(props.name);
//     return(
//         <div>
//         <h1>Student props:</h1>
//         <h2>Hello : {props.name}:</h2>
//         <h3>Email : {props.email}:</h3>

//         </div>
//     )
// }
// export default student;

function StudentUpdate() {
    const [name, setName] = useState("nikki")
    // console.log(props.name);
    return(
        <div>
        <h1>Student props:</h1>
        <h2>Hello :{name}</h2>

        <button onClick={() => {setName("singh")}}> Update Name</button>
        </div>
    )
}
export default StudentUpdate;


