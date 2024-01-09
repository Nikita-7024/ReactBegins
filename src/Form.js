import React from "react";

function Form() {

    const [name, setName] = React.useState("")
    const [tnc, setTnc] = React.useState(false)
    const [interest, setInterest] = React.useState(null)


    function getFormData(e) {

        console.log(name, tnc, interest);
        e.preventDefault()
    }
    return(

        <div className="App">
            <h1> Form Handle in React:-</h1>

            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            <br />
            <br />

            <select onChange={(e) => setTnc(e.target.value)}>

                <option> Select Option </option>
                <option> Nerval</option>
                <option> Dc</option>
                <option> Wpc</option>

            </select>

            <br />

            <input type="checkbox" onChange={(e) => setInterest(e.target.checked)}/><span Accept Terms and Conditions> </span>
            
            <br />

            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;