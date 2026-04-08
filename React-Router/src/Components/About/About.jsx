import React from 'react';
import { useLoaderData } from 'react-router';

const About = () => {
    const about = useLoaderData();
    console.log(about);
    return (
        <div>
            <h2>This is About</h2>
        </div>
    );
};

export default About;
