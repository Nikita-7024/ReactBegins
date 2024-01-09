import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table';
import UserPro from './ArrayUser'


function Student() {
    const UserObject = [
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


    return (
        <div>
            <h1>Array LIST with BootStrap- </h1>

            {
                UserObject.map((item, i) =>
                // <h2>{item} </h2>
                <UserPro data={item} />
                )
             }
           
        </div>
    )



}

export default Student;