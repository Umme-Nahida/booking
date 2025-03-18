import React from 'react';

const Register = () => {
    return (
        <div>

          <h1>Register Now</h1>
          <form>
            <input type="text" name="name" placeholder='your name' className='w-full p-6 border focus:border-b-blue-400' />
            <input type="email" name="email" placeholder='your email'  />
            <input type="password" name="password" placeholder='your password'  />
          </form>
        </div>
    );
};

export default Register;