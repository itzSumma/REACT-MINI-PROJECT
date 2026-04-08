import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website,name}= user;
    // console.log("user details", user);


    // const params =useParams();
    // console.log("params details",params.userId)

    const {userId}=useParams();
console.log( "userID",userId)


    return (
        <div>
            <h3>User Details here</h3>
            <h5>Name :{name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;