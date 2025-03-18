import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const userData = useLoaderData()
    console.log(userData)
    return (
        <div>
            this is users pages 
            <div className='grid grid-cols-4 item-center justify-center gap-10'>
            {
                userData?.map(user=>(
                    <div key={user.id} className='space-y-3 bg-gray-100 border-2 p-10 border-yellow-400'>
                        <p>{user?.name} </p>
                        <p>{user?.phone} </p>
                        <p>{user?.email} </p>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Users;