import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';


const About = () => {
    const about = useLoaderData();
    console.log(about);
    return (
        <div>
            <h2>This is About</h2>
            <div>
                {about.map(user => <User key={user.id}  user={user}>

                </User>)}
            </div>
        </div>
       

        
    )
}
export default About;
