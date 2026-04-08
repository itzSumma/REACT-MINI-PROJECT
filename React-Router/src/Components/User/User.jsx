import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const [info, setInfo] = useState(false);
  const { name, email, phone, website } = user;

const [visitHome, setVisitHome] =useState(false);
const location = useLocation();
console.log("location", location);

  const userPromise = fetch(`
    https://jsonplaceholder.typicode.com/users/${user.id}
  `).then(res => res.json());

  const userStyle = {
    border: "2px solid gold",
    borderRadius: "25px",
    padding: "10px",
    margin: "10px",
  };

  if(visitHome){
    return <Navigate to="/"></Navigate>
  }
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>

      <Link style={{ marginRight: "10px" }} to={`/user/${user.id}`}>
        View Details
      </Link>
      <button
        style={{ color: "red", backgroundColor: "black", borderRadius: "25px",marginRight:"10px" }}
        onClick={() => setInfo(!info)}>
        {info ? "Hide" : "Show "} Info
      </button>
      {info && (
        <Suspense fallback={<span style={{ color: "red" }}>Loading..</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}

      <button style={{ color: "yellow", backgroundColor: "black", borderRadius: "25px" }}  onClick={()=> setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
