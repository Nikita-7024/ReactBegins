import './App.css';
import { useState } from 'react';


//USE of State in Functional Component-
function State() {
    const [data, setData] = useState("nikki")
    function updateData() {
        setData(" singh")
    }
    console.log(".......");
    return(
        <div> 
        <h1> Use State</h1>
        <h2>{data}</h2>
        <button onClick={updateData}>Update Data </button>
        </div>
    )
}

export default State;


// function StateCount() {
//     const [data, setData] = useState(0)
//     function updateData() {
//         setData(data+1)
//     }
//     console.log(".......");
//     return(
//         <div> 
//         <h1> Use State</h1>
//         <h2>{data}</h2>
//         <button onClick={updateData}>Update Data </button>
//         </div>
//     )
// }

// export default StateCount;



//USE of State in Class Component-


