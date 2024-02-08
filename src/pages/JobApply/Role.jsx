import React from 'react';

function Role({ job }) {
    return (
        <>
            <h1>Role</h1>
            <p>{job}</p>
            {console.log(job)}
        </>
    );
}

export default Role;

