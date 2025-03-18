import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            this is home page
            <Outlet></Outlet>
        </div>
    );
};

export default Home;