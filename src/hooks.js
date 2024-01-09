import React, { useEffect, useState } from "react";
// import React from "react";


//name starting with use like useState , useEffect  are hooks- 
//learn all hooks with example....
//1. useState   -- already used in previous Examples
//2. useEffect - 

// 1. Fist METHOD- ------------
//    import React from "react";
//     React.useEffect( 
//         () => {
//     }
//     ) }


// 2. Second Method- ---------
// import React, {useEffect} from "react";
// useEffect( 
//     () => {
// }
// ) 

//Hooks can not used for Class Components-


//1. Below is the Simple method to Call UseEffect - - --  
// function HooksMethod() {

//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         console.log("useEffect");
//         }
//     )

//     return(
//         <div>
//             <h1> UseEffect:- {count}</h1>
//             <button onClick={() => setCount(count+1)}> Update Count</button>
//         </div>
//     )
// }

// export default HooksMethod;



// 2. useEffect with specific state and props-  - ---- 

import User from './useEffectUser'
function HooksMethod() {

    const [data, setData] = useState(10)
    const [count, setCount] = useState(100)


    //this is exaple of Specific State -  - -
    // useEffect(() => {
    //     console.log("use Effect called with only Data");
    //     }, [data])

    //     useEffect(() => {
    //         console.log("use Effect called with only Count");
    //         }, [count])

    // return(
    //     <div>
    //         <h1> Count-  {count}</h1>
    //         <h1> Data-  {data}</h1>

    //         <button onClick={() => setCount(count+1)}> Update Count</button>
    //         <button onClick={() => setData(data+1)}> Update Data</button>

    //     </div>
    // )



    //this is the exaple of Specific Props- - -

    return(
        <div>
            <User count={count} data={data}/>

            <button onClick={() => setCount(count+1)}> Update Count</button>
            <button onClick={() => setData(data+1)}> Update Data</button>


        </div>
        
    )
}

export default HooksMethod;



