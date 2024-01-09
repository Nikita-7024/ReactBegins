import React from "react";

function Members(props) {
    return(
        <div>
            <h1>Member Component</h1>
            <button onClick={props.data}> Call Data Function </button>
        </div>
    )
}

export default Members;