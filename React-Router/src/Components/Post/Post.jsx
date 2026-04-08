import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id,title,body}=post;
   const navigate = useNavigate();

const handleNavigate=()=>{
    navigate(`/posts/${id}`)
}
    return (
        <div style={{border:"2px solid red",margin:"10px", padding:"15px",borderRadius:"20px"}}>
           <h3>{title}</h3> 
           <Link to={`/posts/${id}`}>
          

           <button style={{marginRight:"15px",color:"blue"}}>View Details </button></Link>
           <button style={{color:"green"}}  onClick={handleNavigate}>Details of: {id}</button>
           </div>
       
    );
};

export default Post;