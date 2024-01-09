import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function Student() {
    // const name = ['manish', 'niks', 'prachi', 'eati']
    // const studentsObject = [
        // {name: 'manish', email: 'manish.23@test.com', contact: 1212},
    // { name: 'niks', email: 'niks.23@test.com', contact: 34 },
    // { name: 'prachi', email: 'prachi.23@test.com', contact: 1216562 },
    // ]


    const employesObject = [
        {
            name: 'manish', email: 'manish.23@test.com', contact: 1212,
            address: [
                { hn: '10', city: 'gurgaon', country: 'india' },
                { hn: '20', city: 'abcd', country: 'usa' },
                { hn: '30', city: 'bankig', country: 'brazil' },
            ]
        },
        {
            name: 'niks', email: 'niks.23@test.com', contact: 34,
            address: [
                { hn: '40', city: 'noida', country: 'india' },
                { hn: '50', city: 'efgh', country: 'russia' },
                { hn: '60', city: 'cvdfss', country: 'asia' },
            ]
        },
        {
            name: 'prachi', email: 'prachi.23@test.com', contact: 1216,
            address: [
                { hn: '70', city: 'delhi', country: 'india' },
                { hn: '80', city: 'ndfdfsda', country: 'africa' },
                { hn: '90', city: 'vcefgdf', country: 'thailand' },
            ]
        },
    ]


    // return (
    //     <div>
    //         <h1>Array With List: </h1>
    //         {
    //             name.map((item) =>
    //                 // console.log("my name is:", item);
    //                 <h1> {item}</h1>
    //             )
    //         }
    //         <tr>
    //             <td> Name </td>
    //             <td> Email </td>
    //             <td> Contact </td>
    //         </tr>

    //         <table>
    //             {
    //                 studentsObject.map((data) =>
    //                     <tr>
    //                         <td> {data.name} </td>
    //                         <td> {data.email} </td>
    //                         <td> {data.contact} </td>
    //                     </tr>

    //                 )
    //             }

    //         </table>


    //     </div>
    // )



    // return (
    //     <div>
    //         <h1>Array LIST with BootStrap- </h1>

    //         <Table striped>
    //             <tbody>
    //                 <tr>
    //                     <td>Name </td>
    //                     <td> Email </td>
    //                     <td> Contact </td>
    //                 </tr>

    //                 {
    //                     studentsObject.map((data, i) =>
    //                         <tr key={i}>
    //                             <td> {data.name} </td>
    //                             <td> {data.email} </td>
    //                             <td> {data.contact} </td>
    //                         </tr>

    //                     )
    //                 }
    //             </tbody>
    //         </Table>
    //     </div>
    // )




    //Nested Array/List -----


    return (
        <div>
            <h1>Nested Array / list  - -- - -- </h1>

            <Table striped>
                <tbody>
                    <tr>
                    <td>S.N. </td>
                        <td>Name </td>
                        <td> Email </td>
                        <td> Contact </td>
                        <td> Address </td>
                    </tr>

                    {
                        employesObject.map((data,i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td> {data.name} </td>
                                <td> {data.email} </td>
                                <td> {data.contact} </td>
                                <td>
                                    <Table>
                                        <tbody>
                                            {
                                                data.address.map((item, i) =>
                                                    <tr key={i}>
                                                        <td>{i+1}</td>
                                                        <td>{item.hn}</td>
                                                        <td>{item.city}</td>
                                                        <td>{item.country}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>

                                    </Table>
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Student;