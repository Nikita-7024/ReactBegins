function Usernew(props) {
    console.log("props", props);
    return(
        <div>
            <h1>Array ReUse- {props.data.name}</h1>
            <h2>Array ReUse- {props.data.email}</h2>
        </div>
    )
}

export default Usernew;