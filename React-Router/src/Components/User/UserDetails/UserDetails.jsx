import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website}= user;
    // console.log("user details", user);
    return (
        <div>
            <h3>User Details here</h3>
            <h5>Name :{user.name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;