import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            this is user details page 
        </div>
    );
};

export default UserDetails;