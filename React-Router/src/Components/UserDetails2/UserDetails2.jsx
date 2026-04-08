import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const { name, username } = use(userPromise);
  console.log("userDetails2", name, username);
  return (
    <div>
      <p>{name}</p>
      <p>
        {" "}
        <small> Username:{username}</small>
      </p>
    </div>
  );
};

export default UserDetails2;
