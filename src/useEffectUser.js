import React , {useEffect} from "react";

function User(props) {

    useEffect(() => {
        console.log("useEffect inside user");
    }, [props.count])

    return(
        <div>

            <h1> Count props: {props.count} </h1>
            <h1> Data props: {props.data} </h1>

        </div>
    )
}

export default User;