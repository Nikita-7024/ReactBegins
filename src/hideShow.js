import React from "react";

function HideShow() {
    const [status, setStatus] = React.useState(true);

    return (
        <div className="App" >
            {status? <h1> Check Status:</h1>
            : null
            }

        {/* <button onClick={() => setStatus(false)}> Hide </button>
        <button onClick={() => setStatus(true)}> Show </button>
        */}
       
       <button onClick={() => setStatus(!status)}> Toggle </button>
        
        </div>
    )

}

export default HideShow;