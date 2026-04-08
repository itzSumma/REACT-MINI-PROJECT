import React, { use } from 'react';

const About2 = ({aboutPromise}) => {
    const about = use(aboutPromise);
    console.log('about2 suspense data load', about);
    return (
        <div>
            <h2>This is about 2</h2>
        
        </div>
    );
};

export default About2;