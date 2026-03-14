import { useState } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [follow, setFollow] = useState(false);
  function handleClick (){
  setFollow(true);
  setLikes(likes+1);

  }

  function handleClick2 (){
    if(likes >0 )
    {
        setFollow(false)
       setLikes(likes-1)
    }
        
  }
  function handleClick3 (){
    setFollow(false);
    setLikes(0)
  }

  return (
    <div className="container">
      <h1>Follow Button App</h1>
      <div className="child-container">
      <button className="button" onClick={handleClick}>❤️{follow ? "Following" : "Follow"}</button>
      <button className="button" onClick={handleClick2}>Unfollow</button>
      <button className="button" onClick={handleClick3}>Reset</button>
      <p className="card">Total Likes:{likes}</p>
      </div>
    </div>
  );
}

export default App;
