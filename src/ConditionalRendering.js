import React , {useState} from "react";

function Profile() {

    // const [loggedIn, setLoggedIn] = useState(true);
    const [loggedIn, setLoggedIn] = useState(3);

    // if(loggedIn) {
    //     return(
    //         <div> 
    //             <h1>Conditional Rendering: Profile Component</h1>
    //             <h2> Welcome Nikita -</h2>
    //         </div>
    //     )
    // } else {
    //     return(
    //         <div> 
    //             <h1>Conditional Rendering: Profile Component</h1>
    //             <h2> Welcome Guest -</h2>
    //         </div>
    //     )
    // }


    return(
                <div> 
                    <h1>Conditional Rendering: Profile Component</h1>
                    {/* {loggedIn ? <h2> Welcome Niks </h2> :<h2> Welcome guest</h2> } */}

                    {

                    loggedIn==1 ? 
                    <h2> Welcome first </h2> 
                    : loggedIn==2 ? 
                    <h2> Welcome second</h2> 
                    :  <h2> Welcome guest</h2>
                    
                     }

                </div>
    )

}


export default Profile;