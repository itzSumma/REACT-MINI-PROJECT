import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name,email,phone,website}=user ;

    const userStyle={border:"2px solid gold",
        borderRadius:"25px",
        padding:"10px",
        margin: "10px"
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <Link to={`/user/${user.id}`}>View Details</Link>
        </div>
    );
};

export default User;