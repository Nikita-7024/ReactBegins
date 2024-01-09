//Component-  A peice of code which can be reused 

function User() {
    return (
        <div>        
            <h1> USer Component</h1>
        <h1> new </h1>
        </div>

    )
}

export default User


//Two methods to export function component - 
// for single component use export default and for multiple component use w/o export default - 

export function UserNew() {
    return (
        <div>        
            <h1> USer Component new</h1>
        <h1> test </h1>
        </div>

    )
}